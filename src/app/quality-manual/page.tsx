import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/scroll-reveal";
import { Gem, FileCheck2, Milestone, Users } from "lucide-react";

export default function QualityManualPage() {
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
      <div className="container mx-auto px-4 py-16 md:py-24">
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

      </div>
    </div>
  );
}
