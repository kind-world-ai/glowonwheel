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
            <Outlet context={{ addToCart }} />
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
