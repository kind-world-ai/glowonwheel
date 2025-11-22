import { SEO } from '../components/SEO';
import { SEO_DATA, BUSINESS_NAME, BUSINESS_EMAIL } from '../constants';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="bg-background text-foreground min-h-screen py-8 px-4">
      <SEO
        title={SEO_DATA.privacy.title}
        description={SEO_DATA.privacy.description}
        keywords={SEO_DATA.privacy.keywords}
        path="/privacy"
      />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold font-serif">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">Last updated: November 2025</p>
        </div>

        <Card className="border-border">
          <CardContent className="p-6 space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                At {BUSINESS_NAME}, we collect information you provide directly to us when you:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Contact us via WhatsApp or phone</li>
                <li>Book our salon services</li>
                <li>Purchase products from our stall</li>
                <li>Subscribe to our updates</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                This may include your name, phone number, address, and service preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Provide and improve our services</li>
                <li>Process your bookings and orders</li>
                <li>Communicate with you about appointments</li>
                <li>Send promotional offers (with your consent)</li>
                <li>Respond to your inquiries</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties.
                We may share your information only when necessary to provide our services
                (e.g., with delivery partners for product orders).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information.
                However, no method of transmission over the Internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of promotional communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">6. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses local storage to remember your cart items and preferences.
                This data is stored only on your device and is not transmitted to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href={`mailto:${BUSINESS_EMAIL}`} className="text-primary hover:underline">
                  {BUSINESS_EMAIL}
                </a>
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
