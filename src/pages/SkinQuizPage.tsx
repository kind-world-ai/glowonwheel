import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Camera, Check, Smartphone, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from '../components/SEO';

// Types
type ProblemType = 'skin' | 'hair' | null;
type QuizData = {
    problemType: ProblemType;
    concern: string;
    photo: File | null;
    name: string;
    gender: 'female' | 'male' | '';
    age: string;
    whatsapp: string;
};

type ValidationErrors = {
    name?: string;
    age?: string;
    whatsapp?: string;
};

const STEPS = {
    WELCOME: 0,
    PROBLEM_TYPE: 1,
    CONCERN: 2,
    PHOTO: 3,
    CONTACT: 4,
};

const SKIN_CONCERNS = [
    {
        value: 'acne',
        label: 'Acne / Pimples',
        description: 'Comedonal, blackheads or pus-filled pimples'
    },
    {
        value: 'dark_spots',
        label: 'Dark Spots / Marks',
        description: 'Flat spots, melanin buildup due to acne, sun exposure or hormonal changes'
    },
    {
        value: 'acne_scars',
        label: 'Acne Scars',
        description: 'Pits or marks remaining after acne heals'
    },
    {
        value: 'dullness',
        label: 'Dullness / Tan',
        description: 'Uneven skin tone, lack of glow'
    },
    {
        value: 'aging',
        label: 'Wrinkles / Fine Lines',
        description: 'Signs of aging, loss of elasticity'
    },
];

const HAIR_CONCERNS = [
    {
        value: 'hair_fall',
        label: 'Hair Fall',
        description: 'Excessive shedding, thinning'
    },
    {
        value: 'dandruff',
        label: 'Dandruff',
        description: 'Flaky scalp, itchiness'
    },
    {
        value: 'thinning',
        label: 'Thinning Hair',
        description: 'Reduced hair density, visible scalp'
    },
    {
        value: 'dry_damaged',
        label: 'Dry / Damaged Hair',
        description: 'Brittle, frizzy, or rough texture'
    },
    {
        value: 'scalp_issues',
        label: 'Scalp Issues',
        description: 'Irritation, redness, or sensitivity'
    },
];

