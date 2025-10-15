import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const faqs = [
    {
      question: "How does Fix4Ever work?",
      answer:
        "Simply contact us via phone, email, or our booking form. We'll connect you with a verified technician who will diagnose and repair your device. You can choose from onsite, pickup, or in-store service options based on your convenience.",
    },
    {
      question: "How much does it cost?",
      answer:
        "We offer transparent, competitive pricing based on your device and the issue. Most repairs are completed within ₹500-₹3000 depending on complexity. Contact us for an exact quote for your specific repair needs.",
    },
    {
      question: "Do you offer warranty?",
      answer:
        "Yes! All our repairs come with a comprehensive 30-day warranty. If you experience any issues with the repaired component within 30 days, we'll fix it free of charge.",
    },
    {
      question: "How long will it take?",
      answer:
        "Most repairs are completed within 1-2 hours. Complex repairs like motherboard issues may take 24-48 hours. We'll provide you with an estimated timeframe when you book your repair.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We currently serve 10+ cities across India, including Chennai and surrounding areas. Contact us to check if we serve your location. We offer onsite, pickup, and in-store repair options.",
    },
    {
      question: "Are your technicians verified?",
      answer:
        "Absolutely! All our technicians undergo thorough background verification and skills assessment. We only work with experienced, certified professionals to ensure quality repairs.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">We're Here to Help You</h1>
          <p className="text-lg md:text-xl opacity-90">
            Get in touch with our team for any questions or to book a repair
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <a href="tel:+917305379241" className="text-primary hover:underline">
                  +91 7305379241
                </a>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <a href="mailto:support@fix4ever.com" className="text-primary hover:underline">
                  support@fix4ever.com
                </a>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-sm text-muted-foreground">
                  Nirmaan, IIT Madras
                  <br />
                  Chennai - 600036
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Working Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Mon-Sat: 9 AM - 6 PM
                  <br />
                  Sun: 10 AM - 4 PM
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your repair needs..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Find answers to common questions about our services</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Emergency Repair?</h3>
          <p className="text-lg mb-6 opacity-90">We offer 24/7 emergency support for critical device issues</p>
          <Button variant="hero" size="lg" asChild>
            <a href="tel:+917305379241">Call Now: +91 7305379241</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
