import { Package, ShieldCheck, Truck } from "lucide-react"
import { TrustCard } from "@/components/TrustCard"

export const Trust = () => {
    return (
        <section className="mt-12 grid gap-6 md:grid-cols-3">
            <TrustCard icon={<Truck className="h-5 w-5"/>} title="Fast UK Dispatch" desc="Average dispatch times of 1-2 days on many items."/>
            <TrustCard icon={<ShieldCheck className="h-5 w-5"/>} title="High Quality" desc="Quality assured processes across service & parts."/>
            <TrustCard icon={<Package className="h-5 w-5"/>} title="Expert Support" desc="Expert assistance available when you need it."/>
        </section>
    )
}