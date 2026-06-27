# Haven Space Property — Room Catalog Web App

This is a responsive, browse-only room rental catalog web app for **Haven Space Property**. It lists 31 rooms across 6 houses in Johor Bahru.

---

## 📂 Project Structure

- `src/data/houses.js`: **The Single Source of Truth**. Contains all house coordinates, facilities, and room listings.
- `src/components/`: Reusable interface widgets (`Navbar`, `Footer`, `RoomCard`, `ImageGallery`, etc.).
- `src/pages/`: Core site pages (`Home`, `BrowseRooms`, `HouseDetail`, `RoomDetail`, `AboutUs`, `Contact`).
- `public/images/`: Store property cover photos and bedroom photos here (e.g. `/images/hs1/cover.jpg`).

---

## 📝 How to Update the Catalog

To update listings, prices, availability, or images, edit `src/data/houses.js` directly. No database console or coding is required.

### 1. Update Room Prices & Availability
Find the room object by its `id` and change the attributes:

```javascript
{
  id: "hs1-r1",
  roomNo: "Room 1",
  type: "Master Room",             // Options: "Master Room" | "Medium Room" | "Single Room" | "Sharing Room"
  price: 650,                      // Monthly rent in RM (numbers only)
  size: "12 x 14 ft",
  furnishing: "Fully Furnished",   // Options: "Fully Furnished" | "Partially Furnished" | "Unfurnished"
  availability: "Available",       // Options: "Available" | "Occupied" | "Reserved"
  amenities: ["Air-Conditioning", "Attached Bathroom", "Wardrobe", "Window", "Queen Bed"],
  images: [
    "/images/hs1/room1-1.jpg",     // Reference local images stored in public folder
    "/images/hs1/room1-2.jpg"
  ],
  description: "Spacious master room with attached bathroom and good natural light."
}
```

### 2. Status Color Coding
The app automatically applies colors based on `availability`:
- `"Available"` ➔ **Green** badge (enables the WhatsApp booking button)
- `"Occupied"` ➔ **Red** badge
- `"Reserved"` ➔ **Amber** badge

### 3. Add Real Photos
1. Create a folder for the house under the `public/images/` directory (e.g., `public/images/hs2/`).
2. Put the room photos into that folder (e.g., `room1-1.jpg`).
3. Update the `images` field in `src/data/houses.js` to point to `/images/hs2/room1-1.jpg`.

### 4. Update Google Map Embed Link
If you move to a new property, you can fetch its embed code:
1. Go to [Google Maps](https://maps.google.com).
2. Search for the property address and click **Share**.
3. Select the **Embed a map** tab, copy the URL inside the `src="..."` attribute of the iframe, and paste it into `mapEmbedUrl` in `houses.js`.

---

## 🚀 Running the Project Locally

### 1. Install Node.js
Ensure you have Node.js installed. Open your command terminal in this directory and install packages:
```bash
npm install
```

### 2. Start Local Development Server
To launch a live preview of the catalog, run:
```bash
npm run dev
```
Open the local server URL (usually `http://localhost:5173`) in your web browser. Any edits you make in `houses.js` will immediately sync on screen.

### 3. Compile for Production
To bundle the application into static files ready for deployment on hosting services like Netlify, Vercel, or GitHub Pages:
```bash
npm run build
```
The compiled bundle will be outputted to the `/dist` folder.
