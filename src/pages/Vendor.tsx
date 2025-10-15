import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wrench, DollarSign, Calendar, Award, TrendingUp, Users } from "lucide-react";
import { toast } from "sonner";

const Vendor = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    experience: "",
    expertise: [] as string[],
    about: "",
  });

  const expertiseOptions = [
    "Laptop Repair",
    "Phone Repair",
    "Desktop Repair",
    "Software Installation",
    "Hardware Upgrade",
    "Data Recovery",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted! We'll contact you soon.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      experience: "",
      expertise: [],
      about: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExpertiseToggle = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      expertise: prev.expertise.includes(item)
        ? prev.expertise.filter((e) => e !== item)
        : [...prev.expertise, item],
    }));
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Earn More",
      description: "Competitive rates and regular work opportunities to maximize your income",
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Work on your own schedule and choose jobs that fit your availability",
    },
    {
      icon: Users,
      title: "Growing Network",
      description: "Join a community of skilled technicians and expand your professional network",
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Access training programs and certifications to enhance your skills",
    },
    {
      icon: TrendingUp,
      title: "Business Support",
      description: "Get marketing support and customer leads to grow your repair business",
    },
    {
      icon: Wrench,
      title: "Quality Tools",
      description: "Access to professional tools and genuine spare parts at competitive prices",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Become a Fix4Ever Partner</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Join India's fastest-growing repair network and grow your business with us
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Fix4Ever?</h2>
            <p className="text-muted-foreground">
              Partner with us and take your repair business to the next level
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-sm md:text-base opacity-90">Active Technicians</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2000+</div>
              <div className="text-sm md:text-base opacity-90">Jobs Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-sm md:text-base opacity-90">Cities</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.8/5</div>
              <div className="text-sm md:text-base opacity-90">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Who Can Join?</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-success/10 rounded-full mt-1">
                      <Award className="h-4 w-4 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Experience</h3>
                      <p className="text-muted-foreground text-sm">
                        Minimum 1 year of experience in device repair (laptop, phone, or desktop)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-success/10 rounded-full mt-1">
                      <Award className="h-4 w-4 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Skills</h3>
                      <p className="text-muted-foreground text-sm">
                        Expertise in hardware repair, software troubleshooting, or both
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-success/10 rounded-full mt-1">
                      <Award className="h-4 w-4 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Documentation</h3>
                      <p className="text-muted-foreground text-sm">
                        Valid ID proof and any relevant certifications (optional but preferred)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-success/10 rounded-full mt-1">
                      <Award className="h-4 w-4 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Tools</h3>
                      <p className="text-muted-foreground text-sm">
                        Basic repair tools and equipment (we can help you source professional tools)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-success/10 rounded-full mt-1">
                      <Award className="h-4 w-4 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Commitment</h3>
                      <p className="text-muted-foreground text-sm">
                        Dedication to quality service and customer satisfaction
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply Now</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24-48 hours
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium mb-2">
                        City *
                      </label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Your city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium mb-2">
                        Years of Experience *
                      </label>
                      <Input
                        id="experience"
                        name="experience"
                        type="text"
                        placeholder="e.g., 3 years"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3">Areas of Expertise *</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {expertiseOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={option}
                            checked={formData.expertise.includes(option)}
                            onCheckedChange={() => handleExpertiseToggle(option)}
                          />
                          <label
                            htmlFor={option}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="about" className="block text-sm font-medium mb-2">
                      Tell Us About Yourself *
                    </label>
                    <Textarea
                      id="about"
                      name="about"
                      placeholder="Describe your experience, skills, and why you want to join Fix4Ever..."
                      value={formData.about}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
          <p className="text-muted-foreground mb-6">
            Contact our vendor support team for any queries about the partnership program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="tel:+917305379241">Call: +91 7305379241</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:support@fix4ever.com">Email: support@fix4ever.com</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vendor;
