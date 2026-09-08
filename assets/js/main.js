/**
 * Swaddhara Spices - Global JavaScript Controller
 */

// Product Master Database
const swaddharaProducts = {
  turmeric: {
    id: "turmeric",
    titleEn: "Turmeric Powder",
    titleBn: "হলুদ গুঁড়ো",
    category: "ground",
    image: "assets/images/products/turmeric.jpg",
    badge: "High Curcumin • 100% Pure Organic",
    desc: "Swaddhara Turmeric Powder is prepared from handpicked, sun-dried Salem & Erode turmeric fingers. Known for its deep golden hue, rich earthy aroma, and naturally high curcumin content (above 3%), it brings immunity-boosting wellness and authentic restaurant-quality color to every dish.",
    ingredients: "100% Pure Whole Turmeric Rhizomes (Curcuma longa)",
    nutrition: "Curcumin > 3.0%, Dietary Fiber 21%, Iron 41mg/100g",
    packSizes: ["50g", "100g", "200g", "500g"],
    pairings: "Curries, Dal Tadka, Golden Milk, Biryani, Fish & Meat Marinades",
    accentColor: "amber"
  },
  jeera: {
    id: "jeera",
    titleEn: "Jeera Powder",
    titleBn: "জিরে গুঁড়ো",
    category: "ground",
    image: "assets/images/products/jeera.jpg",
    badge: "Cold Ground • Rich Essential Oils",
    desc: "Crafted from selected whole cumin seeds gently roasted to activate their essential oils, then cold-ground to seal in their robust, earthy, warm aroma. It elevates everyday dals, jeera rice, and traditional curries while aiding digestion and metabolism.",
    ingredients: "100% Pure Premium Roasted Cumin Seeds (Cuminum cyminum)",
    nutrition: "Volatile Essential Oil > 2.5%, Dietary Fiber 10.5%",
    packSizes: ["50g", "100g", "200g", "500g"],
    pairings: "Bengali Sukto, Jeera Aloo, Cholar Dal, Raita, Khichdi",
    accentColor: "stone"
  },
  kashmiri: {
    id: "kashmiri",
    titleEn: "Kashmiri Mirch Powder",
    titleBn: "কাশ্মীরি লঙ্কা গুঁড়ো",
    category: "chilli",
    image: "assets/images/products/kashmiri-mirch.jpg",
    badge: "Vibrant Ruby Red • Mild Heat",
    desc: "Sourced from pristine valleys, Swaddhara Kashmiri Mirch imparts a royal ruby-red glow to gravies without burning pungency. Free from artificial colors, coal-tar dyes, or synthetic additives, it is the secret behind rich, photogenic curries.",
    ingredients: "100% Pure Kashmiri Dried Red Peppers",
    nutrition: "Capsanthin Color Value > 120 ASTA, Mild Pungency (SHU 1,500 - 2,500)",
    packSizes: ["50g", "100g", "200g", "500g"],
    pairings: "Kosha Mangsho, Butter Chicken, Rogan Josh, Tandoori Gravies",
    accentColor: "red"
  },
  chilli: {
    id: "chilli",
    titleEn: "Red Chilli Powder",
    titleBn: "লঙ্কা গুঁড়ো",
    category: "chilli",
    image: "assets/images/products/red-chilli.jpg",
    badge: "Fiery Pungency • Naturally Sun Dried",
    desc: "Made from destalked, naturally sun-ripened hot red chillies. Ground under strict temperature controls to preserve the natural capsaicin and pungent punch that gives Indian and Bengali cooking its unmistakable fiery spirit.",
    ingredients: "100% Pure Destalked Red Chillies (Capsicum annuum)",
    nutrition: "Natural Capsaicin > 0.45%, Pure Capsanthin, Zero Additives",
    packSizes: ["50g", "100g", "200g", "500g"],
    pairings: "Fish Curry, Spicy Stir-Fries, Chutneys, Meat Curries",
    accentColor: "rose"
  },
  coriander: {
    id: "coriander",
    titleEn: "Coriander Powder",
    titleBn: "ধনে গুঁড়ো",
    category: "ground",
    image: "assets/images/products/coriander.jpg",
    badge: "Fresh Herbal Aroma • Cooling & Digestive",
    desc: "Ground from green, plump, essential-oil-rich coriander seeds. Swaddhara Coriander Powder introduces a delicate, citrusy, refreshing aroma that harmoniously binds spices together, creating a thick, flavorful gravy base.",
    ingredients: "100% Pure Sun-Cured Green Coriander Seeds (Coriandrum sativum)",
    nutrition: "Linalool Essential Oil Content > 0.7%, Dietary Fiber 42%",
    packSizes: ["50g", "100g", "200g", "500g"],
    pairings: "Sambar, Fish Jhol, Aloo Posto, Mixed Veg, Stews",
    accentColor: "emerald"
  }
};

