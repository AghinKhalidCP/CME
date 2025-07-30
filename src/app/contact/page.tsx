
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/scroll-reveal";
import RequestQuoteForm from "@/components/request-quote-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <ScrollReveal>
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4 text-center">
            Contact Us
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-foreground/70">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Card className="card-glass mt-12 shadow-xl overflow-hidden">
            <div className="h-[400px] md:h-[500px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.281861784964!2d55.4802874150141!3d25.39535998379963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f58c734b4c275%3A0x40c4974913838531!2sCAPITAL%20MIDDLE%20EAST!5e0!3m2!1sen!2sae!4v1719483664333!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Google Map of CAPITAL MIDDLE EAST"
              ></iframe>
            </div>
          </Card>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
            <ScrollReveal delay={300}>
                <Card className="card-glass p-8 shadow-xl h-full">
                     <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                     <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full mt-1">
                                <MapPin className="h-6 w-6 text-accent"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary">Our Office</h3>
                                <p className="text-foreground/80">P.O. Box: 12345, Dubai, United Arab Emirates</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full mt-1">
                                <Mail className="h-6 w-6 text-accent"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary">Email Us</h3>
                                <a href="mailto:info@cmeuae.com" className="text-foreground/80 hover:text-accent transition-colors">info@cmeuae.com</a>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full mt-1">
                                <Phone className="h-6 w-6 text-accent"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary">Call Us</h3>
                                <a href="tel:+97100000000" className="text-foreground/80 hover:text-accent transition-colors">+971 00 000 0000</a>
                            </div>
                        </li>
                     </ul>
                </Card>
            </ScrollReveal>
            <ScrollReveal delay={400}>
                <Card className="card-glass p-8 shadow-xl h-full">
                    <h2 className="text-3xl font-bold text-primary mb-6">Send a Message</h2>
                    <RequestQuoteForm />
                </Card>
            </ScrollReveal>
        </div>

      </div>
    </div>
  );
}
