import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Award, Users, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: TrendingUp,
      title: "Affordability",
      description: "Quality repairs at prices everyone can afford without compromising on service standards",
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "No hidden costs, clear pricing, and honest communication throughout the repair process",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Using the latest tools and techniques to provide cutting-edge repair solutions",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Building a trusted network that serves and empowers both customers and technicians",
    },
  ];

  const achievements = [
    { number: "100+", label: "Verified Technicians" },
    { number: "98%", label: "Repair Success Rate" },
    { number: "10+", label: "Cities Covered" },
    { number: "2,000+", label: "Devices Repaired" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            From IIT Madras to India's Trusted Repair Network
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2024, Fix4Ever emerged from the innovation ecosystem of IIT Madras with a clear mission: to
                make device repair accessible, affordable, and transparent for everyone across India.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Started by Karan Singh, an IIT Madras engineering student, and led by Rahul Kumar Gupta as Founder &
                CEO, our team recognized the challenges people face when their devices break down — unclear pricing,
                unreliable service, and lack of trustworthy technicians.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, Fix4Ever connects customers with verified, skilled technicians across multiple cities, offering
                repairs for laptops, phones, and desktops with transparent pricing and a 30-day warranty on all
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
            <p className="text-muted-foreground">Driven by passion and innovation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">Rahul Kumar Gupta</CardTitle>
                <p className="text-muted-foreground">Founder & CEO</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Visionary leader driving Fix4Ever's mission to revolutionize device repair across India
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">Karan Singh</CardTitle>
                <p className="text-muted-foreground">CTO & Co-Founder</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  IIT Madras engineer bringing technical excellence and innovation to our platform
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide affordable, reliable, and transparent tech repair services that empower individuals and
                  businesses to keep their devices running smoothly without breaking the bank.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To make device repair accessible and standardized across India, creating a trusted network of skilled
                  technicians and satisfied customers nationwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg opacity-90">Building trust, one repair at a time</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-sm md:text-base opacity-90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto text-center bg-gradient-card border-border/50">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Incubated at IIT Madras</h3>
              <p className="text-muted-foreground mb-4">
                Fix4Ever is proudly part of the IIT Madras innovation ecosystem, operating from Nirmaan, the premier
                incubation center at IIT Madras.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Location:</strong> Nirmaan, IIT Madras, Chennai, Tamil Nadu, India – 600036
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
