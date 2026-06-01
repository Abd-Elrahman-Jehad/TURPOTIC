// Main image bank for the site. Keeping these URLs in one place makes it easy
// to swap a hero or card image without hunting through the render functions.
const img = {
  hero: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=82",
  car: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2200&q=82",
  rent: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=2200&q=82",
  bike: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=2200&q=82",
  payment: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1800&q=82",
  gallery: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=82",
  detail: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1600&q=80",
  featuredCar: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1800&q=84",
  featuredBike: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1400&q=84"
};

// The inventory is the heart of the app. Each item drives the cards, details,
// payment preview, filtering, search, and related-vehicle sections.
const vehicles = [
  { id: "carrera", name: "911 Carrera S", type: "car", category: "Super Sport", kind: "Coupe", price: 164500, rent: 450, photo: img.gallery, meta: "Heritage silver / 2026", speed: "4.1s", hp: "443 HP" },
  { id: "f8", name: "F8 Tributo", type: "car", category: "Super Sport", kind: "Supercar", price: 276000, rent: 850, photo: img.car, meta: "Riviera build / 710 hp", speed: "2.9s", hp: "710 HP" },
  { id: "rse", name: "RSE-Tron GT", type: "car", category: "Electric", kind: "Electric GT", price: 139900, rent: 750, photo: img.payment, meta: "Performance edition / 2026", speed: "3.1s", hp: "590 HP" },
  { id: "vantage", name: "Vantage V8", type: "car", category: "Grand Touring", kind: "Grand tourer", price: 165500, rent: 690, photo: img.rent, meta: "Carbon package / 503 hp", speed: "4.5s", hp: "503 HP" },
  { id: "gt4", name: "Cayman GT4", type: "car", category: "Super Sport", kind: "Track car", price: 102500, rent: 520, photo: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=82", meta: "Clubsport aero / 414 hp", speed: "4.2s", hp: "414 HP" },
  { id: "huracan", name: "Huracan ST", type: "car", category: "Super Sport", kind: "Aero coupe", price: 248000, rent: 920, photo: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1600&q=82", meta: "Track aerokit / 2026", speed: "2.8s", hp: "631 HP" },
  { id: "phantom", name: "Phantom X-Rider", type: "motorcycle", category: "Super Sport", kind: "Motorcycle", price: 52500, rent: 390, photo: img.bike, meta: "Carbon twin / 998 cc", speed: "3.0s", hp: "205 HP" },
  { id: "rift", name: "Rift Dragster", type: "motorcycle", category: "Super Sport", kind: "Motorcycle", price: 33900, rent: 260, photo: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1600&q=82", meta: "Streetfighter / 1100 cc", speed: "3.2s", hp: "180 HP" },
  { id: "apex", name: "Apex Blackline", type: "motorcycle", category: "Grand Touring", kind: "Motorcycle", price: 41700, rent: 310, photo: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1600&q=82", meta: "Night spec / 1200 cc", speed: "3.6s", hp: "165 HP" },
  { id: "turismo", name: "Turismo RS", type: "motorcycle", category: "Luxury SUV", kind: "Motorcycle", price: 68200, rent: 430, photo: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=82", meta: "Touring carbon / 1260 cc", speed: "3.8s", hp: "158 HP" },
  { id: "blade", name: "Blade RR", type: "motorcycle", category: "Super Sport", kind: "Motorcycle", price: 45500, rent: 355, photo: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=1600&q=82", meta: "Race fairing / 1000 cc", speed: "2.9s", hp: "214 HP" },
  { id: "storm", name: "Storm GT", type: "motorcycle", category: "Grand Touring", kind: "Motorcycle", price: 58900, rent: 405, photo: "https://images.unsplash.com/photo-1558980664-10e7170b5df9?auto=format&fit=crop&w=1600&q=82", meta: "Touring pack / 1250 cc", speed: "3.9s", hp: "152 HP" },
  { id: "volt-bike", name: "Volt Phantom", type: "motorcycle", category: "Electric", kind: "Electric motorcycle", price: 62500, rent: 420, photo: "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=1600&q=82", meta: "Electric torque / 2026", speed: "2.7s", hp: "190 HP" },
  { id: "nomad", name: "Nomad X", type: "motorcycle", category: "Executive", kind: "Adventure motorcycle", price: 38400, rent: 245, photo: img.bike, meta: "Adventure trim / 900 cc", speed: "4.4s", hp: "110 HP" },
  { id: "volt", name: "Volt Mach-E", type: "car", category: "Electric", kind: "Electric SUV", price: 118400, rent: 610, photo: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=82", meta: "Luxury SUV / 2026", speed: "3.7s", hp: "480 HP" },
  { id: "maybach", name: "Maybach GLS", type: "car", category: "Executive", kind: "Luxury SUV", price: 183900, rent: 780, photo: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=84", focus: "center 58%", meta: "Executive lounge / 2026", speed: "4.8s", hp: "550 HP" }
];

// Restore the last page from the URL hash first, then localStorage.
// This is why refreshing a details page keeps the visitor on that same vehicle.
function loadInitialState() {
  const fallback = { page: "home", selectedVehicle: vehicles[0] };
  try {
    const hash = window.location.hash.replace(/^#/, "");
    const saved = JSON.parse(window.localStorage.getItem("turpotic-state") || "{}");
    const route = hash || saved.page || fallback.page;
    if (route.startsWith("detail=")) {
      const vehicle = vehicles.find(item => item.id === route.split("=")[1]) || vehicles.find(item => item.id === saved.selectedId) || fallback.selectedVehicle;
      return { page: "detail", selectedVehicle: vehicle };
    }
    const pageId = ["home", "car", "rent", "motorcycles", "payment"].includes(route) ? route : fallback.page;
    const selectedVehicle = vehicles.find(item => item.id === saved.selectedId) || fallback.selectedVehicle;
    return { page: pageId, selectedVehicle };
  } catch {
    return fallback;
  }
}

// Small pieces of UI state. This app is intentionally light, so plain variables
// are enough and keep the page fast without pulling in a framework.
const initialState = loadInitialState();
let page = initialState.page;
let activeFilter = "All Models";
let activeSort = "Price: High to Low";
let selectedVehicle = initialState.selectedVehicle;
let visibleCount = 6;
let cart = [];
let drawer = null;
let searchQuery = "";
let searchSubmitted = false;
const root = document.getElementById("root");
const money = (value) => `$${value.toLocaleString("en-US")}`;
const preloadedImages = new Set();

// One image helper for the whole project. Eager images are only used when the
// image is important for the first screen or the current focused vehicle.
function picture(src, alt, className = "", eager = false) {
  return `<img class="${className}" src="${src}" alt="${alt}" loading="${eager ? "eager" : "lazy"}" decoding="async" ${eager ? `fetchpriority="high"` : ""} onerror="this.classList.add('image-failed');this.removeAttribute('src');">`;
}

// Icons are CSS masks. The HTML stays tiny, while the CSS owns the icon shapes.
function icon(name) {
  return `<span class="icon icon-${name}" aria-hidden="true"></span>`;
}

// Vehicle media is wrapped so every card, drawer row, detail hero, and payment
// preview handles image focus the same way.
function vehicleMedia(vehicle, eager = false) {
  const focus = vehicle.focus || "center";
  return `<div class="media-fit" style="--fit-position:${focus}">${picture(vehicle.photo, vehicle.name, "", eager)}</div>`;
}

// Details pages are not separate top-level nav pages, so the active nav item is
// borrowed from the selected vehicle type.
function activeNavPage() {
  if (page !== "detail") return page;
  return selectedVehicle.type === "motorcycle" ? "motorcycles" : "car";
}

// The global header is rebuilt on every render so cart count, active nav, and
// drawer buttons always reflect the current state.
function header() {
  const links = [
    ["home", "Home"],
    ["car", "Cars"],
    ["rent", "Rent"],
    ["motorcycles", "Motorcycles"],
    ["payment", "Payment"]
  ];
  const activePage = activeNavPage();
  return `<header class="header">
    <button class="brand" data-page="home"><span class="brand-text"><span>TURP</span>OTIC</span></button>
    <nav>${links.map(([id, label]) => `<button class="${activePage === id ? "active" : ""}" data-page="${id}">${label}</button>`).join("")}</nav>
    <div class="header-icons">
      <button title="Search" aria-label="Search" data-drawer="search">${icon("search")}</button>
      <button title="Shopping cart" aria-label="Shopping cart" data-drawer="cart">${icon("bag")}<span class="cart-count">${cart.length}</span></button>
      <button title="Profile" aria-label="Profile" data-drawer="profile">${icon("user")}</button>
    </div>
  </header>`;
}

// Cinematic loading screen. It is skipped for small state changes like filters,
// search drawers, cart actions, and inventory pagination.
function loader() {
  return `<div class="loader">
    <div class="scan-grid"></div>
    <div class="loader-photo">${picture(img.hero, "Luxury sports car loading preview", "", true)}</div>
    <div class="loader-orbit"><div class="loader-core">${icon("lock")}<span>TURPOTIC</span></div><i></i><i></i><i></i></div>
    <div class="loader-copy"><p>Initializing secure gallery</p><h1>Wake the engine.</h1></div>
  </div>`;
}

// Footer buttons reuse the same data attributes as the nav. No duplicate routing
// logic is needed.
function footer() {
  return `<footer class="footer">
    <div><b><span>TURP</span>OTIC</b><p>Precision motion, private acquisition, and high-performance rental experiences.</p></div>
    <div><b>Gallery</b><button data-page="car">Sale</button><button data-page="rent">Rent</button><button data-page="motorcycles">Motorcycles</button></div>
    <div><b>Support</b><button data-drawer="profile">Concierge</button><button data-drawer="search">Search Desk</button><button data-drawer="cart">Saved Vehicles</button></div>
    <strong>2026 TURPOTIC GALLERY. PRECISION MOTION DEFINED.</strong>
  </footer>`;
}

// Shared full-screen hero builder used by home, cars, motorcycles, and rent.
// It keeps the large pages visually consistent without duplicating markup.
function heroPage({ eyebrow, title, strong, copy, image, cta = "Explore Collection", target = "car", tone = "dark" }) {
  return `<section class="page hero-page ${tone}">
    <div class="hero-bg">${picture(image, title, "", true)}</div>
    <div class="hero-glass"></div>
    <div class="hero-content reveal">
      <span class="eyebrow">${eyebrow}</span>
      <h1>${title} <strong>${strong}</strong></h1>
      <p>${copy}</p>
      <div class="actions"><button class="btn" data-page="${target}">${cta}</button><button class="btn ghost" data-page="payment">Book Private Viewing</button></div>
    </div>
    <div class="hero-spec reveal delay">
      <span>Live inventory</span>
      <b>36</b>
      <p>Curated machines, inspected and staged for same-day acquisition.</p>
    </div>
  </section>`;
}

// Home page: hero, path cards, and the featured gallery preview.
function home() {
  return `${heroPage({
    eyebrow: "Evolution of speed",
    title: "Precision",
    strong: "Motion",
    copy: "A full-screen luxury automotive gallery built for collectors, renters, and riders who expect the machine to feel alive before the first click.",
    image: img.hero
  })}
  <section class="page editorial">
    <div class="section-head reveal"><span class="eyebrow">Choose your path</span><h2>Official gallery experience.</h2></div>
    <div class="path-grid">
      ${pathCard("Buy", "Investment-grade performance cars with private handover.", img.gallery, "car")}
      ${pathCard("Rent", "Short-term access to extraordinary machines.", img.rent, "rent")}
      ${pathCard("Motorcycles", "Two-wheel performance with concierge delivery.", img.bike, "motorcycles")}
    </div>
  </section>
  <section class="page featured-page">
    <div class="section-head reveal"><h2>Featured Gallery.</h2></div>
    <div class="featured-grid">
      <button class="featured-main reveal" data-detail="huracan">
        ${picture(img.featuredCar, "Blue Lamborghini Aventador", "", true)}
        <span>New Arrival</span><h3>Lamborghini Aventador</h3><b>$249,000</b>
      </button>
      <button class="featured-side reveal delay" data-detail="phantom">
        ${picture(img.featuredBike, "Premium motorcycle")}
        <h3>Phantom X-Rider</h3><b>$52,500</b>
      </button>
      <button class="note-card reveal delay2" data-page="car"><b>Vintage Prestige</b><p>Certified 1968 restorations.</p><small>View Collection ${icon("arrow")}</small></button>
    </div>
  </section>`;
}

// Small helper for the three "choose your path" blocks on the home page.
function pathCard(title, copy, image, target) {
  return `<button class="path-card reveal" data-page="${target}">
    ${picture(image, title)}
    <span>${title}</span>
    <p>${copy}</p>
  </button>`;
}

// Inventory page for both cars and motorcycles. The mode decides which items
// appear, while the filter/sort logic stays shared.
function inventory(mode = "car") {
  const isBike = mode === "motorcycles";
  const image = isBike ? img.bike : img.car;
  const title = isBike ? "Precision Two-Wheels." : "Find Your Dream Car";
  const copy = isBike ? "A full-height motorcycle showroom with real imagery, cinematic motion, and performance-first browsing." : "Browse high-end vehicles through a full-screen official showroom tuned for speed and clarity.";
  const base = vehicles.filter(v => isBike ? v.type === "motorcycle" : v.type === "car");
  const filtered = activeFilter === "All Models" ? base : base.filter(v => v.category === activeFilter);
  const list = [...filtered].sort((a, b) => activeSort.includes("Low to High") ? a.price - b.price : b.price - a.price);
  const shown = list.slice(0, visibleCount);
  const totalPages = Math.max(1, Math.ceil(list.length / 6));
  const currentPage = Math.min(totalPages, Math.max(1, Math.ceil(shown.length / 6)));

  return `${heroPage({
    eyebrow: isBike ? "Motorcycle gallery" : "Private automotive gallery",
    title,
    strong: isBike ? "" : "Today",
    copy,
    image,
    cta: "View Inventory",
    target: mode,
    tone: isBike ? "blue" : "dark"
  })}
  <section class="page inventory-page">
    <div class="section-head reveal"><span class="eyebrow">Showing ${shown.length} of ${list.length} results</span><h2>${isBike ? "Motorcycle" : "Automotive"} inventory.</h2></div>
    ${filters()}
    <div class="cards-grid">${shown.map((vehicle, index) => vehicleCard(vehicle, index)).join("") || `<p class="empty">No models match this filter yet.</p>`}</div>
    <div class="more-wrap"><button class="more-btn" data-more="${mode}" ${shown.length >= list.length ? "disabled" : ""}>Explore More Inventory ${icon("arrow")}</button><small>Page ${currentPage} of ${totalPages}</small></div>
  </section>`;
}

// Filter buttons are data-driven. Adding a category here is enough for the UI
// to render another pill.
function filters() {
  const filterItems = ["All Models", "Electric", "Grand Touring", "Super Sport", "Luxury SUV", "Executive"];
  return `<div class="filters reveal">
    ${filterItems.map(filter => `<button class="${activeFilter === filter ? "active" : ""}" data-filter="${filter}">${filter}</button>`).join("")}
    <button class="brand-filter">Brand: All</button>
    <button class="sort ${activeSort.includes("High") ? "active" : ""}" data-sort="${activeSort.includes("High") ? "Price: Low to High" : "Price: High to Low"}">${activeSort} ${icon("sort")}</button>
  </div>`;
}

// Standard card used across sale, rent, related items, and drawer results.
// The first three visible cards load eagerly so the first viewport feels quick.
function vehicleCard(vehicle, index) {
  return `<article class="vehicle-card reveal" style="--d:${index * 80}ms">
    <div class="vehicle-image">${vehicleMedia(vehicle, index < 3)}<span>${money(vehicle.price)}</span></div>
    <div class="vehicle-body"><small>${vehicle.kind}</small><h3>${vehicle.name}</h3><p>${vehicle.meta}</p><div class="stats"><span>${icon("gauge")}${vehicle.speed}</span><span>${icon("zap")}${vehicle.hp}</span></div><div class="card-actions"><button data-detail="${vehicle.id}">View Details</button><button class="cart-add" data-cart="${vehicle.id}">${icon("bag")}</button></div></div>
  </article>`;
}

// The details page is built around the selected vehicle only. All text, price,
// image, stats, and related cards come from that selected inventory object.
function detailPage() {
  const car = selectedVehicle;
  const accent = car.type === "motorcycle" ? "two-wheel response" : "road presence";
  const similar = vehicles
    .filter(vehicle => vehicle.id !== car.id && (vehicle.type === car.type || vehicle.category === car.category))
    .slice(0, 3);
  const fallbackSimilar = vehicles.filter(vehicle => vehicle.id !== car.id).slice(0, 3);
  const related = similar.length >= 3
    ? similar
    : [...similar, ...fallbackSimilar.filter(vehicle => !similar.some(item => item.id === vehicle.id))].slice(0, 3);
  return `<section class="detail-page">
    <div class="detail-hero">
      <div class="detail-bg">${picture(car.photo, `${car.name} background`, "", true)}</div>
      <div class="detail-copy reveal">
        <span class="eyebrow">${car.kind}</span>
        <h1>${car.name}</h1>
        <p>${car.name} is curated for drivers who care about ${accent}, precise delivery, and a showroom experience that feels engineered rather than decorated. Every angle, finish, and delivery step is prepared for a private handover.</p>
        <div class="detail-mini-stats">
          <span>${icon("gauge")} ${car.speed}</span>
          <span>${icon("zap")} ${car.hp}</span>
          <span>${car.meta}</span>
        </div>
        <div class="detail-actions">
          <button class="btn" data-page="payment">Continue to Secure Checkout</button>
          <button class="btn ghost" data-page="${car.type === "motorcycle" ? "motorcycles" : "car"}">Back to Inventory</button>
        </div>
      </div>
      <div class="detail-stage reveal delay">
        ${vehicleMedia(car, true)}
        <span>${money(car.price)}</span>
      </div>
    </div>
    <div class="detail-content">
      <div class="detail-story">
        <span class="eyebrow">Private presentation</span>
        <h2>Built around the exact machine.</h2>
        <p>The exterior, cabin feel, braking response, lighting signature, and ownership pathway are reviewed in a guided collector-style presentation before checkout. The goal is simple: you know the machine before you commit, and the page feels like one official vehicle, not a copied template.</p>
        <div class="detail-list">
          <span>Paint and lighting inspection</span>
          <span>Cabin and trim condition brief</span>
          <span>Concierge delivery window</span>
          <span>Secure payment preparation</span>
        </div>
      </div>
      <div class="detail-panels">
        <article>${icon("gauge")}<small>Launch character</small><b>${car.speed}</b><p>Responsive delivery tuned for confident road use and clean throttle response.</p></article>
        <article>${icon("zap")}<small>Output</small><b>${car.hp}</b><p>Power matched to platform, tires, brake feel, and the intended drive profile.</p></article>
        <article>${icon("shield")}<small>Condition desk</small><b>Inspected</b><p>Visual condition, media quality, and private handover notes are prepared before checkout.</p></article>
        <article>${icon("car")}<small>Delivery</small><b>Concierge</b><p>Schedule delivery to a showroom, hotel, residence, or private pickup point.</p></article>
      </div>
    </div>
    <section class="page related-section">
      <div class="section-head reveal"><span class="eyebrow">${car.type === "motorcycle" ? "Similar motorcycles" : "Similar vehicles"}</span><h2>You may also like.</h2></div>
      <div class="cards-grid">${related.map((vehicle, index) => vehicleCard(vehicle, index)).join("")}</div>
    </section>
  </section>`;
}

// Rent mixes cars and motorcycles on purpose, then shows rent pricing instead
// of sale pricing while keeping the same card component.
function rent() {
  const rentalList = [...vehicles].sort((a, b) => b.rent - a.rent).slice(0, 12);
  return `${heroPage({
    eyebrow: "Premium performance fleet",
    title: "Rent The",
    strong: "Extraordinary",
    copy: "Luxury rental built like a private showroom: fast loading, real photos, and booking flow that feels official on desktop and mobile.",
    image: img.rent,
    cta: "Explore Fleet",
    target: "rent",
    tone: "light"
  })}
  <section class="page rent-page">
    <div class="section-head reveal"><span class="eyebrow">Concierge rental</span><h2>Built for fast decisions.</h2></div>
    <div class="rent-grid">${rentalList.map((vehicle, index) => vehicleCard({ ...vehicle, price: vehicle.rent }, index)).join("")}</div>
    <div class="why reveal"><div>${icon("shield")}<b>Full Coverage</b><p>Premium protection included with every high-performance rental.</p></div><div>${icon("car")}<b>Concierge Delivery</b><p>Delivery to hotel, airport, private residence, or showroom.</p></div><div>${icon("zap")}<b>Zero friction</b><p>Images are lazy-loaded, hero media is preloaded, and animations stay on transform and opacity for speed.</p></div></div>
  </section>`;
}

// Checkout is a front-end validation demo. It keeps the selected vehicle visible
// beside the form so the user always knows what they are paying for.
function payment() {
  const car = selectedVehicle;
  return `<section class="page payment-page">
    <div class="payment-bg">${picture(car.photo, `${car.name} payment background`, "", true)}</div>
    <form class="payment-form reveal delay" novalidate>
      <span class="eyebrow">Secure checkout</span>
      <h1>Confirm Your Order</h1>
      <div class="secure">${icon("lock")}<div><b>Secure Encryption</b><p>Your payment information is protected by a private checkout layer.</p></div></div>
      <label>Cardholder Name<input name="cardholder" placeholder="Alexander Knight" required></label>
      <label>Card Number<input name="number" inputmode="numeric" minlength="12" placeholder="0000 0000 0000 2521" required></label>
      <div class="two"><label>Expiry Date<input name="expiry" placeholder="MM / YY" required></label><label>CVV / CVC<input name="cvv" inputmode="numeric" minlength="3" maxlength="4" placeholder="***" required></label></div>
      <p class="form-message" aria-live="polite"></p>
      <button type="submit">${icon("card")} Pay Now</button>
    </form>
    <aside class="order-card reveal delay2">
      <div class="vehicle-image">${vehicleMedia(car, true)}<span>${money(car.price)}</span></div>
      <h2>${car.name}</h2><p>${car.meta}</p>
      <dl><dt>Vehicle base price</dt><dd>${money(car.price)}</dd><dt>Performance package</dt><dd>${money(Math.round(car.price * .021))}</dd><dt>Luxury delivery</dt><dd>$1,620</dd></dl>
      <strong>${money(car.price + Math.round(car.price * .021) + 1620)}</strong><small>${icon("check")} Ready</small>
    </aside>
  </section>`;
}

// Drawer content switches between search, cart, and profile. The shell stays
// the same, which keeps the interaction predictable.
function drawerPanel() {
  if (!drawer) return "";
  const matches = searchSubmitted ? vehicles.filter(vehicle => `${vehicle.name} ${vehicle.kind} ${vehicle.meta}`.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 6) : [];
  const cartItems = cart.map(id => vehicles.find(vehicle => vehicle.id === id)).filter(Boolean);
  const content = drawer === "search"
    ? `<h2>Search Gallery</h2><label>Find a machine</label><div class="search-row"><input class="search-input" value="${searchQuery}" placeholder="Search cars or motorcycles"><button data-search-submit aria-label="Run search">${icon("search")}</button></div><div class="recent-searches"><b>Recent searches</b><button data-search-term="Vantage">Vantage</button><button data-search-term="Motorcycle">Motorcycle</button><button data-search-term="Electric">Electric</button><button data-search-term="GT">GT</button></div><div class="drawer-list">${searchSubmitted ? (matches.map(vehicle => drawerItem(vehicle)).join("") || "<p>No matching vehicles yet.</p>") : "<p>Type a name, then press the search icon.</p>"}</div>`
    : drawer === "cart"
      ? `<h2>Shopping Cart</h2><p>${cartItems.length ? "Saved vehicles ready for checkout." : "Your cart is empty."}</p><div class="drawer-list">${cartItems.map(vehicle => drawerItem(vehicle)).join("")}</div><button class="btn" data-page="payment">Checkout Selected</button>`
      : `<h2>Collector Profile</h2><p>Welcome back. Your concierge profile is active for private viewings, saved inventory, and secure checkout.</p><div class="profile-card"><b>Turpotic Member</b><span>Priority access enabled</span></div><button class="btn" data-page="rent">Book Concierge Rental</button>`;
  return `<div class="drawer-backdrop" data-close-drawer></div><aside class="drawer"><button class="drawer-close" data-close-drawer>Close</button>${content}</aside>`;
}

// Compact vehicle row used inside drawers.
function drawerItem(vehicle) {
  return `<button class="drawer-item" data-detail="${vehicle.id}"><div class="drawer-thumb">${vehicleMedia(vehicle)}</div><span><b>${vehicle.name}</b><small>${vehicle.kind} / ${money(vehicle.price)}</small></span></button>`;
}

// Persist the route in both the hash and localStorage. The hash makes refreshes
// and shared links behave naturally; localStorage keeps the selected vehicle.
function persistRoute() {
  const route = page === "detail" ? `detail=${selectedVehicle.id}` : page;
  try {
    window.localStorage.setItem("turpotic-state", JSON.stringify({ page: route, selectedId: selectedVehicle.id }));
    if (window.location.hash.replace(/^#/, "") !== route) {
      window.history.replaceState(null, "", `#${route}`);
    }
  } catch {
    window.location.hash = route;
  }
}

// Central render function. Every UI change comes through here so the page never
// has several competing DOM update paths.
function render(options = {}) {
  persistRoute();
  const body = page === "detail" ? detailPage() : page === "rent" ? rent() : page === "motorcycles" ? inventory("motorcycles") : page === "payment" ? payment() : page === "car" ? inventory("car") : home();
  const shouldLoad = page !== "detail" && !options.skipLoader;
  root.innerHTML = `${shouldLoad ? loader() : ""}<main class="site-shell">${header()}${body}${footer()}</main>${drawerPanel()}`;
  if (shouldLoad) window.setTimeout(() => document.querySelector(".loader")?.classList.add("loader-out"), 1150);
  warmVisibleImages();
}

// Choose the next images worth warming up. This avoids loading the whole gallery
// at once while still making the next visible cards feel ready.
function visibleImageQueue() {
  if (page === "detail" || page === "payment") return [selectedVehicle.photo];
  if (page === "home") return [img.hero, img.gallery, img.rent, img.bike, img.featuredCar, img.featuredBike];
  if (page === "rent") return [img.rent, ...vehicles.slice(0, 10).map(vehicle => vehicle.photo)];
  if (page === "car" || page === "motorcycles") {
    const isBike = page === "motorcycles";
    const base = vehicles.filter(vehicle => isBike ? vehicle.type === "motorcycle" : vehicle.type === "car");
    const filtered = activeFilter === "All Models" ? base : base.filter(vehicle => vehicle.category === activeFilter);
    const sorted = [...filtered].sort((a, b) => activeSort.includes("Low to High") ? a.price - b.price : b.price - a.price);
    return [(isBike ? img.bike : img.car), ...sorted.slice(0, Math.min(visibleCount + 3, sorted.length)).map(vehicle => vehicle.photo)];
  }
  return [];
}

// Warm images only when the browser has a quiet moment. The Set prevents the
// same remote image from being decoded again and again.
function warmVisibleImages() {
  const schedule = window.requestIdleCallback || ((callback) => window.setTimeout(callback, 300));
  schedule(() => {
    visibleImageQueue().forEach(src => {
      if (!src || preloadedImages.has(src)) return;
      preloadedImages.add(src);
      const image = new Image();
      image.decoding = "async";
      image.loading = "eager";
      image.src = src;
      image.decode?.().catch(() => {});
    });
  });
}

// Main click handler. The order matters: drawer/cart/search actions are handled
// before normal navigation so nested buttons do not trigger the wrong behavior.
root.addEventListener("click", (event) => {
  const drawerButton = event.target.closest("[data-drawer]");
  if (drawerButton) {
    drawer = drawerButton.dataset.drawer;
    if (drawer === "search") searchSubmitted = false;
    render({ skipLoader: true });
    return;
  }

  // Close the side drawer from either the backdrop or the close button.
  if (event.target.closest("[data-close-drawer]")) {
    drawer = null;
    render({ skipLoader: true });
    return;
  }

  // Cart adds are local and instant. Opening the cart gives immediate feedback.
  const cartButton = event.target.closest("[data-cart]");
  if (cartButton) {
    const id = cartButton.dataset.cart;
    if (!cart.includes(id)) cart.push(id);
    drawer = "cart";
    render({ skipLoader: true });
    return;
  }

  // Loading more inventory should feel like pagination, not a page transition.
  const more = event.target.closest("[data-more]");
  if (more && !more.disabled) {
    visibleCount += 6;
    render({ skipLoader: true });
    document.querySelector(".inventory-page")?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  // Search only runs after the user clicks the search icon.
  if (event.target.closest("[data-search-submit]")) {
    searchSubmitted = true;
    render({ skipLoader: true });
    return;
  }

  // Recent search chips are shortcuts into the same search flow.
  const recent = event.target.closest("[data-search-term]");
  if (recent) {
    searchQuery = recent.dataset.searchTerm;
    searchSubmitted = true;
    render({ skipLoader: true });
    return;
  }

  // Details keep the selected vehicle in state so payment can reuse it.
  const detail = event.target.closest("[data-detail]");
  if (detail) {
    selectedVehicle = vehicles.find(vehicle => vehicle.id === detail.dataset.detail) || selectedVehicle;
    page = "detail";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // Filters and sorting update the inventory without showing the loading screen.
  const filter = event.target.closest("[data-filter]");
  if (filter) {
    activeFilter = filter.dataset.filter;
    visibleCount = 6;
    render({ skipLoader: true });
    document.querySelector(".inventory-page")?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  const sort = event.target.closest("[data-sort]");
  if (sort) {
    activeSort = sort.dataset.sort;
    visibleCount = 6;
    render({ skipLoader: true });
    document.querySelector(".inventory-page")?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  // Top-level navigation resets inventory filters only when entering a strict
  // inventory page. Rent keeps its own mixed fleet.
  const button = event.target.closest("[data-page]");
  if (!button) return;
  page = button.dataset.page;
  if (page === "car" || page === "motorcycles") {
    activeFilter = "All Models";
    activeSort = "Price: High to Low";
    visibleCount = 6;
  }
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Typing in search should not auto-run the search. The user confirms by pressing
// the search icon, which prevents accidental loading behavior.
root.addEventListener("input", (event) => {
  if (!event.target.matches(".search-input")) return;
  searchQuery = event.target.value;
  searchSubmitted = false;
});

// Payment form guard. The form only "submits" after every field has content and
// passes the browser's built-in validation rules.
root.addEventListener("submit", (event) => {
  const form = event.target.closest(".payment-form");
  if (!form) return;
  event.preventDefault();
  const message = form.querySelector(".form-message");
  const fields = [...form.querySelectorAll("input")];
  const missing = fields.find(field => !field.value.trim() || !field.checkValidity());
  fields.forEach(field => field.classList.toggle("invalid", !field.value.trim() || !field.checkValidity()));
  if (missing) {
    message.textContent = "Please fill all payment fields correctly before submitting.";
    message.className = "form-message error";
    missing.focus();
    return;
  }
  message.textContent = `Order prepared for ${selectedVehicle.name}. Payment form validated successfully.`;
  message.className = "form-message success";
});

// Browser back/forward support through the hash route.
window.addEventListener("hashchange", () => {
  const restored = loadInitialState();
  page = restored.page;
  selectedVehicle = restored.selectedVehicle;
  drawer = null;
  render({ skipLoader: true });
});

// First paint.
render();
