import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Laptop, Smartphone, Monitor, Settings, CheckCircle2, MapPin, Package, Store } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Laptop,
      title: "Laptop Repair",
      description: "Complete laptop repair services",
      services: [
        "Screen replacement & repair",
        "Keyboard & touchpad repair",
        "Battery replacement",
        "Motherboard repair",
        "OS reinstallation & upgrades",
        "Data recovery services",
      ],
    },
    {
      icon: Smartphone,
      title: "Phone Repair",
      description: "Expert mobile device repairs",
      services: [
        "Display & touchscreen replacement",
        "Camera repair & replacement",
        "Charging port repair",
        "Battery replacement",
        "Water damage repair",
        "Software troubleshooting",
      ],
    },
    {
      icon: Monitor,
      title: "Desktop Repair",
      description: "Professional desktop services",
      services: [
        "Hardware diagnostics",
        "Component upgrades (RAM, SSD, GPU)",
        "Virus & malware removal",
        "System optimization",
        "Network troubleshooting",
        "Custom PC building",
      ],
    },
    {
      icon: Settings,
      title: "Software & OS Services",
      description: "Software solutions for all devices",
      services: [
        "Operating system installation",
        "Software updates & patches",
        "Driver installation",
        "System performance tuning",
        "Application troubleshooting",
        "Cloud backup setup",
      ],
    },
  ];

  const serviceOptions = [
    {
      icon: MapPin,
      title: "Onsite Repair",
      description: "Our technician comes to your location for convenient, on-the-spot service",
    },
    {
      icon: Package,
      title: "Pickup & Drop",
      description: "We pick up your device, repair it at our center, and deliver it back to you",
    },
    {
      icon: Store,
      title: "In-Store Repair",
      description: "Visit our service center for immediate assistance and quick turnaround",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Repair Services For All Your Devices</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Professional, affordable, and reliable repair services with 30-day warranty on all repairs
          </p>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Service Option</h2>
            <p className="text-muted-foreground">Flexible service options to suit your convenience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <option.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Transparent Pricing</h3>
              <p className="text-lg mb-6 opacity-90">
                Get instant pricing estimates based on your device and issue. No hidden costs, no surprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Get a Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
                  <a href="tel:+917305379241">Call: +91 7305379241</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Warranty Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Our Commitment to Quality</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-background rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">30 Days</div>
                <div className="text-sm text-muted-foreground">Service Warranty</div>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">1-2 Hours</div>
                <div className="text-sm text-muted-foreground">Average Repair Time</div>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
