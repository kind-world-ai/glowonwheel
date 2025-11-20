import { Scissors } from 'lucide-react';
import { services } from '../data';
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServicesPage() {
    const handleBook = (serviceName: string) => {
        const message = `Hi! I want to book an appointment for: ${serviceName}`;
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    return (
        <div className="pb-24 pt-6 px-4 bg-background min-h-screen transition-colors duration-300">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shadow-sm text-primary border border-primary/20">
                    <Scissors size={24} />
                </div>
                <div>
                    <h1 className="font-bold text-2xl text-foreground leading-none mb-1">Home Salon</h1>
                    <p className="text-sm text-muted-foreground">Professional service at your doorstep</p>
                </div>
            </div>

            <div className="space-y-4">
                {services.map(service => (
                    <Card key={service.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-5 flex justify-between items-center">
                            <div>
                                <CardTitle className="text-lg">{service.name}</CardTitle>
                                <CardDescription>{service.desc}</CardDescription>
                            </div>
                            <div className="text-right flex flex-col items-end gap-2">
                                <div className="font-bold text-amber-500 text-lg">₹{service.price}</div>
                                <Button
                                    onClick={() => handleBook(service.name)}
                                    size="sm"
                                >
                                    Book
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
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
