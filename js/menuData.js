/* =========================================================
   EDIT THIS FILE to change your menu, prices and contact info.
   Each dish image must be saved as images/menu/<image-name>.jpg
   (the image name is the dish name in lowercase with hyphens).
   ========================================================= */

const SITE = {
  // Digits only, with country code and no + or spaces. Example: 919876543210
  whatsapp: "91XXXXXXXXXX",
  // Shown on the website and used for the Call button
  phoneDisplay: "+91 XXXXX XXXXX",
  phoneDial: "+91XXXXXXXXXX",
  address: "Shop No., Street, Area, City, State, PIN",
  // Paste the Google Maps share link of your restaurant here (optional).
  // If left empty, a Google Maps search for the address above is used.
  mapLink: "",
  hours: "9:00 AM – 11:00 PM",
  whatsappMessage: "Namaste! I would like to place an order from Shri Swami Samarth Family Restaurant."
};

/* p = price in rupees. pop: true = shows in "Popular Dishes".
   Prices below are SAMPLE prices. Replace with your real prices. */
const MENU = [
  {
    id: "snacks",
    name: "Snacks & Starters",
    subtitle: "Quick bites with chai",
    items: [
      { n: "Misal Pav", p: 70, pop: true },
      { n: "Vada Pav", p: 25, pop: true },
      { n: "Samosa", p: 20 },
      { n: "Kanda Bhaji", p: 50 },
      { n: "Sabudana Khichdi", p: 60 },
      { n: "Paneer Pakoda", p: 120 }
    ]
  },
  {
    id: "fastfood",
    name: "Fast Food",
    subtitle: "Sandwiches, burgers and pav bhaji",
    items: [
      { n: "Pav Bhaji", p: 110, pop: true },
      { n: "Cheese Pav Bhaji", p: 140 },
      { n: "Veg Sandwich", p: 50 },
      { n: "Grilled Sandwich", p: 80 },
      { n: "Veg Burger", p: 70 },
      { n: "French Fries", p: 70 },
      { n: "Veg Pizza", p: 150 }
    ]
  },
  {
    id: "south",
    name: "South Indian",
    subtitle: "Crisp dosas and soft idlis",
    items: [
      { n: "Idli Sambar", p: 60 },
      { n: "Medu Vada", p: 60 },
      { n: "Plain Dosa", p: 70 },
      { n: "Masala Dosa", p: 90, pop: true },
      { n: "Cheese Dosa", p: 110 },
      { n: "Mysore Masala Dosa", p: 110 },
      { n: "Uttapam", p: 90 }
    ]
  },
  {
    id: "chinese",
    name: "Chinese",
    subtitle: "Indo-Chinese favourites",
    items: [
      { n: "Veg Fried Rice", p: 110 },
      { n: "Veg Hakka Noodles", p: 110, pop: true },
      { n: "Schezwan Noodles", p: 120 },
      { n: "Veg Manchurian", p: 120 },
      { n: "Gobi Manchurian", p: 120 },
      { n: "Paneer Chilli", p: 160 },
      { n: "Veg Spring Roll", p: 100 }
    ]
  },
  {
    id: "sabzi",
    name: "Sabzi & Dal",
    subtitle: "Best with roti or rice",
    items: [
      { n: "Paneer Butter Masala", p: 190, pop: true },
      { n: "Kadai Paneer", p: 190 },
      { n: "Palak Paneer", p: 180 },
      { n: "Mix Veg", p: 130 },
      { n: "Aloo Gobi", p: 120 },
      { n: "Shev Bhaji", p: 130 },
      { n: "Dal Fry", p: 120 },
      { n: "Dal Tadka", p: 130 }
    ]
  },
  {
    id: "roti-rice",
    name: "Roti & Rice",
    subtitle: "Breads, rice and biryani",
    items: [
      { n: "Tandoori Roti", p: 15 },
      { n: "Butter Roti", p: 20 },
      { n: "Butter Naan", p: 40 },
      { n: "Jeera Rice", p: 90 },
      { n: "Veg Pulao", p: 120 },
      { n: "Veg Biryani", p: 150, pop: true },
      { n: "Masala Papad", p: 35 }
    ]
  },
  {
    id: "thali",
    name: "Thali",
    subtitle: "A full meal on one plate",
    items: [
      { n: "Special Veg Thali", p: 180, pop: true },
      { n: "Maharashtrian Thali", p: 160 },
      { n: "Mini Thali", p: 120 },
      { n: "Pithla Bhakri", p: 110 }
    ]
  },
  {
    id: "drinks",
    name: "Beverages & Sweets",
    subtitle: "Cool drinks, chai and dessert",
    items: [
      { n: "Masala Chai", p: 15 },
      { n: "Coffee", p: 25 },
      { n: "Buttermilk", p: 25 },
      { n: "Fresh Lime Soda", p: 40 },
      { n: "Sweet Lassi", p: 50 },
      { n: "Cold Coffee", p: 70 },
      { n: "Gulab Jamun", p: 40 }
    ]
  }
];

/* Gallery photos: images/gallery-1.jpg to images/gallery-6.jpg */
const GALLERY = [
  { src: "images/gallery-1.jpg", alt: "Maharashtrian thali" },
  { src: "images/gallery-2.jpg", alt: "Masala dosa with chutney" },
  { src: "images/gallery-3.jpg", alt: "Pav bhaji with butter" },
  { src: "images/gallery-4.jpg", alt: "Paneer sabzi with naan" },
  { src: "images/gallery-5.jpg", alt: "Hakka noodles" },
  { src: "images/gallery-6.jpg", alt: "Chai and snacks" }
];
