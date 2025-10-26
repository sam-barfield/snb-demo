import { Newspaper, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FeaturedLinks = () => {
    return (
        <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" className="hover:cursor-pointer"> 
                <Newspaper /> Blog
            </Button>
            <Button variant="outline" className="hover:cursor-pointer">
                <ShoppingCart /> Shop
            </Button>
        </div>
    )
}