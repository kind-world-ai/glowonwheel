import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { SEO } from '../components/SEO';
import { SEO_DATA, openWhatsApp } from '../constants';
import { useNavigate } from 'react-router-dom';

type Category = 'all' | 'facial' | 'makeup' | 'hair';

const categories: { value: Category; label: string; icon: string }[] = [
    { value: 'all', label: 'All', icon: '✨' },
    { value: 'facial', label: 'Facial', icon: '🌟' },
    { value: 'makeup', label: 'Makeup', icon: '💄' },
    { value: 'hair', label: 'Hair', icon: '💇' }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function BeforeAfterPage() {
    const [selectedCategory, setSelectedCategory] = useState<Category>('all');
    const navigate = useNavigate();

    const filteredItems = selectedCategory === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    const handleBookService = (serviceName: string) => {
        openWhatsApp(`Hi! I saw the ${serviceName} transformation in your gallery. I'd like to book this service!`);
    };

    return (
        <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
            <SEO
                title={SEO_DATA.gallery?.title || "Before & After Gallery - Glow on Wheel"}
                description={SEO_DATA.gallery?.description || "See stunning before & after transformations from our facial, makeup, and hair services in Mohali. Real results from real clients."}
                keywords={SEO_DATA.gallery?.keywords || "before after, facial transformation, makeup before after, hair styling, beauty salon Mohali"}
                path="/gallery"
            />

            {/* Hero Section */}
            <div className="relative pt-28 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Badge className="bg-mustard text-olive-dark hover:bg-mustard/90 mb-4 px-4 py-1">
                            <Sparkles size={14} className="mr-1" />
                            TRANSFORMATION GALLERY
                        </Badge>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif"
                    >
                        See the Transformation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
                    >
                        Real results from real clients. Discover the magic of our professional facial, makeup, and hair services.
                    </motion.p>

                    {/* Category Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-2 mb-8"
                    >
                        {categories.map((cat) => (
                            <Button
                                key={cat.value}
                                variant={selectedCategory === cat.value ? 'default' : 'outline'}
                                onClick={() => setSelectedCategory(cat.value)}
                                className={selectedCategory === cat.value
                                    ? 'bg-primary text-primary-foreground'
                                    : 'border-border hover:bg-muted'
                                }
                            >
                                <span className="mr-2">{cat.icon}</span>
                                {cat.label}
                            </Button>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredItems.map((galleryItem) => (
                            <motion.div key={galleryItem.id} variants={item}>
                                <Card className="overflow-hidden hover:shadow-lg transition-shadow border-border bg-card">
                                    <CardContent className="p-0">
                                        {/* Before/After Slider */}
                                        <BeforeAfterSlider
                                            beforeImage={galleryItem.beforeImage}
                                            afterImage={galleryItem.afterImage}
                                            alt={galleryItem.title}
                                        />

                                        {/* Info Section */}
                                        <div className="p-4">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="font-bold text-foreground text-lg leading-tight">
                                                    {galleryItem.title}
                                                </h3>
                                                <Badge variant="secondary" className="text-xs ml-2 flex-shrink-0">
                                                    {galleryItem.category}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                                {galleryItem.description}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-medium text-primary">
                                                    Service: {galleryItem.service}
                                                </span>
                                                <Button
                                                    size="sm"
                                                    onClick={() => handleBookService(galleryItem.service)}
                                                    className="bg-primary hover:bg-primary/90 text-primary-foreground h-8"
                                                >
                                                    Book Now
                                                    <ArrowRight size={14} className="ml-1" />
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Empty State */}
                    {filteredItems.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-muted-foreground text-lg">
                                No transformations found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 px-4 bg-muted/30">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">
                        Ready for Your Transformation?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Book your appointment today and experience the Glow on Wheel difference.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Button
                            size="lg"
                            onClick={() => navigate('/services')}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                            View Services
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => openWhatsApp('Hi! I want to book a service after seeing your gallery.')}
                            className="border-primary text-primary hover:bg-primary/10"
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
