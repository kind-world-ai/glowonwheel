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
                            <CardDescription>Sector 124, Mohali</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video bg-muted rounded-xl mb-4 overflow-hidden relative flex items-center justify-center border border-border">
                        <span className="text-muted-foreground text-sm">Map View Placeholder</span>
                        {/* In a real app, embed Google Maps iframe here */}
                    </div>
                    <Button
                        asChild
                        className="w-full"
                        variant="secondary"
                    >
                        <a
                            href="https://maps.google.com/?q=Sector+124+Mohali"
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
                        <p className="text-xs text-muted-foreground">5:30 PM - 9:30 PM</p>
                        <p className="text-[10px] text-muted-foreground/70 mt-1">Daily Evening</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm">
                    <CardContent className="p-4">
                        <Phone className="text-green-500 mb-2" size={20} />
                        <h4 className="font-bold text-card-foreground text-sm">Contact</h4>
                        <p className="text-xs text-muted-foreground">+91 98765 43210</p>
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
