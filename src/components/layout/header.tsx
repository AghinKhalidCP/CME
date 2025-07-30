
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

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
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Capital Middle East L.L.C"
              width={200}
              height={50}
              className="h-auto"
            />
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

        <div className="hidden lg:flex flex-shrink-0 items-center justify-end">
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
                   <Link href="/" onClick={closeMobileMenu}>
                      <Image
                        src="/logo.png"
                        alt="Capital Middle East L.L.C"
                        width={150}
                        height={37.5}
                        className="h-auto"
                      />
                  </Link>
                </div>
                <nav className="flex flex-col p-4 space-y-2">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} legacyBehavior>
                       <a className="block px-4 py-3 text-lg font-medium text-primary/80 transition-colors hover:bg-secondary rounded-md" onClick={closeMobileMenu}>
                        {link.label}
                      </a>
                    </Link>
                  ))}
                </nav>
                 <div className="mt-auto p-4 border-t">
                    <Button asChild className="w-full">
                        <Link href="/#request-quote" onClick={closeMobileMenu}>Request Quote</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
