import { SlidersHorizontal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Filters } from "@/components/Filter/Filters";

export const SortAndFilter = ({ 
        sort, 
        setSort, 
        maxPrice, 
        setMaxPrice, 
        inStockOnly, 
        setInStockOnly 
    }: { 
        sort: string; 
        setSort: (value: string) => void; 
        maxPrice: number; 
        setMaxPrice: (value: number) => void; 
        inStockOnly: boolean; 
        setInStockOnly: (value: boolean) => void; 
    }) => {
        
    return (
        <>
            <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-full md:w-[170px]">
                    <SelectValue placeholder="Sort"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="lowest">Price: Low to High</SelectItem>
                    <SelectItem value="highest">Price: High to Low</SelectItem>
                    <SelectItem value="az">A–Z</SelectItem>
                </SelectContent>
            </Select>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="ml-2 md:hidden">
                        <SlidersHorizontal className="h-4 w-4 mr-2"/> 
                        Filters
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px]">
                    <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <Filters 
                        maxPrice={maxPrice} 
                        setMaxPrice={setMaxPrice} 
                        inStockOnly={inStockOnly} 
                        setInStockOnly={setInStockOnly}
                    />
                </SheetContent>
            </Sheet> 
        </>
    )
}