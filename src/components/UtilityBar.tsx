import { Linkedin, Phone, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile";

const brand = {
  primary: "#0f172a", // deep navy
  accent: "#f59e0b", // amber/orange accent for CTAs
  accentDark: "#d97706",
  logoRed: "#ff1a1a", // SNB logo red tone
};

export const UtilityBar = () => {
    const isMobile = useIsMobile()

    if (isMobile) {
        return (
            <div style={{ background: brand.primary }} className="text-white">
                <div className="max-w-[90vw] md:max-w-[95vw] lg:max-w-7xl mx-auto py-2 text-sm flex items-center justify-between">
                    <div className="flex flex-col">
                        <span>Have a question?</span>
                        <span>Call us: 01977 689555</span>
                    </div>
                    <div>
                        <Button variant="secondary" size="sm" className="bg-[#e80000] text-white hover:cursor-pointer hover:bg-[#b90000]">Get a Quote</Button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div style={{ background: brand.primary }} className="text-white">
                <div className="max-w-7xl mx-auto lg:px-4 xl:px-0 py-2 text-sm flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>Have a question? Call now on: 01977 689555</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Linkedin size={16} className="hover:cursor-pointer" />
                        <Twitter size={16} className="hover:cursor-pointer" />
                        <Button variant="secondary" size="sm" className="bg-[#e80000] text-white hover:cursor-pointer hover:bg-[#b90000]">Get a Quote</Button>
                    </div>
                </div>
            </div>
        )
    }
}