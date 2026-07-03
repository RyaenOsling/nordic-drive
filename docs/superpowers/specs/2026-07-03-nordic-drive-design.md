# Design Specification: Nordic Drive (Car Rental Portfolio Project)

## Project Overview
**Nordic Drive** is a premium, single-page car rental web application designed in a clean, minimalist Scandinavian aesthetic (Nordic & Clean). It is built as a portfolio project to demonstrate clean front-end architecture, semantic HTML5, modern CSS layouts (CSS Grid/Flexbox), and stateful Javascript interactions without external libraries.

## Target Audience & Vibe
- **Vibe:** Nordic & Clean (airy, high-contrast, muted organic accents, editorial typography).
- **Core Theme:** Sustainable premium mobility (focusing on electric and high-end Scandinavian/European cars like Polestar, Volvo, Audi e-tron).
- **Visuals:** Warm-off-white background, deep charcoal text, forest green and sand accents, elegant serif headings, and geometric sans-serif UI elements.

---

## 1. Visual Design System

### Typography
- **Heading Font:** *Cormorant Garamond* (Google Fonts) - A elegant, high-contrast serif typeface for headings to convey a premium, editorial, luxury feel.
- **Body Font:** *Plus Jakarta Sans* (Google Fonts) - A clean, geometric, highly legible sans-serif for description, tables, parameters, and form controls.

### Color Palette (CSS Variables)
```css
:root {
  --bg-primary: #F6F5F2;       /* Warm off-white background */
  --bg-secondary: #EFEDE8;     /* Soft warm grey for cards and sections */
  --border-color: #E8E6E0;     /* Muted border line */
  --text-primary: #18181A;     /* Off-black / dark charcoal for high contrast */
  --text-secondary: #5A5A5C;   /* Muted grey for subtext and details */
  --accent-color: #2D4239;     /* Deep forest green for main call-to-actions */
  --accent-hover: #1E2D26;     /* Darker shade of forest green for hover */
  --accent-light: #E7ECE9;     /* Soft light-green tint for active statuses */
  --error-color: #C56E52;      /* Terracotta/rust for validation errors */
  --transition-smooth: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 2. Page Structure & Components

### 2.1 Hero Section
An asymmetric layout showcasing:
- **Left Column:** Prominent editorial heading: *"Pure form. Muted presence. Sustainable mobility."* with a short, narrative-driven description of the rental service (live, natural copy).
- **Right Column:** Large offset image of a premium EV (e.g., Polestar 3) with a clean shadow.
- **Bottom:** Minimalist scroll indicator and a quick dashboard stats row (e.g., 100% Electric, Carbon Neutral, Nordic Service).

### 2.2 Filterable Catalog Grid
A modular grid layout showing the vehicle fleet.
- **Filter Controls:** Horizontal bar at the top of the grid with minimal, tactile selectors for:
  - Vehicle Class (Sedan, SUV, Touring)
  - Price Range (Low to High / High to Low)
  - Transmission (Automatic, Manual)
- **Grid Layout:** Standard CSS Grid (`grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))`).
- **Cards:** Clean card elements containing:
  - Clean high-resolution image of the car.
  - Basic details (Name, Class, Daily Rate, Transmission, Range/Power).
  - Micro-animations: Slight hover scale of the image and border color transition.

### 2.3 Grid Expansion Mechanics (Inline Details)
When a card is clicked:
1. We dynamically identify the card's position.
2. An inline details panel (`.car-details-panel`) is inserted or made visible directly below the row of the clicked card.
3. The details panel spans the entire width of the grid (`grid-column: 1 / -1`).
4. It smoothly expands vertically (`grid-template-rows` transition or `max-height` transition) with a fade-in for the content.
5. Inside the panel:
   - **Left Panel:** A multi-angle image gallery with a custom JS slider/dots.
   - **Right Panel:** Detailed specs grid (Engine/Battery, Max Speed, 0-100 km/h, Capacity, Cargo Vol) and a clear CTA button: **"Proceed to Booking"**.

### 2.4 Booking Wizard (Inline)
Once **"Proceed to Booking"** is clicked inside the details panel, the right panel of the details section transitions into a multi-step Wizard:
- **Step 1: Select Dates & Times**
  - Displays a clean custom calendar built in vanilla JS (visualizing date ranges).
  - Validation: No bookings in the past, end date must be after start date.
- **Step 2: Guest Information**
  - Minimalist form fields: Name, Email, Phone, Driver's License Number.
  - Interactive validation with custom error states using the terracotta color.
- **Step 3: Summary & Confirmation**
  - Summary of the booking: car model, selected dates, rental duration, total cost (calculated dynamically).
  - "Confirm Booking" button which launches a satisfying checkout micro-animation (loading state to checkmark) and saves the booking to local state.

---

## 3. Technical Implementation details

### Javascript Architecture
- **State Management:**
  ```javascript
  const state = {
    cars: [],           // List of car objects loaded from mock database
    activeFilters: {
      class: 'all',
      transmission: 'all',
      priceSort: 'default'
    },
    selectedCarId: null,
    booking: {
      carId: null,
      startDate: null,
      endDate: null,
      customer: { name: '', email: '', phone: '', license: '' }
    },
    wizardStep: 1      // Active booking step
  };
  ```
- **Dynamic DOM updates:** Native query selectors and event listeners.
- **Grid Expansion Logic:** Instead of complex calculations, the detail panel container will be present in the HTML structure but moved dynamically in the DOM using `parentGrid.insertBefore(detailsContainer, nextRowElement)` so it renders exactly on the next row after the clicked card.

### Performance & Assets
- **Images:** SVG files for UI icons. WebP formats for all car images.
- **CSS:** Standard BEM notation (`catalog`, `catalog__grid`, `card--active`, etc.). Smooth animations leveraging hardware-accelerated properties (`transform`, `opacity`).

---

## 4. Folder Structure
```
c:/balavstvo/sites/site 3/nordic-drive/
├── index.html
├── style.css
├── script.js
├── README.md
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-07-03-nordic-drive-design.md (this file)
└── assets/
    ├── icons/
    │   └── (clean SVGs for transmission, battery, arrow etc.)
    └── images/
        └── (optimized WebP vehicle images)
```

---

## 5. Verification Plan
- **Responsiveness:** Test on mobile, tablet, and desktop (Chrome DevTools).
- **Interactions:** Check tab index navigation and accessibility of forms.
- **Performance:** Check page weight and ensure images are loaded lazily.
- **Wizard State Flow:** Complete a full booking path, verify validation logic, check that date range selection prevents invalid bookings, and check local storage preservation of booking history.
