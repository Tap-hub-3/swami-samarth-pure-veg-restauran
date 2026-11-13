const SITE = {
  // Digits only, with country code and no + or spaces. Example: 919876543210
  whatsapp: "919172064646",
  // Shown on the website and used for the Call button
  phoneDisplay: "+91 9172064646",
  phoneDial: "+919172064646",
  address: "Shop No., Street, Area, City, State, PIN",
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
      // { n: "Vada Pav", p: 25, pop: true },
      // { n: "Samosa", p: 20 },
      { n: "Kanda Bhaji", p: 50 },
      { n: "Sabudana Khichdi", p: 70 },
      { n: "Paneer Pakoda", p: 120 },
      { n: "Bhaji", p: 20 },
      { n: "Aalu Biryani", p: 30 }
    ]
  },
  {
    id: "fastfood",
    name: "Fast Food",
    subtitle: "Sandwiches, burgers and pav bhaji",
    items: [
      { n: "Pav Bhaji", p: 80, pop: true },
      { n: "Cheese Pav Bhaji", p: 100 },
      // { n: "Veg Sandwich", p: 50 },
      // { n: "Grilled Sandwich", p: 80 },
      // { n: "Veg Burger", p: 70 },
      // { n: "French Fries", p: 70 },
      // { n: "Veg Pizza", p: 150 }
    ]
  },
  {
    id: "south",
    name: "South Indian",
    subtitle: "Crisp dosas and soft idlis",
    items: [
      { n: "Idli Sambar", p: 50 },
      { n: "Medu Vada", p: 50 },
      { n: "Plain Dosa", p: 70 },
      { n: "Masala Dosa", p: 90, pop: true },
      { n: "Cheese Dosa", p: 100 },
      { n: "Paneer Dosa", p: 120 },
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
      { n: "Veg Manchurian", p: 100 },
      { n: "Gobi Manchurian", p: 110 },
      { n: "Paneer Chilli", p: 180 },
      
      // { n: "Veg Spring Roll", p: 100 }
    ]
  },
  {
    id: "paneer",
    name: "Paneer Specials",
    subtitle: "Rich and creamy paneer dishes",
    items: [
      { n: "Paneer Masala", p: 180 },
      { n: "Palak Paneer", p: 180 },
      { n: "Paneer Matar", p: 180 },
      { n: "Paneer Curry", p: 180 },
      { n: "Paneer Banarasi", p: 180 },
      { n: "Paneer Butter Masala", p: 190, pop: true },
      { n: "Paneer Kadhai", p: 190 },
      { n: "Paneer Chatpata", p: 190 },
      { n: "Paneer Tikka Masala", p: 200 },
      { n: "Shahi Paneer", p: 220 },
      { n: "Paneer Hyderabadi", p: 200 },
      { n: "Paneer Bhurji", p: 250 },
      { n: "Kaju Paneer", p: 220 },
      { n: "Paneer Mushroom", p: 240 },
      { n: "Paneer Maratha", p: 220 },
      { n: "Paneer Handi", p: 430 }
    ]
  },
  {
    id: "sabzi",
    name: "Sabzi & Dal",
    subtitle: "Best with roti or rice",
    items: [
      { n: "Mix Veg", p: 170 },
      { n: "Aloo Gobi", p: 150 },
      { n: "Shev Bhaji", p: 140 },
      { n: "Dal Fry", p: 120 },
      { n: "Dal Tadka", p: 140 },
      { n: "Chana Masala", p: 150 },
      { n: "Aalu Palak", p: 150 },
      { n: "Aalu Matar", p: 150 },
      { n: "Tawa Besan", p: 150 },
      { n: "Bhendi Fry", p: 160 },
      { n: "Baigan Masala", p: 170 },
      { n: "Dal Khichdi", p: 170 },
      { n: "Baigan Hyderabadi", p: 190 },
      { n: "Malai Methi", p: 190 },
      { n: "Lasuni Methi", p: 190 },
      { n: "Moong Methi", p: 190 },
      { n: "Kaju Korma", p: 190 },
      { n: "Veg Hyderabadi", p: 200 },
      { n: "Mushroom Masala", p: 200 },
      { n: "Veg KolhaPuri", p: 200 },
      { n: "Methi Chaman", p: 200 },
      // { n: "Mashroom curry", p: 200 },   ← removed: duplicate of "Mushroom Masala"
      { n: "Gavran Curry", p: 200 },
      { n: "Veg Patiala", p: 200 },
      { n: "Kaju Curry", p: 220 }
    ]
  },
  {
    id: "roti",
    name: "Roti & Paratha",
    subtitle: "Fresh breads and parathas",
    items: [
      { n: "Tandoori Roti", p: 15 },
      { n: "Butter Roti", p: 20 },
      { n: "Butter Tandoori Roti", p: 20 },
      { n: "Butter Naan", p: 50 },
      { n: "Laccha Paratha", p: 30 },
      { n: "Butter Laccha Paratha", p: 35 },
      { n: "Mix Veg Paratha", p: 100 },
      { n: "Aalu Paratha", p: 70 },
      { n: "Plain Paratha", p: 15 },
      { n: "Chapati ", p: 10 }
    ]
  },
  {
    id: "rice",
    name: "Rice & Biryani",
    subtitle: "Rice, pulao and biryani",
    items: [
      {n:"Half Jeera rice",p:70},
      { n: "Jeera Rice", p: 120 },
      { n: "Veg Pulao", p: 140 },
      { n: "Veg Biryani", p: 170, pop: true },
      { n: "Masala Papad", p: 25 },
      { n: "paneer pulav", p: 200 },
      {n:"Steam Rice",p:100},
      {n:"Roast Papad",p:15}
    ]
  },
  {
    id: "thali",
    name: "Thali",
    subtitle: "A full meal on one plate",
    items: [
      { n: "Special Veg Thali", p: 150, pop: true },
      { n: "Punjabi Rice Plate", p: 200 }
      // { n: "Maharashtrian Thali", p: 160 },
      // { n: "Mini Thali", p: 120 },
      // { n: "Pithla Bhakri", p: 110 }
    ]
  },
  {
    id: "drinks",
    name: "Beverages & Sweets",
    subtitle: "Cool drinks, chai and dessert",
    items: [
      {n:"Mineral Bottle",p:20},
      { n: "Masala Chai", p: 15 },
      { n: "Coffee", p: 25 },
      { n: "milk", p: 25 },
      {n:"Sprite",p:25},
      {n:"ThumbsUp",p:25},
      {n:"Jeera Soda",p:15}
  
      // { n: "Fresh Lime Soda", p: 40 },
      // { n: "Sweet Lassi", p: 50 },
      // { n: "Cold Coffee", p: 70 },
      // { n: "Gulab Jamun", p: 40 }
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
