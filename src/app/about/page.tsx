import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/scroll-reveal";
import Image from "next/image";
import { Users, Target, CheckCircle } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
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

      </div>
    </div>
  );
}
