import { motion } from "framer-motion";
import { Headset, Package } from "lucide-react";
import { TextSwap } from "@/components/TextSwap";
import { Badge } from "@/components/ui/badge";

export const Intro = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-center md:text-left max-w-[90vw] md:max-w-2xl">
                Parts for {" "}
                <span className="inline-block">
                    <TextSwap
                        items={["metal detection", "checkweighing", "combination"]}
                        className="pb-2 text-[#cf2828]"
                        interval={2600}
                        duration={0.45}
                    />
                </span>
                <br />
                systems.
            </h1>
            <p className="mt-3 text-slate-600 max-w-[90vw] text-center md:text-left md:max-w-2xl">
                From beacons to switches, all the way through to conveyor rollers. The new SNB 
                online store stocks a variety of parts for your metal detector, checkweigher or 
                combination system.
            </p>
            <div className="mt-4 flex gap-3 justify-center md:justify-start max-w-[90vw] md:max-w-2xl">
                <Badge variant="outline"><Headset /> Expert Support</Badge>
                <Badge variant="outline"><Package /> Fast Dispatch</Badge>
            </div>
        </motion.div>
    )
}