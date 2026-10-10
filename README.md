# ARFU HOMEMADE FOODS — Premium Digital Menu Website

> **"Authentic Taste • Made With Love"**

A high-performance, mobile-first, luxury digital menu website crafted for **ARFU HOMEMADE FOODS** featuring dark luxury aesthetics, gold accents, category-filtered food browsing, lightweight ordering cart, and direct **Call & WhatsApp ordering**.

---

## 🚀 Key Features

- **Direct Manual Ordering**: Instant 1-click **Call Now** and pre-filled **WhatsApp to Order** functionality.
- **Lightweight Order List (Cart)**: Customers can add items, tweak quantities (+/-), and tap to send an itemized list directly to WhatsApp.
- **Strict Privacy / No Address Policy**: Conforms to the strict requirement of **Zero Address** displayed anywhere on the website.
- **Category Filtering & Live Search**: Filter by **Breakfast**, **Non-Veg Specials**, and **Rice & Extras**, or search by keyword.
- **Mobile First Design**: Optimized for 320px–430px+ mobile screens with a sticky bottom action bar: `[CALL]` & `[WHATSAPP]` / `[VIEW ORDER]`.
- **Dynamic FSSAI Placeholder**: Easily enable the official FSSAI registration number when issued.

---

## 🛠️ Project Structure

```text
ARFU FOODS/
├── public/
│   ├── assets/
│   │   ├── logo.jpg               # Official brand logo (place your file here)
│   │   ├── logo.svg               # Scalable luxury brand vector emblem
│   │   ├── menu-reference.jpg     # Reference menu poster
│   │   └── README.md
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Sticky luxury navbar with logo, call button & cart counter
│   │   ├── Hero.jsx               # Hero section with brand crest, headline & quick action buttons
│   │   ├── MenuSection.jsx        # Category tabs, search filter, and food grid
│   │   ├── MenuCard.jsx           # Premium food card with pricing, +/- controls & WhatsApp order
│   │   ├── CategoryTabs.jsx       # Category navigation with item counts
│   │   ├── HowToOrder.jsx         # 3-step ordering process
│   │   ├── WhyUs.jsx              # 4 pillars of homemade quality
│   │   ├── ContactSection.jsx     # Direct phone lines and WhatsApp order CTAs (No address)
│   │   ├── Footer.jsx             # Clean footer with quick links, contacts & optional FSSAI
│   │   ├── FloatingActions.jsx    # Desktop floating WhatsApp + Mobile sticky bottom action bar
│   │   └── CartDrawer.jsx         # Lightweight order drawer with WhatsApp message generator
│   ├── data/
│   │   ├── business.js            # Phone numbers, WhatsApp numbers, tagline, FSSAI field
│   │   └── menu.js                # All food items, prices, quantities, and categories
│   ├── App.jsx                    # Root component with order list state
│   ├── index.css                  # Tailwind styles and luxury gold animations
│   └── main.jsx                   # React DOM entry point
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

---

## 💻 How to Run the Website

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Install Dependencies
```bash
npm install
```
*(On Windows PowerShell, if execution policy restricts npm, run `cmd /c npm install`)*

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL (usually `http://localhost:3000` or `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
This will compile and optimize the files into the `dist/` directory.

---

## ✏️ Owner Customization Guide

### 1. How to Change Menu Prices
Open `src/data/menu.js`. Locate the item and change the `price` number:
```javascript
{
  id: "nv-1",
  name: "Chicken Fry",
  category: "NON-VEG SPECIALS",
  quantity: "1 kg",
  price: 750, // <-- Update price here (e.g. 800)
  ...
}
```

### 2. How to Add or Change Menu Items
In `src/data/menu.js`:
- To edit an item, change `name`, `quantity`, `description`, or `image`.
- To add a new item, add an entry to the `menuItems` array with a unique `id`.
- To temporarily hide an item when unavailable, change `isAvailable: true` to `false`.

### 3. How to Change Phone Numbers & WhatsApp
Open `src/data/business.js`. Update the phone numbers:
```javascript
primaryPhone: {
  display: "+91 94427 91057",
  tel: "tel:+919442791057",
  number: "9442791057",
},
secondaryPhone: {
  display: "+91 95859 91057",
  tel: "tel:+919585991057",
  number: "9585991057",
},
```

### 4. How to Update the Logo
- Place your official logo image file inside `public/assets/logo.jpg`.
- The website automatically loads `/assets/logo.jpg`.
- If the file is not yet placed, it automatically falls back to `/assets/logo.svg`.

### 5. How to Add FSSAI Registration Number Later
Open `src/data/business.js`. Update the `fssaiNumber` string:
```javascript
// Replace the empty string with your official number once issued:
fssaiNumber: "12423008000123",
```
Once entered, the FSSAI registration badge will automatically appear in the footer.

---

## ☁️ Deploying to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the repository.
4. Keep the default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your website will be live in seconds!
