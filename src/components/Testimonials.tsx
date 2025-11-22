import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Testimonial {
    id: number;
    name: string;
    text: string;
    rating: number;
    date?: string;
    service?: string;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
    return (
        <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-primary mb-2">What Our Clients Say</h2>
                <p className="text-center text-muted-foreground mb-8">Trusted by 100+ happy customers in Mohali</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-card p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < testimonial.rating
                                                ? 'fill-secondary text-secondary'
                                                : 'fill-muted text-muted'
                                                }`}
                                        />
                                    ))}
                                </div>
                                {testimonial.service && (
                                    <Badge variant="secondary" className="text-xs">
                                        {testimonial.service}
                                    </Badge>
                                )}
                            </div>
                            <p className="text-muted-foreground mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-foreground">- {testimonial.name}</p>
                                {testimonial.date && (
                                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
