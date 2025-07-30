import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/scroll-reveal";
import { ShieldCheck, ClipboardList, LifeBuoy, HardHat } from "lucide-react";

export default function HealthSafetyPage() {
  const safetyPoints = [
    { icon: <ShieldCheck className="h-8 w-8 text-accent"/>, title: "Zero-Harm Policy", description: "Our ultimate goal is a workplace free from incidents and injuries. We believe all accidents are preventable." },
    { icon: <ClipboardList className="h-8 w-8 text-accent"/>, title: "Rigorous Compliance", description: "We strictly adhere to all local and international health and safety regulations, including OSHAD and ISO 45001." },
    { icon: <HardHat className="h-8 w-8 text-accent"/>, title: "Continuous Training", description: "Our workforce undergoes regular, comprehensive safety training to stay updated on the latest procedures and risks." },
    { icon: <LifeBuoy className="h-8 w-8 text-accent"/>, title: "Proactive Risk Management", description: "We conduct thorough risk assessments before and during every project to identify and mitigate potential hazards." },
  ];

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
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

      </div>
    </div>
  );
}
