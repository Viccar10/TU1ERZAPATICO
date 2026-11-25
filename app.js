/* ==========================================================================
   BASE DE DATOS DE PRODUCTOS (MULTIMARCA FAMILIAR: $10 A $75 Y COMBO 2x$15)
   ========================================================================== */
const PRODUCTS = [
  {
    id: 1,
    name: "Nike Air Max TN Sunset",
    brand: "TN",
    category: "caballeros",
    audience: "Caballeros / Juvenil",
    price: 68,
    oldPrice: 95,
    promo: "premium",
    promoLabel: "TOP VENTAS",
    sizes: ["40", "41", "42", "43", "44"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    id: 2,
    name: "Jordan Retro 4 Red Thunder",
    brand: "Jordan",
    category: "caballeros",
    audience: "Jóvenes y Adultos",
    price: 75,
    oldPrice: 110,
    promo: "premium",
    promoLabel: "EDICIÓN RETRO",
    sizes: ["39", "40", "41", "42", "43"],
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    id: 3,
    name: "Adidas Urban Runner Lite",
    brand: "Adidas",
    category: "damas",
    audience: "Damas",
    price: 10,
    oldPrice: 28,
    promo: "remate10",
    promoLabel: "REMATE $10",
    sizes: ["35", "36", "37", "38", "39"],
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    id: 4,
    name: "Vita Kids Escolar Velcro",
    brand: "Vita Kids",
    category: "ninos",
    audience: "Niños y Niñas",
    price: 10,
    oldPrice: 22,
    promo: "promo2x15",
    promoLabel: "2x$15",
    sizes: ["25", "27", "29", "31", "33"],
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    id: 5,
    name: "Krisas Baby Primeros Pasos",
    brand: "Krisas",
    category: "bebes",
    audience: "Bebés",
    price: 10,
    oldPrice: 18,
    promo: "promo2x15",
    promoLabel: "2x$15",
    sizes: ["18", "19", "20", "21", "22"],
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    id: 6,
    name: "Skechers GoWalk Memory Foam",
    brand: "Skechers",
    category: "mayores",
    audience: "Adulto Mayor / Confort",
    price: 38,
    oldPrice: 60,
    promo: "premium",
    promoLabel: "CONFORT ORTOPÉDICO",
    sizes: ["37", "38", "39", "40", "41", "42"],
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    id: 7,
    name: "Bolso Bandolero Sport Nike",
    brand: "Nike",
    category: "bolsos",
    audience: "Unisex / Jóvenes",
    price: 10,
    oldPrice: 24,
    promo: "promo2x15",
    promoLabel: "2x$15",
    sizes: ["Única"],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    id: 8,
    name: "Bota Urbana Timber Terrain",
    brand: "Under Armour",
    category: "botas",
    audience: "Caballeros / Trabajo",
    price: 55,
    oldPrice: 82,
    promo: "premium",
    promoLabel: "LIQUIDACIÓN",
    sizes: ["40", "41", "42", "43", "44"],
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80",
    featured: true
  },
  {
    id: 9,
    name: "Puma Smash Classic Blanca",
    brand: "Puma",
    category: "damas",
    audience: "Damas / Juvenil",
    price: 10,
    oldPrice: 30,
    promo: "remate10",
    promoLabel: "REMATE $10",
    sizes: ["36", "37", "38", "39"],
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 10,
    name: "Nike Air Max DN Pulse",
    brand: "DN",
    category: "caballeros",
    audience: "Caballeros",
    price: 72,
    oldPrice: 98,
    promo: "premium",
    promoLabel: "NUEVO INGRESO",
    sizes: ["40", "41", "42", "43"],
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 11,
    name: "Cartera Tote Elegante Dama",
    brand: "Retro",
    category: "bolsos",
    audience: "Damas",
    price: 10,
    oldPrice: 25,
    promo: "remate10",
    promoLabel: "REMATE $10",
    sizes: ["Única"],
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    featured: false
  },
  {
    id: 12,
    name: "Krisas Junior Runner LED",
    brand: "Krisas",
    category: "ninos",
    audience: "Niñas y Niños",
    price: 10,
    oldPrice: 20,
    promo: "promo2x15",
    promoLabel: "2x$15",
    sizes: ["24", "26", "28", "30"],
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
    featured: false
  }
];

/* ==========================================================================
   ESTADO DEL CARRITO (PERSISTENTE EN LOCALSTORAGE)
   ========================================================================== */
let cart = JSON.parse(localStorage.getItem("kicksBagsCart")) || [];

function saveCart() {
  localStorage.setItem("kicksBagsCart", JSON.stringify(cart));
  updateCartUI();
}

/* ==========================================================================
   RENDERIZADO DE TARJETAS DE PRODUCTO
   ========================================================================== */
function createProductCard(product) {
  let ribbonClass = "ribbon-premium";
  if (product.promo === "remate10") ribbonClass = "ribbon-10";
  if (product.promo === "promo2x15") ribbonClass = "ribbon-2x15";

  return `
    <article class="product-card">
      <div class="product-img-wrap">
        <span class="promo-ribbon ${ribbonClass}">${product.promoLabel}</span>
        <span class="brand-tag">${product.brand}</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-body">
        <span class="product-meta">${product.audience}</span>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-price-row">
          <span class="current-price">$${product.price}</span>
          <span class="old-price">$${product.oldPrice}</span>
        </div>
        <div class="card-actions">
          <button class="btn-add" onclick="addToCart(${product.id}, '${product.sizes[0]}')">
            <i class="ri-shopping-bag-line"></i> Agregar
          </button>
          <button class="btn-quick" onclick="openQuickView(${product.id})" title="Elegir talla">
            <i class="ri-eye-line"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

/* ==========================================================================
   LÓGICA DEL CARRITO Y DESCUENTO AUTOMÁTICO 2x$15
   ========================================================================== */
function addToCart(productId, selectedSize) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const key = `${productId}-${selectedSize}`;
  const existing = cart.find((item) => item.key === key);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key,
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      promo: product.promo,
      image: product.image,
      size: selectedSize,
      qty: 1
    });
  }

  saveCart();
  openCartDrawer();
}

function updateItemQty(key, delta) {
  const idx = cart.findIndex((item) => item.key === key);
  if (idx === -1) return;

  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  saveCart();
}

function calculateCartTotals() {
  let totalItems = 0;
  let subtotal = 0;
  let promo2x15Count = 0;

  cart.forEach((item) => {
    totalItems += item.qty;
    subtotal += item.price * item.qty;
    if (item.promo === "promo2x15") {
      promo2x15Count += item.qty;
    }
  });

  // Cada pareja de productos 2x$15 cuesta $15 en lugar de $20 ($5 de ahorro por pareja)
  const pairs = Math.floor(promo2x15Count / 2);
  const discount = pairs * 5;
  const total = subtotal - discount;

  return { totalItems, subtotal, discount, total, promo2x15Count };
}

function updateCartUI() {
  const { totalItems, subtotal, discount, total, promo2x15Count } = calculateCartTotals();

  document.querySelectorAll("#cartCount, #drawerCartCount").forEach((el) => {
    if (el) el.textContent = totalItems;
  });

  const container = document.getElementById("cartItemsContainer");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 3rem 1rem; color: #64748b;">
        <i class="ri-shopping-bag-3-line" style="font-size: 3rem; display:block; margin-bottom:0.5rem;"></i>
        <p>Tu carrito está vacío.</p>
        <small>¡Aprovecha los remates desde $10 y el combo 2x$15!</small>
      </div>
    `;
  } else {
    container.innerHTML = cart
      .map(
        (item) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span class="cart-item-meta">Marca: ${item.brand} | Talla: <strong>${item.size}</strong></span>
          ${item.promo === "promo2x15" ? '<span style="display:block;font-size:0.72rem;color:#e61e2a;font-weight:700;">🔥 Aplica 2x$15</span>' : ""}
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateItemQty('${item.key}', -1)">-</button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="updateItemQty('${item.key}', 1)">+</button>
          </div>
        </div>
        <strong>$${(item.price * item.qty).toFixed(2)}</strong>
      </div>
    `
      )
      .join("");
  }

  const subEl = document.getElementById("cartSubtotal");
  const discRow = document.getElementById("cartDiscountRow");
  const discEl = document.getElementById("cartDiscount");
  const totEl = document.getElementById("cartTotal");
  const alertBar = document.getElementById("promoAlertBar");

  if (subEl) subEl.textContent = `$${subtotal.toFixed(2)}`;
  if (totEl) totEl.textContent = `$${total.toFixed(2)}`;

  if (discRow && discEl) {
    if (discount > 0) {
      discRow.style.display = "flex";
      discEl.textContent = `-$${discount.toFixed(2)}`;
    } else {
      discRow.style.display = "none";
    }
  }

  if (alertBar) {
    if (promo2x15Count % 2 === 1) {
      alertBar.innerHTML = `🔥 ¡Tienes 1 artículo <strong>2x$15</strong>! Agrega 1 más de la promo y ahorra <strong>$5</strong> al instante.`;
    } else if (discount > 0) {
      alertBar.innerHTML = `🎉 ¡Combo <strong>2x$15</strong> aplicado! Estás ahorrando <strong>$${discount.toFixed(2)}</strong>.`;
    } else {
      alertBar.innerHTML = `💡 ¡Agrega 2 productos con etiqueta <strong>2x$15</strong> y paga solo $15 por ambos!`;
    }
  }
}

/* ==========================================================================
   MODAL DE VISTA RÁPIDA Y SELECCIÓN DE TALLA
   ========================================================================== */
let selectedModalSize = "";

function openQuickView(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  const modal = document.getElementById("quickViewModal");
  const modalBody = document.getElementById("modalBody");
  const backdrop = document.getElementById("backdrop");

  if (!product || !modal || !modalBody) return;
  selectedModalSize = product.sizes[0];

  modalBody.innerHTML = `
    <button class="close-btn" style="position:absolute;top:14px;right:14px;background:#111;" onclick="closeQuickView()">
      <i class="ri-close-line"></i>
    </button>
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:1.5rem; align-items:center;">
      <img src="${product.image}" alt="${product.name}" style="border-radius:12px; height:260px; width:100%; object-fit:cover;" />
      <div>
        <span class="section-tag">${product.brand} • ${product.audience}</span>
        <h3 style="font-size:1.35rem; margin-bottom:0.4rem;">${product.name}</h3>
        <div style="margin-bottom:0.8rem;">
          <span class="current-price">$${product.price}</span>
          <span class="old-price" style="margin-left:8px;">$${product.oldPrice}</span>
        </div>
        <p style="font-size:0.85rem; color:#64748b; margin-bottom:0.8rem;">Selecciona tu talla disponible:</p>
        <div class="size-selector" id="modalSizeList">
          ${product.sizes
            .map(
              (s, i) =>
                `<button type="button" class="size-pill ${i === 0 ? "selected" : ""}" onclick="selectModalSize(this, '${s}')">${s}</button>`
            )
            .join("")}
        </div>
        <button class="btn btn-primary btn-block" onclick="addToCart(${product.id}, selectedModalSize); closeQuickView();">
          Agregar al Carrito — $${product.price}
        </button>
      </div>
    </div>
  `;

  modal.classList.add("open");
  backdrop.classList.add("active");
}

function selectModalSize(btn, size) {
  selectedModalSize = size;
  document.querySelectorAll("#modalSizeList .size-pill").forEach((el) => el.classList.remove("selected"));
  btn.classList.add("selected");
}

function closeQuickView() {
  const modal = document.getElementById("quickViewModal");
  const backdrop = document.getElementById("backdrop");
  if (modal) modal.classList.remove("open");
  if (backdrop && !document.getElementById("cartDrawer").classList.contains("open")) {
    backdrop.classList.remove("active");
  }
}

/* ==========================================================================
   CONTROL DE DRAWER CARRITO & MENÚ MÓVIL
   ========================================================================== */
function openCartDrawer() {
  document.getElementById("cartDrawer")?.classList.add("open");
  document.getElementById("backdrop")?.classList.add("active");
}

function closeCartDrawer() {
  document.getElementById("cartDrawer")?.classList.remove("open");
  document.getElementById("backdrop")?.classList.remove("active");
}

/* ==========================================================================
   INICIALIZACIÓN SEGÚN LA PÁGINA ACTUAL
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  updateCartUI();

  // Menú Hamburguesa
  const hamburger = document.getElementById("hamburgerBtn");
  const navLinks = document.getElementById("navLinks");
  hamburger?.addEventListener("click", () => navLinks.classList.toggle("open"));

  // Eventos Carrito y Backdrop
  document.getElementById("openCartBtn")?.addEventListener("click", openCartDrawer);
  document.getElementById("closeCartBtn")?.addEventListener("click", closeCartDrawer);
  document.getElementById("backdrop")?.addEventListener("click", () => {
    closeCartDrawer();
    closeQuickView();
  });

  // Checkout simulado hacia WhatsApp
  document.getElementById("checkoutBtn")?.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío. Agrega algún producto primero.");
      return;
    }

    
    const miNumeroWhatsApp = "584121809980"; 

    const { total, discount } = calculateCartTotals();
    const summary = cart
      .map((i) => `• ${i.qty}x ${i.name} (${i.brand} - Talla ${i.size}) - $${(i.price * i.qty).toFixed(2)}`)
      .join("\n");

    const mensaje = `¡Hola! Quiero realizar el siguiente pedido en TU1ERZAPATICO:\n\n${summary}\n\n` +
                    (discount > 0 ? `Descuento 2x$15 aplicado: -$${discount.toFixed(2)}\n` : "") +
                    `*Total a pagar: $${total.toFixed(2)}*`;

    // encodeURIComponent asegura que los saltos de línea, acentos y símbolos ($) no rompan el enlace
    const url = `https://wa.me/${miNumeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });

  // 1. PÁGINA PRINCIPAL (index.html)
  const featuredGrid = document.getElementById("featuredProductsGrid");
  if (featuredGrid) {
    const renderHome = (filter = "all") => {
      const list = filter === "all" ? PRODUCTS.filter((p) => p.featured) : PRODUCTS.filter((p) => p.promo === filter);
      featuredGrid.innerHTML = list.map(createProductCard).join("");
    };
    renderHome();

    document.querySelectorAll("#homePromoFilters .tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#homePromoFilters .tab-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderHome(btn.dataset.filter);
      });
    });

    // Filtro rápido al hacer clic en marca
    document.querySelectorAll(".brand-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        window.location.href = `catalogo.html?brand=${encodeURIComponent(pill.dataset.brand)}`;
      });
    });
  }

  // 2. PÁGINA CATÁLOGO (catalogo.html)
  const catalogGrid = document.getElementById("catalogProductsGrid");
  if (catalogGrid) {
    const catSelect = document.getElementById("filterCategory");
    const brandSelect = document.getElementById("filterBrand");
    const promoSelect = document.getElementById("filterPromo");
    const sortSelect = document.getElementById("sortOrder");
    const searchInput = document.getElementById("globalSearch");

    // Leer parámetros URL (?cat=damas o ?brand=Nike)
    const params = new URLSearchParams(window.location.search);
    if (params.get("cat")) catSelect.value = params.get("cat");
    if (params.get("brand")) brandSelect.value = params.get("brand");
    if (params.get("q")) searchInput.value = params.get("q");

    const applyCatalogFilters = () => {
      let filtered = [...PRODUCTS];
      const q = (searchInput?.value || "").toLowerCase().trim();

      if (catSelect.value !== "all") filtered = filtered.filter((p) => p.category === catSelect.value);
      if (brandSelect.value !== "all") filtered = filtered.filter((p) => p.brand === brandSelect.value);
      if (promoSelect.value !== "all") filtered = filtered.filter((p) => p.promo === promoSelect.value);
      if (q) {
        filtered = filtered.filter(
          (p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.audience.toLowerCase().includes(q)
        );
      }

      if (sortSelect.value === "price-asc") filtered.sort((a, b) => a.price - b.price);
      if (sortSelect.value === "price-desc") filtered.sort((a, b) => b.price - a.price);

      document.getElementById("resultsCount").textContent = `Mostrando ${filtered.length} producto(s)`;
      catalogGrid.innerHTML = filtered.length
        ? filtered.map(createProductCard).join("")
        : `<p style="grid-column:1/-1; text-align:center; padding:2rem;">No se encontraron productos con esos filtros.</p>`;
    };

    [catSelect, brandSelect, promoSelect, sortSelect].forEach((el) => el?.addEventListener("change", applyCatalogFilters));
    searchInput?.addEventListener("input", applyCatalogFilters);
    document.getElementById("resetFiltersBtn")?.addEventListener("click", () => {
      catSelect.value = "all";
      brandSelect.value = "all";
      promoSelect.value = "all";
      sortSelect.value = "featured";
      if (searchInput) searchInput.value = "";
      applyCatalogFilters();
    });

    applyCatalogFilters();
  }

  // 3. PÁGINA OFERTAS (ofertas.html)
  const promo2x15Grid = document.getElementById("promo2x15Grid");
  const remate10Grid = document.getElementById("remate10Grid");
  if (promo2x15Grid && remate10Grid) {
    promo2x15Grid.innerHTML = PRODUCTS.filter((p) => p.promo === "promo2x15").map(createProductCard).join("");
    remate10Grid.innerHTML = PRODUCTS.filter((p) => p.promo === "remate10").map(createProductCard).join("");
  }

  // Buscador global desde cualquier página que no sea catálogo
  if (!catalogGrid) {
    const globalSearch = document.getElementById("globalSearch");
    const searchBtn = document.getElementById("searchBtn");
    const goSearch = () => {
      if (globalSearch?.value.trim()) {
        window.location.href = `catalogo.html?q=${encodeURIComponent(globalSearch.value.trim())}`;
      }
    };
    searchBtn?.addEventListener("click", goSearch);
    globalSearch?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") goSearch();
    });
  }

  // Validación Formulario de Contacto
  const contactForm = document.getElementById("contactForm");
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const interest = document.getElementById("interest");
    const message = document.getElementById("message");

    // Limpiar errores
    document.querySelectorAll(".error-msg").forEach((el) => (el.textContent = ""));

    if (name.value.trim().length < 3) {
      document.getElementById("nameError").textContent = "Ingresa tu nombre completo (mínimo 3 caracteres).";
      isValid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      document.getElementById("emailError").textContent = "Ingresa un correo electrónico válido.";
      isValid = false;
    }
    if (!/^[0-9+\s()-]{7,15}$/.test(phone.value.trim())) {
      document.getElementById("phoneError").textContent = "Ingresa un número de teléfono válido.";
      isValid = false;
    }
    if (!interest.value) {
      document.getElementById("interestError").textContent = "Selecciona el motivo de tu consulta.";
      isValid = false;
    }
    if (message.value.trim().length < 8) {
      document.getElementById("messageError").textContent = "Escribe un mensaje de al menos 8 caracteres.";
      isValid = false;
    }

    if (isValid) {
      const successBox = document.getElementById("formSuccess");
      successBox.style.display = "block";
      successBox.textContent = `✅ ¡Gracias ${name.value.trim()}! Hemos recibido tu consulta. Un asesor te responderá en breve.`;
      contactForm.reset();
    }
  });

  // Animación Scroll Reveal y sombra Navbar
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  window.addEventListener("scroll", () => {
    document.getElementById("navbar")?.classList.toggle("scrolled", window.scrollY > 20);
  });
});