import { motion } from 'framer-motion';
import { Sparkles, Plus, ShoppingBag, Scissors, ArrowRight, Brush, Palette, Gem, Footprints, Sun, Clock, MapPin } from 'lucide-react';
import { products, services, testimonials } from '../data';
import { useOutletContext, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { ProductSlider } from '../components/ProductSlider';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GoogleReviews } from '../components/GoogleReviews';
import { ContactInfo } from '../components/ContactInfo';
import { SEO } from '../components/SEO';
import { SEO_DATA, VISITING_CHARGE, FREE_VISIT_THRESHOLD, openWhatsApp } from '../constants';
import logo from '../assets/logo.png';

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
        const service = services.find(s => s.name === serviceName);
        const price = service ? service.price : 0;
        const visitNote = price < FREE_VISIT_THRESHOLD
            ? `\n(Note: +₹${VISITING_CHARGE} Visiting Charge for orders < ₹${FREE_VISIT_THRESHOLD})`
            : "\n(Free Visiting Charge applied!)";

        openWhatsApp(`Hi! I want to book the service: ${serviceName}${visitNote}`);
    };

    const essentialProducts = products.filter(p => p.category === 'Essentials');
    const featuredServices = services.slice(0, 4); // Show first 4 services

    return (
        <main className="bg-background text-foreground min-h-screen transition-colors duration-300">
            <SEO
                title={SEO_DATA.home.title}
                description={SEO_DATA.home.description}
                keywords={SEO_DATA.home.keywords}
                path="/"
            />
            {/* Hero Section */}
            <div className="relative h-[500px] overflow-hidden bg-primary">
                <img
                    src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800"
                    alt="Glow on Wheel Setup"
                    width="800"
                    height="500"
                    className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_0_15px_rgba(240,196,65,0.5)] mb-4 px-4 py-1 text-sm">
                            MOBILE BEAUTY BOUTIQUE
                        </Badge>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-6 flex justify-center"
                    >
                        <img src={logo} alt="Glow on Wheel" width="192" height="192" className="w-48 h-48 rounded-full shadow-2xl border-4 border-white/20" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary-foreground/90 text-lg font-medium mb-6 max-w-xs mx-auto leading-relaxed"
                    >
                        Your Mobile Beauty Salon & Accessory Boutique in Mohali!
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-3 justify-center"
                    >
                        <Button
                            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold"
                            onClick={() => navigate('/services')}
                        >
                            Book Salon
                        </Button>
                        <Button
                            variant="outline"
                            className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Shop Now
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Business Hours */}
            <div className="bg-muted/50 dark:bg-muted/10 py-6 px-4 border-y border-border">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Clock size={20} className="text-primary" />
                    <h2 className="font-bold text-xl text-foreground">Operating Hours</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center max-w-md mx-auto">
                    <div className="bg-card p-4 rounded-xl shadow-sm border border-border">
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Home Salon</p>
                        <p className="font-bold text-foreground text-lg">9:00 AM - 5:00 PM</p>
                    </div>
                    <div className="bg-card p-4 rounded-xl shadow-sm border border-border">
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Stall on Wheel</p>
                        <p className="font-bold text-secondary text-lg">5:00 PM Onwards</p>
                    </div>
                </div>

                {/* Free Visit Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 max-w-md mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl border border-primary/10 text-center"
                >
                    <p className="text-sm font-bold text-foreground">
                        ✨ Free Home Visit on orders above ₹499!
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                        (₹99 visiting charge for smaller orders)
                    </p>
                </motion.div>
            </div>

            {/* About Us Snippet */}
            <div className="py-12 px-4 bg-card text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">About Glow on Wheel</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                    We bring professional salon services and trendy beauty essentials right to your doorstep.
                    Whether you need a relaxing facial at home or want to shop for the latest accessories at our evening stall,
                    we've got you covered in Mohali and surrounding areas.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Professional Staff</Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Hygienic Service</Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Trendy Collection</Badge>
                </div>
            </div>

            {/* Daily Steals - Product Slider */}
            <div id="products" className="py-12 border-y border-border bg-muted/30">
                <div className="flex justify-between items-center px-4 mb-8 max-w-4xl mx-auto">
                    <h2 className="font-bold text-2xl text-foreground flex items-center gap-2 font-serif">
                        <Sparkles size={24} className="text-secondary animate-pulse" />
                        Daily Steals
                        <Badge variant="secondary" className="text-xs font-normal bg-secondary/20 text-foreground ml-2">
                            ₹20-50
                        </Badge>
                    </h2>
                </div>

                <div className="px-4 max-w-4xl mx-auto">
                    <ProductSlider autoScrollInterval={4000}>
                        {essentialProducts.map(product => (
                            <motion.div
                                key={product.id}
                                whileTap={{ scale: 0.98 }}
                                className="px-2"
                            >
                                <Card className="shadow-md group hover:shadow-xl transition-shadow border-border bg-card">
                                    <CardContent className="p-4">
                                        <div className="flex gap-4">
                                            <div className="w-32 h-32 rounded-xl bg-muted overflow-hidden flex-shrink-0">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    loading="lazy"
                                                    width="128"
                                                    height="128"
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="text-lg font-bold text-foreground mb-1">{product.name}</h3>
                                                    <p className="text-2xl font-bold text-secondary">₹{product.price}</p>
                                                </div>
                                                <Button
                                                    className="w-full h-11 text-base shadow-md hover:shadow-lg transition-all active:scale-95 bg-primary hover:bg-primary/90 text-primary-foreground"
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
            <div className="py-12 px-4 bg-card">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="font-bold text-2xl text-foreground flex items-center gap-2 font-serif">
                            <Scissors size={24} className="text-primary" />
                            Home Salon Services
                        </h2>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate('/services')}
                            className="text-primary hover:text-primary/80 hover:bg-primary/5"
                        >
                            View All
                            <ArrowRight size={16} className="ml-1" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {featuredServices.map((service) => (
                            <Card key={service.id} className="overflow-hidden hover:shadow-md transition-shadow border-border bg-card">
                                <CardContent className="p-4 flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/10">
                                        {getServiceIcon(service.name)}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-foreground">{service.name}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-1">{service.desc}</p>
                                        <p className="text-lg font-bold text-secondary mt-1">₹{service.price}</p>
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
            </div>

            <Separator className="my-2 opacity-50" />

            {/* Premium Collection */}
            <div className="py-12 px-4 bg-muted/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-bold text-2xl text-foreground mb-8 flex items-center gap-2 font-serif">
                        <ShoppingBag size={24} className="text-secondary" />
                        Premium Collection
                    </h2>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                    >
                        {products.filter(p => p.category !== 'Essentials').map(product => (
                            <motion.div key={product.id} variants={item}>
                                <Card className="overflow-hidden group hover:shadow-md transition-shadow border-none shadow-sm bg-card">
                                    <CardContent className="p-3">
                                        <div className="aspect-square rounded-xl bg-muted mb-3 overflow-hidden relative">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                loading="lazy"
                                                width="300"
                                                height="300"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <Badge className="absolute top-2 right-2 bg-background/90 backdrop-blur-md text-secondary border-none shadow-sm">
                                                NEW
                                            </Badge>
                                        </div>
                                        <h3 className="text-sm font-bold text-foreground mb-1 leading-tight">{product.name}</h3>
                                        <div className="flex justify-between items-center mt-3">
                                            <span className="font-bold text-secondary text-lg">₹{product.price}</span>
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                                className="h-9 px-4 active:scale-95 transition-transform bg-primary/10 text-primary hover:bg-primary/20"
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

            <GoogleReviews reviews={testimonials} />

            {/* Find Us Section */}
            <div className="py-12 px-4 bg-card">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-bold text-2xl text-foreground mb-8 flex items-center gap-2 font-serif">
                        <MapPin size={24} className="text-primary" />
                        Find Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="overflow-hidden shadow-md border-border bg-card">
                            <CardContent className="p-0">
                                <div className="aspect-video w-full bg-muted relative">
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
                                <div className="p-4 bg-muted/30">
                                    <p className="font-bold text-foreground">Stall on Wheel</p>
                                    <p className="text-sm text-muted-foreground">Sector 124, Sunny Enclave, Kharar</p>
                                    <Button
                                        asChild
                                        variant="link"
                                        className="px-0 text-secondary h-auto mt-1"
                                    >
                                        <a
                                            href="https://www.google.com/maps/place/Sector+124,+Sunny+Enclave,+Kharar,+Punjab+140301/@30.7567386,76.6591099,17z/data=!3m1!4b1!4m6!3m5!1s0x390ff01f1f01e4f9:0x2469a1043a14406c!8m2!3d30.7573438!4d76.6623403!16s%2Fg%2F11by_gm3b2?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Get Directions <ArrowRight size={14} className="ml-1" />
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <ContactInfo />
                    </div>
                </div>
            </div>
        </main >
    );
}
