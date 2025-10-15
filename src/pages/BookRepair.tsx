import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Laptop, User, Phone } from "lucide-react";
import CityPicker from "@/components/CityPicker";

const BookRepair = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [location, setLocation] = useState("");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");

  const cities = [
    "Bangaluru",
    "Chennai",
    "Delhi",
    "Mumbai",
    "Hyderabad",
    "Pune",
    "Kolkata",
    "Gurgaon",
    "Noida",
    "Ahmedabad",
  ];

  const laptopBrands = [
    "HP",
    "Dell",
    "Lenovo",
    "Asus",
    "Acer",
    "Apple",
    "MSI",
    "Samsung",
    "Toshiba",
    "Sony",
    "Other",
  ];

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
        },
        (error) => {
          console.error("Error detecting location:", error);
        }
      );
    }
  };

  const handleFindHelp = async () => {
    if (!name || !phone) {
      // eslint-disable-next-line no-alert
      alert("Please enter your name and phone number");
      return;
    }
    // Minimal booking payload using available fields on this page
    const payload = {
      name,
      phone,
      city: selectedCity || undefined,
      location: location || undefined,
      brand: brand || undefined,
      deviceType: brand ? "Laptop" : "Device",
      issueDescription: issue || "Quick booking from BookRepair page",
    };
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to create booking");
      setSelectedCity("");
      setLocation("");
      setBrand("");
      setName("");
      setPhone("");
      setIssue("");
      // Optionally route to a success page or show toast
      // eslint-disable-next-line no-alert
      alert("Booking created! Our team will reach out shortly.");
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert("Unable to create booking. Please try again.");
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gradient-to-b from-background to-muted/30">
        {/* City Selection Section */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h1 className="text-3xl font-bold">Select Your City</h1>
            <div className="flex justify-center">
              <CityPicker
                value={selectedCity}
                onSelect={(city) => {
                  setSelectedCity(city);
                  setLocation(city);
                }}
              />
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto shadow-xl border-border/50">
              <CardContent className="p-8 md:p-12 space-y-6">
                {/* Location Input */}
                <div className="space-y-2">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Your location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10 h-12"
                    />
                    <Button
                      variant="link"
                      onClick={handleDetectLocation}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-primary"
                    >
                      Detect location
                    </Button>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10 h-12"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="Your phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10 h-12"
                      required
                    />
                  </div>
                </div>

                {/* Brand Selection */}
                <div className="space-y-2">
                  <Select value={brand} onValueChange={setBrand}>
                    <SelectTrigger className="h-12">
                      <div className="flex items-center gap-2">
                        <Laptop className="h-5 w-5 text-muted-foreground" />
                        <SelectValue placeholder="Select your laptop brand" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {laptopBrands.map((laptopBrand) => (
                        <SelectItem key={laptopBrand} value={laptopBrand}>
                          {laptopBrand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Issue */}
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Briefly describe the issue"
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    className="h-12"
                    required
                  />
                </div>

                {/* Find Help Button */}
                <Button
                  onClick={handleFindHelp}
                  className="w-full h-14 text-lg font-semibold"
                  size="lg"
                >
                  Find Help Now
                </Button>

                {/* Alternative Option */}
                <div className="text-center">
                  <p className="text-muted-foreground">
                    Or{" "}
                    <Link to="/contact" className="text-primary hover:underline font-medium">
                      create a service request directly
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookRepair;
