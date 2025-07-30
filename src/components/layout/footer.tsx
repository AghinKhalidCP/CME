import Link from "next/link";
import { Building, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Building className="h-8 w-8" />
              <span className="text-xl font-bold tracking-tight">
                CAPITAL MIDDLE EAST
              </span>
            </Link>
            <p className="text-primary-foreground/70">
              Your trusted partner for premier industrial and corporate solutions in the heart of the UAE.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-tight text-primary-foreground/90">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="text-primary-foreground/70 hover:text-accent transition-colors">Projects</Link></li>
              <li><Link href="/#services" className="text-primary-foreground/70 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/#faq" className="text-primary-foreground/70 hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-primary-foreground/90">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0 text-accent"/>
                <span className="text-primary-foreground/70">P.O. Box: 12345, Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent"/>
                <a href="mailto:info@cmeuae.com" className="text-primary-foreground/70 hover:text-accent transition-colors">info@cmeuae.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent"/>
                <a href="tel:+97100000000" className="text-primary-foreground/70 hover:text-accent transition-colors">+971 00 000 0000</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-tight text-primary-foreground/90">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Facebook className="h-6 w-6"/></a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Twitter className="h-6 w-6"/></a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Linkedin className="h-6 w-6"/></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary/80">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Capital Middle East L.L.C. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
