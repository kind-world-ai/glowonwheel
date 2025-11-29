import { Home, Scissors, MapPin, Image } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function BottomNav() {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const navItems = [
        { path: '/', icon: Home, label: 'Shop' },
        { path: '/services', icon: Scissors, label: 'Salon' },
        { path: '/gallery', icon: Image, label: 'Gallery' },
        { path: '/faq', icon: MapPin, label: 'Info' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 pb-safe pt-2 px-6 z-40">
            <div className="flex justify-between items-center max-w-md mx-auto">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex flex-col items-center gap-1 p-2 transition-colors ${isActive(item.path)
                            ? 'text-amber-500'
                            : 'text-slate-400 hover:text-slate-200'
                            }`}
                    >
                        <item.icon size={20} strokeWidth={isActive(item.path) ? 2.5 : 2} />
                        <span className="text-[10px] font-medium">{item.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
