import { SEO } from '../components/SEO';
import { SEO_DATA, BUSINESS_NAME, BUSINESS_EMAIL, VISITING_CHARGE, FREE_VISIT_THRESHOLD } from '../constants';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen py-8 px-4">
      <SEO
        title={SEO_DATA.terms.title}
        description={SEO_DATA.terms.description}
        keywords={SEO_DATA.terms.keywords}
        path="/terms"
      />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold font-serif">Terms of Service</h1>
          <p className="text-muted-foreground mt-2">Last updated: November 2025</p>
        </div>

        <Card className="border-border">
          <CardContent className="p-6 space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-3">1. Service Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {BUSINESS_NAME} provides mobile beauty salon services and sells beauty accessories
                in Mohali and surrounding areas. By using our services, you agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">2. Booking & Appointments</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>All bookings are made via WhatsApp and are subject to availability</li>
                <li>We request at least 2 hours advance notice for bookings</li>
                <li>For cancellations, please inform us at least 1 hour before the appointment</li>
                <li>Repeated no-shows may result in service refusal</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">3. Visiting Charges</h2>
              <p className="text-muted-foreground leading-relaxed">
                A visiting charge of <strong>₹{VISITING_CHARGE}</strong> applies to home salon services
                for orders below <strong>₹{FREE_VISIT_THRESHOLD}</strong>. Orders of ₹{FREE_VISIT_THRESHOLD}
                or above qualify for <strong>free home visits</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">4. Service Area</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our home salon services are currently available in:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Mohali (all sectors)</li>
                <li>Kharar</li>
                <li>Sunny Enclave</li>
                <li>Nearby areas (subject to availability)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">5. Payment Terms</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Payment is due upon completion of service or delivery of products</li>
                <li>We accept cash, UPI, and digital payments</li>
                <li>Prices are subject to change without prior notice</li>
                <li>All prices displayed are in Indian Rupees (₹)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">6. Product Returns & Refunds</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Accessories can be exchanged within 24 hours if unused and in original condition</li>
                <li>Makeup products are non-returnable due to hygiene reasons</li>
                <li>Service refunds are evaluated on a case-by-case basis</li>
                <li>No refunds for completed services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">7. Client Responsibilities</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate address and contact information</li>
                <li>Ensure a clean, well-lit space for salon services</li>
                <li>Inform us of any allergies or skin sensitivities</li>
                <li>Be present at the scheduled time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">8. Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we use quality products and maintain hygiene standards, {BUSINESS_NAME} is
                not liable for allergic reactions or skin sensitivities. We recommend informing
                us of any known allergies before service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">9. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of our
                services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">10. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, contact us at{' '}
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
