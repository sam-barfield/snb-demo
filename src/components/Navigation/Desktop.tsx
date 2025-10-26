import { ChevronRight } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useIsMobile } from "@/hooks/use-mobile"

/*
  Currently this is a demo for a headless wp site. The content below should
  not be static once I pick this up again, and should be pulled from an API.
*/

export const Desktop = () => {
    const isMobile = useIsMobile()
    
    return (
        <div className="sticky top-0 z-40 bg-white/75 backdrop-blur border-b">
          <div className="h-14 flex items-center">
            <NavigationMenu viewport={isMobile}>
              <NavigationMenuList className="flex-wrap">
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className="font-semibold">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="hidden md:block">
                  <NavigationMenuTrigger>Industry</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-4">
                      <li>
                        <NavigationMenuLink href="/industry/meat-poultry-fish">
                          Meat, Poultry & Fish
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/confectionary">
                          Confectionary
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/bakery">
                          Bakery
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/dairy">
                          Dairy
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/packaging">
                          Packaging
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/other">
                          Other
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="hidden md:block">
                  <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 sm:w-[100px] md:w-[300px] md:grid-cols-2 lg:w-[350px]">
                      <li>
                        <span className="text-sm font-semibold ml-2">About</span>
                        <NavigationMenuLink href="/industry/meat-poultry-fish">
                          History
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/confectionary">
                          Careers
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <span className="text-sm font-semibold ml-2">Locations</span>
                        <NavigationMenuLink href="/industry/bakery">
                          <span className="flex items-center gap-1">Sherburn In Elmet <ChevronRight /></span>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/dairy">
                          <span className="flex items-center gap-1">Luton <ChevronRight /></span>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/packaging">
                          <span className="flex items-center gap-1">Bathgate <ChevronRight /></span>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="hidden md:block">
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 sm:w-[100px] md:w-[300px] md:grid-cols-2 lg:w-[350px]">
                      <li>
                        <NavigationMenuLink href="/industry/meat-poultry-fish">
                          Metal Detection
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/confectionary">
                          Metal Detector Conveyor
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/meat-poultry-fish">
                          Pipeline
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/confectionary">
                          Vertical Fall
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/confectionary">
                          Pharmaceutical
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/confectionary">
                          Twin Head
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="/industry/meat-poultry-fish">
                          Twin Lane
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/confectionary">
                          Checkweighing
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/meat-poultry-fish">
                          Combination Systems
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/confectionary">
                          X-Ray
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="hidden md:block">
                  <NavigationMenuTrigger>Aftermarket Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-4">
                      <li>
                        <NavigationMenuLink href="/industry/meat-poultry-fish">
                          Other Equipment Sales & Equipment Purchase
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/confectionary">
                          System Upgrades
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/bakery">
                          Test Sticks
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className="font-semibold">
                    Hire / Buy
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="hidden md:block">
                  <NavigationMenuTrigger>Services & Training</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 sm:w-[100px] md:w-[300px] md:grid-cols-2 lg:w-[350px]">
                      <li>
                        <NavigationMenuLink href="/industry/meat-poultry-fish">
                          Breakdown, Service & Repair
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/confectionary">
                          Calibrations
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/meat-poultry-fish">
                          Parts
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/confectionary">
                          Electronics Workshop
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/confectionary">
                          Training Courses
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/industry/confectionary">
                          Best Sensitivities Checks
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink href="/industry/meat-poultry-fish">
                          Refurbishments & Overhauls
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
    )
}