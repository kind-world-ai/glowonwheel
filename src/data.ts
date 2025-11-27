export const products = [
    // Category A: Everyday Essentials (₹20-50)
    {
        id: 1,
        name: "Daily Wear Bands",
        price: 20,
        category: "Essentials",
        description: "Soft elastic bands perfect for everyday use. Gentle on hair, won't cause breakage.",
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=300"
    },
    {
        id: 2,
        name: "Banana Clips Set",
        price: 30,
        category: "Essentials",
        description: "Sturdy banana clips for secure hold. Perfect for thick hair and quick styling.",
        image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=300"
    },
    {
        id: 3,
        name: "Colorful Scrunchies",
        price: 40,
        category: "Essentials",
        description: "Vibrant satin scrunchies in assorted colors. Gentle on hair, adds style to any look.",
        image: "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?auto=format&fit=crop&q=80&w=300"
    },
    {
        id: 4,
        name: "Simple Studs",
        price: 50,
        category: "Essentials",
        description: "Elegant minimalist studs for daily wear. Hypoallergenic metal, suitable for sensitive ears.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=300"
    },
    {
        id: 5,
        name: "Bindi Pack",
        price: 20,
        category: "Essentials",
        description: "Assorted bindis in traditional and modern designs. Self-adhesive, easy to apply.",
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=300"
    },
    {
        id: 6,
        name: "Safety Pins Set",
        price: 20,
        category: "Essentials",
        description: "Multi-size safety pins for all your needs. Rust-resistant, secure closure.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=300"
    },

    // Category B: Premium / Impulse (₹80-250)
    {
        id: 7,
        name: "Fancy Hairband",
        price: 150,
        category: "Premium",
        description: "Designer hairband with pearl and rhinestone embellishments. Perfect for parties and special occasions.",
        image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=300"
    },
    {
        id: 8,
        name: "Statement Earrings",
        price: 200,
        category: "Premium",
        description: "Bold drop earrings with intricate detailing. Lightweight design for comfortable all-day wear.",
        image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=300"
    },
    {
        id: 9,
        name: "Matte Lipstick",
        price: 120,
        category: "Makeup",
        description: "Long-lasting matte finish lipstick. Highly pigmented, non-drying formula with vitamin E.",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=300"
    },
    {
        id: 10,
        name: "Nail Paint Set",
        price: 100,
        category: "Makeup",
        description: "Set of 3 trendy nail polish shades. Quick-dry formula with glossy finish.",
        image: "https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?auto=format&fit=crop&q=80&w=300"
    },
    {
        id: 11,
        name: "Kajal Pencil",
        price: 80,
        category: "Makeup",
        description: "Smudge-proof kajal for defined eyes. Waterproof formula that lasts all day.",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=300"
    },
    {
        id: 12,
        name: "Pearl Necklace",
        price: 250,
        category: "Premium",
        description: "Elegant single-strand pearl necklace. Faux pearls with secure clasp, perfect for ethnic wear.",
        image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=300"
    }
];

export const services = [
    // Hair & Styling
    { id: 101, name: "Party Makeup", price: 800, desc: "Natural glow for evenings", category: "Makeup & Styling" },
    { id: 102, name: "Mehendi (Hands)", price: 200, desc: "Intricate designs", category: "Makeup & Styling" },
    { id: 103, name: "Saree Draping", price: 300, desc: "Perfect pleats", category: "Makeup & Styling" },
    { id: 104, name: "Hair Styling", price: 400, desc: "Buns, curls, or straightening", category: "Makeup & Styling" },

    // Waxing
    { id: 201, name: "Full Arms Waxing", price: 149, desc: "Smooth & silky arms", category: "Waxing" },
    { id: 202, name: "Full Legs Waxing", price: 249, desc: "Long-lasting smoothness", category: "Waxing" },
    { id: 205, name: "Half Legs Waxing", price: 149, desc: "Knees down smoothness", category: "Waxing" },
    { id: 203, name: "Underarms Waxing", price: 49, desc: "Quick & clean", category: "Waxing" },
    { id: 204, name: "Full Body Waxing", price: 1200, desc: "Complete hair removal package", category: "Waxing" },

    // Facials
    { id: 301, name: "Fruit Facial", price: 600, desc: "Freshness for all skin types", category: "Facials" },
    { id: 302, name: "Gold Facial", price: 1200, desc: "Radiant glow for special occasions", category: "Facials" },
    { id: 303, name: "Diamond Facial", price: 1500, desc: "Premium skin brightening", category: "Facials" },
    { id: 304, name: "De-Tan Pack", price: 400, desc: "Removes sun tan effectively", category: "Facials" },

    // Bleach
    { id: 401, name: "Face Bleach", price: 200, desc: "Instant brightness", category: "Bleach" },
    { id: 402, name: "Neck & Back Bleach", price: 350, desc: "Even skin tone", category: "Bleach" },
    { id: 403, name: "Full Body Bleach", price: 1000, desc: "Complete skin lightening", category: "Bleach" },

    // Pedicure & Manicure
    { id: 501, name: "Classic Pedicure", price: 500, desc: "Relaxing foot care", category: "Hands & Feet" },
    { id: 502, name: "Spa Pedicure", price: 800, desc: "Luxury foot treatment", category: "Hands & Feet" },
    { id: 503, name: "Classic Manicure", price: 400, desc: "Essential hand care", category: "Hands & Feet" }
];

export const testimonials = [
    {
        id: 1,
        name: "Amrit Pal Sharma",
        text: "Pedicure was amazing I will call you again for same highly recommended !",
        rating: 5,
        date: "a month ago",
        service: "Pedicure"
    },
    {
        id: 2,
        name: "Kanchaan Thakur",
        text: "Great work done by Archita. A professional cosmetician.",
        rating: 5,
        date: "2 months ago",
        service: "Beauty Services"
    },
    {
        id: 3,
        name: "RAHI creations",
        text: "Well experienced and dedicated services.. Must try",
        rating: 5,
        date: "3 months ago",
        service: "General"
    },
    {
        id: 4,
        name: "Happy Customer",
        text: "Amazing work by Archita from glow on wheel Highly recommended!!",
        rating: 5,
        date: "a month ago",
        service: "Beauty Services"
    },
    {
        id: 5,
        name: "Satisfied Client",
        text: "Professional service at home. Very convenient and hygienic.",
        rating: 5,
        date: "2 weeks ago",
        service: "Home Salon"
    }
];
