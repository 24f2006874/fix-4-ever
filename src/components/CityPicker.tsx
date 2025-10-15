import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";

type CityPickerProps = {
  value?: string;
  onSelect: (city: string) => void;
  triggerClassName?: string;
};

const popularCities = [
  "Mumbai",
  "Delhi-NCR",
  "Bengaluru",
  "Hyderabad",
  "Patna",
  "Ahmedabad",
  "Chandigarh",
  "Pune",
  "Chennai",
  "Kolkata",
  "Kochi",
];

// Optional images for cities. Put files in public/cities/<slug>.jpg|png
const cityToImage: Record<string, string> = {
  Mumbai: "/cities/mumbai.jpg",
  "Delhi-NCR": "/cities/delhi.jpg",
  Bengaluru: "/cities/bengaluru.jpg",
  Hyderabad: "/cities/hyderabad.jpg",
  "Patna": "/cities/patna.jpg",
  Ahmedabad: "/cities/ahmedabad.jpg",
  Chandigarh: "/cities/chandigarh.jpg",
  Pune: "/cities/pune.jpg",
  Chennai: "/cities/chennai.jpg",
  Kolkata: "/cities/kolkata.jpg",
  Kochi: "/cities/kochi.jpg",
};
const fallbackImage = "/placeholder.svg";

const allCities = Array.from(new Set([
  ...popularCities,
  "Jaipur",
  "Lucknow",
  "Indore",
  "Bhopal",
  "Surat",
  "Nagpur",
  "Visakhapatnam",
  "Patna",
  "Vadodara",
  "Noida",
  "Gurgaon",
  "Thane",
  "Coimbatore",
  "Madurai",
  "Mysuru",
]));

export function CityPicker({ value, onSelect, triggerClassName }: CityPickerProps) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    if (!q) return allCities;
    return allCities.filter((c) => c.toLowerCase().includes(q.toLowerCase()));
  }, [q]);

  const detectLocation = async () => {
    if (!navigator.geolocation) return;
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );
      const { latitude, longitude } = position.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      const res = await fetch(url, { headers: { "Accept": "application/json" } });
      const data = await res.json();
      const city = data?.address?.city || data?.address?.town || data?.address?.village || data?.address?.state_district || data?.address?.state;
      if (city) {
        onSelect(city);
        setOpen(false);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("Failed to detect location", e);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className={triggerClassName || "w-full md:w-auto"}>
          <MapPin className="h-4 w-4 mr-2" />
          {value ? value : "Select your city"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Select your city</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for your city"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="pl-9"
            />
          </div>

          <Button variant="ghost" className="w-full justify-start" onClick={detectLocation}>
            <MapPin className="h-4 w-4 mr-2" /> Detect my location
          </Button>

          <div>
            <div className="text-sm text-muted-foreground mb-3">Popular Cities</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {popularCities.map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    onSelect(city);
                    setOpen(false);
                  }}
                  className="border rounded-lg p-3 text-sm hover:bg-muted flex flex-col items-center"
                >
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-md mb-2 bg-muted">
                    <img
                      src={cityToImage[city] || fallbackImage}
                      alt={city}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = fallbackImage;
                      }}
                    />
                  </div>
                  <span className="mt-auto">{city}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground mb-3">All Cities</div>
            <div className="max-h-60 overflow-auto border rounded-md">
              {filtered.map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    onSelect(city);
                    setOpen(false);
                  }}
                  className="w-full text-left py-2 px-3 hover:bg-muted text-sm border-b last:border-b-0"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CityPicker;


