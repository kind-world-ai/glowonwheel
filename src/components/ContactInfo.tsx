import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { BUSINESS_PHONE, getWhatsAppUrl } from '../constants';

export const ContactInfo = () => {
    return (
        <div className="flex flex-col gap-4 p-6 bg-card rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold text-primary">Contact Us</h3>

            <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href={`tel:${BUSINESS_PHONE}`} className="hover:text-primary font-medium transition-colors">
                        +91 84370 85459
                    </a>
                </div>

                <div className="flex items-center gap-3 text-foreground">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary font-medium transition-colors"
                    >
                        Chat on WhatsApp
                    </a>
                </div>

                <div className="flex items-start gap-3 text-foreground">
                    <MapPin className="w-5 h-5 mt-1 text-primary" />
                    <div>
                        <p className="font-medium">Operating Areas:</p>
                        <p className="text-sm text-muted-foreground">
                            Mohali, Chandigarh, and Kharar.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <a
                    href={getWhatsAppUrl("Hi, I'm interested in your services!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-center font-bold py-3 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
                >
                    <MessageCircle size={20} />
                    Book Appointment
                </a>
            </div>
        </div>
    );
};
