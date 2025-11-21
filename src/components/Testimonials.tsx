import { Star } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    text: string;
    rating: number;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
    return (
        <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-primary mb-8">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-card p-6 rounded-lg shadow-md border border-border">
                            <div className="flex gap-1 mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                                ))}
                            </div>
                            <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                            <p className="font-semibold text-foreground">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
