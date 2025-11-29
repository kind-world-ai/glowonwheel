import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WhatsAppButtonProps {
    cartCount: number;
    totalAmount: number;
    visitCharge: number;
    onCheckout: () => void;
}

export function WhatsAppButton({ cartCount, totalAmount, visitCharge, onCheckout }: WhatsAppButtonProps) {
    return (
        <AnimatePresence>
            {cartCount > 0 && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-20 left-4 right-4 z-50 max-w-md mx-auto"
                >
                    <div className="bg-card text-card-foreground p-4 rounded-2xl shadow-xl border border-border flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <motion.div
                                key={cartCount}
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                className="bg-secondary text-secondary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg"
                            >
                                {cartCount}
                            </motion.div>
                            <div className="flex flex-col">
                                <span className="text-xs text-muted-foreground">
                                    {visitCharge === 0 ? "Free Visit" : "+₹99 Visit Charge"}
                                </span>
                                <span className="font-bold text-lg text-foreground">₹{totalAmount}</span>
                            </div>
                        </div>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={onCheckout}
                            className="bg-[#25D366] text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-[#128C7E] transition-colors shadow-lg"
                        >
                            <MessageCircle size={18} /> Reserve
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
