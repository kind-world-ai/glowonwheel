export interface GalleryItem {
    id: number;
    category: 'facial' | 'makeup' | 'hair';
    title: string;
    description: string;
    beforeImage: string;
    afterImage: string;
    service: string;
}

export const galleryItems: GalleryItem[] = [
    // Makeup Transformations
    {
        id: 1,
        category: 'makeup',
        title: 'Bridal Makeup Transformation',
        description: 'Stunning bridal look with natural glow and elegant styling',
        beforeImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
        afterImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
        service: 'Party Makeup'
    },
    {
        id: 2,
        category: 'makeup',
        title: 'Party Makeup Glow-Up',
        description: 'Glamorous evening look with bold eyes and perfect contouring',
        beforeImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
        afterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
        service: 'Party Makeup'
    },
    {
        id: 3,
        category: 'makeup',
        title: 'Natural Makeup Enhancement',
        description: 'Subtle enhancement for a fresh, natural everyday look',
        beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800',
        afterImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=800',
        service: 'Party Makeup'
    },

    // Facial Transformations
    {
        id: 4,
        category: 'facial',
        title: 'Gold Facial Radiance',
        description: 'Instant glow and brightening with our signature gold facial',
        beforeImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
        afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
        service: 'Gold Facial'
    },
    {
        id: 5,
        category: 'facial',
        title: 'De-Tan Treatment Results',
        description: 'Visible tan removal and skin brightening after treatment',
        beforeImage: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&q=80&w=800',
        afterImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800',
        service: 'De-Tan Pack'
    },
    {
        id: 6,
        category: 'facial',
        title: 'Diamond Facial Glow',
        description: 'Premium skin brightening and rejuvenation treatment',
        beforeImage: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=800',
        afterImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
        service: 'Diamond Facial'
    },

    // Hair Transformations
    {
        id: 7,
        category: 'hair',
        title: 'Bridal Hair Styling',
        description: 'Elegant updo with traditional accessories for wedding day',
        beforeImage: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800',
        afterImage: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800',
        service: 'Hair Styling'
    },
    {
        id: 8,
        category: 'hair',
        title: 'Curly Hair Transformation',
        description: 'Beautiful curls and volume for special occasions',
        beforeImage: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=800',
        afterImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800',
        service: 'Hair Styling'
    },
    {
        id: 9,
        category: 'hair',
        title: 'Sleek Straight Styling',
        description: 'Smooth, glossy straight hair with professional styling',
        beforeImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
        afterImage: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&q=80&w=800',
        service: 'Hair Styling'
    }
];
