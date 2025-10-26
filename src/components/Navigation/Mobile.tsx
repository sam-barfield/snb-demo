import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator";

/*
  Currently this is a demo for a headless wp site. The content below should
  not be static once I pick this up again, and should be pulled from an API.
*/

export const Mobile = ({ open, setOpen}: { open: boolean; setOpen: (open: boolean) => void }) => {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu size={12} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-3/4 sm:w-1/2 p-6">
            <SheetHeader className="pl-0">
                <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            {/* Shadcn Accordion works quite nicely within a sheet for mobile navigation. */}
            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                <a href="#" className="flex items-center gap-2 text-sm font-semibold mb-4">Home</a>
                <Separator />

                <AccordionItem value="industry">
                    <AccordionTrigger>Industry</AccordionTrigger>
                    <AccordionContent>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Meat, Poultry & Fish</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Confectionary</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Bakery</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Dairy</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Packaging</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Other</a>
                        </Button>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="about-us">
                    <AccordionTrigger>About Us</AccordionTrigger>
                    <AccordionContent>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">History</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Careers</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Sherburn In Elmet</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Luton</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Bathgate</a>
                        </Button>
                    </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="products">
                    <AccordionTrigger>Products</AccordionTrigger>
                    <AccordionContent>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Metal Detection</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Metal Detector Conveyor</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Pipeline</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Vertical Fall</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Pharmaceutical</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Twin Head</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Twin Lane</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Checkweighing</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Combination Systems</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">X-Ray</a>
                        </Button>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="aftermarket-products">
                    <AccordionTrigger>Aftermarket Products</AccordionTrigger>
                    <AccordionContent>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Other Equipment Sales & Equipment Purchase</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">System Upgrades</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Test Sticks</a>
                        </Button>
                    </AccordionContent>
                </AccordionItem>

                <a href="#" className="flex items-center gap-2 text-sm font-semibold my-4">Hire / Buy</a>
                <Separator />

                <AccordionItem value="services-training">
                    <AccordionTrigger>Services & Training</AccordionTrigger>
                    <AccordionContent>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Breakdown, Service & Repair</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Calibrations</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Parts</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Electronics Workshop</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Training Courses</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Best Sensitivities Checks</a>
                        </Button>
                        <Button variant="link" className="p-0 flex justify-start ml-3" asChild>
                            <a href="#">Refurbishments & Overhauls</a>
                        </Button>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </SheetContent>
      </Sheet>
    )
}