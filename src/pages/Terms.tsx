import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg opacity-90">Last updated: 2024</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing or using Fix4Ever's services, you agree to be bound by these Terms of Service. If you
                    do not agree to these terms, please do not use our services. These terms apply to all users of the
                    service, including customers and technicians.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Service Description</h2>
                  <p className="text-muted-foreground">
                    Fix4Ever operates as a marketplace platform connecting customers who need device repair services
                    with verified technicians. We provide the platform but do not directly perform repair services. All
                    repairs are conducted by independent technicians in our network.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Booking and Payment</h2>
                  <h3 className="text-xl font-semibold mb-2">Service Booking</h3>
                  <p className="text-muted-foreground mb-4">
                    When you book a repair service through Fix4Ever, you enter into a service agreement with the assigned
                    technician. Pricing is provided upfront and may vary based on device type, issue complexity, and
                    parts required.
                  </p>
                  <h3 className="text-xl font-semibold mb-2">Payment Terms</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Payment is due upon completion of service</li>
                    <li>We accept multiple payment methods including UPI, cards, and digital wallets</li>
                    <li>Diagnostic fees (if applicable) are separate from repair costs</li>
                    <li>All prices are in Indian Rupees (INR)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Warranty and Service Guarantee</h2>
                  <p className="text-muted-foreground mb-4">
                    Fix4Ever provides a 30-day warranty on all repairs, covering:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Defects in workmanship</li>
                    <li>Failure of replaced parts</li>
                    <li>Issues directly related to the original repair</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    The warranty does not cover damage caused by misuse, accidents, or unauthorized modifications after
                    the repair.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
                  <h3 className="text-xl font-semibold mb-2">Customers Must:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Provide accurate information about the device and issue</li>
                    <li>Back up important data before service (we are not liable for data loss)</li>
                    <li>Remove passwords, locks, and security features</li>
                    <li>Be available at the scheduled service time</li>
                    <li>Make payment as agreed</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Cancellation and Refunds</h2>
                  <h3 className="text-xl font-semibold mb-2">Cancellation Policy</h3>
                  <p className="text-muted-foreground mb-4">
                    Customers may cancel bookings up to 2 hours before the scheduled service time without penalty.
                    Cancellations made less than 2 hours before service may incur a cancellation fee.
                  </p>
                  <h3 className="text-xl font-semibold mb-2">Refund Policy</h3>
                  <p className="text-muted-foreground">
                    Refunds are processed on a case-by-case basis. If a repair cannot be completed as agreed, you may be
                    eligible for a full refund. Refunds typically process within 5-7 business days.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    Fix4Ever acts as an intermediary platform. While we verify our technicians, we are not liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                    <li>Data loss during repair</li>
                    <li>Damage caused by pre-existing conditions</li>
                    <li>Issues unrelated to the original repair</li>
                    <li>Delays beyond our reasonable control</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Technician Terms</h2>
                  <p className="text-muted-foreground mb-4">
                    Technicians using the Fix4Ever platform agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Maintain professional standards and certifications</li>
                    <li>Honor the 30-day warranty on all repairs</li>
                    <li>Use genuine or quality-assured replacement parts</li>
                    <li>Maintain customer confidentiality</li>
                    <li>Complete repairs in a timely manner</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
                  <p className="text-muted-foreground">
                    In case of disputes, customers should first contact Fix4Ever support. We will mediate between
                    customers and technicians to reach a fair resolution. If mediation fails, disputes will be resolved
                    through arbitration in Chennai, Tamil Nadu, India.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                    posting. Continued use of our services after changes constitutes acceptance of the modified terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground mb-4">
                    For questions about these Terms of Service, contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong>FixForever Internet Private Limited</strong>
                    </p>
                    <p>Email: support@fix4ever.com</p>
                    <p>Phone: +91 7305379241</p>
                    <p>Address: Nirmaan, IIT Madras, Chennai, Tamil Nadu - 600036</p>
                  </div>
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

export default Terms;
