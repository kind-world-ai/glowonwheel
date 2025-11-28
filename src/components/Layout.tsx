import { Outlet, Link } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { WhatsAppButton } from './WhatsAppButton';
import { ThemeToggle } from './ThemeToggle';
import { products } from '../data';
import logo from '../assets/logo.png';
import { Instagram, Facebook, Phone, ExternalLink } from 'lucide-react';
import { openWhatsApp, VISITING_CHARGE, FREE_VISIT_THRESHOLD, BUSINESS_PHONE } from '../constants';

interface LayoutProps {
    cart: { id: number; qty: number }[];
    addToCart: (id: number) => void;
}

export function Layout({ cart, addToCart }: LayoutProps) {
    const totalAmount = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.qty : 0);
    }, 0);

    const visitCharge = totalAmount >= FREE_VISIT_THRESHOLD ? 0 : VISITING_CHARGE;
    const finalTotal = totalAmount + visitCharge;

    const handleCheckout = () => {
        const itemsList = cart.map(item => {
            const product = products.find(p => p.id === item.id);
            return `${product?.name} x${item.qty}`;
        }).join('\n');

        const chargeText = visitCharge === 0 ? "FREE" : `₹${visitCharge}`;
        const message = `Hi! I want to reserve:\n${itemsList}\n----------------\nSubtotal: ₹${totalAmount}\nVisit Charge: ${chargeText}\n----------------\nTotal: ₹${finalTotal}`;
        openWhatsApp(message);
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans max-w-md mx-auto shadow-2xl overflow-hidden relative transition-colors duration-300">
            <div className="absolute top-4 left-4 z-50 flex items-center gap-3">
                <img src={logo} alt="Glow on Wheel" className="w-16 h-16 rounded-full shadow-lg border-2 border-white/20" />
                <div className="flex gap-2">
                    <a href="https://www.instagram.com/glowonwheel/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                        <Instagram size={16} />
                    </a>
                    <a href="https://www.facebook.com/TheGlowonwheel/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                        <Facebook size={16} />
                    </a>
                    <a
                        href="https://wa.me/c/918437085459"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 flex items-center justify-center transition-all"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            width="22"
                            height="22"
                            fill="#25D366"
                        >
                            <path d="M16.01 2.01c-7.73 0-14 6.27-14 14 0 2.47.64 4.83 1.87 6.93L2 30l7.26-1.9A13.93 13.93 0 0016 30c7.73 0 14-6.27 14-14s-6.27-14-14-14zm0 25.27c-2.23 0-4.4-.59-6.31-1.71l-.45-.27-4.31 1.13 1.15-4.21-.29-.45A11.29 11.29 0 014.7 16c0-6.25 5.06-11.31 11.31-11.31S27.31 9.75 27.31 16 22.25 27.28 16 27.28zm6.31-8.42c-.34-.17-2.03-1-2.35-1.11-.31-.11-.54-.17-.76.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.26-.74.09-.34-.17-1.43-.53-2.73-1.69-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.16-.16.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.76-1.83-1.04-2.52-.27-.65-.55-.56-.76-.57l-.65-.01c-.23 0-.6.09-.91.44s-1.19 1.16-1.19 2.83 1.22 3.28 1.39 3.5c.17.23 2.41 3.68 5.84 5.02.82.35 1.46.56 1.96.71.82.26 1.56.22 2.14.13.65-.1 2.03-.83 2.32-1.63.29-.8.29-1.49.2-1.63-.09-.14-.31-.23-.65-.4z" />
                        </svg>
                    </a>
                    <a href="https://linktr.ee/Theglowonwheel" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                        <ExternalLink size={16} />
                    </a>
                </div>
            </div>
            <ThemeToggle />
            <div className="flex-1 pb-24">
                <Outlet context={{ addToCart }} />
            </div>

            <footer className="bg-olive-dark text-cream py-8 px-4 pb-24">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-8">
                        <div>
                            <img src={logo} alt="Glow on Wheel" className="w-24 h-24 mb-4 rounded-full" />
                            <p className="text-sm text-cream/80 mb-4">
                                Bringing professional salon services and trendy beauty essentials right to your doorstep in Mohali.
                            </p>
                            <div className="space-y-3">
                                <h4 className="font-bold text-sm text-mustard">Follow Us</h4>
                                <div className="flex gap-3">
                                    <a href="https://www.instagram.com/glowonwheel/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream/10 hover:bg-mustard/20 flex items-center justify-center text-cream hover:text-mustard transition-all">
                                        <Instagram size={20} />
                                    </a>
                                    <a href="https://www.facebook.com/TheGlowonwheel/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream/10 hover:bg-mustard/20 flex items-center justify-center text-cream hover:text-mustard transition-all">
                                        <Facebook size={20} />
                                    </a>
                                    <a
                                        href="https://wa.me/c/918437085459"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 flex items-center justify-center transition-all"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 32 32"
                                            width="22"
                                            height="22"
                                            fill="#25D366"
                                        >
                                            <path d="M16.01 2.01c-7.73 0-14 6.27-14 14 0 2.47.64 4.83 1.87 6.93L2 30l7.26-1.9A13.93 13.93 0 0016 30c7.73 0 14-6.27 14-14s-6.27-14-14-14zm0 25.27c-2.23 0-4.4-.59-6.31-1.71l-.45-.27-4.31 1.13 1.15-4.21-.29-.45A11.29 11.29 0 014.7 16c0-6.25 5.06-11.31 11.31-11.31S27.31 9.75 27.31 16 22.25 27.28 16 27.28zm6.31-8.42c-.34-.17-2.03-1-2.35-1.11-.31-.11-.54-.17-.76.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.26-.74.09-.34-.17-1.43-.53-2.73-1.69-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.16-.16.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.76-1.83-1.04-2.52-.27-.65-.55-.56-.76-.57l-.65-.01c-.23 0-.6.09-.91.44s-1.19 1.16-1.19 2.83 1.22 3.28 1.39 3.5c.17.23 2.41 3.68 5.84 5.02.82.35 1.46.56 1.96.71.82.26 1.56.22 2.14.13.65-.1 2.03-.83 2.32-1.63.29-.8.29-1.49.2-1.63-.09-.14-.31-.23-.65-.4z" />
                                        </svg>
                                    </a>
                                    <a href="https://linktr.ee/Theglowonwheel" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream/10 hover:bg-mustard/20 flex items-center justify-center text-cream hover:text-mustard transition-all">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-3 text-mustard">Quick Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/" className="hover:text-mustard">Home</Link></li>
                                <li><Link to="/services" className="hover:text-mustard">Services</Link></li>
                                <li><Link to="/faq" className="hover:text-mustard">FAQ</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-3 text-mustard">Contact</h4>
                            <p className="text-sm mb-1">Mon - Sun: 9:00 AM - 9:00 PM</p>
                            <a href={`tel:${BUSINESS_PHONE}`} className="text-sm mb-1 block hover:text-mustard">+91 84370 85459</a>
                            <p className="text-sm">Mohali, Punjab</p>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-3 text-mustard">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/privacy" className="hover:text-mustard">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="hover:text-mustard">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-olive/30 text-center text-xs text-cream/60">
                        © {new Date().getFullYear()} Glow on Wheel. All rights reserved.
                    </div>
                </div>
            </footer>

            <WhatsAppButton
                cartCount={cart.reduce((a, b) => a + b.qty, 0)}
                totalAmount={finalTotal}
                visitCharge={visitCharge}
                onCheckout={handleCheckout}
            />
            <BottomNav />
        </div>
    );
}
