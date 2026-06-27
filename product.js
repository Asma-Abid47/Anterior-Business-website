document.addEventListener("DOMContentLoaded", () => {
  const detailEl = document.getElementById("productDetail");
  if (!detailEl) return;

  const params = new URLSearchParams(window.location.search);
  const product = getProductById(params.get("id"));

  if (!product){
    detailEl.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">Product not found. <a href="index.html">Return home</a></div>`;
    return;
  }

  document.getElementById("pageTitle").textContent = `${product.name} — Anterior Wood Works`;
  document.getElementById("breadcrumbCat").href = `category.html?cat=${product.category}`;
  document.getElementById("breadcrumbCat").textContent = CATEGORY_META[product.category].title;
  document.getElementById("breadcrumbName").textContent = product.name;

  let selectedColor = product.colors[0];
  let qty = 1;

  detailEl.innerHTML = `
    <div class="product-detail__gallery reveal">
      <div class="main-img"><img id="mainImg" src="${product.images[0]}" alt="${product.name}"></div>
      ${product.images.length > 1 ? `
        <div class="thumb-row">
          ${product.images.map((img, i) => `<img src="${img}" data-i="${i}" class="${i === 0 ? 'active' : ''}" alt="${product.name} view ${i+1}">`).join('')}
        </div>` : ''}
    </div>

    <div class="product-detail__info reveal reveal-delay-1">
      <h1>${product.name}</h1>
      <div class="product-detail__rating">
        ${starString(product.rating)} <span>(${product.rating} rating)</span>
      </div>
      <p class="product-detail__price">
        ${product.oldPrice ? `<del>$${product.oldPrice.toFixed(2)}</del>` : ''}
        $${product.price.toFixed(2)}
      </p>
      <p class="product-detail__desc">${product.desc}</p>
      <div class="material-line"><strong>Material:</strong> ${product.material}</div>

      <div class="option-block">
        <label>Color</label>
        <div class="color-options" id="colorOptions">
          ${product.colors.map((c, i) => `<span class="color-dot ${i === 0 ? 'active' : ''}" style="background:${c}" data-color="${c}"></span>`).join('')}
        </div>
      </div>

      <div class="qty-row">
        <label style="font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#4F1419;font-weight:600;">Quantity</label>
        <div class="qty-stepper">
          <button id="qtyMinus" aria-label="Decrease quantity">&minus;</button>
          <span id="qtyValue">1</span>
          <button id="qtyPlus" aria-label="Increase quantity">+</button>
        </div>
      </div>

      <div class="detail-actions">
        <button class="btn btn--solid" id="addToCartBtn">Add to Cart — $${product.price.toFixed(2)}</button>
        <button class="icon-wish-btn ${Store.isWishlisted(product.id) ? 'active' : ''}" id="wishBtn" aria-label="Toggle wishlist">
          <svg viewBox="0 0 24 24"><path d="M12 20s-7-4.5-9.3-8.8C1.2 8 2.4 5 5.6 4.4 8 4 10 5 12 7c2-2 4-3 6.4-2.6C21.6 5 22.8 8 21.3 11.2 19 15.5 12 20 12 20z"/></svg>
        </button>
      </div>

      <div class="detail-meta">
        <div><svg viewBox="0 0 24 24"><rect x="1" y="7" width="14" height="10" rx="1"/><path d="M15 10h3l3 3v4h-6z"/></svg><strong>Free Delivery</strong> on orders over $199</div>
        <div><svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9"/><path d="M3 5v7h7"/></svg><strong>Easy Returns</strong> within 30 days</div>
        <div><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg><strong>Secure Checkout</strong> with encrypted payment</div>
      </div>

      <div class="product-tabs">
        <button class="tab-btn active" data-tab="desc">Description</button>
        <button class="tab-btn" data-tab="material">Materials &amp; Care</button>
        <button class="tab-btn" data-tab="reviews">Reviews</button>
      </div>
      <div class="tab-panel active" id="tab-desc">${product.desc}</div>
      <div class="tab-panel" id="tab-material">
        Crafted from ${product.material.toLowerCase()}. Wipe clean with a dry cloth; avoid direct sunlight for extended periods to preserve the finish. Each piece may show slight natural variation in wood grain or texture.
      </div>
      <div class="tab-panel" id="tab-reviews">
        <div class="testimonial-card" style="background:none;padding:0;margin-bottom:18px;">
          <div class="stars">${starString(product.rating)}</div>
          <p>"Exactly as pictured, and the build quality is even better than I expected. Worth the investment."</p>
        </div>
        <div class="testimonial-card" style="background:none;padding:0;">
          <div class="stars">★★★★☆</div>
          <p>"Delivery took a little longer than expected but the piece itself is beautiful."</p>
        </div>
      </div>
    </div>
  `;

  /* thumbnails */
  detailEl.querySelectorAll(".thumb-row img").forEach(thumb => {
    thumb.addEventListener("click", () => {
      document.getElementById("mainImg").src = product.images[thumb.dataset.i];
      detailEl.querySelectorAll(".thumb-row img").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });

  /* color */
  detailEl.querySelectorAll(".color-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      detailEl.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
      selectedColor = dot.dataset.color;
    });
  });

  /* qty */
  const qtyValue = document.getElementById("qtyValue");
  document.getElementById("qtyMinus").addEventListener("click", () => {
    qty = Math.max(1, qty - 1);
    qtyValue.textContent = qty;
  });
  document.getElementById("qtyPlus").addEventListener("click", () => {
    qty += 1;
    qtyValue.textContent = qty;
  });

  /* add to cart */
  document.getElementById("addToCartBtn").addEventListener("click", () => {
    Store.addToCart(product.id, qty, selectedColor);
    updateBadges();
    showToast(`Added ${qty} × ${product.name} to your cart`);
  });

  /* wishlist */
  const wishBtn = document.getElementById("wishBtn");
  wishBtn.addEventListener("click", () => {
    Store.toggleWishlist(product.id);
    wishBtn.classList.toggle("active");
    updateBadges();
    showToast(wishBtn.classList.contains("active") ? "Saved to wishlist" : "Removed from wishlist");
  });

  /* tabs */
  detailEl.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      detailEl.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      detailEl.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
    });
  });

  /* related products */
  const related = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4);
  const relatedGrid = document.getElementById("relatedGrid");
  relatedGrid.innerHTML = related.map(p => productCardHTML(p)).join("");
  bindProductCardEvents(relatedGrid);

  /* reveal newly injected elements */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){ entry.target.classList.add("revealed"); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal:not(.revealed)").forEach(el => obs.observe(el));
});
