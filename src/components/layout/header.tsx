
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled || pathname !== '/' ? 'bg-background/80 shadow-md backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex-1 lg:flex-none">
          <Link href="/" className="flex items-center gap-2">
            <Building className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary tracking-tight">
              CAPITAL MIDDLE EAST
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} legacyBehavior>
                <a className="px-3 py-2 text-sm font-medium text-primary/80 transition-colors hover:text-primary rounded-md">
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex flex-1 items-center justify-end">
          <Button asChild>
            <Link href="/#request-quote">Request Quote</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background p-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between p-4 border-b">
                   <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
                    <Building className="h-8 w-8 text-primary" />
                    <span className="text-lg font-bold text-primary tracking-tight">CME</span>
                  </Link>
                </div>
                <nav className="flex flex-col p-4 space-y-2">
                  {[...navLinks, { href: '/#request-quote', label: 'Request Quote' }].map((link) => (
                    <Link key={link.href} href={link.href} legacyBehavior>
                       <a className="block px-4 py-3 text-lg font-medium text-primary/80 transition-colors hover:bg-secondary rounded-md" onClick={closeMobileMenu}>
                        {link.label}
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
