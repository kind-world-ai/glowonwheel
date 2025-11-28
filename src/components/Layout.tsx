import { Outlet, Link } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { WhatsAppButton } from './WhatsAppButton';
import { ThemeToggle } from './ThemeToggle';
import { products } from '../data';
import logo from '../assets/logo.png';
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
            <div className="absolute top-4 left-4 z-50">
                <img src={logo} alt="Glow on Wheel" className="w-16 h-16 rounded-full shadow-lg border-2 border-white/20" />
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
                            <div className="flex gap-4">
                                <a href="#" className="text-cream hover:text-mustard transition-colors">Instagram</a>
                                <a href="#" className="text-cream hover:text-mustard transition-colors">Facebook</a>
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
