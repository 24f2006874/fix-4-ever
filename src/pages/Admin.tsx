import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

interface Booking {
  id: string;
  name: string;
  phone: string;
  email?: string;
  city?: string;
  location?: string;
  brand?: string;
  deviceType: string;
  issueDescription: string;
  preferredDate?: string;
  createdAt: string;
}

interface VendorApplication {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  experience: string;
  expertise: string; // comma separated
  about: string;
  createdAt: string;
}

const Admin = () => {
  const { data: bookings, isLoading: loadingBookings, error: bookingsError } = useQuery<Booking[]>({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch("/api/bookings");
      if (!res.ok) throw new Error("Failed to load bookings");
      return res.json();
    },
  });

  const { data: vendors, isLoading: loadingVendors, error: vendorsError } = useQuery<VendorApplication[]>({
    queryKey: ["vendors"],
    queryFn: async () => {
      const res = await fetch("/api/vendors");
      if (!res.ok) throw new Error("Failed to load vendors");
      return res.json();
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-background">
        <section className="py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <h1 className="text-2xl font-bold mb-4">Bookings</h1>
              <Card>
                <CardContent className="p-0 overflow-x-auto">
                  {loadingBookings ? (
                    <div className="p-6">Loading...</div>
                  ) : bookingsError ? (
                    <div className="p-6 text-destructive">Failed to load bookings</div>
                  ) : (
                    <table className="w-full text-sm">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="text-left p-3 whitespace-nowrap">Created</th>
                          <th className="text-left p-3 whitespace-nowrap">Name</th>
                          <th className="text-left p-3 whitespace-nowrap">Phone</th>
                          <th className="text-left p-3 whitespace-nowrap">Device</th>
                          <th className="text-left p-3 whitespace-nowrap">Issue</th>
                          <th className="text-left p-3 whitespace-nowrap">City</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings?.map((b) => (
                          <tr key={b.id} className="border-b last:border-b-0">
                            <td className="p-3 whitespace-nowrap">{new Date(b.createdAt).toLocaleString()}</td>
                            <td className="p-3 whitespace-nowrap">{b.name}</td>
                            <td className="p-3 whitespace-nowrap">{b.phone}</td>
                            <td className="p-3 whitespace-nowrap">{b.deviceType}</td>
                            <td className="p-3 max-w-[320px] truncate" title={b.issueDescription}>{b.issueDescription}</td>
                            <td className="p-3 whitespace-nowrap">{b.city || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Vendor Applications</h2>
              <Card>
                <CardContent className="p-0 overflow-x-auto">
                  {loadingVendors ? (
                    <div className="p-6">Loading...</div>
                  ) : vendorsError ? (
                    <div className="p-6 text-destructive">Failed to load vendors</div>
                  ) : (
                    <table className="w-full text-sm">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="text-left p-3 whitespace-nowrap">Created</th>
                          <th className="text-left p-3 whitespace-nowrap">Name</th>
                          <th className="text-left p-3 whitespace-nowrap">Phone</th>
                          <th className="text-left p-3 whitespace-nowrap">City</th>
                          <th className="text-left p-3 whitespace-nowrap">Experience</th>
                          <th className="text-left p-3 whitespace-nowrap">Expertise</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vendors?.map((v) => (
                          <tr key={v.id} className="border-b last:border-b-0">
                            <td className="p-3 whitespace-nowrap">{new Date(v.createdAt).toLocaleString()}</td>
                            <td className="p-3 whitespace-nowrap">{v.name}</td>
                            <td className="p-3 whitespace-nowrap">{v.phone}</td>
                            <td className="p-3 whitespace-nowrap">{v.city}</td>
                            <td className="p-3 whitespace-nowrap">{v.experience}</td>
                            <td className="p-3 max-w-[320px] truncate" title={v.expertise}>{v.expertise}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
