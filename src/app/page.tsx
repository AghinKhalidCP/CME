import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Hammer,
  Car,
  Building2,
  FlameKindling,
  Layers3,
  Paintbrush,
  Shield,
  Star,
  Award,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import RequestQuoteForm from "@/components/request-quote-form";

const services = [
  {
    icon: <Hammer className="h-10 w-10 text-primary" />,
    title: "Metal Works",
    description: "High-quality custom metal fabrication for industrial and commercial projects.",
  },
  {
    icon: <Car className="h-10 w-10 text-primary" />,
    title: "Car Parking",
    description: "Innovative and durable car parking shade structures and solutions.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Fence System",
    description: "Secure and aesthetic fencing systems for all types of properties.",
  },
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: "Scaffolding",
    description: "Reliable and safe scaffolding services for construction and maintenance.",
  },
  {
    icon: <FlameKindling className="h-10 w-10 text-primary" />,
    title: "Aluminium Casting",
    description: "Precision aluminium casting for complex components and parts.",
  },
  {
    icon: <Layers3 className="h-10 w-10 text-primary" />,
    title: "Stainless Steel Division",
    description: "Specialized in stainless steel design, fabrication, and installation.",
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: "Coating Division",
    description: "Advanced protective and decorative coating services for all surfaces.",
  },
];

const testimonials = [
  {
    name: "John Doe, Project Manager",
    company: "Future Build Corp",
    quote: "Capital Middle East's professionalism and quality of work are unmatched. They delivered our project ahead of schedule and beyond our expectations. Highly recommended.",
    avatar: "https://placehold.co/100x100",
  },
  {
    name: "Jane Smith, CEO",
    company: "Innovate Solutions",
    quote: "The team's attention to detail and commitment to safety was impressive. Their scaffolding solutions were top-notch and ensured our team could work efficiently and safely.",
    avatar: "https://placehold.co/100x101",
  },
  {
    name: "Ahmed Al Futtaim, Director",
    company: "Gulf Properties",
    quote: "For our luxury residential project, we needed the best. CME's stainless steel and coating divisions provided a finish that speaks of quality and elegance.",
    avatar: "https://placehold.co/100x102",
  },
];

const galleryImages = [
  { src: "https://placehold.co/600x400", alt: "Metal fabrication workshop", "data-ai-hint": "metal fabrication" },
  { src: "https://placehold.co/600x401", alt: "Car parking shades installation", "data-ai-hint": "parking structure" },
  { src: "https://placehold.co/600x402", alt: "Large scale scaffolding", "data-ai-hint": "construction scaffolding" },
  { src: "https://placehold.co/600x403", alt: "Stainless steel railing detail", "data-ai-hint": "stainless steel" },
  { src: "https://placehold.co/600x404", alt: "Protective coating application", "data-ai-hint": "industrial painting" },
  { src: "https://placehold.co/600x405", alt: "Completed fence system", "data-ai-hint": "metal fence" },
];

const companyLogos = [
  { src: "https://placehold.co/150x60", alt: "Company Logo 1", "data-ai-hint": "tech logo" },
  { src: "https://placehold.co/150x61", alt: "Company Logo 2", "data-ai-hint": "construction logo" },
  { src: "https://placehold.co/150x62", alt: "Company Logo 3", "data-ai-hint": "industrial logo" },
  { src: "https://placehold.co/150x63", alt: "Company Logo 4", "data-ai-hint": "energy logo" },
  { src: "https://placehold.co/150x64", alt: "Company Logo 5", "data-ai-hint": "real estate logo" },
];

const faqs = [
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including construction, commercial real estate, public infrastructure, oil and gas, and manufacturing. Our diverse service portfolio allows us to cater to the unique needs of each sector.",
  },
  {
    question: "Can you handle custom fabrication projects?",
    answer: "Absolutely. Our Metal Works and Aluminium Casting divisions specialize in custom fabrication. We work closely with our clients from design to completion to ensure the final product meets their exact specifications.",
  },
  {
    question: "What are your safety standards?",
    answer: "Safety is our top priority. We adhere to the strictest international safety standards across all our operations. Our teams are highly trained, and we have a dedicated Health &amp; Safety department to ensure compliance and risk mitigation on every project.",
  },
  {
    question: "What is the process for getting a quote?",
    answer: "You can request a quote by filling out the form on our website, calling us, or sending an email. We'll typically schedule a consultation to discuss your project requirements in detail before providing a comprehensive proposal.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-primary/80 z-10" />
        <Image
          src="https://placehold.co/1920x1080"
          alt="Industrial background"
          data-ai-hint="industrial background"
          layout="fill"
          objectFit="cover"
          className="bg-primary"
        />
        <div className="z-20 p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
            Engineering Excellence.
            <br />
            Building The Future.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80 drop-shadow-md">
            Capital Middle East L.L.C is your trusted partner for premier industrial and corporate solutions in the heart of the UAE.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <ScrollReveal className="container mx-auto">
          <h3 className="text-center text-lg text-primary/80 font-medium mb-8">
            Trusted by industry leaders
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {companyLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                data-ai-hint={logo['data-ai-hint']}
                width={150}
                height={60}
                className="opacity-60 transition-opacity hover:opacity-100"
              />
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section id="services" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-center">
              Our Services
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-foreground/70">
              Delivering a comprehensive range of specialized services tailored to meet the demands of modern industry.
            </p>
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} className="flex">
                <Card className="card-glass flex flex-col w-full p-6 text-center items-center rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mt-2">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-foreground/70 flex-grow">
                    {service.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-center">
              What Our Clients Say
            </h2>
          </ScrollReveal>
          <ScrollReveal className="mt-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="card-glass flex flex-col justify-between h-full p-8 rounded-xl shadow-lg">
                        <div>
                          <div className="flex items-center mb-4">
                            <Star className="text-accent h-5 w-5" fill="currentColor" />
                            <Star className="text-accent h-5 w-5" fill="currentColor" />
                            <Star className="text-accent h-5 w-5" fill="currentColor" />
                            <Star className="text-accent h-5 w-5" fill="currentColor" />
                            <Star className="text-accent h-5 w-5" fill="currentColor" />
                          </div>
                          <p className="text-foreground/80">"{testimonial.quote}"</p>
                        </div>
                        <div className="mt-6 flex items-center">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                          <div className="ml-4">
                            <p className="font-semibold text-primary">{testimonial.name}</p>
                            <p className="text-sm text-foreground/60">{testimonial.company}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <Award className="h-16 w-16 mx-auto text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Our Mission
            </h2>
            <p className="mt-6 max-w-4xl mx-auto text-xl text-white/80 leading-relaxed">
              To be the premier engineering and industrial services partner in the Middle East, delivering innovative, reliable, and high-quality solutions that drive our clients' success while upholding the highest standards of safety and integrity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
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
        </div>
      </section>

      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-center">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <ScrollReveal className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="card-glass rounded-xl mb-4 px-6 shadow-md">
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      <section id="request-quote" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-center">
              Request a Quote
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-foreground/70">
              Let's build something great together. Reach out to us for a personalized quote for your project.
            </p>
          </ScrollReveal>
          <ScrollReveal className="mt-12 max-w-2xl mx-auto">
            <Card className="card-glass p-8 rounded-xl shadow-xl">
              <CardContent className="p-0">
                <RequestQuoteForm />
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
