import { MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from '../components/SEO';
import { SEO_DATA, BUSINESS_PHONE, GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_DIRECTIONS_URL } from '../constants';

export function FAQPage() {
    return (
        <div className="pb-24 pt-6 px-4 bg-background min-h-screen transition-colors duration-300">
            <SEO
                title={SEO_DATA.faq.title}
                description={SEO_DATA.faq.description}
                keywords={SEO_DATA.faq.keywords}
                path="/faq"
            />
            <h1 className="font-bold text-2xl text-foreground mb-6">Info & Location</h1>

            {/* Location Card */}
            <Card className="mb-6 shadow-sm">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-amber-500 border border-border">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <CardTitle>Visit Us</CardTitle>
                            <CardDescription>Sector 124, Sunny Enclave, Kharar</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video bg-muted rounded-xl mb-4 overflow-hidden relative flex items-center justify-center border border-border">
                        <iframe
                            src={GOOGLE_MAPS_EMBED_URL}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Glow on Wheel Location"
                        ></iframe>
                    </div>
                    <Button
                        asChild
                        className="w-full"
                        variant="secondary"
                    >
                        <a
                            href={GOOGLE_MAPS_DIRECTIONS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get Directions
                        </a>
                    </Button>
                </CardContent>
            </Card>

            {/* Contact & Hours */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <Card className="shadow-sm">
                    <CardContent className="p-4">
                        <Clock className="text-amber-500 mb-2" size={20} />
                        <h4 className="font-bold text-card-foreground text-sm">Open Hours</h4>
                        <div className="mt-1 space-y-1">
                            <div>
                                <p className="text-[10px] font-semibold text-muted-foreground">Home Salon</p>
                                <p className="text-xs">9:00 AM - 5:00 PM</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-semibold text-muted-foreground">Stall on Wheel</p>
                                <p className="text-xs text-amber-600 font-medium">5:00 PM Onwards</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm">
                    <CardContent className="p-4">
                        <Phone className="text-green-500 mb-2" size={20} />
                        <h4 className="font-bold text-card-foreground text-sm">Contact</h4>
                        <a href={`tel:${BUSINESS_PHONE}`} className="text-xs text-muted-foreground hover:text-primary">
                            +91 84370 85459
                        </a>
                        <p className="text-[10px] text-muted-foreground/70 mt-1">Call / WhatsApp</p>
                    </CardContent>
                </Card>
            </div>

            {/* Trust Badges */}
            <Card className="bg-gradient-to-r from-secondary to-secondary/50 shadow-sm">
                <CardContent className="p-4 flex items-center gap-4">
                    <ShieldCheck size={32} className="text-green-500 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-foreground text-sm">Safe & Hygienic</h4>
                        <p className="text-xs text-muted-foreground">Sanitized products & contactless payment available.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
