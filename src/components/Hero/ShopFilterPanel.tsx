import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Filters } from "@/components/Filter/Filters";
import { SortAndFilter } from "@/components/Filter/SortAndFilter";
import { Label } from "@/components/ui/label";

// Categories will be fetched from wp backend.
const CATEGORIES = [
  "All Products",
  "Bearing Housings",
  "Feet",
  "Locks",
  "Photo Eyes",
  "Plugs",
  "Printer Paper",
  "Reflectors",
  "Roller Brackets",
  "Rollers",
  "Schneider Beacons",
  "Sounders",
  "Switches",
];

export const ShopFilterPanel = ({ 
        maxPrice, 
        setMaxPrice, 
        query, 
        setQuery,
        sort,
        setSort, 
        inStockOnly,
        setInStockOnly,
    }:{ 
        maxPrice:number,
        setMaxPrice:(n:number)=>void,
        query:string,
        setQuery:(s:string)=>void,
        sort:string,
        setSort:(s:string)=>void,
        inStockOnly:boolean,
        setInStockOnly:(b:boolean)=>void,
    }) => {
        
    return (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <div className="rounded-2xl border bg-slate-50 p-4 md:p-6">
                <div className="flex gap-2 flex-col md:flex-row">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                        <Input placeholder="Search products, e.g. photo eye" className="pl-9 text-sm" value={query} onChange={(e) => setQuery(e.target.value)} />
                    </div>
                    <div className="flex justify-between md:block">
                        <SortAndFilter sort={sort} setSort={setSort} maxPrice={maxPrice} setMaxPrice={setMaxPrice} inStockOnly={inStockOnly} setInStockOnly={setInStockOnly}/>
                    </div>
                </div>
                <div className="hidden md:block mt-4">
                    <Filters maxPrice={maxPrice} setMaxPrice={setMaxPrice} inStockOnly={inStockOnly} setInStockOnly={setInStockOnly}/>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                    <Label className="block w-full p-1">Categories</Label>
                    {CATEGORIES.map((c) => (
                        <a key={c} href="#" className="px-3 py-1.5 rounded-full border bg-white text-sm hover:bg-slate-100">{c}</a>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}