
'use client'

import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/scroll-reveal";
import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
    { category: "Metal Works", title: "Commercial Tower Façade", image: "https://placehold.co/800x601", dataAiHint: "metal facade" },
    { category: "Car Parking", title: "Airport Parking Structure", image: "https://placehold.co/800x602", dataAiHint: "parking garage" },
    { category: "Scaffolding", title: "High-Rise Maintenance Access", image: "https://placehold.co/800x603", dataAiHint: "building scaffolding" },
    { category: "Fence System", title: "Industrial Zone Perimeter", image: "https://placehold.co/800x604", dataAiHint: "security fence" },
    { category: "Stainless Steel", title: "Luxury Hotel Balustrades", image: "https://placehold.co/800x605", dataAiHint: "steel railing" },
    { category: "Coating", title: "Marine Jetty Protective Coating", image: "https://placehold.co/800x606", dataAiHint: "bridge painting" },
    { category: "Aluminium Casting", title: "Custom Architectural Elements", image: "https://placehold.co/800x607", dataAiHint: "metal casting" },
    { category: "Metal Works", title: "Pedestrian Bridge Steelwork", image: "https://placehold.co/800x608", dataAiHint: "steel bridge" },
];

const galleryImages = [
  { src: "https://placehold.co/600x400", alt: "Metal fabrication workshop", "data-ai-hint": "metal fabrication" },
  { src: "https://placehold.co/600x401", alt: "Car parking shades installation", "data-ai-hint": "parking structure" },
  { src: "https://placehold.co/600x402", alt: "Large scale scaffolding", "data-ai-hint": "construction scaffolding" },
  { src: "https://placehold.co/600x403", alt: "Stainless steel railing detail", "data-ai-hint": "stainless steel" },
  { src: "https://placehold.co/600x404", alt: "Protective coating application", "data-ai-hint": "industrial painting" },
  { src: "https://placehold.co/600x405", alt: "Completed fence system", "data-ai-hint": "metal fence" },
];

const SubNav = () => {
  const [activeSection, setActiveSection] = useState('projects');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target.id;
      if (visibleSection) {
        setActiveSection(visibleSection);
      }
    }, { threshold: 0.2 });

    const sections = document.querySelectorAll('.section-spy');
    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  const navItems = [
    { id: 'projects', label: 'Projects Executed' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <nav className="sticky top-20 z-40 bg-background/70 backdrop-blur-lg mb-8">
      <div className="container mx-auto">
        <ul className="flex items-center justify-center gap-4 md:gap-8 py-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={`#${item.id}`} legacyBehavior>
                <a className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  activeSection === item.id ? 'text-primary' : 'text-foreground/60'
                )}>
                  {item.label}
                  {activeSection === item.id && (
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


export default function ProjectsPage() {
  return (
    <div className="bg-secondary">
      <SubNav />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <section id="projects" className="section-spy mb-24 pt-24 -mt-24">
          <ScrollReveal>
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4 text-center">
              Projects Executed
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-foreground/70">
              A portfolio of our commitment to engineering excellence and superior craftsmanship across diverse sectors.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
              {projects.map((project, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                      <Card className="card-glass group overflow-hidden shadow-lg h-full">
                          <div className="overflow-hidden">
                               <Image
                                  src={project.image}
                                  alt={project.title}
                                  data-ai-hint={project.dataAiHint}
                                  width={800}
                                  height={600}
                                  className="object-cover w-full aspect-video transition-transform duration-500 ease-in-out group-hover:scale-110"
                              />
                          </div>
                          <CardContent className="p-6">
                              <p className="text-sm font-semibold text-accent">{project.category}</p>
                              <h3 className="text-xl font-bold text-primary mt-1">{project.title}</h3>
                          </CardContent>
                      </Card>
                  </ScrollReveal>
              ))}
          </div>
        </section>

        <section id="gallery" className="section-spy pt-24 -mt-24">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-center">
              Project Gallery
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-foreground/70">
              A glimpse into the quality and scale of our executed projects.
            </p>
          </ScrollReveal>
          <ScrollReveal className="mt-12">
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Card className="overflow-hidden rounded-xl shadow-lg">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          data-ai-hint={image['data-ai-hint']}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover aspect-[3/2] transition-transform duration-300 hover:scale-105"
                        />
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </ScrollReveal>
        </section>

      </div>
    </div>
  );
}
