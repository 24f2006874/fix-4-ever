import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Laptop } from "lucide-react";

const BookRepair = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [location, setLocation] = useState("");
  const [brand, setBrand] = useState("");

  const cities = [
    "Bangalore",
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

  const handleFindHelp = () => {
    // Handle form submission
    console.log({ selectedCity, location, brand });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gradient-to-b from-background to-muted/30">
        {/* City Selection Section */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center mb-8">Select Your City</h1>
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                    selectedCity === city
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {city}
                </button>
              ))}
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
