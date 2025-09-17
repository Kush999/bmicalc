"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Calculator, Heart, Info, FileText, HelpCircle } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Calculator className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">BMI Calc</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Health Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <Link href="/about-bmi" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center space-x-2">
                          <Info className="h-4 w-4" />
                          <div className="text-sm font-medium leading-none">About BMI</div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn what BMI is and how it's calculated
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    
                    <Link href="/bmi-categories" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center space-x-2">
                          <Heart className="h-4 w-4" />
                          <div className="text-sm font-medium leading-none">BMI Categories</div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Understand BMI ranges and health implications
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    
                    <Link href="/health-tips" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center space-x-2">
                          <Heart className="h-4 w-4" />
                          <div className="text-sm font-medium leading-none">Health Tips</div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Get expert health and wellness advice
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <Link href="/faq" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center space-x-2">
                          <HelpCircle className="h-4 w-4" />
                          <div className="text-sm font-medium leading-none">FAQ</div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Frequently asked questions about BMI
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    
                    <Link href="/privacy-policy" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4" />
                          <div className="text-sm font-medium leading-none">Privacy Policy</div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          How we protect your privacy
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    
                    <Link href="/terms-of-service" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4" />
                          <div className="text-sm font-medium leading-none">Terms of Service</div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Terms and conditions of use
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-lg font-medium">
                  Home
                </Link>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Health Resources</h3>
                  <div className="flex flex-col space-y-2 pl-4">
                    <Link href="/about-bmi" className="text-sm">
                      About BMI
                    </Link>
                    <Link href="/bmi-categories" className="text-sm">
                      BMI Categories
                    </Link>
                    <Link href="/health-tips" className="text-sm">
                      Health Tips
                    </Link>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Support</h3>
                  <div className="flex flex-col space-y-2 pl-4">
                    <Link href="/faq" className="text-sm">
                      FAQ
                    </Link>
                    <Link href="/privacy-policy" className="text-sm">
                      Privacy Policy
                    </Link>
                    <Link href="/terms-of-service" className="text-sm">
                      Terms of Service
                    </Link>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
