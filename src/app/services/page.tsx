
'use client';

import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/scroll-reveal";
import Image from "next/image";
import { Hammer, Car, Shield, Building2, FlameKindling, Layers3, Paintbrush } from "lucide-react";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

const services = [
  {
    id: "metal-works",
    icon: <Hammer className="h-10 w-10 text-primary" />,
    title: "Metal Works",
    description: "Our Metal Works division excels in high-quality custom metal fabrication. We cater to a wide array of industrial and commercial projects, delivering precision-engineered solutions that are both durable and aesthetically pleasing. From structural steel to intricate architectural pieces, we have the expertise to bring your vision to life.",
    image: "https://placehold.co/800x600",
    "data-ai-hint": "metal workshop",
  },
  {
    id: "car-parking",
    icon: <Car className="h-10 w-10 text-primary" />,
    title: "Car Parking",
    description: "We design, manufacture, and install innovative and robust car parking shade structures. Our solutions are engineered to provide maximum protection from the elements while complementing the architectural style of the surroundings. We offer a variety of designs, from cantilever to wave and conical structures.",
    image: "https://placehold.co/800x601",
    "data-ai-hint": "car park shades",
  },
  {
    id: "fence-system",
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Fence System",
    description: "Our fencing systems provide security without compromising on aesthetics. We supply and install a comprehensive range of fencing solutions for residential, commercial, and high-security properties, including chain-link, palisade, and decorative fences, tailored to meet your specific security requirements.",
    image: "https://placehold.co/800x602",
    "data-ai-hint": "security fence",
  },
  {
    id: "scaffolding",
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: "Scaffolding",
    description: "Safety and reliability are the cornerstones of our scaffolding services. We provide a full range of scaffolding solutions for construction, maintenance, and industrial applications. Our certified team ensures that all structures are erected to the highest safety standards, providing secure access for any project.",
    image: "https://placehold.co/800x603",
    "data-ai-hint": "building scaffolding",
  },
  {
    id: "aluminium-casting",
    icon: <FlameKindling className="h-10 w-10 text-primary" />,
    title: "Aluminium Casting",
    description: "Leveraging advanced casting techniques, our Aluminium Casting division produces high-precision and complex components. We serve various industries with custom-designed parts that meet stringent quality and performance specifications, from automotive to decorative architectural elements.",
    image: "https://placehold.co/800x604",
    "data-ai-hint": "metal casting factory",
  },
  {
    id: "stainless-steel-division",
    icon: <Layers3 className="h-10 w-10 text-primary" />,
    title: "Stainless Steel Division",
    description: "Our Stainless Steel Division is dedicated to the specialized design, fabrication, and installation of high-end stainless steel products. We work with various grades of stainless steel to create everything from industrial-grade equipment to polished architectural features like balustrades and cladding.",
    image: "https://placehold.co/800x605",
    "data-ai-hint": "stainless steel pipes",
  },
  {
    id: "coating-division",
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: "Coating Division",
    description: "We provide advanced protective and decorative coating services for a multitude of surfaces. Our expertise includes industrial coatings for corrosion protection, powder coating for durable finishes, and specialized applications for floors and walls, ensuring longevity and a premium look.",
    image: "https://placehold.co/800x606",
    "data-ai-hint": "industrial spray painting",
  },
];

const SubNav = () => {
  const [activeSection, setActiveSection] = useState('metal-works');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target.id;
      if (visibleSection) {
        setActiveSection(visibleSection);
      }
    }, { rootMargin: "-40% 0px -60% 0px" });

    const sections = document.querySelectorAll('.service-section');
    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="sticky top-20 z-40 bg-background/70 backdrop-blur-lg mb-8">
      <div className="container mx-auto">
        <ul className="flex items-center justify-center gap-2 md:gap-4 py-2 overflow-x-auto whitespace-nowrap">
          {services.map((service) => (
            <li key={service.id}>
              <Link href={`#${service.id}`} legacyBehavior>
                <a className={cn(
                  "relative px-2 py-2 text-xs md:text-sm font-medium transition-colors hover:text-primary",
                  activeSection === service.id ? 'text-primary' : 'text-foreground/60'
                )}>
                  {service.title}
                  {activeSection === service.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-100 transition-transform duration-300" />
                  )}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default function ServicesPage() {
  return (
    <div className="bg-secondary">
      <SubNav />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <ScrollReveal>
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4 text-center">
            Our Services
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-foreground/70">
            Delivering a comprehensive range of specialized services tailored to meet the demands of modern industry.
          </p>
        </ScrollReveal>

        <div className="mt-16 space-y-24">
          {services.map((service, index) => (
            <section key={service.id} id={service.id} className="service-section pt-24 -mt-24">
              <ScrollReveal delay={index * 100}>
                <Card className="card-glass overflow-hidden shadow-xl">
                  <div className={cn(
                    "grid md:grid-cols-2 items-center gap-8",
                    index % 2 !== 0 && "md:grid-flow-col-dense"
                  )}>
                    <div className={cn("p-8 md:p-12", index % 2 !== 0 && "md:col-start-2")}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          {service.icon}
                        </div>
                        <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                      </div>
                      <p className="text-foreground/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className={cn("h-full w-full", index % 2 !== 0 && "md:col-start-1")}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        data-ai-hint={service['data-ai-hint']}
                        width={800}
                        height={600}
                        className="object-cover h-full w-full min-h-[300px]"
                      />
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
