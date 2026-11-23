(() => {
  'use strict';

  const WHATSAPP_PHONE = '527712207194';

  const FOOD_ITEMS = [
    {
      id: 'bowl-pollo',
      category: 'bowls',
      categoryLabel: 'Bowls & Ensaladas',
      shortName: 'Bowl de Pollo Asado',
      name: 'Bowl de Pechuga de Pollo Asada',
      priceSolo: 65,
      priceDuo: 85,
      image: 'assets/food_bowl_pollo.jpg',
      alt: 'Bowl PET transparente con pechuga de pollo asada, aguacate y queso panela',
      desc: 'Lechuga fresca, pollo sazonado a la plancha, cubos de queso panela con hierbas, crutones dorados, 3 láminas de aguacate Hass y pasta fusilli a un lado.',
      packagingRule: 'Bowl PET cristal • Vasito de aderezo cerrado por fuera.'
    },
    {
      id: 'bowl-pavo',
      category: 'bowls',
      categoryLabel: 'Bowls & Ensaladas',
      shortName: 'Bowl de Pavo',
      name: 'Bowl de Pechuga de Pavo',
      priceSolo: 65,
      priceDuo: 85,
      image: 'assets/food_bowl_pavo.jpg',
      alt: 'Bowl Green Bite con pechuga de pavo y vegetales frescos',
      desc: 'Base verde crujiente, rollitos de pechuga de pavo ahumado, queso panela, aguacate Hass sazonado, pasta medida y crocante ligero.',
      packagingRule: 'Bowl PET cristal • Vasito de aderezo cerrado por fuera.'
    },
    {
      id: 'bowl-atun',
      category: 'bowls',
      categoryLabel: 'Bowls & Ensaladas',
      shortName: 'Bowl de Atún',
      name: 'Bowl de Atún Fresco',
      priceSolo: 65,
      priceDuo: 85,
      image: 'assets/food_bowl_atun.jpg',
      alt: 'Bowl de ensalada con atún fresco y aguacate',
      desc: 'Lechuga fresca, mezcla ligera de atún con jitomate, cubos de queso panela, crutones dorados, fusilli medido y abanico de aguacate.',
      packagingRule: 'Bowl PET cristal • Vasito de aderezo cerrado por fuera.'
    },
    {
      id: 'chapata-pavo',
      category: 'chapatas',
      categoryLabel: 'Chapatas de la Casa',
      shortName: 'Chapata de Pavo',
      name: 'Chapata de Pechuga de Pavo Ahumado',
      priceSolo: 65,
      priceDuo: 85,
      image: 'assets/food_chapata_pavo.jpg',
      alt: 'Chapata artesanal de pavo ahumado partida en diagonal sobre tabla mármol y madera',
      desc: 'Pan artesanal partido en diagonal con láminas plegadas de pavo ahumado, queso blanco, aguacate Hass con pimienta, jitomate fino, cebolla y lechuga.',
      packagingRule: 'Envuelta en papel encerado liso crema con sello Green Bite.'
    },
    {
      id: 'chapata-pollo',
      category: 'chapatas',
      categoryLabel: 'Chapatas de la Casa',
      shortName: 'Chapata de Pollo',
      name: 'Chapata de Pollo Dorado',
      priceSolo: 65,
      priceDuo: 85,
      image: 'assets/food_chapata_pollo.jpg',
      alt: 'Chapata artesanal de pollo dorado a la plancha sobre tabla mármol y madera',
      desc: 'Tiras de pechuga de pollo dorado sazonado sobre cama de vegetales frescos, láminas abundantes de aguacate y untable ligero en pan crujiente.',
      packagingRule: 'Envuelta en papel encerado liso crema con sello Green Bite.'
    },
    {
      id: 'club-sandwich',
      category: 'club',
      categoryLabel: 'Línea Ejecutiva',
      shortName: 'Club Sándwich Integral',
      name: 'Club Sándwich Integral Completo',
      priceSolo: 85,
      priceDuo: 105,
      image: 'assets/food_club_sandwich.jpg',
      alt: 'Club Sándwich integral en clamshell verde olivo con papel crema liso y papas doradas',
      desc: '4 cuartos en pan integral tostado con pechuga de pollo o jamón de pavo ahumado, queso, zanahoria rallada vibrante, jitomate, aguacate y papas doradas.',
      packagingRule: 'Clamshell verde olivo con papel liso crema + 2 vasitos de aderezo.'
    },
    {
      id: 'tacos-dorados',
      category: 'comfort',
      categoryLabel: 'Antojos & Comfort',
      shortName: 'Tacos Dorados',
      name: 'Tacos Dorados Crujientes (4–5 pzas)',
      priceSolo: 50,
      priceDuo: 70,
      image: 'assets/food_tacos_dorados.jpg',
      alt: 'Tacos dorados crujientes con láminas de aguacate Hass y queso fresco en contenedor negro',
      desc: 'Tortilla dorada uniforme rellena de pollo deshebrado, coronada con abundantes láminas de aguacate Hass, queso fresco, cebolla fina y gajos de limón verde.',
      packagingRule: 'Contenedor con papel crema liso + salsero de salsa cremosa aparte.'
    },
    {
      id: 'pasta-cremosa',
      category: 'comfort',
      categoryLabel: 'Antojos & Comfort',
      shortName: 'Pasta Cremosa',
      name: 'Pasta Cremosa Comfort',
      priceSolo: 65,
      priceDuo: 85,
      image: 'assets/food_pasta_cremosa.jpg',
      alt: 'Pasta cremosa comfort en charola negra',
      desc: 'Pasta fusilli cremosa de la casa con cuadros de jamón y queso espolvoreado. Ideal cuando buscas energía y sabor reconfortante al mediodía.',
      packagingRule: 'Charola negra sellada con cubierto limpio empaquetado.'
    }
  ];

  const WATER_FLAVORS = [
    { id: 'fresa-kiwi', name: 'Fresa Kiwi', group: 'frutal', groupLabel: 'Frutal & Antioxidante', color: '#E8665E', image: 'assets/water_fresa_kiwi.jpg', desc: 'Balance dulce-ácido de fresa natural con nutrientes y frescura de kiwi.' },
    { id: 'mango-maracuya', name: 'Mango Maracuyá', group: 'frutal', groupLabel: 'Frutal & Antioxidante', color: '#F2AE30', image: 'assets/water_mango_maracuya.jpg', desc: 'Combinación tropical vibrante con notas cítricas aromáticas.' },
    { id: 'mango', name: 'Mango', group: 'frutal', groupLabel: 'Frutal & Antioxidante', color: '#F7C331', image: 'assets/water_mango.jpg', desc: 'Rica en vitaminas A y C, sabor frutal clásico de gran cuerpo.' },
    { id: 'guayaba', name: 'Guayaba', group: 'frutal', groupLabel: 'Frutal & Antioxidante', color: '#F0A39A', image: 'assets/water_guayaba.jpg', desc: 'Fuente natural de vitamina C, suave, aromática y digestiva.' },
    { id: 'jamaica', name: 'Jamaica', group: 'frutal', groupLabel: 'Frutal & Antioxidante', color: '#8F1D36', image: 'assets/water_jamaica.jpg', desc: 'Infusión floral antioxidante, ligera y súper refrescante.' },
    { id: 'p-limon-chia', name: 'P. Limón Chía', group: 'botanica', groupLabel: 'Botánica con Chía', color: '#9CC948', image: 'assets/water_p_limon_chia.jpg', desc: 'Frescura cítrica con semillas de chía hidratadas para acompañar tu comida.' },
    { id: 'fresa-limon-chia', name: 'Fresa Limón Chía', group: 'botanica', groupLabel: 'Botánica con Chía', color: '#D95863', image: 'assets/water_fresa_limon_chia.jpg', desc: 'Mezcla frutal-cítrica rica en fibra y omega-3 vegetal.' },
    { id: 'horchata-matcha', name: 'Horchata Matcha', group: 'cremosa', groupLabel: 'Cremosa & Signature', color: '#6E8E4F', image: 'assets/water_horchata_matcha.jpg', desc: 'Base cremosa de horchata cremosa combinada con té verde matcha.' },
    { id: 'taro', name: 'Taro', group: 'cremosa', groupLabel: 'Cremosa & Signature', color: '#AE93C7', image: 'assets/water_taro.jpg', desc: 'Color lila pastel icónico con textura suave tipo specialty drink.' },
    { id: 'fresa-coco', name: 'Fresa Coco', group: 'cremosa', groupLabel: 'Cremosa & Signature', color: '#EE949C', image: 'assets/water_fresa_coco.jpg', desc: 'Combinación suave, tropical y cremosa muy pedida en tardes cálidas.' },
    { id: 'horchata-rosa', name: 'Horchata Rosa', group: 'cremosa', groupLabel: 'Cremosa & Signature', color: '#E58C9C', image: 'assets/water_horchata_rosa.jpg', desc: 'Receta tradicional con toque aromático especiado y nota floral.' },
    { id: 'cafe', name: 'Café', group: 'cremosa', groupLabel: 'Cremosa & Signature', color: '#6E4B3A', image: 'assets/water_cafe.jpg', desc: 'Energía y concentración ideales para la sobremesa o media tarde en oficina.' }
  ];

  const POSTERS = [
    { src: 'assets/portada_nano.jpg', title: 'Portada Campaña • WhatsApp 771 220 7194', shortTitle: '1. Portada Green Bite' },
    { src: 'assets/bowls_nano.jpg', title: 'Póster Bowls & Ensaladas Frescas ($65 / Dúo $85)', shortTitle: '2. Bowls & Ensaladas' },
    { src: 'assets/poster_p3_club_chapatas.png', title: 'Póster Club Sándwich ($85) & Chapatas ($65)', shortTitle: '3. Club & Chapatas' },
    { src: 'assets/tacos_nano.jpg', title: 'Póster Tacos Dorados ($50) & Pasta ($65)', shortTitle: '4. Tacos & Comfort' },
    { src: 'assets/poster_p5_aguas.png', title: 'Póster 12 Aguas de Sabor Naturales 500 ml ($25 c/u)', shortTitle: '5. 12 Aguas 500 ml' },
    { src: 'assets/poster_p6_combos.png', title: 'Póster Combos Dúos, Green Pass & Oficinas', shortTitle: '6. Combos & Planes' }
  ];

  const PLANS = {
    'green-pass-4': {
      key: 'green-pass-4',
      title: 'Green Pass Semanal — Plan 4 Días (Lun–Jue)',
      detail: '4 Bowls o Chapatas + 4 Aguas 500 ml',
      price: 330
    },
    'green-pass-5': {
      key: 'green-pass-5',
      title: 'Green Pass Semanal — Plan 5 Días (Lun–Vie)',
      detail: '4 Bowls/Chapatas + 1 Club Sándwich + 5 Aguas 500 ml',
      price: 425
    }
  };

  let cart = [];
  let activeFoodFilter = 'all';
  let activeWaterFilter = 'all';
  let selectedDuoFoodId = 'bowl-pollo';
  let selectedDuoFlavorId = 'fresa-kiwi';
  let activeLightboxIndex = 0;
  let activeStageWaterId = 'mango-maracuya';

  const els = {
    foodGrid: document.getElementById('foodMenuGrid'),
    watersGrid: document.getElementById('watersGrid'),
    duoDishOptions: document.getElementById('duoDishOptions'),
    duoFlavorGrid: document.getElementById('duoFlavorGrid'),
    duoBuilderPrice: document.getElementById('duoBuilderPrice'),
    duoSelectedSummary: document.getElementById('duoSelectedSummary'),
    addBuiltDuoBtn: document.getElementById('addBuiltDuoBtn'),
    postersGalleryGrid: document.getElementById('postersGalleryGrid'),
    lightboxModal: document.getElementById('lightboxModal'),
    lightboxImg: document.getElementById('lightboxImg'),
    lightboxCaption: document.getElementById('lightboxCaption'),
    cartDrawer: document.getElementById('cartDrawer'),
    drawerBackdrop: document.getElementById('drawerBackdrop'),
    mobileDrawer: document.getElementById('mobileDrawer'),
    cartItemsList: document.getElementById('cartItemsList'),
    navCartCount: document.getElementById('navCartCount'),
    stickyCount: document.getElementById('stickyCount'),
    stickyTotal: document.getElementById('stickyTotal'),
    cartTotalDisplay: document.getElementById('cartTotalDisplay'),
    toastNotice: document.getElementById('toastNotice'),
    zoneSelect: document.getElementById('deliveryZoneSelect'),
    notesInput: document.getElementById('orderNotesInput')
  };

  function showToast(msg) {
    if (els.cartDrawer.classList.contains('open')) return;
    els.toastNotice.textContent = msg;
    els.toastNotice.classList.add('show');
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => {
      els.toastNotice.classList.remove('show');
    }, 2400);
  }

  function hideToast() {
    clearTimeout(showToast._timer);
    els.toastNotice.classList.remove('show');
  }

  function renderDuoBuilder() {
    const duoFoods = FOOD_ITEMS;
    els.duoDishOptions.innerHTML = duoFoods.map(item => `
      <button type="button" class="duo-choice-btn ${item.id === selectedDuoFoodId ? 'active' : ''}" data-duo-food="${item.id}">
        <strong>${item.shortName}</strong>
        <span>Dúo $${item.priceDuo} MXN</span>
      </button>
    `).join('');

    els.duoFlavorGrid.innerHTML = WATER_FLAVORS.map(w => `
      <button type="button" class="duo-flavor-btn ${w.id === selectedDuoFlavorId ? 'active' : ''}" data-duo-flavor="${w.id}">
        <span class="water-swatch" style="background-color: ${w.color}; width: 14px; height: 14px;" aria-hidden="true"></span>
        ${w.name}
      </button>
    `).join('');

    const food = FOOD_ITEMS.find(f => f.id === selectedDuoFoodId);
    const flavor = WATER_FLAVORS.find(w => w.id === selectedDuoFlavorId);
    const regularSum = food.priceSolo + 25;
    els.duoBuilderPrice.textContent = `$${food.priceDuo} MXN`;
    els.duoSelectedSummary.innerHTML = `Seleccionado: <strong>Dúo ${food.shortName} + Agua ${flavor.name}</strong> <span class="duo-summary-math">(Suelto: $${food.priceSolo} + $25 = <s>$${regularSum}</s> → Ahorras $5)</span>`;
    els.addBuiltDuoBtn.textContent = `+ Agregar Workday Dúo ($${food.priceDuo} MXN)`;
  }

  function buildWaterOptionsHtml() {
    return WATER_FLAVORS.map(
      w => `<option value="${w.name}">${w.name} (${w.groupLabel})</option>`
    ).join('');
  }

  function renderFoodMenu() {
    const filtered = activeFoodFilter === 'all'
      ? FOOD_ITEMS
      : FOOD_ITEMS.filter(item => item.category === activeFoodFilter);

    const waterOptions = buildWaterOptionsHtml();

    els.foodGrid.innerHTML = filtered.map((item, idx) => `
      <article class="food-card reveal-on-scroll card-3d-enter" style="--reveal-delay: ${(idx % 3) * 55}ms; --card-stagger: ${(idx % 6) * 45}ms;" data-food-id="${item.id}" data-mode="solo">
        <div class="food-card-media">
          <img src="${item.image}" alt="${item.alt}" loading="lazy">
          <span class="food-line-badge">${item.categoryLabel}</span>
        </div>
        <div class="food-card-body">
          <div class="food-card-head">
            <h3>${item.name}</h3>
            <span class="price-pill js-card-price">$${item.priceSolo} MXN</span>
          </div>
          <p class="food-desc">${item.desc}</p>
          <div class="food-presentation-note">${item.packagingRule}</div>

          <div class="mode-toggle-group" role="group" aria-label="Elegir individual o dúo">
            <button type="button" class="mode-btn active" data-select-mode="solo">
              Solo Platillo<br>$${item.priceSolo} MXN
            </button>
            <button type="button" class="mode-btn" data-select-mode="duo">
              En Dúo + Agua<br>$${item.priceDuo} MXN
            </button>
          </div>

          <div class="water-picker-wrap js-water-wrap">
            <label for="water-select-${item.id}">Elige tu Agua 500 ml (incluida en Dúo):</label>
            <select id="water-select-${item.id}" class="water-select js-water-select">
              ${waterOptions}
            </select>
          </div>

          <div class="card-action-stack">
            <button type="button" class="btn btn-primary btn-full btn-sheen js-add-food">
              + Agregar a mi Pedido
            </button>
            <button type="button" class="btn-direct-wa-sm js-direct-food-wa">
              Pedir ya por WhatsApp
            </button>
          </div>
        </div>
      </article>
    `).join('');

    observeReveals();
  }

  function renderWatersGrid() {
    const filtered = activeWaterFilter === 'all'
      ? WATER_FLAVORS
      : WATER_FLAVORS.filter(w => w.group === activeWaterFilter);

    els.watersGrid.innerHTML = filtered.map((w, idx) => `
      <article class="water-card reveal-on-scroll card-3d-enter ${w.id === activeStageWaterId ? 'is-stage-selected' : ''}" style="--reveal-delay: ${(idx % 4) * 50}ms; --card-stagger: ${(idx % 8) * 40}ms;" data-water-id="${w.id}">
        <div class="water-card-media js-preview-water-3d" title="Ver ${w.name} en Vista 3D">
          <img src="${w.image}" alt="Agua natural de ${w.name} 500 ml en botella PET con tapa negra" loading="lazy">
          <span class="water-price-tag">$25 MXN</span>
          <span class="water-stage-pill">Vista 3D</span>
        </div>
        <div class="water-card-body">
          <div class="water-card-top">
            <span class="water-cat-pill">${w.groupLabel}</span>
            <span class="water-swatch" style="background-color: ${w.color};" aria-hidden="true"></span>
          </div>
          <h3>${w.name}</h3>
          <p class="water-desc">${w.desc}</p>
          <div class="card-action-stack">
            <button type="button" class="btn btn-outline btn-full js-add-water" data-water-id="${w.id}">
              + Agregar $25 MXN
            </button>
            <button type="button" class="btn-direct-wa-sm js-direct-water-wa" data-water-id="${w.id}">
              Pedir por WhatsApp
            </button>
          </div>
        </div>
      </article>
    `).join('');

    observeReveals();
  }

  function renderPostersGallery() {
    els.postersGalleryGrid.innerHTML = POSTERS.map((poster, idx) => `
      <button type="button" class="poster-showcase-btn js-open-lightbox" data-poster-index="${idx}">
        <div class="poster-showcase-thumb">
          <img src="${poster.src}" alt="${poster.title}" loading="lazy">
        </div>
        <div class="poster-showcase-foot">
          <strong>${poster.shortTitle}</strong>
          <span>Ampliar ⤢</span>
        </div>
      </button>
    `).join('');
  }

  function openLightbox(index) {
    activeLightboxIndex = (index + POSTERS.length) % POSTERS.length;
    const poster = POSTERS[activeLightboxIndex];
    els.lightboxImg.src = poster.src;
    els.lightboxImg.alt = poster.title;
    els.lightboxCaption.textContent = poster.title;
    els.lightboxModal.classList.add('open');
    els.lightboxModal.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    els.lightboxModal.classList.remove('open');
    els.lightboxModal.setAttribute('aria-hidden', 'true');
  }

  function addToCart(entry) {
    const existing = cart.find(i => i.key === entry.key);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...entry, qty: 1 });
    }
    renderCart();
    showToast(`Agregado: ${entry.title}`);
  }

  function openWhatsAppMessage(text) {
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
  }

  function inferRegularUnitPrice(item) {
    if (typeof item.regularPrice === 'number') return item.regularPrice;
    if (item.key === 'green-pass-4') return 360;
    if (item.key === 'green-pass-5') return 470;
    if (item.key.includes('__duo__')) return item.price + 5;
    return item.price;
  }

  function calculateCartAudit(items) {
    let totalQty = 0;
    let rawSum = 0;
    let regularSubtotal = 0;
    let soloFoodsCount = 0;
    let soloWatersCount = 0;
    let explicitDuosCount = 0;
    let planMealsCount = 0;

    items.forEach(item => {
      const q = item.qty;
      totalQty += q;
      rawSum += item.price * q;
      regularSubtotal += inferRegularUnitPrice(item) * q;

      if (item.key.endsWith('__solo')) {
        soloFoodsCount += q;
      } else if (item.key.startsWith('water__')) {
        soloWatersCount += q;
      } else if (item.key.includes('__duo__')) {
        explicitDuosCount += q;
      } else if (item.key === 'green-pass-4') {
        planMealsCount += 4 * q;
      } else if (item.key === 'green-pass-5') {
        planMealsCount += 5 * q;
      }
    });

    const autoPairedDuos = Math.min(soloFoodsCount, soloWatersCount);
    const autoDuoDiscount = autoPairedDuos * 5;
    const finalTotal = Math.max(0, rawSum - autoDuoDiscount);
    const totalSavings = Math.max(0, regularSubtotal - finalTotal);
    const explicitSavings = Math.max(0, totalSavings - autoDuoDiscount);
    const totalMeals = explicitDuosCount + soloFoodsCount + planMealsCount;
    const totalDuos = explicitDuosCount + autoPairedDuos;
    const freeShipping = totalMeals >= 3;
    const freeWaters = Math.floor(totalDuos / 4);

    return {
      totalQty,
      rawSum,
      regularSubtotal,
      autoPairedDuos,
      autoDuoDiscount,
      explicitSavings,
      totalSavings,
      finalTotal,
      totalMeals,
      totalDuos,
      freeShipping,
      freeWaters
    };
  }

  function renderCart() {
    const audit = calculateCartAudit(cart);
    const { totalQty, finalTotal, regularSubtotal, totalSavings, explicitSavings, autoPairedDuos, autoDuoDiscount, totalMeals, freeShipping, freeWaters } = audit;

    els.navCartCount.textContent = String(totalQty);
    els.stickyCount.textContent = String(totalQty);
    els.stickyTotal.textContent = `$${finalTotal} MXN`;
    els.cartTotalDisplay.textContent = `$${finalTotal} MXN`;

    const floatTitle = document.getElementById('floatingWaTitle');
    const floatSub = document.getElementById('floatingWaSub');
    if (floatTitle && floatSub) {
      if (totalQty > 0) {
        floatTitle.textContent = `Enviar Pedido ($${finalTotal} MXN)`;
        floatSub.textContent = totalSavings > 0
          ? `${totalQty} art. • Ahorras $${totalSavings} MXN`
          : `${totalQty} artículo${totalQty > 1 ? 's' : ''} • WhatsApp 771 220 7194`;
      } else {
        floatTitle.textContent = 'Ordenar por WhatsApp';
        floatSub.textContent = '771 220 7194 • Envíos Pachuca';
      }
    }

    const auditBox = document.getElementById('cartAuditBox');
    if (auditBox) {
      if (totalQty === 0) {
        auditBox.innerHTML = '';
        auditBox.classList.remove('visible');
      } else {
        const lines = [
          `<div class="cart-audit-line"><span>Valor individual (${totalQty} ${totalQty === 1 ? 'artículo' : 'artículos'}):</span><span>$${regularSubtotal} MXN</span></div>`
        ];
        if (explicitSavings > 0) {
          lines.push(`<div class="cart-audit-line is-savings"><span>Ahorro en Dúos / Green Pass:</span><span>-$${explicitSavings} MXN</span></div>`);
        }
        if (autoDuoDiscount > 0) {
          lines.push(`<div class="cart-audit-line is-savings"><span>Descuento Auto-Dúo (${autoPairedDuos} par${autoPairedDuos > 1 ? 'es' : ''} sueltos):</span><span>-$${autoDuoDiscount} MXN</span></div>`);
        }
        const perks = [];
        if (freeShipping) {
          perks.push(`✓ Envío sin costo Office Drop (${totalMeals} comidas en pedido)`);
        } else if (totalMeals > 0 && totalMeals < 3) {
          const faltan = 3 - totalMeals;
          perks.push(`• ${faltan === 1 ? 'Falta 1 comida' : `Faltan ${faltan} comidas`} para envío gratis Office Drop`);
        }
        if (freeWaters > 0) {
          perks.push(`🎁 Incluye +${freeWaters} Agua 500 ml de cortesía (4+ Dúos)`);
        }
        auditBox.innerHTML = `${lines.join('')}${perks.length ? `<div class="cart-audit-perks">${perks.map(p => `<span>${p}</span>`).join('')}</div>` : ''}`;
        auditBox.classList.add('visible');
      }
    }

    if (cart.length === 0) {
      els.cartItemsList.innerHTML = `
        <div class="cart-empty">
          <strong>Tu pedido está vacío.</strong><br>
          Elige un Bowl, Chapata, Club Sándwich, Tacos Dorados, Pasta o tu Agua de Sabor favorita para armar tu mensaje automático por WhatsApp.
        </div>
      `;
      return;
    }

    els.cartItemsList.innerHTML = cart.map((item, idx) => `
      <div class="cart-item-row">
        <div class="cart-item-top">
          <div>
            <strong>${item.title}</strong>
            ${item.detail ? `<div class="cart-item-meta">${item.detail}</div>` : ''}
          </div>
          <strong>$${item.price * item.qty}</strong>
        </div>
        <div class="cart-item-controls">
          <div class="qty-stepper">
            <button type="button" class="qty-btn js-qty-dec" data-index="${idx}" aria-label="Disminuir cantidad">−</button>
            <span class="qty-val">${item.qty}</span>
            <button type="button" class="qty-btn js-qty-inc" data-index="${idx}" aria-label="Aumentar cantidad">+</button>
          </div>
          <button type="button" class="btn-link-clear js-remove-item" data-index="${idx}">Quitar</button>
        </div>
      </div>
    `).join('');
  }

  function closeAllDrawers() {
    els.cartDrawer.classList.remove('open');
    els.mobileDrawer.classList.remove('open');
    els.drawerBackdrop.classList.remove('open');
    document.getElementById('openMenuBtn').setAttribute('aria-expanded', 'false');
  }

  function openCartDrawer() {
    hideToast();
    closeAllDrawers();
    els.cartDrawer.classList.add('open');
    els.drawerBackdrop.classList.add('open');
  }

  function openMobileMenu() {
    hideToast();
    closeAllDrawers();
    els.mobileDrawer.classList.add('open');
    els.drawerBackdrop.classList.add('open');
    document.getElementById('openMenuBtn').setAttribute('aria-expanded', 'true');
  }

  function sendWhatsAppOrder() {
    if (cart.length === 0) {
      showToast('Agrega al menos un platillo o agua para enviar tu pedido.');
      return;
    }

    const audit = calculateCartAudit(cart);
    const zone = els.zoneSelect.value;
    const notes = els.notesInput.value.trim();

    const lines = [
      'Hola *Green Bite*, quiero realizar el siguiente pedido:',
      ''
    ];

    cart.forEach(item => {
      const extra = item.detail ? ` (${item.detail})` : '';
      lines.push(`• ${item.qty}x ${item.title}${extra} — $${item.price * item.qty} MXN`);
    });

    lines.push('');
    if (audit.autoDuoDiscount > 0) {
      lines.push(`*Descuento Auto-Dúo (${audit.autoPairedDuos} par):* -$${audit.autoDuoDiscount} MXN`);
    }
    if (audit.totalSavings > 0) {
      lines.push(`*Valor regular suelto:* $${audit.regularSubtotal} MXN (Ahorro total: $${audit.totalSavings} MXN)`);
    }
    if (audit.freeShipping) {
      lines.push('*Beneficio Office Drop:* Envío sin costo (3+ comidas)');
    }
    if (audit.freeWaters > 0) {
      lines.push(`*Cortesía Office Drop:* +${audit.freeWaters} Agua 500 ml gratis (4+ Dúos)`);
    }
    lines.push(`*Total final a pagar:* $${audit.finalTotal} MXN`);
    lines.push(`*Zona de entrega:* ${zone}`);
    if (notes) {
      lines.push(`*Indicaciones:* ${notes}`);
    }

    openWhatsAppMessage(lines.join('\n'));
  }

  function sendWhatsAppOrderOrChat() {
    if (cart.length > 0) {
      sendWhatsAppOrder();
      return;
    }
    const zone = els.zoneSelect ? els.zoneSelect.value : 'Pachuca';
    openWhatsAppMessage(
      `Hola *Green Bite*, quiero hacer un pedido para entrega en *${zone}*. ¿Me confirmas disponibilidad del menú de hoy?`
    );
  }

  function updateWatersHeroStage(waterId, animateFlip = true) {
    const water = WATER_FLAVORS.find(w => w.id === waterId);
    if (!water) return;
    if (water.id === activeStageWaterId && animateFlip) return;

    activeStageWaterId = water.id;
    const previewImg = document.getElementById('watersHeroPreviewImg');
    const stageBadge = document.getElementById('watersHeroBadge');
    const stageAddBtn = document.getElementById('watersHeroAddBtn');
    const stageWaBtn = document.getElementById('watersHeroWaBtn');

    if (previewImg) {
      previewImg.src = water.image;
      previewImg.alt = `Vista 3D de catálogo Agua de sabor ${water.name} 500 ml`;
      if (animateFlip) {
        previewImg.classList.remove('bottle-3d-flip');
        void previewImg.offsetWidth;
        previewImg.classList.add('bottle-3d-flip');
      }
    }
    if (stageBadge) {
      stageBadge.textContent = `Vista 3D de Catálogo • ${water.name} ($25 MXN)`;
    }
    if (stageAddBtn) {
      stageAddBtn.dataset.activeWater = water.id;
    }
    if (stageWaBtn) {
      stageWaBtn.dataset.activeWater = water.id;
    }

    document.querySelectorAll('.water-card[data-water-id]').forEach(card => {
      card.classList.toggle('is-stage-selected', card.dataset.waterId === water.id);
    });
  }

  function flashButtonAdded(btn, originalText) {
    btn.textContent = '✓ ¡Agregado!';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 950);
  }

  function bindEvents() {
    els.duoDishOptions.addEventListener('click', e => {
      const btn = e.target.closest('[data-duo-food]');
      if (!btn) return;
      selectedDuoFoodId = btn.dataset.duoFood;
      renderDuoBuilder();
      els.duoBuilderPrice.classList.remove('is-updated');
      void els.duoBuilderPrice.offsetWidth;
      els.duoBuilderPrice.classList.add('is-updated');
    });

    els.duoFlavorGrid.addEventListener('click', e => {
      const btn = e.target.closest('[data-duo-flavor]');
      if (!btn) return;
      selectedDuoFlavorId = btn.dataset.duoFlavor;
      renderDuoBuilder();
    });

    els.addBuiltDuoBtn.addEventListener('click', () => {
      const food = FOOD_ITEMS.find(f => f.id === selectedDuoFoodId);
      const flavor = WATER_FLAVORS.find(w => w.id === selectedDuoFlavorId);
      addToCart({
        key: `${food.id}__duo__${flavor.name}`,
        title: `Dúo ${food.name}`,
        detail: `Incluye Agua 500 ml: ${flavor.name}`,
        price: food.priceDuo,
        regularPrice: food.priceSolo + 25
      });
    });

    const directDuoBtn = document.getElementById('directDuoWaBtn');
    if (directDuoBtn) {
      directDuoBtn.addEventListener('click', () => {
        const food = FOOD_ITEMS.find(f => f.id === selectedDuoFoodId);
        const flavor = WATER_FLAVORS.find(w => w.id === selectedDuoFlavorId);
        openWhatsAppMessage(
          `Hola *Green Bite*, quiero ordenar un *Dúo ${food.name}* + Agua 500 ml de *${flavor.name}* ($${food.priceDuo} MXN).`
        );
      });
    }

    document.querySelectorAll('.js-smart-wa-cta').forEach(btn => {
      btn.addEventListener('click', sendWhatsAppOrderOrChat);
    });

    document.querySelectorAll('[data-food-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-food-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFoodFilter = btn.dataset.foodFilter;
        renderFoodMenu();
      });
    });

    document.querySelectorAll('[data-water-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-water-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeWaterFilter = btn.dataset.waterFilter;
        renderWatersGrid();
      });
    });

    els.foodGrid.addEventListener('click', e => {
      const modeBtn = e.target.closest('[data-select-mode]');
      if (modeBtn) {
        const card = modeBtn.closest('.food-card');
        const food = FOOD_ITEMS.find(f => f.id === card.dataset.foodId);
        const mode = modeBtn.dataset.selectMode;
        card.dataset.mode = mode;

        card.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        modeBtn.classList.add('active');

        const priceEl = card.querySelector('.js-card-price');
        const waterWrap = card.querySelector('.js-water-wrap');
        if (mode === 'duo') {
          priceEl.textContent = `$${food.priceDuo} MXN`;
          waterWrap.classList.add('visible');
        } else {
          priceEl.textContent = `$${food.priceSolo} MXN`;
          waterWrap.classList.remove('visible');
        }
        priceEl.classList.remove('is-updated');
        void priceEl.offsetWidth;
        priceEl.classList.add('is-updated');
        return;
      }

      const addBtn = e.target.closest('.js-add-food');
      if (addBtn) {
        const card = addBtn.closest('.food-card');
        const food = FOOD_ITEMS.find(f => f.id === card.dataset.foodId);
        const mode = card.dataset.mode || 'solo';

        if (mode === 'duo') {
          const flavor = card.querySelector('.js-water-select').value;
          addToCart({
            key: `${food.id}__duo__${flavor}`,
            title: `Dúo ${food.name}`,
            detail: `Incluye Agua 500 ml: ${flavor}`,
            price: food.priceDuo,
            regularPrice: food.priceSolo + 25
          });
        } else {
          addToCart({
            key: `${food.id}__solo`,
            title: food.name,
            detail: 'Individual (aderezo/salsa aparte)',
            price: food.priceSolo,
            regularPrice: food.priceSolo
          });
        }
        flashButtonAdded(addBtn, '+ Agregar a mi Pedido');
        return;
      }

      const directWaBtn = e.target.closest('.js-direct-food-wa');
      if (directWaBtn) {
        const card = directWaBtn.closest('.food-card');
        const food = FOOD_ITEMS.find(f => f.id === card.dataset.foodId);
        const mode = card.dataset.mode || 'solo';
        if (mode === 'duo') {
          const flavor = card.querySelector('.js-water-select').value;
          openWhatsAppMessage(
            `Hola *Green Bite*, quiero ordenar *Dúo ${food.name}* + Agua 500 ml de *${flavor}* ($${food.priceDuo} MXN).`
          );
        } else {
          openWhatsAppMessage(
            `Hola *Green Bite*, quiero ordenar *${food.name}* ($${food.priceSolo} MXN).`
          );
        }
      }
    });

    els.watersGrid.addEventListener('click', e => {
      const addWaterBtn = e.target.closest('.js-add-water');
      if (addWaterBtn) {
        const water = WATER_FLAVORS.find(w => w.id === addWaterBtn.dataset.waterId);
        updateWatersHeroStage(water.id, true);
        addToCart({
          key: `water__${water.id}`,
          title: `Agua de Sabor 500 ml — ${water.name}`,
          detail: water.groupLabel,
          price: 25
        });
        flashButtonAdded(addWaterBtn, '+ Agregar $25 MXN');
        return;
      }

      const directWaterBtn = e.target.closest('.js-direct-water-wa');
      if (directWaterBtn) {
        const water = WATER_FLAVORS.find(w => w.id === directWaterBtn.dataset.waterId);
        updateWatersHeroStage(water.id, true);
        openWhatsAppMessage(
          `Hola *Green Bite*, quiero ordenar un Agua de Sabor 500 ml de *${water.name}* ($25 MXN).`
        );
        return;
      }

      const previewMedia = e.target.closest('.js-preview-water-3d');
      if (previewMedia) {
        const card = previewMedia.closest('.water-card');
        if (card && card.dataset.waterId) {
          updateWatersHeroStage(card.dataset.waterId, true);
          const stageEl = document.getElementById('watersHeroStage');
          if (stageEl && window.innerWidth <= 1120) {
            stageEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }
    });

    if (window.matchMedia('(hover: hover)').matches) {
      els.watersGrid.addEventListener('mouseover', e => {
        const card = e.target.closest('.water-card[data-water-id]');
        if (card) updateWatersHeroStage(card.dataset.waterId, true);
      });
    }

    const watersHeroAddBtn = document.getElementById('watersHeroAddBtn');
    if (watersHeroAddBtn) {
      watersHeroAddBtn.addEventListener('click', () => {
        const water = WATER_FLAVORS.find(w => w.id === activeStageWaterId) || WATER_FLAVORS[1];
        addToCart({
          key: `water__${water.id}`,
          title: `Agua de Sabor 500 ml — ${water.name}`,
          detail: water.groupLabel,
          price: 25
        });
        flashButtonAdded(watersHeroAddBtn, '+ Agregar al Pedido ($25 MXN)');
      });
    }

    const watersHeroWaBtn = document.getElementById('watersHeroWaBtn');
    if (watersHeroWaBtn) {
      watersHeroWaBtn.addEventListener('click', () => {
        const water = WATER_FLAVORS.find(w => w.id === activeStageWaterId) || WATER_FLAVORS[1];
        openWhatsAppMessage(
          `Hola *Green Bite*, quiero ordenar un Agua de Sabor 500 ml de *${water.name}* ($25 MXN).`
        );
      });
    }

    document.querySelectorAll('.add-plan-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const plan = PLANS[btn.dataset.planId];
        if (!plan) return;
        addToCart({
          key: plan.key,
          title: plan.title,
          detail: plan.detail,
          price: plan.price
        });
        openCartDrawer();
      });
    });

    document.addEventListener('click', e => {
      const opener = e.target.closest('.js-open-lightbox');
      if (opener) {
        openLightbox(Number(opener.dataset.posterIndex || 0));
      }
    });

    document.getElementById('closeLightboxBtn').addEventListener('click', closeLightbox);
    document.getElementById('prevLightboxBtn').addEventListener('click', () => openLightbox(activeLightboxIndex - 1));
    document.getElementById('nextLightboxBtn').addEventListener('click', () => openLightbox(activeLightboxIndex + 1));
    els.lightboxModal.addEventListener('click', e => {
      if (e.target === els.lightboxModal) closeLightbox();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeLightbox();
        closeAllDrawers();
      }
    });

    document.getElementById('faqList').addEventListener('click', e => {
      const qBtn = e.target.closest('.faq-question');
      if (!qBtn) return;
      const expanded = qBtn.getAttribute('aria-expanded') === 'true';
      const answer = qBtn.nextElementSibling;
      const icon = qBtn.querySelector('.faq-icon');
      qBtn.setAttribute('aria-expanded', String(!expanded));
      answer.classList.toggle('open', !expanded);
      icon.textContent = expanded ? '+' : '−';
    });

    els.cartItemsList.addEventListener('click', e => {
      const decBtn = e.target.closest('.js-qty-dec');
      const incBtn = e.target.closest('.js-qty-inc');
      const remBtn = e.target.closest('.js-remove-item');

      if (decBtn) {
        const idx = Number(decBtn.dataset.index);
        cart[idx].qty -= 1;
        if (cart[idx].qty <= 0) cart.splice(idx, 1);
        renderCart();
      } else if (incBtn) {
        const idx = Number(incBtn.dataset.index);
        cart[idx].qty += 1;
        renderCart();
      } else if (remBtn) {
        const idx = Number(remBtn.dataset.index);
        cart.splice(idx, 1);
        renderCart();
      }
    });

    document.getElementById('openCartBtn').addEventListener('click', openCartDrawer);
    document.getElementById('stickyCartTrigger').addEventListener('click', openCartDrawer);
    document.getElementById('closeCartBtn').addEventListener('click', closeAllDrawers);
    document.getElementById('openMenuBtn').addEventListener('click', openMobileMenu);
    document.getElementById('closeMenuBtn').addEventListener('click', closeAllDrawers);
    els.drawerBackdrop.addEventListener('click', closeAllDrawers);
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', closeAllDrawers);
    });
    document.getElementById('clearCartBtn').addEventListener('click', () => {
      cart = [];
      renderCart();
    });
    document.getElementById('sendWhatsAppOrderBtn').addEventListener('click', sendWhatsAppOrder);
  }

  function initScrollSpy() {
    const navLinks = Array.from(document.querySelectorAll('.desktop-nav a'));
    const sections = navLinks
      .map(link => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    if (!('IntersectionObserver' in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinks.forEach(a => {
          a.classList.toggle('nav-active', a.getAttribute('href') === `#${id}`);
        });
      });
    }, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });

    sections.forEach(sec => observer.observe(sec));
  }

  let revealObserver = null;
  let revealScrollBound = false;

  function revealVisibleNow() {
    const pending = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
    const cutoff = window.innerHeight + 180;
    pending.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= cutoff) {
        el.classList.add('is-visible');
        if (revealObserver) revealObserver.unobserve(el);
      }
    });
  }

  function observeReveals() {
    document
      .querySelectorAll('.section-header, .duos-showcase-box, .promo-card, .perk-card, .pack-card, .zones-panel, .downloads-box, .faq-item')
      .forEach((el, idx) => {
        if (!el.classList.contains('reveal-on-scroll')) {
          el.classList.add('reveal-on-scroll');
          el.style.setProperty('--reveal-delay', `${(idx % 3) * 45}ms`);
        }
      });

    const items = Array.from(document.querySelectorAll('.reveal-on-scroll:not(.is-visible)'));
    if (items.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      }, { rootMargin: '180px 0px', threshold: 0.01 });
    }

    if (!revealScrollBound) {
      revealScrollBound = true;
      window.addEventListener('scroll', revealVisibleNow, { passive: true });
      window.addEventListener('resize', revealVisibleNow, { passive: true });
    }

    items.forEach(el => revealObserver.observe(el));
    revealVisibleNow();
  }

  function init3DTiltCards() {
    if (
      !window.matchMedia('(hover: hover)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const TILT_SELECTOR = '.food-card, .water-card, .promo-card, .poster-showcase-btn, .waters-stage-card';
    let activeCard = null;

    function resetCardTilt(card) {
      if (!card) return;
      card.style.removeProperty('--rx');
      card.style.removeProperty('--ry');
      card.style.removeProperty('--tz');
      card.style.removeProperty('--glare-o');
    }

    document.addEventListener('mousemove', e => {
      const card = e.target.closest(TILT_SELECTOR);
      if (activeCard && activeCard !== card) {
        resetCardTilt(activeCard);
        activeCard = null;
      }
      if (!card) return;

      activeCard = card;
      const rect = card.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const nx = Math.max(-0.5, Math.min(0.5, (e.clientX - rect.left) / rect.width - 0.5));
      const ny = Math.max(-0.5, Math.min(0.5, (e.clientY - rect.top) / rect.height - 0.5));

      card.style.setProperty('--rx', `${(-ny * 9.5).toFixed(2)}deg`);
      card.style.setProperty('--ry', `${(nx * 11.5).toFixed(2)}deg`);
      card.style.setProperty('--tz', '8px');
      card.style.setProperty('--glare-x', `${((nx + 0.5) * 100).toFixed(1)}%`);
      card.style.setProperty('--glare-y', `${((ny + 0.5) * 100).toFixed(1)}%`);
      card.style.setProperty('--glare-o', '1');
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      resetCardTilt(activeCard);
      activeCard = null;
    });
  }

  function initHeroParallax() {
    const collage = document.getElementById('heroCollage');
    if (
      !collage ||
      !window.matchMedia('(hover: hover) and (min-width: 1121px)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const layers = Array.from(collage.querySelectorAll('[data-parallax]'));
    collage.addEventListener('mousemove', e => {
      const rect = collage.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      collage.style.transform = `perspective(1100px) rotateX(${(-ny * 5.2).toFixed(2)}deg) rotateY(${(nx * 6.4).toFixed(2)}deg)`;
      layers.forEach(layer => {
        const depth = Number(layer.dataset.parallax || 0);
        layer.style.transform = `translate3d(${(nx * depth).toFixed(1)}px, ${(ny * depth).toFixed(1)}px, ${(Math.abs(depth) * 0.7).toFixed(1)}px)`;
      });
    });

    collage.addEventListener('mouseleave', () => {
      collage.style.transform = '';
      layers.forEach(layer => {
        layer.style.transform = '';
      });
    });
  }

  document.documentElement.classList.add('anim-ready');
  renderDuoBuilder();
  renderFoodMenu();
  renderWatersGrid();
  renderPostersGallery();
  updateWatersHeroStage(activeStageWaterId, false);
  renderCart();
  bindEvents();
  initScrollSpy();
  observeReveals();
  init3DTiltCards();
  initHeroParallax();
})();
