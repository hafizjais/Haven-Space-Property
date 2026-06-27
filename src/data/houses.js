// src/data/houses.js

// Curated Unsplash images for stunning visual styling (swappable with local paths when actual photos are available)
const roomImages = {
  master: [
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80"
  ],
  medium: [
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"
  ],
  single: [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=800&q=80"
  ],
  sharing: [
    "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
  ]
};

const houses = [
  {
    id: "hs1",
    code: "HS 1",
    name: "Blok B2 Kangkar Pulai",
    fullTitle: "HS 1 - Blok B2 Kangkar Pulai",
    address: "04-01, Blok B2, Flat Jentayu, Kangkar Pulai, Johor Bahru, Johor",
    coverImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80", // Local path: "/images/hs1/cover.jpg"
    description: "Comfortable shared house in a quiet residential area in Kangkar Pulai. Perfect for UTM students or working professionals nearby, with easy access to local shops, eateries, and public transport.",
    location: {
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.3529902909468!2d103.58221007496616!3d1.5528949984325942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMzMnMTAuNCJOIDEwM8KwMzUnMDUuMiJF!5e0!3m2!1sen!2smy!4v1782544133447!5m2!1sen!2smy"
    },
    facilities: ["Parking Available", "Washing Machine", "WiFi-ready", "Refrigerator", "Kitchen / Light Cooking Allowed"],
    rooms: [
      {
        id: "hs1-r1",
        roomNo: "Bilik Twin",
        type: "Two Single Beds",
        price: 550,
        availability: "Available",
        amenities: ["Air-Conditioning", "Attached Bathroom", "Wardrobe", "Window", "Queen Bed", "Study Desk & Chair"],
        images: [
          roomImages.master[0], // Local path: "/images/hs1/room1-1.jpg"
          roomImages.master[1]  // Local path: "/images/hs1/room1-2.jpg"
        ],
        description: "Spacious master room featuring a private attached bathroom, high-speed WiFi coverage, and plenty of natural daylight."
      },
      {
        id: "hs1-r2",
        roomNo: "Bilik Biasa",
        type: "Single Bed",
        price: 390,
        availability: "Not Available",
        amenities: ["Air-Conditioning", "Shared Bathroom", "Wardrobe", "Single Bed", "Window", "Study Desk"],
        images: [
          roomImages.medium[0] // Local path: "/images/hs1/room2-1.jpg"
        ],
        description: "Cozy medium room equipped with efficient cooling. Ideal for working professionals or senior students seeking a quiet environment."
      },
      {
        id: "hs1-r3",
        roomNo: "Bilik Besar",
        type: "Single Bed",
        price: 450,
        availability: "Available",
        amenities: ["Fan", "Shared Bathroom", "Single Bed", "Wardrobe"],
        images: [
          roomImages.single[0] // Local path: "/images/hs1/room3-1.jpg"
        ],
        description: "Compact and budget-friendly single room. Standard furnishings provided, perfect for minimalist living."
      },
      {
        id: "hs1-r4",
        roomNo: "Bilik Kecil",
        type: "Single Bed",
        price: 350,
        availability: "Not Available",
        amenities: ["Air-Conditioning", "Shared Bathroom", "Wardrobe", "Single Bed", "Window"],
        images: [
          roomImages.single[1] // Local path: "/images/hs1/room4-1.jpg"
        ],
        description: "Bright, fully-furnished single room with air-conditioning. Situated near the kitchen and common dining area."
      }
    ]
  },
  {
    id: "hs2",
    code: "HS 2",
    name: "Blok D Pulai Utama",
    fullTitle: "HS 2 - Blok D Pulai Utama",
    address: "D04-11, Jalan Pulai 84/3, Taman Pulai Utama",
    coverImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80", // Local: "/images/hs2/cover.jpg"
    description: "Centrally located apartment unit in Taman Pulai Utama, Johor Bahru. In close proximity to AEON Taman Universiti, food courts, and less than a 5-minute drive to UTM Main Campus.",
    location: {
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.378147884128!2d103.6154060749661!3d1.539505998446092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMzInMjIuMiJOIDEwM8KwMzcnMDQuNyJF!5e0!3m2!1sen!2smy!4v1782567730229!5m2!1sen!2smy"
    },
    facilities: ["Washing Machine", "Cooker", "Gated Security", "Refrigerator", "Parking Available"],
    rooms: [
      {
        id: "hs2-r1",
        roomNo: "Bilik Master Twin",
        type: "Two Single Beds",
        price: 550,
        availability: "Occupied",
        amenities: ["Air-Conditioning", "Wardrobe", "Comforter & mattress", "Portable fan"],
        images: [roomImages.master[0]],
        description: "Harga mampu milik untuk students. Bil api dan air included (+ air-conditioning)."
      },
      {
        id: "hs2-r2",
        roomNo: "Bilik Biasa",
        type: "Single Bed",
        price: 390,
        availability: "Occupied",
        amenities: ["Air-Conditioning", "Single Bed", "Wardrobe"],
        images: [roomImages.medium[0]],
        description: "Mid-sized room fully equipped with a study desk and tall closet"
      },
      {
        id: "hs2-r3",
        roomNo: "Bilik Kecil (Rooftop)",
        type: "Single Bed",
        price: 350,
        availability: "Available",
        amenities: ["Air-conditioning", "Portable Fan", "Wardrobe"],
        images: [roomImages.single[0]],
        description: "Bilik kecil di rooftop. Keluasan bilik agak sempit dan panas pada waktu siang tetapi air-conditioning disediakan."
      },
      {
        id: "hs2-r4",
        roomNo: "Bilik Medium",
        type: "Single Bed",
        price: 450,
        availability: "Reserved",
        amenities: ["Fan", "Wardrobe", "Window", "Portable Fan", "Comforter & mattress"],
        images: [roomImages.single[1]],
        description: "Bilik saiz medium yang selesa dan mepunyai air-conditioning dan kipas angin membantu pengudaraan dengan baik."
      }
    ]
  },
  {
    id: "hs3",
    code: "HS 3",
    name: "Blok C Pulai Flora",
    fullTitle: "HS 3 - Blok C Pulai Flora",
    address: "Jalan Flora 1, Taman Pulai Flora, 81300 Skudai, Johor",
    coverImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    description: "Quiet residential flat in the premium Pulai Flora housing district. Walking distance to Pulai Springs Resort and nearby shop offices offering convenience stores, clinics, and local restaurants.",
    location: {
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.3579567190905!2d103.61943407496615!3d1.5502609984352513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMzMnMDAuOSJOIDEwM8KwMzcnMTkuMiJF!5e0!3m2!1sen!2smy!4v1782569739416!5m2!1sen!2smy"
    },
    facilities: ["Parking Available", "Washing Machine", "Kitchen Stove", "Shared bathroom"],
    rooms: [
      {
        id: "hs3-r1",
        roomNo: "Bilik Master",
        type: "Single Bed",
        price: 650,
        availability: "Occupied",
        amenities: ["Air-Conditioning", "Private Bathroom", "Single Bed", "Window", "Wardrobe", "Floor Lamp"],
        images: [roomImages.master[0]],
        description: "Premium master bedroom with ensuite bathroom. Features a modern working station and wardrobe setup."
      },
      {
        id: "hs3-r2",
        roomNo: "Bilik Besar",
        type: "Queen Bed",
        price: 590,
        availability: "Available",
        amenities: ["Air-Conditioning", "Queen Bed", "Wardrobe", "Window"],
        images: [roomImages.medium[0]],
        description: "Bilik besar katil queen bed sesuai untuk 2 orang. Bilik ini mempunyai air-conditioning dan kipas angin. Harga mampu milik."
      },
      {
        id: "hs3-r3",
        roomNo: "Bilik Kecil",
        type: "Single Bed",
        price: 450,
        availability: "Occupied",
        amenities: ["No air-conditioning", "Single Bed", "Wardrobe", "Window", "Floor Lamp"],
        images: [roomImages.single[0]],
        description: "Bilik kecil katil single harga mampu milik dan selesa"
      },
      {
        id: "hs3-r4",
        roomNo: "Bilik Twin Sharing",
        type: "Two Single Beds",
        price: 550,
        availability: "Occupied",
        amenities: ["Air-conditioning", "Two Single Beds", "Wardrobe", "Ceiling Fan", "Windows"],
        images: [roomImages.single[1]],
        description: "Bilik harga berpatutan sesuai untuk 2 pax. Harga untuk seorang RM 350 jika ambil whole room."
      }
    ]
  },
  {
    id: "hs4",
    code: "HS 4",
    name: "Blok J Pulai Utama",
    fullTitle: "HS 4 - Blok J Pulai Utama",
    address: "J03-03, Jalan Pulai 83/2, Taman Pulai Utama, 81300 Skudai, Johor Bahru, Johor",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Spacious town-apartment situated in the popular Taman Pulai Utama area. Walking distance to U-Mall Shopping Centre, giant supermarkets, local dry cleaners, and UTM buses routes.",
    location: {
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.376136027578!2d103.61562007496609!3d1.5405809984450058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMzInMjYuMSJOIDEwM8KwMzcnMDUuNSJF!5e0!3m2!1sen!2smy!4v1782571334582!5m2!1sen!2smy"
    },
    facilities: ["Water Filter", "Refrigerator", "Shared bathroom with water heater"],
    rooms: [
      {
        id: "hs4-r1",
        roomNo: "Bilik Sharing",
        type: "Two Single Beds",
        price: 590,
        availability: "Available",
        amenities: ["Ceiling Fan", "Wardrobe", "Window"],
        images: [roomImages.master[0]],
        description: "Bilik katil single untuk 2 orang dan ruang yang selesa beserta wardrobe untuk setiap sorang."
      },
      {
        id: "hs4-r2",
        roomNo: "Bilik Besar",
        type: "Queen Bed",
        price: 590,
        availability: "Occupied",
        amenities: ["Queen Bed", "Ceiling Fan", "Wardrobe", "Window"],
        images: [roomImages.medium[0]],
        description: "Bilik katil queen bed sesuai untuk 2 orang dan mempunyai ruang yang selesa dengan harga berpatutan."
      },
      {
        id: "hs4-r3",
        roomNo: "Bilik Kecil 1",
        type: "Single Room",
        price: 490,
        availability: "Occupied",
        amenities: ["Fan", "Single Bed", "Wardrobe"],
        images: [roomImages.single[0]],
        description: "Bilik saiz kecil sesuai dengan harga berpatutan."
      },
      {
        id: "hs4-r4",
        roomNo: "Bilik Kecil 2",
        type: "Single Room",
        price: 370,
        availability: "Occupied",
        amenities: ["Portable Fan", "Single Bed", "Wardrobe", "Window"],
        images: [roomImages.single[1]],
        description: "Budget single room equipped with quality foam mattress, hanger stand, and general utility desk."
      }
    ]
  },
  {
    id: "hs5",
    code: "HS 5",
    name: "Blok B Villa Krystal",
    fullTitle: "HS 5 - Blok B Villa Krystal",
    address: "Blok B-18-13, Villa Krystal, Jalan Silat Lincah, Bandar Selesa Jaya, 81300 Skudai, Johor Bahru, Johor",
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "Apartment in Selesa Jaya, Johor. Residents enjoy strict 24/7 security card access, high floor breeze, an outdoor swimming pool, and direct parking options.",
    location: {
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.4690143842854!2d103.63210707496606!3d1.490144998495875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMjknMjQuNSJOIDEwM8KwMzgnMDQuOSJF!5e0!3m2!1sen!2smy!4v1782572586642!5m2!1sen!2smy"
    },
    facilities: ["Swimming Pool", "24/7 Security Guards", "Parking Space", "Convenience Store", "Washing Machine", "Kitchen Stove", "Refrigerator", "Water Filter"],
    rooms: [
      {
        id: "hs5-r1",
        roomNo: "Bilik Master",
        type: "Queen Bed",
        price: 650,
        availability: "Available",
        amenities: ["Air-Conditioning", "Private Bathroom with water heater", "Queen Bed", "Window", "Wardrobe"],
        images: [roomImages.master[0]],
        description: "Bilik master mempunyai bilik air sendiri dan air-conditioning."
      },
      {
        id: "hs5-r2",
        roomNo: "Bilik Besar 1 (Balkoni)",
        type: "Queen Bed",
        price: 650,
        availability: "Reserved",
        amenities: ["Air-Conditioning", "Shared Bathroom with water heater", "Queen Bed", "Wardrobe", "Balkoni"],
        images: [roomImages.medium[0]],
        description: "Premium medium room with large queen bed, cooling AC, and balcony."
      },
      {
        id: "hs5-r3",
        roomNo: "Bilik Besar 2",
        type: "Queen Bed",
        price: 590,
        availability: "Available",
        amenities: ["Study desk", "Queen Bed", "Wardrobe"],
        images: [roomImages.single[0]],
        description: "Bilik katil queen sesuai untuk 2 orang dengan keluasan bilik yang sangat selesa."
      },
      {
        id: "hs5-r4",
        roomNo: "Bilik Single 1",
        type: "Single Room",
        price: 490,
        availability: "Available",
        amenities: ["Ceiling Fan", "Single Bed", "Clothing Rack Wall Mounted"],
        images: [roomImages.single[1]],
        description: "Bilik kecil cozy dengan harga bajet untuk seorang"
      },
      {
        id: "hs5-r5",
        roomNo: "Bilik Medium",
        type: "No picture available",
        price: 550,
        availability: "Occupied",
        amenities: ["Ceiling Fan", "Wardrobe", "Window", "Single Bed"],
        images: [roomImages.sharing[0]],
        description: "Bilik saiz medium dengan harga bajet untuk seorang"
      }
    ]
  },
  {
    id: "hs6",
    code: "HS 6",
    name: "Blok C Villa Krystal",
    fullTitle: "HS 6 - Blok C Villa Krystal",
    address: "Blok C-16-01, Villa Krystal, Jalan Silat Lincah, Bandar Selesa Jaya, 81300 Skudai, Johor Bahru, Johor",
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "Apartment in Selesa Jaya, Johor. Residents enjoy strict 24/7 security card access, high floor breeze, an outdoor swimming pool, and direct parking options.",
    location: {
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.4690143842854!2d103.63210707496606!3d1.490144998495875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMjknMjQuNSJOIDEwM8KwMzgnMDQuOSJF!5e0!3m2!1sen!2smy!4v1782572586642!5m2!1sen!2smy"
    },
    facilities: ["Swimming Pool", "24/7 Security Guards", "Parking Space", "Convenience Store", "Washing Machine", "Kitchen Stove", "Refrigerator", "Water Filter"],
    rooms: [
      {
        id: "hs6-r1",
        roomNo: "Bilik Master",
        type: "Queen Bed",
        price: 650,
        availability: "Available",
        amenities: ["WiFi", "Air-Conditioning", "Private Bathroom with water heater", "Queen Bed", "Window", "Wardrobe"],
        images: [roomImages.master[0]],
        description: "Bilik master mempunyai bilik air sendiri dan air-conditioning."
      },
      {
        id: "hs6-r2",
        roomNo: "Bilik Besar 1 (Balkoni)",
        type: "Queen Bed",
        price: 650,
        availability: "Available",
        amenities: ["Air-Conditioning", "Shared Bathroom with water heater", "Queen Bed", "Wardrobe", "Balkoni"],
        images: [roomImages.medium[0]],
        description: "Premium medium room with large queen bed, cooling AC, and balcony."
      },
      {
        id: "hs6-r3",
        roomNo: "Bilik Besar 2",
        type: "Queen Bed",
        price: 590,
        availability: "Occupied",
        amenities: ["Study desk", "Queen Bed", "Wardrobe"],
        images: [roomImages.single[0]],
        description: "Bilik katil queen sesuai untuk 2 orang dengan keluasan bilik yang sangat selesa."
      },
      {
        id: "hs6-r4",
        roomNo: "Bilik Single 1",
        type: "Single Room",
        price: 490,
        availability: "Available",
        amenities: ["Ceiling Fan", "Single Bed", "Clothing Rack Wall Mounted"],
        images: [roomImages.single[1]],
        description: "Bilik kecil cozy dengan harga bajet untuk seorang"
      },
      {
        id: "hs6-r5",
        roomNo: "Bilik Medium",
        type: "No picture available",
        price: 550,
        availability: "Occupied",
        amenities: ["Ceiling Fan", "Wardrobe", "Window", "Single Bed"],
        images: [roomImages.sharing[0]],
        description: "Bilik saiz medium dengan harga bajet untuk seorang"
      }
    ]
  }
];

export default houses;
