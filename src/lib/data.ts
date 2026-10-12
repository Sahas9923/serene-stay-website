import {
  Armchair, Baby, Ban, BedDouble, Bus, Car, CigaretteOff, Coffee, CookingPot, Flower2,
  House, Landmark, Laptop, LogIn, LogOut, Maximize2, PartyPopper, PawPrint, Plane,
  ShieldCheck, ShowerHead, Snowflake, Trees, UtensilsCrossed, Waves, WashingMachine, Wifi,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  SITE DETAILS: replace the placeholder (TODO) values with real ones */
/* ------------------------------------------------------------------ */
export const site = {
  name: "Serene Stay",
  area: "Rattanapitiya, Boralesgamuwa",
  address: "Rattanapitiya, Boralesgamuwa, Sri Lanka", // TODO: exact address
  phone: "+94 77 000 0000", // TODO
  whatsapp: "94770000000", // TODO: digits only, with country code
  email: "info@serenestay.lk", // TODO
  bookingUrl: "https://www.booking.com/hotel/lk/serene-stay-1.html",
  mapEmbed:
    "https://www.google.com/maps?q=Rattanapitiya+Junction+Boralesgamuwa+Sri+Lanka&z=15&output=embed", // TODO: exact pin
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "The Apartment", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Rates", href: "#rates" },
  { label: "Contact", href: "#contact" },
];

export const highlights: { icon: LucideIcon; label: string }[] = [
  { icon: House, label: "Entire apartment" },
  { icon: Maximize2, label: "40 m² of space" },
  { icon: BedDouble, label: "King-size bed" },
  { icon: Wifi, label: "Free WiFi · 19 Mbps" },
  { icon: Car, label: "Free private parking" },
  { icon: Snowflake, label: "Air conditioning" },
];

export const aboutPoints = [
  "Ideal for couples, friends and business travellers",
  "Washing machine & full kitchen, perfect for longer stays",
  "Rattanapitiya Junction & the 120 bus route within walking distance",
  "Easy access to the University of Sri Jayewardenepura",
];

export const amenityGroups: { icon: LucideIcon; title: string; items: string[] }[] = [
  { icon: CookingPot, title: "Kitchen", items: ["Refrigerator", "Microwave", "Electric kettle", "Kitchenware", "Dining table"] },
  { icon: BedDouble, title: "Bedroom", items: ["Extra-large double bed", "Fresh linen", "Wardrobe", "Air conditioning"] },
  { icon: ShowerHead, title: "Bathroom", items: ["Private ensuite", "Shower", "Bidet", "Towels & toiletries"] },
  { icon: Armchair, title: "Living Area", items: ["Seating area", "Flat-screen TV", "Work desk", "Tiled floors"] },
  { icon: WashingMachine, title: "Comfort", items: ["Washing machine", "Iron & ironing facilities", "Non-smoking throughout"] },
  { icon: Trees, title: "Outdoors & Views", items: ["Private balcony", "Terrace", "Garden view", "Inner courtyard view"] },
  { icon: ShieldCheck, title: "Safety & Parking", items: ["CCTV outside property", "Free private parking on site", "Quiet, secure neighbourhood"] },
  { icon: Laptop, title: "Work & Connect", items: ["Free WiFi, 19 Mbps", "HD streaming & video calls", "Dedicated work desk"] },
];

export type GalleryCategory = "Bedroom" | "Living & Kitchen" | "Bathroom" | "Exterior" | "Neighbourhood";

export const galleryCategories: ("All" | GalleryCategory)[] = [
  "All", "Bedroom", "Living & Kitchen", "Bathroom", "Exterior", "Neighbourhood",
];

export const galleryImages: { src: string; alt: string; w: number; h: number; category: GalleryCategory }[] = [
  { src: "/images/14.jpg", alt: "Bedroom with teak bed and curtains", w: 1024, h: 683, category: "Bedroom" },
  { src: "/images/1.jpg", alt: "Front of Serene Stay with palm trees", w: 575, h: 768, category: "Exterior" },
  { src: "/images/4.jpg", alt: "Kitchenette with microwave and cooker", w: 1024, h: 683, category: "Living & Kitchen" },
  { src: "/images/17.jpg", alt: "King-size bed with white linen", w: 1024, h: 683, category: "Bedroom" },
  { src: "/images/12.jpg", alt: "Boralesgamuwa lake under blue skies", w: 1024, h: 768, category: "Neighbourhood" },
  { src: "/images/3.jpg", alt: "Marble-tiled bathroom with rain shower", w: 512, h: 768, category: "Bathroom" },
  { src: "/images/5.jpg", alt: "Living area with armchairs", w: 1024, h: 683, category: "Living & Kitchen" },
  { src: "/images/7.jpg", alt: "Bright bedroom with timber ceiling beams", w: 1024, h: 683, category: "Bedroom" },
  { src: "/images/13.jpg", alt: "Entrance courtyard with potted plants", w: 1024, h: 768, category: "Exterior" },
  { src: "/images/2.jpg", alt: "Bedroom with wooden headboard", w: 512, h: 768, category: "Bedroom" },
  { src: "/images/6.jpg", alt: "Lakeside walking track", w: 1024, h: 768, category: "Neighbourhood" },
  { src: "/images/8.jpg", alt: "Bathroom sink and mirror", w: 1024, h: 683, category: "Bathroom" },
  { src: "/images/16.jpg", alt: "Desk and wardrobe in bedroom", w: 1024, h: 683, category: "Bedroom" },
  { src: "/images/15.jpg", alt: "Open living and kitchen space", w: 512, h: 768, category: "Living & Kitchen" },
  { src: "/images/21.jpg", alt: "Bedroom with balcony door", w: 1024, h: 683, category: "Bedroom" },
  { src: "/images/22.jpg", alt: "Ibis birds by the canal", w: 1024, h: 768, category: "Neighbourhood" },
  { src: "/images/18.jpg", alt: "Bedroom with wardrobe and AC", w: 1024, h: 683, category: "Bedroom" },
  { src: "/images/20.jpg", alt: "Clean bathroom with bidet", w: 1024, h: 683, category: "Bathroom" },
  { src: "/images/25.jpg", alt: "Serene Stay entrance at night", w: 576, h: 768, category: "Exterior" },
  { src: "/images/19.jpg", alt: "Bedroom work desk", w: 1024, h: 683, category: "Bedroom" },
  { src: "/images/23.jpg", alt: "Shaded walking path by the water", w: 1024, h: 768, category: "Neighbourhood" },
];

export const rates = [
  {
    name: "One-Bedroom Apartment",
    guests: "Up to 2 guests",
    price: 8269,
    taxes: 1488,
    featured: true,
    features: ["Entire 40 m² apartment", "1 extra-large double bed", "Private kitchen & ensuite", "Balcony with garden view", "AC & flat-screen TV"],
  },
  {
    name: "Single Guest Rate",
    guests: "1 guest",
    price: 7442,
    taxes: 1340,
    featured: false,
    features: ["Entire 40 m² apartment", "Same comforts, solo price", "Great for business trips", "Desk & fast WiFi", "Free private parking"],
  },
];

export const bookingPerks = [
  "Free cancellation (conditions vary by date)",
  "No prepayment, pay at the property",
  "No credit card needed",
];

export const nearby: { icon: LucideIcon; title: string; places: { name: string; distance?: string }[] }[] = [
  {
    icon: Flower2,
    title: "Around the corner",
    places: [
      { name: "Bellanwila Temple" },
      { name: "Pillewa Temple" },
      { name: "Bellanwila Walking Track" },
      { name: "Boralesgamuwa Lake", distance: "3.4 km" },
      { name: "Lakeside Park", distance: "3 km" },
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Eat nearby",
    places: [
      { name: "Vege Dine", distance: "150 m" },
      { name: "Canal View Restaurant", distance: "200 m" },
      { name: "Fresh Food Center", distance: "300 m" },
    ],
  },
  {
    icon: Landmark,
    title: "Colombo highlights",
    places: [
      { name: "Dehiwala Zoo", distance: "4 km" },
      { name: "Independence Square", distance: "9 km" },
      { name: "Viharamahadevi Park", distance: "10 km" },
      { name: "Galle Face Green", distance: "11 km" },
      { name: "Dutch Hospital", distance: "12 km" },
    ],
  },
  {
    icon: Waves,
    title: "Beaches",
    places: [{ name: "Mount Lavinia Beach" }, { name: "Wellawatte Beach" }, { name: "Bambalapitiya Beach" }],
  },
  {
    icon: Bus,
    title: "Getting around",
    places: [
      { name: "Rattanapitiya Junction", distance: "walk" },
      { name: "120 bus route", distance: "walk" },
      { name: "Mount Lavinia Bus Stand" },
    ],
  },
  {
    icon: Plane,
    title: "Airport",
    places: [{ name: "Bandaranaike International (BIA)", distance: "39 km" }],
  },
];

export const houseRules: { icon: LucideIcon; title: string; text: string; allowed: boolean }[] = [
  { icon: LogIn, title: "Check-in", text: "15:00 – 18:00. Please let us know your arrival time in advance.", allowed: true },
  { icon: LogOut, title: "Check-out", text: "08:00 – 11:00", allowed: true },
  { icon: Baby, title: "Children welcome", text: "All ages welcome. Children 3+ are charged as adults.", allowed: true },
  { icon: Coffee, title: "Special requests", text: "Just ask, we're happy to help where we can.", allowed: true },
  { icon: Ban, title: "No cots or extra beds", text: "Cots and extra beds aren't available.", allowed: false },
  { icon: CigaretteOff, title: "No smoking", text: "The whole property is non-smoking.", allowed: false },
  { icon: PartyPopper, title: "No parties", text: "Parties, events, hen & stag groups aren't allowed.", allowed: false },
  { icon: PawPrint, title: "No pets", text: "Sorry, pets can't be accommodated.", allowed: false },
];

export const formatLKR = (n: number) => `LKR ${n.toLocaleString("en-US")}`;