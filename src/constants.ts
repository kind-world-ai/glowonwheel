// Business Constants
export const BUSINESS_NAME = "Glow on Wheel";
export const BUSINESS_PHONE = "+918437085459";
export const WHATSAPP_NUMBER = "918437085459";
export const BUSINESS_EMAIL = "contact@glowonwheel.com";
export const BUSINESS_URL = "https://glowonwheel.com";

// Address
export const BUSINESS_ADDRESS = {
  street: "Sector 124, Sunny Enclave",
  city: "Kharar",
  state: "Punjab",
  pincode: "140301",
  country: "India",
  full: "Sector 124, Sunny Enclave, Kharar, Punjab 140301"
};

// Coordinates
export const BUSINESS_COORDINATES = {
  latitude: 30.7573438,
  longitude: 76.6623403
};

// Pricing
export const VISITING_CHARGE = 99;
export const FREE_VISIT_THRESHOLD = 499;

// Operating Hours
export const OPERATING_HOURS = {
  homeSalon: {
    start: "9:00 AM",
    end: "5:00 PM"
  },
  stall: {
    start: "5:00 PM",
    end: "9:00 PM"
  }
};

// Social Media (add when available)
export const SOCIAL_LINKS = {
  instagram: "",
  facebook: "",
  youtube: ""
};

// SEO Meta Data
export const SEO_DATA = {
  home: {
    title: "Glow on Wheel | Mobile Beauty Salon & Accessories in Mohali",
    description: "Glow on Wheel offers professional home salon services and trendy beauty accessories in Mohali. Book facials, waxing, makeup & shop stylish essentials!",
    keywords: "home salon mohali, beauty services kharar, mobile salon punjab"
  },
  services: {
    title: "Salon Services | Glow on Wheel - Home Beauty Services in Mohali",
    description: "Book professional home salon services in Mohali - facials, waxing, makeup, mehendi, manicure & pedicure. Affordable prices with free home visit on orders above ₹499.",
    keywords: "home salon services mohali, facial at home, waxing services kharar, bridal makeup mohali"
  },
  howto: {
    title: "Beauty Tips & Tutorials | Glow on Wheel",
    description: "Learn beauty tips and tutorials from Glow on Wheel. Get expert advice on skincare, makeup application, and beauty routines.",
    keywords: "beauty tips, makeup tutorials, skincare advice, beauty hacks"
  },
  faq: {
    title: "FAQ & Contact | Glow on Wheel - Find Us in Mohali",
    description: "Find Glow on Wheel location, operating hours, and contact information. We serve Mohali, Kharar, and surrounding areas in Punjab.",
    keywords: "glow on wheel location, beauty salon mohali contact, kharar salon"
  },
  privacy: {
    title: "Privacy Policy | Glow on Wheel",
    description: "Privacy policy for Glow on Wheel - how we collect, use, and protect your personal information.",
    keywords: "privacy policy, data protection"
  },
  terms: {
    title: "Terms of Service | Glow on Wheel",
    description: "Terms and conditions for using Glow on Wheel services and website.",
    keywords: "terms of service, terms and conditions"
  }
};

// Google Maps
export const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.9466329337!2d76.65976537624166!3d30.75734377457266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff01f1f01e4f9%3A0x2469a1043a14406c!2sSector%20124%2C%20Sunny%20Enclave%2C%20Kharar%2C%20Punjab%20140301!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin";
export const GOOGLE_MAPS_DIRECTIONS_URL = "https://www.google.com/maps/place/Sector+124,+Sunny+Enclave,+Kharar,+Punjab+140301/@30.7567386,76.6591099,17z/data=!3m1!4b1!4m6!3m5!1s0x390ff01f1f01e4f9:0x2469a1043a14406c!8m2!3d30.7573438!4d76.6623403!16s%2Fg%2F11by_gm3b2";

// Utility function to open WhatsApp with message
export const openWhatsApp = (message: string) => {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
};

// Utility function to get WhatsApp URL
export const getWhatsAppUrl = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
