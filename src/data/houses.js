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
      lat: 1.5269,
      lng: 103.6010,
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1d15952.880598864758!2d103.5922452!3d1.5269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da73fb8c8b4fb9%3A0xe54d3d2db73bfa2e!2sKangkar%20Pulai%2C%20Johor!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
    },
    facilities: ["Parking Available", "Washing Machine", "WiFi-ready", "Near Public Transport", "Refrigerator", "Kitchen / Light Cooking Allowed"],
    rooms: [
      {
        id: "hs1-r1",
        roomNo: "Room 1",
        type: "Master Room",
        price: 650,
        size: "12 x 14 ft",
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
        roomNo: "Room 2",
        type: "Medium Room",
        price: 500,
        size: "10 x 11 ft",
        availability: "Available",
        amenities: ["Air-Conditioning", "Shared Bathroom", "Wardrobe", "Single Bed", "Window", "Study Desk"],
        images: [
          roomImages.medium[0] // Local path: "/images/hs1/room2-1.jpg"
        ],
        description: "Cozy medium room equipped with efficient cooling. Ideal for working professionals or senior students seeking a quiet environment."
      },
      {
        id: "hs1-r3",
        roomNo: "Room 3",
        type: "Single Room",
        price: 420,
        size: "8 x 10 ft",
        availability: "Occupied",
        amenities: ["Fan", "Shared Bathroom", "Single Bed", "Wardrobe"],
        images: [
          roomImages.single[0] // Local path: "/images/hs1/room3-1.jpg"
        ],
        description: "Compact and budget-friendly single room. Standard furnishings provided, perfect for minimalist living."
      },
      {
        id: "hs1-r4",
        roomNo: "Room 4",
        type: "Single Room",
        price: 450,
        size: "9 x 10 ft",
        availability: "Available",
        amenities: ["Air-Conditioning", "Shared Bathroom", "Wardrobe", "Single Bed", "Window"],
        images: [
          roomImages.single[1] // Local path: "/images/hs1/room4-1.jpg"
        ],
        description: "Bright, fully-furnished single room with air-conditioning. Situated near the kitchen and common dining area."
      },
      {
        id: "hs1-r5",
        roomNo: "Room 5",
        type: "Sharing Room",
        price: 350,
        size: "10 x 12 ft",
        availability: "Available",
        amenities: ["Fan", "Shared Bathroom", "2 Single Beds", "Double Wardrobes", "Window"],
        images: [
          roomImages.sharing[0] // Local path: "/images/hs1/room5-1.jpg"
        ],
        description: "Comfortable sharing room suitable for two tenants. Comes with two separate single beds and individual closets."
      }
    ]
  },
  {
    id: "hs2",
    code: "HS 2",
    name: "Blok D Pulai Utama",
    fullTitle: "HS 2 - Blok D Pulai Utama",
    address: "Jalan Kebangsaan 23, Taman Universiti, 81300 Skudai, Johor Bahru, Johor",
    coverImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80", // Local: "/images/hs2/cover.jpg"
    description: "Centrally located apartment unit in Taman Universiti, Skudai. In close proximity to AEON Taman Universiti, food courts, and less than a 5-minute drive to UTM Main Campus.",
    location: {
      lat: 1.5458,
      lng: 103.6264,
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1d3988.2238411986423!2d103.6242113!3d1.5458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da741a340b0dfb%3A0x6bfe76e03fb8f3d!2sTaman%20Universiti%2C%20Skudai%2C%20Johor!5e0!3m2!1sen!2smy!4v1700000000001!5m2!1sen!2smy"
    },
    facilities: ["WiFi-ready", "Washing Machine", "Kitchen Hook & Cooker", "Gated Security", "Refrigerator"],
    rooms: [
      {
        id: "hs2-r1",
        roomNo: "Room 1",
        type: "Master Room",
        price: 600,
        size: "11 x 13 ft",
        availability: "Available",
        amenities: ["Air-Conditioning", "Attached Bathroom", "Queen Bed", "Wardrobe", "Study Table"],
        images: [roomImages.master[0]],
        description: "Master bedroom featuring a private toilet and good ventilation. Excellent option for UTM postgraduates."
      },
      {
        id: "hs2-r2",
        roomNo: "Room 2",
        type: "Medium Room",
        price: 480,
        size: "10 x 10 ft",
        availability: "Occupied",
        amenities: ["Air-Conditioning", "Shared Bathroom", "Single Bed", "Wardrobe"],
        images: [roomImages.medium[0]],
        description: "Mid-sized room fully equipped with a study desk, tall closet, and powerful wall split air conditioner."
      },
      {
        id: "hs2-r3",
        roomNo: "Room 3",
        type: "Single Room",
        price: 400,
        size: "8 x 9 ft",
        availability: "Available",
        amenities: ["Fan", "Shared Bathroom", "Single Bed", "Wardrobe", "Window"],
        images: [roomImages.single[0]],
        description: "Comfortable single room with regular ceiling fan. Overlooks the quiet courtyard garden."
      },
      {
        id: "hs2-r4",
        roomNo: "Room 4",
        type: "Single Room",
        price: 380,
        size: "8 x 9 ft",
        availability: "Reserved",
        amenities: ["Fan", "Shared Bathroom", "Single Bed"],
        images: [roomImages.single[1]],
        description: "Value single room with basic furnishings. Suitable for short term or budget renters."
      },
      {
        id: "hs2-r5",
        roomNo: "Room 5",
        type: "Sharing Room",
        price: 330,
        size: "10 x 11 ft",
        availability: "Available",
        amenities: ["Fan", "Shared Bathroom", "2 Single Beds", "Wardrobe"],
        images: [roomImages.sharing[0]],
        description: "Twin sharing unit with adequate spacing, student-centric study set, and clean common bathroom."
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
      lat: 1.5398,
      lng: 103.6338,
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1d3988.24354227092!2d103.6316113!3d1.5398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da7405e3f5a2e1%3A0xc3312015fa764834!2sTaman%20Pulai%20Flora%2C%20Skudai%2C%20Johor!5e0!3m2!1sen!2smy!4v1700000000002!5m2!1sen!2smy"
    },
    facilities: ["WiFi-ready", "Parking Available", "Washing Machine", "Kitchen Stove", "Water Dispenser"],
    rooms: [
      {
        id: "hs3-r1",
        roomNo: "Room 1",
        type: "Master Room",
        price: 680,
        size: "12 x 15 ft",
        availability: "Available",
        amenities: ["Air-Conditioning", "Attached Bathroom", "Queen Bed", "Window", "Wardrobe", "Premium Desk"],
        images: [roomImages.master[0]],
        description: "Premium master bedroom with ensuite bathroom. Features a modern working station and wardrobe setup."
      },
      {
        id: "hs3-r2",
        roomNo: "Room 2",
        type: "Medium Room",
        price: 520,
        size: "10 x 12 ft",
        availability: "Available",
        amenities: ["Air-Conditioning", "Shared Bathroom", "Queen Bed", "Wardrobe", "Window"],
        images: [roomImages.medium[0]],
        description: "Well-lit medium room featuring a comfortable queen-size mattress and sliding window panels."
      },
      {
        id: "hs3-r3",
        roomNo: "Room 3",
        type: "Single Room",
        price: 440,
        size: "9 x 10 ft",
        availability: "Occupied",
        amenities: ["Air-Conditioning", "Shared Bathroom", "Single Bed", "Wardrobe"],
        images: [roomImages.single[0]],
        description: "Fully air-conditioned single room in excellent clean condition. Ideal for young professionals."
      },
      {
        id: "hs3-r4",
        roomNo: "Room 4",
        type: "Single Room",
        price: 390,
        size: "8 x 9 ft",
        availability: "Available",
        amenities: ["Fan", "Shared Bathroom", "Single Bed", "Wardrobe"],
        images: [roomImages.single[1]],
        description: "Affordable room solution with basic wooden wardrobes, mattress base, and a wall fan."
      },
      {
        id: "hs3-r5",
        roomNo: "Room 5",
        type: "Sharing Room",
        price: 340,
        size: "10 x 11 ft",
        availability: "Occupied",
        amenities: ["Fan", "Shared Bathroom", "2 Single Beds", "Separate Lockers"],
        images: [roomImages.sharing[0]],
        description: "Shared room design for double occupancy, equipped with quality study chairs and high-speed WiFi access."
      }
    ]
  },
  {
    id: "hs4",
    code: "HS 4",
    name: "Blok J Pulai Utama",
    fullTitle: "HS 4 - Blok J Pulai Utama",
    address: "Jalan Pulai 84, Taman Pulai Utama, 81300 Skudai, Johor Bahru, Johor",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Spacious town-apartment situated in the popular Taman Pulai Utama area. Walking distance to U-Mall Shopping Centre, giant supermarkets, local dry cleaners, and UTM buses routes.",
    location: {
      lat: 1.5482,
      lng: 103.6250,
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1d3988.21456227092!2d103.6228113!3d1.5482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da741a340b0dfb%3A0x6bfe76e03fb8f3d!2sTaman%20Pulai%20Utama%2C%20Skudai%2C%20Johor!5e0!3m2!1sen!2smy!4v1700000000003!5m2!1sen!2smy"
    },
    facilities: ["Washing Machine", "Kitchen Stove", "Refrigerator", "Dining Area", "WiFi-ready"],
    rooms: [
      {
        id: "hs4-r1",
        roomNo: "Room 1",
        type: "Master Room",
        price: 630,
        size: "11 x 14 ft",
        availability: "Available",
        amenities: ["Air-Conditioning", "Attached Bathroom", "Queen Bed", "Window", "Wardrobe"],
        images: [roomImages.master[0]],
        description: "Comfortable master suite with personal bathroom, vanity corner, and bright afternoon sunlight exposure."
      },
      {
        id: "hs4-r2",
        roomNo: "Room 2",
        type: "Medium Room",
        price: 490,
        size: "10 x 11 ft",
        availability: "Available",
        amenities: ["Air-Conditioning", "Shared Bathroom", "Single Bed", "Wardrobe", "Desk"],
        images: [roomImages.medium[0]],
        description: "Quiet middle room with excellent storage systems, soft lighting, and functional workspace layout."
      },
      {
        id: "hs4-r3",
        roomNo: "Room 3",
        type: "Single Room",
        price: 410,
        size: "9 x 9 ft",
        availability: "Available",
        amenities: ["Fan", "Shared Bathroom", "Single Bed", "Wardrobe", "Window"],
        images: [roomImages.single[0]],
        description: "Freshly painted single room with large windows facing the morning sun. High-velocity fan included."
      },
      {
        id: "hs4-r4",
        roomNo: "Room 4",
        type: "Single Room",
        price: 370,
        size: "8 x 9 ft",
        availability: "Occupied",
        amenities: ["Fan", "Shared Bathroom", "Single Bed", "Clothing Rack"],
        images: [roomImages.single[1]],
        description: "Budget single room equipped with quality foam mattress, hanger stand, and general utility desk."
      },
      {
        id: "hs4-r5",
        roomNo: "Room 5",
        type: "Sharing Room",
        price: 320,
        size: "10 x 11 ft",
        availability: "Available",
        amenities: ["Fan", "Shared Bathroom", "2 Single Beds", "Desk"],
        images: [roomImages.sharing[0]],
        description: "Double sharing layout, designed explicitly to maximize comfort for roommates and UTM scholars."
      }
    ]
  },
  {
    id: "hs5",
    code: "HS 5",
    name: "Blok B Villa Krystal",
    fullTitle: "HS 5 - Blok B Villa Krystal",
    address: "Jalan Selesa Jaya, Bandar Selesa Jaya, 81300 Skudai, Johor Bahru, Johor",
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "Premium condominium complex in Selesa Jaya, Johor. Residents enjoy strict 24/7 security card access, high floor breeze, an outdoor swimming pool, and direct parking options.",
    location: {
      lat: 1.5173,
      lng: 103.6394,
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1d3988.32454227092!2d103.6372113!3d1.5173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da7595ab3dbfe3%3A0xe54d3d2db73bfa2e!2sVilla%20Krystal%20Apartment!5e0!3m2!1sen!2smy!4v1700000000004!5m2!1sen!2smy"
    },
    facilities: ["Swimming Pool", "24/7 Security Guards", "Gym Access", "Parking Space", "Washing Machine", "Kitchen Stove", "Refrigerator"],
    rooms: [
      {
        id: "hs5-r1",
        roomNo: "Room 1",
        type: "Master Room",
        price: 700,
        size: "12 x 15 ft",
        availability: "Available",
        amenities: ["Air-Conditioning", "Attached Bathroom", "Queen Bed", "Window", "Wardrobe", "Large Mirror"],
        images: [roomImages.master[0]],
        description: "Luxurious master bedroom in a condominium setting. Includes custom vanity workspace and breathtaking view of Johor Strait."
      },
      {
        id: "hs5-r2",
        roomNo: "Room 2",
        type: "Medium Room",
        price: 550,
        size: "10 x 12 ft",
        availability: "Available",
        amenities: ["Air-Conditioning", "Shared Bathroom", "Queen Bed", "Wardrobe", "Window"],
        images: [roomImages.medium[0]],
        description: "Premium medium room with large queen bed, cooling AC, and ample cabinet storage space."
      },
      {
        id: "hs5-r3",
        roomNo: "Room 3",
        type: "Single Room",
        price: 450,
        size: "9 x 10 ft",
        availability: "Available",
        amenities: ["Air-Conditioning", "Shared Bathroom", "Single Bed", "Wardrobe"],
        images: [roomImages.single[0]],
        description: "Air-conditioned single room situated in a quiet corner of the condo, offering maximum privacy."
      },
      {
        id: "hs5-r4",
        roomNo: "Room 4",
        type: "Single Room",
        price: 400,
        size: "8 x 10 ft",
        availability: "Occupied",
        amenities: ["Fan", "Shared Bathroom", "Single Bed", "Wardrobe"],
        images: [roomImages.single[1]],
        description: "Cozy single room with a strong ceiling fan and custom workspace desk, facing the pool area."
      },
      {
        id: "hs5-r5",
        roomNo: "Room 5",
        type: "Sharing Room",
        price: 360,
        size: "10 x 12 ft",
        availability: "Reserved",
        amenities: ["Fan", "Shared Bathroom", "2 Single Beds", "Study Tables"],
        images: [roomImages.sharing[0]],
        description: "Dual sharing room layout with individual workspaces and custom reading lamps for late nights."
      }
    ]
  },
  {
    id: "hs6",
    code: "HS 6",
    name: "Blok C Villa Krystal",
    fullTitle: "HS 6 - Blok C Villa Krystal",
    address: "Jalan Selesa Jaya, Bandar Selesa Jaya, 81300 Skudai, Johor Bahru, Johor",
    coverImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    description: "Another beautiful condominium unit in Villa Krystal Block C. Features excellent panoramic views, full resort facilities, secure electronic gate entry, and neat co-living configurations.",
    location: {
      lat: 1.5175,
      lng: 103.6396,
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1d3988.32454227092!2d103.6372113!3d1.5173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da7595ab3dbfe3%3A0xe54d3d2db73bfa2e!2sVilla%20Krystal%20Apartment!5e0!3m2!1sen!2smy!4v1700000000004!5m2!1sen!2smy"
    },
    facilities: ["Swimming Pool", "24/7 Security Guards", "Gated Carpark", "Washing Machine", "Kitchen Stove & Hood", "Refrigerator"],
    rooms: [
      {
        id: "hs6-r1",
        roomNo: "Room 1",
        type: "Master Room",
        price: 720,
        size: "12 x 16 ft",
        availability: "Available",
        amenities: ["Air-Conditioning", "Attached Bathroom", "Queen Bed", "Window", "Wardrobe", "Study Corner"],
        images: [roomImages.master[0]],
        description: "Enormous master bedroom with clean tiled flooring, private ensuite bathroom, and double door closets."
      },
      {
        id: "hs6-r2",
        roomNo: "Room 2",
        type: "Medium Room",
        price: 560,
        size: "10 x 12 ft",
        availability: "Available",
        amenities: ["Air-Conditioning", "Shared Bathroom", "Queen Bed", "Wardrobe", "Window"],
        images: [roomImages.medium[0]],
        description: "Middle-size bedroom fitted with high-efficiency air conditioning, a warm carpet, and writing table."
      },
      {
        id: "hs6-r3",
        roomNo: "Room 3",
        type: "Medium Room",
        price: 540,
        size: "10 x 11 ft",
        availability: "Occupied",
        amenities: ["Air-Conditioning", "Shared Bathroom", "Single Bed", "Wardrobe", "Desk"],
        images: [roomImages.medium[1]],
        description: "Comfortable middle room with study desk and high-speed internet port. Standard wardrobes included."
      },
      {
        id: "hs6-r4",
        roomNo: "Room 4",
        type: "Single Room",
        price: 460,
        size: "9 x 10 ft",
        availability: "Available",
        amenities: ["Air-Conditioning", "Shared Bathroom", "Single Bed", "Wardrobe"],
        images: [roomImages.single[0]],
        description: "Fully furnished single room with air-conditioning. Provides a bright study table next to the window."
      },
      {
        id: "hs6-r5",
        roomNo: "Room 5",
        type: "Single Room",
        price: 410,
        size: "8 x 10 ft",
        availability: "Available",
        amenities: ["Fan", "Shared Bathroom", "Single Bed", "Wardrobe"],
        images: [roomImages.single[1]],
        description: "Affordable private single room with a strong fan. Well-kept with modern laminate furniture."
      },
      {
        id: "hs6-r6",
        roomNo: "Room 6",
        type: "Sharing Room",
        price: 350,
        size: "10 x 12 ft",
        availability: "Available",
        amenities: ["Fan", "Shared Bathroom", "2 Single Beds", "Cabinet Set"],
        images: [roomImages.sharing[0]],
        description: "Spacious twin-sharing unit with full study setups. An excellent option for budget-conscious housemates."
      }
    ]
  }
];

export default houses;
