import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { WhatsAppButton } from './WhatsAppButton';
import { ThemeToggle } from './ThemeToggle';
import { products } from '../data';

interface LayoutProps {
    cart: { id: number; qty: number }[];
    addToCart: (id: number) => void;
}

export function Layout({ cart, addToCart }: LayoutProps) {
    const totalAmount = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.qty : 0);
    }, 0);

    const visitCharge = totalAmount >= 499 ? 0 : 99;
    const finalTotal = totalAmount + visitCharge;

    const handleCheckout = () => {
        const itemsList = cart.map(item => {
            const product = products.find(p => p.id === item.id);
            return `${product?.name} x${item.qty}`;
        }).join('%0A');

        const chargeText = visitCharge === 0 ? "FREE" : `₹${visitCharge}`;
        const message = `Hi! I want to reserve:%0A${itemsList}%0A----------------%0ASubtotal: ₹${totalAmount}%0AVisit Charge: ${chargeText}%0A----------------%0ATotal: ₹${finalTotal}`;
        window.open(`https://wa.me/918437085459?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans max-w-md mx-auto shadow-2xl overflow-hidden relative transition-colors duration-300">
            <span className="font-bold text-lg text-primary">Glow on Wheel</span>
            <ThemeToggle />
            <div className="flex-1 pb-24">
                <Outlet context={{ addToCart }} />
            </div>

            <footer className="bg-olive-dark text-cream py-8 px-4 pb-24">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-mustard">Glow on Wheel</h3>
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
                                <li><a href="/" className="hover:text-mustard">Home</a></li>
                                <li><a href="/services" className="hover:text-mustard">Services</a></li>
                                <li><a href="/faq" className="hover:text-mustard">FAQ</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-3 text-mustard">Contact</h4>
                            <p className="text-sm mb-1">Mon - Sun: 9:00 AM - 9:00 PM</p>
                            <p className="text-sm mb-1">+91 84370 85459</p>
                            <p className="text-sm">Mohali, Punjab</p>
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
