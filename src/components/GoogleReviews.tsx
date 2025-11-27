import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Review {
    id: number;
    name: string;
    text: string;
    rating: number;
    date?: string;
    service?: string;
}

interface GoogleReviewsProps {
    reviews: Review[];
}

export const GoogleReviews = ({ reviews }: GoogleReviewsProps) => {
    const googleMapsUrl = "https://maps.app.goo.gl/xjLoxfKSe7fKF3xF7";

    return (
        <section className="py-12 bg-card border-y border-border">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-10 text-center">
                    <div className="flex items-center gap-2 mb-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                            alt="Google"
                            className="w-8 h-8"
                        />
                        <h2 className="text-2xl font-bold text-foreground">Rating</h2>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-4xl font-bold text-foreground">5.0</span>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-[#F4B400] text-[#F4B400]" />
                            ))}
                        </div>
                    </div>

                    <p className="text-muted-foreground mb-6">Based on verified Google Reviews</p>

                    <div className="flex gap-4">
                        <Button
                            variant="outline"
                            onClick={() => window.open(googleMapsUrl, '_blank')}
                            className="border-primary/20 hover:bg-primary/5"
                        >
                            See all reviews
                        </Button>
                        <Button
                            className="bg-[#1a73e8] hover:bg-[#1557b0] text-white"
                            onClick={() => window.open(googleMapsUrl, '_blank')}
                        >
                            Write a review
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {reviews.map((review) => (
                        <Card key={review.id} className="border-border shadow-sm hover:shadow-md transition-shadow bg-card">
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground text-sm">{review.name}</h3>
                                            <p className="text-xs text-muted-foreground">{review.date}</p>
                                        </div>
                                    </div>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                                        alt="Google"
                                        className="w-5 h-5 opacity-50"
                                    />
                                </div>

                                <div className="flex gap-0.5 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating ? 'fill-[#F4B400] text-[#F4B400]' : 'fill-muted text-muted'}`}
                                        />
                                    ))}
                                </div>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                                    "{review.text}"
                                </p>

                                {review.service && (
                                    <p className="text-xs font-medium text-primary mt-2">
                                        Service: {review.service}
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
