import { useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Desktop } from "@/components/Navigation/Desktop"
import { Mobile } from "@/components/Navigation/Mobile"
import { FeaturedLinks } from "@/components/Header/FeaturedLinks"

export const Navigation = () => {
    const isMobile = useIsMobile()
    const [open, setOpen] = useState(false) 
    
    return (
        //Todo: fix sticky header and glass effect
        <div className="sticky top-0 z-40 bg-white/75 backdrop-blur border-b">
            <div className="h-14 flex items-center justify-between px-4 xl:px-0">
                {isMobile ? <Mobile open={open} setOpen={setOpen} /> : <Desktop />}
                {/* Featured links have more importance than the main nav, so these will always be displayed outside of a mobile collapsible menu. */}
                <FeaturedLinks />
            </div>
        </div>
    )
}