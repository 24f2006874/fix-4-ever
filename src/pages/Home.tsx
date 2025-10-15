import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  Laptop,
  Smartphone,
  Monitor,
  Settings,
  Shield,
  Clock,
  BadgeCheck,
  TrendingDown,
  PhoneCall,
} from "lucide-react";
import { motion } from "framer-motion";
import HeroBackground3D from "@/components/HeroBackground3D";
import Tilt from "@/components/Tilt";

const Home = () => {
  const services = [
    {
      icon: Laptop,
      title: "Laptop Repair",
      description: "Expert repair for screens, keyboards, batteries, and motherboards",
    },
    {
      icon: Smartphone,
      title: "Phone Repair",
      description: "Display, camera, charging port, battery, and water damage repair",
    },
    {
      icon: Monitor,
      title: "Desktop Repair",
      description: "Hardware upgrades, software fixes, and virus removal services",
    },
    {
      icon: Settings,
      title: "Software & OS",
      description: "Installation, updates, troubleshooting, and system optimization",
    },
  ];

  const features = [
    {
      icon: TrendingDown,
      title: "Transparent Pricing",
      description: "No hidden costs. See exact pricing before booking",
    },
    {
      icon: Shield,
      title: "30-Day Warranty",
      description: "All repairs backed by our comprehensive warranty",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Most repairs completed within 1-2 hours",
    },
    {
      icon: BadgeCheck,
      title: "Verified Technicians",
      description: "All technicians are background-verified professionals",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Student, IIT Madras",
      content: "Fixed my laptop screen in just 1 hour! Excellent service and very affordable.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "The technician was professional and transparent about costs. Highly recommend!",
      rating: 5,
    },
    {
      name: "Ankit Verma",
      role: "Business Owner",
      content: "Quick turnaround time and quality work. My go-to service for all device repairs.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />


      <section className="relative bg-gradient-hero text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <HeroBackground3D imageUrl="/cities/chennai.jpg" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
                Leave your worries with us — we fix more than things, we restore peace of mind.
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">Affordable • Transparent • Reliable</p>
              <p className="text-base md:text-lg mb-8 opacity-80 max-w-2xl">
                Smart diagnostics, verified technicians, and quick turnaround for laptops, phones, and desktops.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/book-repair">Get a Quote</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
                >
                  <Link to="/vendor">Join as Vendor</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center lg:justify-start justify-center gap-2 text-sm">
                <PhoneCall className="h-4 w-4" />
                <span>24/7 Emergency Support: +91 7305379241</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
              <Tilt className="max-w-[640px] mx-auto">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-background/40 backdrop-blur will-change-transform">
                 <img src="/repair.jpg" alt="Device repair" className="w-full h-auto object-cover" />

                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional repair services for all your devices with transparent pricing and quick turnaround
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>


      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-sm md:text-base opacity-90">Verified Technicians</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-sm md:text-base opacity-90">Repair Success Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-sm md:text-base opacity-90">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2000+</div>
              <div className="text-sm md:text-base opacity-90">Devices Repaired</div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground">Real experiences from satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Fix Your Device?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get your device repaired by verified professionals with transparent pricing and 30-day warranty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/book-repair">Book Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;