// Modal Operations
function openProductModal(productId) {
  const product = swaddharaProducts[productId];
  if (!product) return;

  const modal = document.getElementById('productModal');
  if (!modal) return;

  document.getElementById('modalImg').src = product.image;
  document.getElementById('modalImg').alt = product.titleEn;
  document.getElementById('modalTitleEn').textContent = product.titleEn;
  document.getElementById('modalTitleBn').textContent = product.titleBn;
  document.getElementById('modalBadge').textContent = product.badge;
  document.getElementById('modalDesc').textContent = product.desc;
  document.getElementById('modalIngredients').textContent = product.ingredients;
  document.getElementById('modalNutrition').textContent = product.nutrition;
  document.getElementById('modalPairings').textContent = product.pairings;

  // Render pack size buttons
  const packContainer = document.getElementById('modalPacks');
  if (packContainer) {
    packContainer.innerHTML = product.packSizes.map(s => 
      `<span class="px-2.5 py-1 bg-white border border-stone-200 rounded-lg text-xs font-bold text-stone-700 shadow-sm">${s}</span>`
    ).join('');
  }

  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
}

// Mobile Drawer Operations
function setupMobileDrawer() {
  const openBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('closeDrawerBtn');
  const drawer = document.getElementById('mobileDrawer');
  const content = document.getElementById('drawerContent');

  if (!openBtn || !drawer || !content) return;

  openBtn.addEventListener('click', () => {
    drawer.classList.remove('hidden');
    setTimeout(() => content.classList.remove('translate-x-full'), 10);
    document.body.classList.add('modal-open');
  });

  const close = () => {
    content.classList.add('translate-x-full');
    setTimeout(() => drawer.classList.add('hidden'), 300);
    document.body.classList.remove('modal-open');
  };

  if (closeBtn) closeBtn.addEventListener('click', close);
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) close();
  });
  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', close);
  });
}

// Product Filter on products.html
function filterProducts(category) {
  const cards = document.querySelectorAll('.product-card');
  const tabs = document.querySelectorAll('.filter-btn');

  tabs.forEach(tab => {
    tab.classList.remove('bg-brand-red', 'text-white', 'shadow-md');
    tab.classList.add('bg-stone-100', 'text-stone-700');
  });

  const activeTab = document.getElementById('tab-' + category);
  if (activeTab) {
    activeTab.classList.remove('bg-stone-100', 'text-stone-700');
    activeTab.classList.add('bg-brand-red', 'text-white', 'shadow-md');
  }

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Dealership & Contact Form Submission Handler
function handleInquiryForm(event, formType = 'dealership') {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  const name = formData.get('name') || '';
  const phone = formData.get('phone') || '';
  const email = formData.get('email') || '';
  const business = formData.get('business') || '';
  const location = formData.get('location') || '';
  const message = formData.get('message') || '';

  // 1. WhatsApp Redirection formatting
  const formattedText = encodeURIComponent(
    `*Swaddhara Website Inquiry (${formType.toUpperCase()})*\n\n` +
    `👤 *Name:* ${name}\n` +
    `🏢 *Business/Shop:* ${business}\n` +
    `📞 *Phone:* ${phone}\n` +
    `✉️ *Email:* ${email}\n` +
    `📍 *Location:* ${location}\n` +
    `📝 *Message:* ${message}\n\n` +
    `_Sent via swaddhara.in portal_`
  );

  // Submit via FormSubmit to swaddharamasala@gmail.com in background
  fetch('https://formsubmit.co/ajax/swaddharamasala@gmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      Subject: `New ${formType} Inquiry from ${name} (${business})`,
      Name: name,
      Business: business,
      Phone: phone,
      Email: email,
      Location: location,
      Message: message
    })
  }).catch(() => {
    // Silent catch, user feedback is already handled
  });

  // Show UI success
  const successBox = document.getElementById('formSuccess');
  if (successBox) {
    successBox.classList.remove('hidden');
    form.reset();
    successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Offer WhatsApp button in success box if element exists
  const waBtn = document.getElementById('waDirectBtn');
  if (waBtn) {
    waBtn.href = `https://wa.me/919876543210?text=${formattedText}`;
  }
}

// Global Document Init
document.addEventListener('DOMContentLoaded', () => {
  setupMobileDrawer();

  // Escape key close modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductModal();
  });

  const modal = document.getElementById('productModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProductModal();
    });
  }

  // Update Year in footer
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }
});
