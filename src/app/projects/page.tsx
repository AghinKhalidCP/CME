import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/scroll-reveal";
import Image from "next/image";

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

export default function ProjectsPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
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

      </div>
    </div>
  );
}