export function SkinQuizPage() {
    const [step, setStep] = useState(STEPS.WELCOME);
    const [data, setData] = useState<QuizData>({
        problemType: null,
        concern: '',
        photo: null,
        name: '',
        gender: '',
        age: '',
        whatsapp: ''
    });
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const validateContactForm = (): boolean => {
        const newErrors: ValidationErrors = {};

        if (!data.name.trim()) {
            newErrors.name = 'Empty names are not allowed';
        } else if (data.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        } else if (/\d/.test(data.name)) {
            newErrors.name = 'Name cannot contain numbers';
        }

        if (!data.age) {
            newErrors.age = 'Correct age required';
        } else {
            const ageNum = parseInt(data.age);
            if (isNaN(ageNum) || ageNum < 10 || ageNum > 100) {
                newErrors.age = 'Please enter a valid age (10-100)';
            }
        }

        if (!data.whatsapp) {
            newErrors.whatsapp = 'WhatsApp number is required';
        } else if (!/^\d{10}$/.test(data.whatsapp.replace(/\s/g, ''))) {
            newErrors.whatsapp = 'Please enter a valid 10-digit number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (step === STEPS.CONTACT) {
            if (validateContactForm()) {
                handleSubmit();
            }
        } else {
            setStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        if (step > STEPS.WELCOME) {
            setStep(prev => prev - 1);
            setErrors({});
        }
    };

    const updateData = (key: keyof QuizData, value: any) => {
        setData(prev => ({ ...prev, [key]: value }));
        // Clear error for this field
        if (key in errors) {
            setErrors(prev => ({ ...prev, [key]: undefined }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            updateData('photo', e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        // Simulate "AI Analysis"
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSuccess(true);

        console.log("Form Submitted:", data);
    };

    const variants = {
        enter: { opacity: 0, y: 20 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    // Welcome Screen
    if (step === STEPS.WELCOME) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex flex-col items-center justify-center p-4 pt-24">
                <SEO
                    title="Free Skin & Hair Analysis | Glow on Wheel"
                    description="Get a free personalized skin and hair analysis report from our experts."
                    keywords="skin analysis, hair analysis, beauty consultation"
                    path="/skin-quiz"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md"
                >
                    <h1 className="text-4xl font-bold text-center mb-8 text-foreground">
                        Welcome To<br />Glow on Wheel!
                    </h1>

                    <div className="mb-8 flex justify-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden bg-white/30 backdrop-blur-sm">
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
                                alt="Beauty Expert"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <Card className="bg-card border-border shadow-lg mb-6">
                        <CardContent className="p-6 space-y-4">
                            <div className="flex items-start gap-3">
                                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <p className="text-foreground text-lg">Free analysis of skin & hair</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <p className="text-foreground text-lg">Expert given treatment kit</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <p className="text-foreground text-lg">Free monthly expert checkup</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Button
                        className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg"
                        onClick={() => setStep(STEPS.PROBLEM_TYPE)}
                    >
                        Get Started
                    </Button>

                    <p className="text-center text-muted-foreground mt-4">
                        Team of 12+ years experienced professionals
                    </p>
                </motion.div>
            </div>
        );
    }

    // Success Screen
    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center p-4 pt-24">
                <Card className="w-full max-w-md border-border shadow-lg bg-card">
                    <CardContent className="pt-6 pb-8 px-6 text-center space-y-6">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto text-green-600 dark:text-green-400">
                            <Check size={40} strokeWidth={3} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-2">Analysis in Progress!</h2>
                            <p className="text-muted-foreground text-lg">
                                Our experts are analyzing your {data.problemType} profile. You will receive your personalized report on WhatsApp shortly.
                            </p>
                        </div>
                        <Button
                            className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                            onClick={() => window.location.href = '/'}
                        >
                            Back to Home
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Loading Screen
    if (isSubmitting) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex flex-col items-center justify-center p-4 space-y-6 pt-24">
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-4 border-border rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl">✨</span>
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-foreground animate-pulse">Analyzing your {data.problemType}...</h2>
            </div>
        );
    }

    // Main Quiz Flow
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <SEO
                title="Skin & Hair Analysis Quiz | Glow on Wheel"
                description="Get a free personalized analysis report."
                keywords="skin analysis, hair analysis, beauty quiz"
                path="/skin-quiz"
            />

            {/* Header with Back Button */}
            {step > STEPS.WELCOME && (
                <div className="p-4 pt-24 relative z-[60]">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleBack}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-lg"
                    >
                        <ArrowLeft size={24} />
                    </Button>
                </div>
            )}

            <div className="flex-1 flex flex-col max-w-md mx-auto w-full p-4 justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        {/* Step 1: Problem Type Selection */}
                        {step === STEPS.PROBLEM_TYPE && (
                            <div className="space-y-6">
                                <div>
                                    <p className="text-muted-foreground mb-2">Hello!</p>
                                    <h2 className="text-3xl font-bold text-foreground mb-8">
                                        Tell us what you need help with
                                    </h2>
                                </div>

                                <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow cursor-pointer focus:ring-2 focus:ring-primary focus:outline-none"
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            updateData('problemType', 'skin');
                                            setStep(STEPS.CONCERN);
                                        }
                                    }}
                                    onClick={() => {
                                        updateData('problemType', 'skin');
                                        setStep(STEPS.CONCERN);
                                    }}
                                >
                                    <CardContent className="p-6">
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                                                <svg viewBox="0 0 100 100" className="w-16 h-16">
                                                    <circle cx="50" cy="50" r="40" fill="#FFE4C4" stroke="#2C2416" strokeWidth="2" />
                                                    <circle cx="35" cy="40" r="3" fill="#2C2416" />
                                                    <circle cx="65" cy="40" r="3" fill="#2C2416" />
                                                    <path d="M 35 60 Q 50 70 65 60" stroke="#2C2416" strokeWidth="2" fill="none" />
                                                    <circle cx="30" cy="45" r="2" fill="#FFB6C1" />
                                                    <circle cx="70" cy="45" r="2" fill="#FFB6C1" />
                                                    <circle cx="25" cy="50" r="1.5" fill="#DEB887" />
                                                    <circle cx="75" cy="50" r="1.5" fill="#DEB887" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground mb-2">For skin problems</h3>
                                                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                                                    Click Here <ArrowRight size={16} className="ml-2" />
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow cursor-pointer focus:ring-2 focus:ring-primary focus:outline-none"
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            updateData('problemType', 'hair');
                                            setStep(STEPS.CONCERN);
                                        }
                                    }}
                                    onClick={() => {
                                        updateData('problemType', 'hair');
                                        setStep(STEPS.CONCERN);
                                    }}
                                >
                                    <CardContent className="p-6">
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                                                <svg viewBox="0 0 100 100" className="w-16 h-16">
                                                    <ellipse cx="50" cy="60" rx="20" ry="35" fill="#2C2416" />
                                                    <path d="M 30 40 Q 50 20 70 40" fill="#2C2416" />
                                                    <circle cx="50" cy="50" r="15" fill="#FFE4C4" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground mb-2">For hair problems</h3>
                                                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                                                    Click Here <ArrowRight size={16} className="ml-2" />
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {/* Step 2: Concern Selection */}
                        {step === STEPS.CONCERN && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-32 h-32 rounded-full overflow-hidden bg-white">
                                        <img
                                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop"
                                            alt="Expert"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground flex-1">
                                        Choose your most important concern
                                    </h2>
                                </div>

                                <div className="space-y-3">
                                    {(data.problemType === 'skin' ? SKIN_CONCERNS : HAIR_CONCERNS).map((concern) => (
                                        <Card
                                            key={concern.value}
                                            className={`border-2 cursor-pointer transition-all focus:ring-2 focus:ring-primary focus:outline-none ${data.concern === concern.value
                                                ? 'border-primary bg-primary/10'
                                                : 'border-transparent bg-card hover:border-primary/30'
                                                }`}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    updateData('concern', concern.value);
                                                }
                                            }}
                                            onClick={() => updateData('concern', concern.value)}
                                        >
                                            <CardContent className="p-4">
                                                <div className="flex items-start gap-3">
                                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${data.concern === concern.value
                                                        ? 'border-primary bg-primary'
                                                        : 'border-border'
                                                        }`}>
                                                        {data.concern === concern.value && (
                                                            <div className="w-3 h-3 rounded-full bg-white"></div>
                                                        )}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-bold text-foreground mb-1">{concern.label}</h3>
                                                        <p className="text-sm text-muted-foreground">{concern.description}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>

                                <Button
                                    className="w-full h-14 text-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full mt-4"
                                    disabled={!data.concern}
                                    onClick={() => setStep(STEPS.PHOTO)}
                                >
                                    Next
                                </Button>

                                <button
                                    className="w-full text-center text-primary font-medium"
                                    onClick={() => {
                                        updateData('concern', 'none');
                                        setStep(STEPS.PHOTO);
                                    }}
                                >
                                    I don't have any concern
                                </button>
                            </div>
                        )}

                        {/* Step 3: Photo Upload */}
                        {step === STEPS.PHOTO && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground mb-2">Upload a photo</h2>
                                <p className="text-muted-foreground mb-6">
                                    Please upload a clear photo of your {data.problemType === 'skin' ? 'face' : 'hair'} (No filters, please!)
                                </p>

                                <div
                                    className="border-2 border-dashed border-border rounded-xl p-8 cursor-pointer hover:bg-secondary/50 transition-colors bg-card focus:ring-2 focus:ring-primary focus:outline-none"
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            fileInputRef.current?.click();
                                        }
                                    }}
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    {data.photo ? (
                                        <div className="relative w-full aspect-square max-w-[250px] mx-auto rounded-lg overflow-hidden">
                                            <img
                                                src={URL.createObjectURL(data.photo)}
                                                alt="Upload preview"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-medium">
                                                Tap to change
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center gap-4 py-8">
                                            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                <Camera size={40} />
                                            </div>
                                            <div className="text-center">
                                                <p className="font-bold text-lg text-foreground">Take a photo</p>
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
                                    className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                                    disabled={!data.photo}
                                    onClick={() => setStep(STEPS.CONTACT)}
                                >
                                    Continue <ArrowRight className="ml-2" />
                                </Button>
                            </div>
                        )}

                        {/* Step 4: Contact Information */}
                        {step === STEPS.CONTACT && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-foreground mb-2">Your information</h2>
                                    <div className="flex gap-2 mt-4">
                                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                                    </div>
                                </div>

                                <Card className="bg-card border-border shadow-md">
                                    <CardContent className="p-6 space-y-6">
                                        {/* Name */}
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-foreground">Tell us your name</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder="Full Name"
                                                className={`h-12 bg-background text-foreground border-2 ${errors.name ? 'border-red-500' : 'border-input'}`}
                                                value={data.name}
                                                onChange={(e) => updateData('name', e.target.value)}
                                            />
                                            {errors.name && (
                                                <p className="text-red-600 text-sm flex items-center gap-1">
                                                    <span className="text-lg">⚠️</span> {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        {/* Gender */}
                                        <div className="space-y-3">
                                            <Label className="text-foreground">Choose Your Gender</Label>
                                            <div className="flex gap-4">
                                                <div
                                                    className={`flex-1 cursor-pointer focus:ring-2 focus:ring-primary focus:outline-none rounded-xl p-2 ${data.gender === 'female' ? 'opacity-100' : 'opacity-50'}`}
                                                    role="button"
                                                    tabIndex={0}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter' || e.key === ' ') {
                                                            updateData('gender', 'female');
                                                        }
                                                    }}
                                                    onClick={() => updateData('gender', 'female')}
                                                >
                                                    <div className={`w-20 h-20 rounded-full mx-auto mb-2 flex items-center justify-center ${data.gender === 'female' ? 'bg-primary ring-4 ring-primary/30' : 'bg-muted'
                                                        }`}>
                                                        <User size={40} className="text-primary-foreground" />
                                                    </div>
                                                    <p className="text-center font-bold text-foreground">Female</p>
                                                </div>
                                                <div
                                                    className={`flex-1 cursor-pointer focus:ring-2 focus:ring-primary focus:outline-none rounded-xl p-2 ${data.gender === 'male' ? 'opacity-100' : 'opacity-50'}`}
                                                    role="button"
                                                    tabIndex={0}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter' || e.key === ' ') {
                                                            updateData('gender', 'male');
                                                        }
                                                    }}
                                                    onClick={() => updateData('gender', 'male')}
                                                >
                                                    <div className={`w-20 h-20 rounded-full mx-auto mb-2 flex items-center justify-center ${data.gender === 'male' ? 'bg-primary ring-4 ring-primary/30' : 'bg-muted'
                                                        }`}>
                                                        <User size={40} className="text-primary-foreground" />
                                                    </div>
                                                    <p className="text-center font-bold text-foreground">Male</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Age */}
                                        <div className="space-y-2">
                                            <Label htmlFor="age" className="text-foreground">Enter Your Age</Label>
                                            <Input
                                                id="age"
                                                type="number"
                                                placeholder="Age"
                                                className={`h-12 bg-background text-foreground border-2 ${errors.age ? 'border-red-500' : 'border-input'}`}
                                                value={data.age}
                                                onChange={(e) => updateData('age', e.target.value)}
                                            />
                                            {errors.age && (
                                                <p className="text-red-600 text-sm flex items-center gap-1">
                                                    <span className="text-lg">⚠️</span> {errors.age}
                                                </p>
                                            )}
                                        </div>

                                        {/* WhatsApp */}
                                        <div className="space-y-2">
                                            <Label htmlFor="whatsapp" className="text-foreground">WhatsApp Number</Label>
                                            <div className="relative">
                                                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                                <Input
                                                    id="whatsapp"
                                                    type="tel"
                                                    placeholder="+91 98765 43210"
                                                    className={`pl-10 h-12 bg-background text-foreground border-2 ${errors.whatsapp ? 'border-red-500' : 'border-input'}`}
                                                    value={data.whatsapp}
                                                    onChange={(e) => updateData('whatsapp', e.target.value)}
                                                />
                                            </div>
                                            {errors.whatsapp && (
                                                <p className="text-red-600 text-sm flex items-center gap-1">
                                                    <span className="text-lg">⚠️</span> {errors.whatsapp}
                                                </p>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Button
                                    className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                                    onClick={handleNext}
                                >
                                    Continue
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
