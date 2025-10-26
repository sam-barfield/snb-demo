import { Intro } from "@/components/Hero/Intro";
import { ShopFilterPanel } from "@/components/Hero/ShopFilterPanel";

export const Hero = ({ 
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
        <div className="relative isolate max-w-7xl mx-auto px-4 pt-6 pb-8">
            <div className="grid gap-6 md:grid-cols-2 items-center">
                <Intro />
                <ShopFilterPanel 
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}
                    query={query} 
                    setQuery={setQuery}
                    sort={sort}
                    setSort={setSort}
                    inStockOnly={inStockOnly}
                    setInStockOnly={setInStockOnly}
                />
            </div>
        </div>
    )
}