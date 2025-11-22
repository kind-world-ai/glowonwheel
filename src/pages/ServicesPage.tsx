import { Scissors } from 'lucide-react';
import { services } from '../data';
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from '../components/SEO';
import { SEO_DATA, WHATSAPP_NUMBER } from '../constants';

export function ServicesPage() {
    const handleBook = (serviceName: string) => {
        const message = `Hi! I want to book an appointment for: ${serviceName}`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    return (
        <div className="pb-24 pt-6 px-4 bg-background min-h-screen transition-colors duration-300">
            <SEO
                title={SEO_DATA.services.title}
                description={SEO_DATA.services.description}
                keywords={SEO_DATA.services.keywords}
                path="/services"
            />
            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shadow-sm text-primary border border-primary/20">
                    <Scissors size={24} />
                </div>
                <div>
                    <h1 className="font-bold text-2xl text-foreground leading-none mb-1">Home Salon</h1>
                    <p className="text-sm text-muted-foreground">Professional service at your doorstep</p>
                </div>
            </div>

            <div className="space-y-8">
                {Object.entries(
                    services.reduce((acc, service) => {
                        const category = service.category || "Other";
                        if (!acc[category]) acc[category] = [];
                        acc[category].push(service);
                        return acc;
                    }, {} as Record<string, typeof services>)
                ).map(([category, categoryServices]) => (
                    <div key={category}>
                        <h2 className="text-lg font-semibold text-primary mb-3 border-b border-border/50 pb-1">{category}</h2>
                        <div className="space-y-3">
                            {categoryServices.map(service => (
                                <Card key={service.id} className="hover:shadow-md transition-shadow">
                                    <CardContent className="p-4 flex justify-between items-center">
                                        <div>
                                            <CardTitle className="text-base">{service.name}</CardTitle>
                                            <CardDescription className="text-xs">{service.desc}</CardDescription>
                                        </div>
                                        <div className="text-right flex flex-col items-end gap-1">
                                            <div className="font-bold text-amber-500 text-base">₹{service.price}</div>
                                            <Button
                                                onClick={() => handleBook(service.name)}
                                                size="sm"
                                                className="h-8 text-xs"
                                            >
                                                Book
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Card className="mt-8 bg-secondary/50">
                <CardContent className="p-4 text-center">
                    <p className="text-xs text-muted-foreground">
                        Note: Prices may vary based on distance and specific requirements.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
