
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { SocialLinks } from './SocialLinks';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-6 p-4">
                <Logo />
                <Navigation isMobile={true} onLinkClick={() => setIsOpen(false)} />
                <div className="pt-4">
                  <SocialLinks />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Centered Navigation for Desktop */}
        <div className="flex-1 flex justify-center items-center">
           <div className="hidden md:flex">
             <Logo className="md:hidden" />
           </div>
           <div className="hidden md:flex flex-1 justify-center">
             <Navigation />
           </div>
           <div className="flex md:hidden flex-1 justify-center">
             <Logo />
           </div>
        </div>


        {/* Right side social links for Desktop */}
        <div className="hidden md:flex items-center justify-end space-x-4">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}
