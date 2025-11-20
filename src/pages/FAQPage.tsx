import { MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FAQPage() {
    return (
        <div className="pb-24 pt-6 px-4 bg-background min-h-screen transition-colors duration-300">
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.9466329337!2d76.65976537624166!3d30.75734377457266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff01f1f01e4f9%3A0x2469a1043a14406c!2sSector%20124%2C%20Sunny%20Enclave%2C%20Kharar%2C%20Punjab%20140301!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <Button
                        asChild
                        className="w-full"
                        variant="secondary"
                    >
                        <a
                            href="https://www.google.com/maps/place/Sector+124,+Sunny+Enclave,+Kharar,+Punjab+140301/@30.7567386,76.6591099,17z/data=!3m1!4b1!4m6!3m5!1s0x390ff01f1f01e4f9:0x2469a1043a14406c!8m2!3d30.7573438!4d76.6623403!16s%2Fg%2F11by_gm3b2?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
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
                                <p className="text-[10px] font-semibold text-muted-foreground">Stall on Wheels</p>
                                <p className="text-xs text-amber-600 font-medium">5:00 PM Onwards</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm">
                    <CardContent className="p-4">
                        <Phone className="text-green-500 mb-2" size={20} />
                        <h4 className="font-bold text-card-foreground text-sm">Contact</h4>
                        <p className="text-xs text-muted-foreground">+91 84370 85459</p>
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
