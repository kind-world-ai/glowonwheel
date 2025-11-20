import { motion } from 'framer-motion';
import { Sparkles, Plus, ShoppingBag, Scissors, ArrowRight, Brush, Palette, Gem, Footprints, Sun } from 'lucide-react';
import { products, services } from '../data';
import { useOutletContext, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { ProductSlider } from '../components/ProductSlider';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface OutletContextType {
    addToCart: (id: number) => void;
}

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

const getServiceIcon = (name: string) => {
    if (name.toLowerCase().includes('makeup')) return <Brush size={24} className="text-primary" />;
    if (name.toLowerCase().includes('mehendi')) return <Palette size={24} className="text-primary" />;
    if (name.toLowerCase().includes('saree')) return <Gem size={24} className="text-primary" />;
    if (name.toLowerCase().includes('hair')) return <Scissors size={24} className="text-primary" />;
    if (name.toLowerCase().includes('waxing')) return <Sparkles size={24} className="text-primary" />;
    if (name.toLowerCase().includes('facial')) return <Sparkles size={24} className="text-primary" />;
    if (name.toLowerCase().includes('bleach')) return <Sun size={24} className="text-primary" />;
    if (name.toLowerCase().includes('pedicure') || name.toLowerCase().includes('manicure')) return <Footprints size={24} className="text-primary" />;
    return <Scissors size={24} className="text-primary" />;
};

export function HomePage() {
    const { addToCart } = useOutletContext<OutletContextType>();
    const navigate = useNavigate();

    const handleAdd = (id: number, e: React.MouseEvent) => {
        addToCart(id);

        const rect = (e.target as HTMLElement).getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
            particleCount: 30,
            spread: 60,
            origin: { x, y },
            colors: ['#F59E0B', '#EC4899', '#8B5CF6'],
            disableForReducedMotion: true,
            zIndex: 100,
        });
    };

    const handleBookService = (serviceName: string) => {
        const message = `Hi! I want to book an appointment for: ${serviceName}`;
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    };

    const essentialProducts = products.filter(p => p.category === 'Essentials');
    const featuredServices = services.slice(0, 4); // Show first 4 services

    return (
        <div className="pb-24 bg-background text-foreground min-h-screen transition-colors duration-300">
            {/* Hero Section */}
            <div className="relative h-80 overflow-hidden bg-slate-900">
                <img
                    src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800"
                    alt="Shop Setup"
                    className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Badge className="bg-amber-500 text-slate-900 hover:bg-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.5)] mb-2">
                            EVENING SPECIAL
                        </Badge>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold text-foreground mb-1 drop-shadow-lg"
                    >
                        Glow on Wheels
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-sm font-medium"
                    >
                        Your daily stop for beauty & shine.
                    </motion.p>
                </div>
            </div>

            {/* Daily Steals - Product Slider */}
            <div className="py-8 border-b border-border bg-secondary/30 backdrop-blur-sm">
                <div className="flex justify-between items-center px-4 mb-6">
                    <h2 className="font-bold text-xl text-foreground flex items-center gap-2">
                        <Sparkles size={20} className="text-amber-500 animate-pulse" />
                        Daily Steals
                        <Badge variant="secondary" className="text-xs font-normal">
                            ₹20-50
                        </Badge>
                    </h2>
                </div>

                <div className="px-4">
                    <ProductSlider autoScrollInterval={4000}>
                        {essentialProducts.map(product => (
                            <motion.div
                                key={product.id}
                                whileTap={{ scale: 0.98 }}
                                className="px-2"
                            >
                                <Card className="shadow-md group hover:shadow-xl transition-shadow">
                                    <CardContent className="p-4">
                                        <div className="flex gap-4">
                                            <div className="w-32 h-32 rounded-xl bg-muted overflow-hidden flex-shrink-0">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="text-lg font-bold text-card-foreground mb-1">{product.name}</h3>
                                                    <p className="text-2xl font-bold text-amber-500">₹{product.price}</p>
                                                </div>
                                                <Button
                                                    className="w-full h-11 text-base shadow-md hover:shadow-lg transition-all active:scale-95"
                                                    onClick={(e) => handleAdd(product.id, e)}
                                                >
                                                    <Plus size={18} className="mr-2" />
                                                    Add to Cart
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </ProductSlider>
                </div>
            </div>

            {/* Featured Salon Services */}
            <div className="py-8 px-4 bg-gradient-to-b from-primary/5 to-background">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="font-bold text-xl text-foreground flex items-center gap-2">
                        <Scissors size={20} className="text-primary" />
                        Home Salon Services
                    </h2>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate('/services')}
                        className="text-primary hover:text-primary/80"
                    >
                        View All
                        <ArrowRight size={16} className="ml-1" />
                    </Button>
                </div>

                <div className="space-y-4">
                    {featuredServices.map((service) => (
                        <Card key={service.id} className="overflow-hidden hover:shadow-md transition-shadow border-primary/20">
                            <CardContent className="p-4 flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                                    {getServiceIcon(service.name)}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-card-foreground">{service.name}</h3>
                                    <p className="text-sm text-muted-foreground line-clamp-1">{service.desc}</p>
                                    <p className="text-lg font-bold text-amber-600 mt-1">₹{service.price}</p>
                                </div>
                                <Button
                                    onClick={() => handleBookService(service.name)}
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground h-10 px-6 shadow-sm active:scale-95 transition-transform"
                                >
                                    Book
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <Separator className="my-2" />

            {/* Premium Collection */}
            <div className="p-4">
                <h2 className="font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                    <ShoppingBag size={20} className="text-purple-500" />
                    Premium Collection
                </h2>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 gap-4"
                >
                    {products.filter(p => p.category !== 'Essentials').map(product => (
                        <motion.div key={product.id} variants={item}>
                            <Card className="overflow-hidden group hover:shadow-md transition-shadow">
                                <CardContent className="p-3">
                                    <div className="aspect-square rounded-xl bg-muted mb-3 overflow-hidden relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <Badge className="absolute top-2 right-2 bg-background/80 backdrop-blur-md text-amber-500 border-border shadow-sm">
                                            NEW
                                        </Badge>
                                    </div>
                                    <h3 className="text-sm font-bold text-card-foreground mb-1 leading-tight">{product.name}</h3>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="font-bold text-amber-500 text-lg">₹{product.price}</span>
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            className="h-9 px-4 active:scale-95 transition-transform"
                                            onClick={(e) => handleAdd(product.id, e)}
                                        >
                                            Add
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
