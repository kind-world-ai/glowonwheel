import { Sparkles, Clock, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEO } from '../components/SEO';
import { SEO_DATA, openWhatsApp } from '../constants';

export function HowToPage() {
    const tips = [
        {
            title: "5-Minute Party Look",
            duration: "5 min",
            steps: [
                "Cleanse face with rose water",
                "Apply moisturizer + sunscreen",
                "Use concealer on spots",
                "Apply kajal & lipstick",
                "Set with compact powder"
            ]
        },
        {
            title: "Why Organic Makeup?",
            duration: "Read",
            steps: [
                "No harsh chemicals",
                "Better for sensitive skin",
                "Natural glow finish",
                "Eco-friendly packaging"
            ]
        }
    ];

    return (
        <div className="pb-24 pt-24 px-4 bg-background min-h-screen transition-colors duration-300">
            <SEO
                title={SEO_DATA.howto.title}
                description={SEO_DATA.howto.description}
                keywords={SEO_DATA.howto.keywords}
                path="/howto"
            />
            <h1 className="font-bold text-2xl text-foreground mb-6 flex items-center gap-2">
                <Sparkles className="text-amber-500" />
                Beauty Tips
            </h1>

            <div className="space-y-6">
                {tips.map((tip, idx) => (
                    <Card key={idx} className="shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-lg">{tip.title}</CardTitle>
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    <Clock size={12} /> {tip.duration}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {tip.steps.map((step, sIdx) => (
                                    <li key={sIdx} className="flex items-start gap-3 text-sm text-muted-foreground">
                                        <div className="mt-0.5 min-w-[16px]">
                                            <Check size={16} className="text-green-500" />
                                        </div>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-8 text-center">
                <p className="text-muted-foreground text-sm mb-2">Want to learn more?</p>
                <Button
                    variant="link"
                    className="text-amber-500 hover:text-amber-600"
                    onClick={() => openWhatsApp('Hi! I have a beauty question.')}
                >
                    Ask on WhatsApp
                </Button>
            </div>
        </div>
    );
}
