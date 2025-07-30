
'use client';

import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/scroll-reveal";
import Image from "next/image";
import { Users, Target, CheckCircle, ShieldCheck, ClipboardList, LifeBuoy, HardHat, Gem, FileCheck2, Milestone } from "lucide-react";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

const SubNav = () => {
  const [activeSection, setActiveSection] = useState('about-us');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target.id;
      if (visibleSection) {
        setActiveSection(visibleSection);
      }
    }, { threshold: 0.4 });

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
    { id: 'about-us', label: 'About Us' },
    { id: 'health-safety', label: 'Health & Safety' },
    { id: 'quality-manual', label: 'Quality Manual' },
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


export default function AboutUsPage() {
  const safetyPoints = [
    { icon: <ShieldCheck className="h-8 w-8 text-accent"/>, title: "Zero-Harm Policy", description: "Our ultimate goal is a workplace free from incidents and injuries. We believe all accidents are preventable." },
    { icon: <ClipboardList className="h-8 w-8 text-accent"/>, title: "Rigorous Compliance", description: "We strictly adhere to all local and international health and safety regulations, including OSHAD and ISO 45001." },
    { icon: <HardHat className="h-8 w-8 text-accent"/>, title: "Continuous Training", description: "Our workforce undergoes regular, comprehensive safety training to stay updated on the latest procedures and risks." },
    { icon: <LifeBuoy className="h-8 w-8 text-accent"/>, title: "Proactive Risk Management", description: "We conduct thorough risk assessments before and during every project to identify and mitigate potential hazards." },
  ];

   const qualityPillars = [
        {
            title: "Customer Focus",
            description: "Understanding and exceeding client expectations is the cornerstone of our quality approach. We build partnerships based on trust and mutual success.",
        },
        {
            title: "Process Approach",
            description: "We manage our activities as interrelated processes, ensuring consistency, efficiency, and predictable outcomes across all projects.",
        },
        {
            title: "Continuous Improvement",
            description: "Our QMS is a living system. We consistently seek opportunities for improvement in our products, services, and processes.",
        },
        {
            title: "Evidence-based Decision Making",
            description: "Decisions are based on the analysis of data and information, ensuring objectivity and effectiveness in our actions.",
        },
    ];

  return (
    <div className="bg-secondary">
      <SubNav />
      <div className="container mx-auto px-4 py-16 md:py-24">
        
        <section id="about-us" className="section-spy mb-24">
          <ScrollReveal>
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4 text-center">
              About Capital Middle East L.L.C
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-foreground/70">
              Pioneering industrial excellence with a commitment to quality, safety, and innovation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
              <Card className="card-glass mt-12 overflow-hidden shadow-xl">
                  <div className="grid md:grid-cols-2 items-center">
                      <div className="p-8 md:p-12">
                          <h2 className="text-3xl font-bold text-primary">Our Story</h2>
                          <p className="mt-4 text-foreground/80 leading-relaxed">
                              Founded with a vision to redefine the industrial services sector in the UAE, Capital Middle East L.L.C began its journey with a small, dedicated team of engineers and technicians. Over the years, we have grown into a leading name, synonymous with reliability and excellence. Our expansion into diverse divisions like Metal Works, Scaffolding, and advanced Coating solutions is a testament to our adaptive strategy and commitment to meeting evolving market needs. We pride ourselves on our rich history of successful projects that have not only contributed to the region's infrastructure but have also built lasting relationships with our clients based on trust and mutual respect.
                          </p>
                      </div>
                       <div className="h-full w-full">
                          <Image
                              src="https://placehold.co/800x600"
                              alt="Company facility"
                              data-ai-hint="industrial building"
                              width={800}
                              height={600}
                              className="object-cover h-full w-full"
                          />
                      </div>
                  </div>
              </Card>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
              <ScrollReveal delay={300}>
                   <Card className="card-glass p-8 text-center h-full">
                      <Target className="h-12 w-12 mx-auto text-accent"/>
                      <h3 className="text-2xl font-bold text-primary mt-4">Our Vision</h3>
                      <p className="mt-2 text-foreground/70">To be the undisputed leader in industrial and corporate solutions, setting new benchmarks for quality, safety, and sustainability in the Middle East.</p>
                   </Card>
              </ScrollReveal>
               <ScrollReveal delay={400}>
                   <Card className="card-glass p-8 text-center h-full">
                      <CheckCircle className="h-12 w-12 mx-auto text-accent"/>
                      <h3 className="text-2xl font-bold text-primary mt-4">Our Values</h3>
                      <p className="mt-2 text-foreground/70">Integrity, Innovation, Excellence, and a relentless commitment to our clients' success form the bedrock of our corporate culture.</p>
                   </Card>
              </ScrollReveal>
               <ScrollReveal delay={500}>
                   <Card className="card-glass p-8 text-center h-full">
                      <Users className="h-12 w-12 mx-auto text-accent"/>
                      <h3 className="text-2xl font-bold text-primary mt-4">Our Team</h3>
                      <p className="mt-2 text-foreground/70">Our strength lies in our diverse team of seasoned professionals, who bring a wealth of experience and passion to every project we undertake.</p>
                   </Card>
              </ScrollReveal>
          </div>
        </section>

        <section id="health-safety" className="section-spy mb-24 pt-24 -mt-24">
           <ScrollReveal>
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4 text-center">
              Health, Safety &amp; Environment (HSE)
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-foreground/70">
              Our unwavering commitment to ensuring the well-being of our employees, clients, and the environment.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
              <Card className="card-glass mt-12 p-8 md:p-12 shadow-xl">
                   <h2 className="text-3xl font-bold text-primary">Our HSE Philosophy</h2>
                   <p className="mt-4 text-foreground/80 leading-relaxed">
                     At Capital Middle East L.L.C, Health, Safety, and Environmental (HSE) stewardship are integral to our business. We believe that a safe and healthy work environment is not just a legal requirement but a moral obligation. Our HSE policy is built on the principles of continuous improvement, proactive risk management, and fostering a culture where every individual takes responsibility for their own safety and the safety of those around them. This commitment extends beyond our project sites to protect the communities and environments in which we operate.
                   </p>
              </Card>
          </ScrollReveal>

          <div className="mt-16">
               <ScrollReveal>
                  <h2 className="text-3xl font-bold text-primary text-center">Our Core Safety Principles</h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                  {safetyPoints.map((point, index) => (
                       <ScrollReveal key={index} delay={index * 100 + 300}>
                          <Card className="card-glass p-6 text-center h-full">
                              {point.icon}
                              <h3 className="text-xl font-bold text-primary mt-4">{point.title}</h3>
                              <p className="mt-2 text-foreground/70">{point.description}</p>
                          </Card>
                      </ScrollReveal>
                  ))}
              </div>
          </div>
        </section>

        <section id="quality-manual" className="section-spy pt-24 -mt-24">
            <ScrollReveal>
                <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4 text-center">
                    Our Quality Manual
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-foreground/70">
                    Detailing the framework that ensures excellence and consistency in everything we do.
                </p>
            </ScrollReveal>
        
            <div className="grid md:grid-cols-2 gap-8 mt-12 items-stretch">
                <ScrollReveal delay={200}>
                    <Card className="card-glass p-8 shadow-xl h-full">
                        <div className="flex items-center gap-4">
                            <Gem className="h-10 w-10 text-accent"/>
                            <h2 className="text-3xl font-bold text-primary">Quality Policy</h2>
                        </div>
                        <p className="mt-4 text-foreground/80 leading-relaxed">
                            Capital Middle East L.L.C is committed to delivering products and services of the highest possible standards, to satisfy our customer needs, expectations of quality, safety, reliability and service. This commitment is rooted in our corporate values and is essential to our continued growth and success.
                        </p>
                    </Card>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                    <Card className="card-glass p-8 shadow-xl h-full">
                        <div className="flex items-center gap-4">
                            <FileCheck2 className="h-10 w-10 text-accent"/>
                            <h2 className="text-3xl font-bold text-primary">Our Certifications</h2>
                        </div>
                        <p className="mt-4 text-foreground/80 leading-relaxed">
                            We are proud to be certified with ISO 9001:2015, demonstrating our robust Quality Management System (QMS). This certification reflects our dedication to international standards and our capability to consistently provide services that meet customer and regulatory requirements.
                        </p>
                    </Card>
                </ScrollReveal>
            </div>

            <div className="mt-16">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold text-primary text-center">Pillars of Our QMS</h2>
                </ScrollReveal>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                    {qualityPillars.map((pillar, index) => (
                        <ScrollReveal key={index} delay={index * 100 + 400}>
                            <Card className="card-glass p-6 h-full">
                                <h3 className="text-xl font-bold text-primary">{pillar.title}</h3>
                                <p className="mt-2 text-foreground/70">{pillar.description}</p>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>

      </div>
    </div>
  );
}
