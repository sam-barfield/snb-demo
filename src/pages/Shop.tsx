import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { useState } from "react";

export const ShopPage = () => {
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("featured");
    const [maxPrice, setMaxPrice] = useState(1000);
    const [inStockOnly, setInStockOnly] = useState(true);

    return (
        // Todo: Use context + hook for accessing state e.g. `const { filters, dispatch } = useShopFilters()`
        <>
            <Breadcrumbs />
            <Hero 
                query={query} 
                setQuery={setQuery} 
                sort={sort} 
                setSort={setSort} 
                maxPrice={maxPrice} 
                setMaxPrice={setMaxPrice} 
                inStockOnly={inStockOnly} 
                setInStockOnly={setInStockOnly} 
            />
            <ProductGrid 
                query={query} 
                sort={sort} 
                maxPrice={maxPrice}
            />
        </>
        
    )
}