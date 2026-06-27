/* =========================================================
   Shared product-card renderer (home, category, wishlist)
========================================================= */
function productCardHTML(p, badge){
  const wished = Store.isWishlisted(p.id);
  return `
    <article class="product-card reveal" data-id="${p.id}">
      ${badge ? `<span class="product-card__badge">${badge}</span>` : ''}
      <div class="product-card__img">
        <a class="product-card__link" href="product.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}">
        </a>
        <button class="wish-toggle ${wished ? 'active' : ''}" data-id="${p.id}" aria-label="Toggle wishlist">
          <svg viewBox="0 0 24 24"><path d="M12 20s-7-4.5-9.3-8.8C1.2 8 2.4 5 5.6 4.4 8 4 10 5 12 7c2-2 4-3 6.4-2.6C21.6 5 22.8 8 21.3 11.2 19 15.5 12 20 12 20z"/></svg>
        </button>
      </div>
      <div class="product-card__body">
        <a class="product-card__link" href="product.html?id=${p.id}"><h3>${p.name}</h3></a>
        <div class="rating-row"><span class="stars">${starString(p.rating)}</span><span class="rating-num">(${p.rating})</span></div>
        <div class="price-row">
          <span class="price">$${p.price.toFixed(2)}</span>
          ${p.oldPrice ? `<del>$${p.oldPrice.toFixed(2)}</del>` : ''}
        </div>
        <button class="add-to-cart-full" data-id="${p.id}">
          <svg viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 2H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>
          Add to Cart
        </button>
      </div>
    </article>
  `;
}

function bindProductCardEvents(container){
  container.querySelectorAll(".add-to-cart-full, .add-to-cart").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.dataset.id;
      Store.addToCart(id, 1);
      updateBadges();
      showToast("Added to your cart");
      const original = btn.innerHTML;
      btn.innerHTML = "✓ Added";
      setTimeout(() => { btn.innerHTML = original; }, 900);
    });
  });
  container.querySelectorAll(".wish-toggle").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.dataset.id;
      Store.toggleWishlist(id);
      btn.classList.toggle("active");
      updateBadges();
      showToast(btn.classList.contains("active") ? "Saved to wishlist" : "Removed from wishlist");
    });
  });
}

/* ---------- Home page ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const categoryGrid = document.getElementById("categoryGrid");
  if (categoryGrid){
    categoryGrid.innerHTML = Object.entries(CATEGORY_META).map(([key, meta], i) => `
      <a class="category-card reveal reveal-delay-${(i % 5) + 1}" href="category.html?cat=${key}">
        <div class="category-card__media" data-key="${key}">
          <video autoplay muted loop playsinline preload="metadata" poster="${meta.hero}">
            <source src="${meta.video}" type="video/mp4">
          </video>
          <img class="cat-fallback" src="${meta.hero}" alt="${meta.title}">
        </div>
        <div class="category-card__body">
          <h3>${meta.title}</h3>
          <span>From $${meta.from}</span>
        </div>
      </a>
    `).join("");

    /* video fallback: if a category video can't load or play, show the static image instead */
    categoryGrid.querySelectorAll(".category-card__media").forEach(mediaEl => {
      const video = mediaEl.querySelector("video");
      const showFallback = () => mediaEl.classList.add("video-failed");
      video.addEventListener("error", showFallback);
      const playPromise = video.play();
      if (playPromise !== undefined){
        playPromise.catch(showFallback);
      }
      
    });
  }

  const track = document.getElementById("sliderTrack");
  if (track){
    const featured = PRODUCTS.slice(0, 10);
    track.innerHTML = featured.map((p, i) => productCardHTML(p, i === 0 ? "Best Seller" : null)).join("");
    bindProductCardEvents(track);

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const scrollAmount = () => track.clientWidth * 0.6;
    prevBtn.addEventListener("click", () => track.scrollBy({ left: -scrollAmount(), behavior: "smooth" }));
    nextBtn.addEventListener("click", () => track.scrollBy({ left: scrollAmount(), behavior: "smooth" }));
  }

  /* trigger reveal for dynamically injected cards (observer set up in common.js runs on DOMContentLoaded
     before these are injected, so re-scan here) */
  const lateReveals = document.querySelectorAll(".reveal:not(.revealed)");
  if (lateReveals.length){
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){ entry.target.classList.add("revealed"); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    lateReveals.forEach(el => obs.observe(el));
  }
});
