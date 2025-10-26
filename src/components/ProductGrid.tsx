import { useMemo } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import { currency } from "@/utils/currency";
import { Trust } from "@/components/ProductGrid/Trust";
import { Pagination } from "@/components/ProductGrid/Pagination";

// Mock products and images - to be pulled from wp api.
const PLACEHOLDER = "https://images.unsplash.com/photo-1581093588401-16ec7f3f9b35?q=80&w=1200&auto=format&fit=crop";

const PRODUCTS = [
  { id: "bearing-housings-drive", name: "Bearing Housings DRIVE", price: 90, image: "https://www.metaldetector-rentals.co.uk/shop/wp-content/uploads/2020/10/IMG-4258-scaled-300x300.jpg", partNo: "20S151BA" },
  { id: "bearing-housings-std", name: "Bearing Housings STD", price: 90, image: "https://www.metaldetector-rentals.co.uk/shop/wp-content/uploads/2020/10/IMG-4261-scaled-300x300.jpg", partNo: "20S151BB" },
  { id: "feet-16mm", name: "Feet 16mm", price: 20, image: "https://www.metaldetector-rentals.co.uk/shop/wp-content/uploads/2020/10/IMG-4254-scaled-300x300.jpg", partNo: "20S151BC" },
  { id: "feet-20mm", name: "Feet 20mm", price: 20, image: "https://www.metaldetector-rentals.co.uk/shop/wp-content/uploads/2020/10/IMG-4254-scaled-300x300.jpg", partNo: "20S151BD" },
  { id: "ip44-16a-2pe", name: "IP44 Plug 16A 2P+E 240V", price: 15, image: "https://www.metaldetector-rentals.co.uk/shop/wp-content/uploads/2020/10/IMG_4248-300x300.jpeg", partNo: "20S151BE" },
  { id: "ip44-16a-3pne", name: "IP44 Plug 16A 3P+N+E", price: 20, image: "https://www.metaldetector-rentals.co.uk/shop/wp-content/uploads/2020/10/IP44-Plug-16A-3PNE-2-scaled-300x300.jpg", partNo: "20S151BF" },
  { id: "isolator", name: "Main Switch/Isolator Switch", price: 75, image: PLACEHOLDER, partNo: "20S151BG" },
  { id: "photo-eye-npn", name: "Photo Eye – NPN", price: 75, image: "https://www.metaldetector-rentals.co.uk/shop/wp-content/uploads/2020/10/IMG-4297-scaled-300x300.jpg", partNo: "20S151BH" },
  { id: "photo-eye-pnp", name: "Photo Eye – PNP", price: 75, image: "https://www.metaldetector-rentals.co.uk/shop/wp-content/uploads/2020/10/IMG-4294-scaled-300x300.jpg", partNo: "20S151BI" },
  { id: "photo-eyes-npn", name: "Photo Eyes – NPN", price: 75, image: "https://www.metaldetector-rentals.co.uk/shop/wp-content/uploads/2020/10/IMG-4286-scaled-300x300.jpg", partNo: "20S151BJ" },
  { id: "photo-eyes-pnp", name: "Photo Eyes – PNP", price: 75, image: "https://www.metaldetector-rentals.co.uk/shop/wp-content/uploads/2020/10/IMG-4289-scaled-300x300.jpg", partNo: "20S151BK" },
  { id: "paper-10pk", name: "Printer Paper (10pk)", price: 35, image: "https://www.metaldetector-rentals.co.uk/shop/wp-content/uploads/2020/10/IMG-4282-1-scaled-300x300.jpg" },
  { id: "paper-20pack", name: "Printer Paper (20pack)", price: 35, image: "https://www.metaldetector-rentals.co.uk/shop/wp-content/uploads/2020/10/IMG-4272-1-scaled-300x300.jpg" },
  { id: "paper-20pk", name: "Printer Paper (20pk)", price: 35, image: PLACEHOLDER },
  { id: "printer-ribbon", name: "Printer Ribbon", price: 12, image: "https://www.metaldetector-rentals.co.uk/shop/wp-content/uploads/2020/10/IMG-4274-1-scaled-300x300.jpg" },
  { id: "reflector-r1", name: "Reflector – R1", price: 15, image: "https://www.metaldetector-rentals.co.uk/shop/wp-content/uploads/2020/10/IMG-4298-scaled-300x300.jpg", partNo: "20S151BP" },
];

export const ProductGrid = ({ 
        maxPrice, 
        query, 
        sort,
    }:{ 
        maxPrice:number; 
        query:string,
        sort:string,
    }) => {
    
    const items = useMemo(() => {
        let list = PRODUCTS.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
          .filter((p) => p.price <= maxPrice);
        switch (sort) {
          case "lowest":
            list = [...list].sort((a, b) => a.price - b.price);
            break;
          case "highest":
            list = [...list].sort((a, b) => b.price - a.price);
            break;
          case "az":
            list = [...list].sort((a, b) => a.name.localeCompare(b.name));
            break;
          default:
            break;
        }
        return list;
    }, [query, maxPrice, sort]);

    return (
        <main className="max-w-7xl mx-auto px-4 pb-16">
            <div className="flex items-center justify-center md:justify-between mb-6 md:mb-3">
                <p className="text-sm text-slate-600">
                  Showing {" "}
                  <span className="font-medium">{items.length}</span> {" "}
                  of {PRODUCTS.length} results</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((p, i) => (
                <motion.div 
                  key={p.id} 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.25, delay: i * 0.03 }}
                >
                  <Card className="group overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow p-0 gap-2">
                    {/* Product image */}
                    <div className="aspect-square bg-slate-100 overflow-hidden rounded-t-2xl">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    {/* Product details */}
                    <CardContent className="p-4 pt-0">
                      {p.partNo ? 
                        <span className="text-xs font-mono">PART NO. {p.partNo}</span> : 
                        <span className="text-xs font-mono">&nbsp;</span>
                      }
                      <h3 className="mt-1 font-medium leading-snug">{p.name}</h3>
                      <div className="mt-1 text-sm text-slate-600">
                        In stock
                      </div>
                      <div className="mt-4 flex items-center justify-between self-end">
                        <div className="text-lg font-semibold">
                          {currency(p.price)}
                        </div>
                        <Button 
                          className="gap-2" 
                          style={{ background: "#e80000", color: "#fff" }}
                        >
                          <ShoppingCart className="h-4 w-4" /> Add to basket
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <Pagination />
            <Trust />
        </main>
    )
}