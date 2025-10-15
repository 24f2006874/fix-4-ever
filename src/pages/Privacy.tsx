import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg opacity-90">Last updated: 2024</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="text-muted-foreground">
                    Fix4Ever ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
                    how we collect, use, disclose, and safeguard your information when you use our device repair
                    marketplace services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                  <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                  <p className="text-muted-foreground mb-4">
                    We may collect personal information that you provide to us, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Address for service delivery</li>
                    <li>Device information (make, model, issue description)</li>
                    <li>Payment information</li>
                    <li>Service history and repair records</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Provide, operate, and maintain our repair services</li>
                    <li>Connect you with verified technicians</li>
                    <li>Process your bookings and payments</li>
                    <li>Send you service updates and warranty information</li>
                    <li>Improve our services and customer experience</li>
                    <li>Respond to your inquiries and support requests</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                  <p className="text-muted-foreground">
                    We may share your information with verified technicians necessary to complete your repair service.
                    We do not sell your personal information to third parties. We may share information with service
                    providers who assist us in operating our platform, conducting our business, or serving our customers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational security measures to protect your personal
                    information. However, no method of transmission over the internet or electronic storage is 100%
                    secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                  <p className="text-muted-foreground mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Lodge a complaint with data protection authorities</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                  <p className="text-muted-foreground">
                    We use cookies and similar tracking technologies to track activity on our service and hold certain
                    information. You can instruct your browser to refuse all cookies or to indicate when a cookie is
                    being sent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="mt-4 space-y-2 text-muted-foreground">
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

export default Privacy;
