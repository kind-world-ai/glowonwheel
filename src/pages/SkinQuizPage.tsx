import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Camera, Check, Smartphone, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from '../components/SEO';

// Types
type QuizData = {
    age: string;
    skinFeel: string;
    skinEnemy: string;
    selfie: File | null;
    whatsapp: string;
};

const STEPS = [
    { id: 1, title: "Age" },
    { id: 2, title: "Skin Feel" },
    { id: 3, title: "Skin Enemy" },
    { id: 4, title: "Selfie" },
    { id: 5, title: "Contact" },
];

export function SkinQuizPage() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<QuizData>({
        age: '',
        skinFeel: '',
        skinEnemy: '',
        selfie: null,
        whatsapp: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleNext = () => {
        if (step < STEPS.length) {
            setStep(prev => prev + 1);
        } else {
            handleSubmit();
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(prev => prev - 1);
        }
    };

    const updateData = (key: keyof QuizData, value: any) => {
        setData(prev => ({ ...prev, [key]: value }));
        // Auto advance for selection steps
        if (['age', 'skinFeel', 'skinEnemy'].includes(key)) {
            setTimeout(() => handleNext(), 300);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            updateData('selfie', e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        // Simulate "AI Analysis"
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSuccess(true);

        // In a real app, we would send this data to a backend
        console.log("Form Submitted:", data);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0
        })
    };

    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        if (newDirection > 0) handleNext();
        else handleBack();
    };

    // Render Steps
    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-center mb-6 font-serif">Let's check your Skin Health! First, what is your age bracket?</h2>
                        <div className="grid gap-3">
                            {['18-25', '26-35', '36-50', '50+'].map((age) => (
                                <Button
                                    key={age}
                                    variant={data.age === age ? "default" : "outline"}
                                    className={`h-14 text-lg justify-start px-6 ${data.age === age ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/5'}`}
                                    onClick={() => updateData('age', age)}
                                >
                                    {age}
                                </Button>
                            ))}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-center mb-6 font-serif">How does your skin feel 2 hours after washing your face?</h2>
                        <div className="grid gap-3">
                            {[
                                { label: 'Tight & Dry', value: 'dry' },
                                { label: 'Oily/Greasy', value: 'oily' },
                                { label: 'Normal but Oily T-zone', value: 'combination' },
                                { label: 'Red or Itchy', value: 'sensitive' }
                            ].map((item) => (
                                <Button
                                    key={item.value}
                                    variant={data.skinFeel === item.value ? "default" : "outline"}
                                    className={`h-14 text-lg justify-start px-6 ${data.skinFeel === item.value ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/5'}`}
                                    onClick={() => updateData('skinFeel', item.value)}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-center mb-6 font-serif">What is your biggest skin enemy right now?</h2>
                        <div className="grid gap-3">
                            {[
                                { label: 'Acne/Pimples', value: 'acne' },
                                { label: 'Dark Circles', value: 'dark_circles' },
                                { label: 'Dullness/Tan', value: 'dullness' },
                                { label: 'Wrinkles/Fine Lines', value: 'aging' }
                            ].map((item) => (
                                <Button
                                    key={item.value}
                                    variant={data.skinEnemy === item.value ? "default" : "outline"}
                                    className={`h-14 text-lg justify-start px-6 ${data.skinEnemy === item.value ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/5'}`}
                                    onClick={() => updateData('skinEnemy', item.value)}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-6 text-center">
                        <h2 className="text-2xl font-bold mb-2 font-serif">Upload a quick selfie</h2>
                        <p className="text-muted-foreground mb-6">No filters, please! This is crucial for accurate analysis.</p>

                        <div
                            className="border-2 border-dashed border-input rounded-xl p-8 cursor-pointer hover:bg-muted/50 transition-colors"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            {data.selfie ? (
                                <div className="relative w-full aspect-square max-w-[200px] mx-auto rounded-lg overflow-hidden">
                                    <img
                                        src={URL.createObjectURL(data.selfie)}
                                        alt="Selfie preview"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-medium">
                                        Tap to change
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center gap-4 py-8">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Camera size={32} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Take a photo</p>
                                        <p className="text-sm text-muted-foreground">or upload from gallery</p>
                                    </div>
                                </div>
                            )}
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>

                        <Button
                            className="w-full h-12 text-lg mt-4"
                            disabled={!data.selfie}
                            onClick={() => paginate(1)}
                        >
                            Continue <ArrowRight className="ml-2" />
                        </Button>
                    </div>
                );
            case 5:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-center mb-2 font-serif">Where should we send your Personalized Skin Report?</h2>

                        <div className="space-y-2">
                            <Label htmlFor="whatsapp">WhatsApp Number (Required)</Label>
                            <div className="relative">
                                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                <Input
                                    id="whatsapp"
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    className="pl-10 h-12 text-lg"
                                    value={data.whatsapp}
                                    onChange={(e) => updateData('whatsapp', e.target.value)}
                                />
                            </div>
                        </div>

                        <Button
                            className="w-full h-12 text-lg mt-4"
                            disabled={!data.whatsapp || data.whatsapp.length < 10}
                            onClick={handleNext}
                        >
                            Get My Skin Report <ArrowRight className="ml-2" />
                        </Button>
                    </div>
                );
            default:
                return null;
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center p-4">
                <Card className="w-full max-w-md border-none shadow-lg bg-card">
                    <CardContent className="pt-6 pb-8 px-6 text-center space-y-6">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto text-green-600 dark:text-green-400">
                            <Check size={40} strokeWidth={3} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-2 font-serif">Analysis in Progress!</h2>
                            <p className="text-muted-foreground text-lg">
                                Our experts are analyzing your skin profile. You will receive your personalized report on WhatsApp shortly.
                            </p>
                        </div>
                        <Button
                            className="w-full h-12 text-lg"
                            onClick={() => window.location.href = '/'}
                        >
                            Back to Home
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (isSubmitting) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 space-y-6">
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-4 border-muted rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl">✨</span>
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-foreground animate-pulse font-serif">Analyzing your skin...</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <SEO
                title="Smart Skin Quiz | Glow on Wheel"
                description="Get a free personalized skin analysis report."
                keywords="skin analysis, skin quiz, beauty report"
                path="/skin-quiz"
            />

            {/* Progress Bar */}
            <div className="h-2 bg-muted w-full fixed top-0 left-0 z-50">
                <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / STEPS.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            <div className="flex-1 flex flex-col max-w-md mx-auto w-full p-4 justify-center py-12">
                {/* Header */}
                <div className="mb-8 space-y-4">
                    <div className="text-center space-y-2">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-2"
                        >
                            <Sparkles className="w-5 h-5 text-primary" />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold text-foreground font-serif"
                        >
                            Smart Skin Analysis
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground"
                        >
                            Get your personalized skin report in 2 minutes
                        </motion.p>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                        {step > 1 ? (
                            <Button variant="ghost" size="icon" onClick={() => paginate(-1)} className="hover:bg-primary/5 hover:text-primary">
                                <ArrowLeft size={24} />
                            </Button>
                        ) : <div className="w-10" />} {/* Spacer to keep step count centered/aligned */}

                        <span className="text-sm font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                            Step {step} of {STEPS.length}
                        </span>

                        <div className="w-10" /> {/* Spacer for symmetry */}
                    </div>
                </div>

                {/* Content */}
                <div className="relative min-h-[400px]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={step}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="w-full"
                        >
                            {renderStep()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
