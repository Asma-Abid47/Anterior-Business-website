document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  let activeCat = params.get("cat") || "sofas";
  const searchTerm = (params.get("search") || "").toLowerCase();

  const heroEl = document.getElementById("categoryHero");
  const titleEl = document.getElementById("categoryTitle");
  const taglineEl = document.getElementById("categoryTagline");
  const breadcrumbEl = document.getElementById("breadcrumbCurrent");
  const chips = document.querySelectorAll(".filter-chip");
  const sortSelect = document.getElementById("sortSelect");
  const resultCount = document.getElementById("resultCount");

  function applyHero(cat){
    const meta = CATEGORY_META[cat];
    if (meta){
      heroEl.style.backgroundImage = `url('${meta.hero}')`;
      titleEl.textContent = meta.title;
      taglineEl.textContent = meta.tagline;
      breadcrumbEl.textContent = meta.title;
      document.getElementById("pageTitle").textContent = `${meta.title} — Anterior Wood Works`;
    } else {
      heroEl.style.backgroundImage = `url('https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1600&auto=format&fit=crop')`;
      titleEl.textContent = `Results for "${searchTerm}"`;
      taglineEl.textContent = "Browse everything that matches your search.";
      breadcrumbEl.textContent = "Search";
    }
  }

  function setActiveChip(cat){
    chips.forEach(chip => chip.classList.toggle("active", chip.dataset.cat === cat));
  }

  function render(){
    let list = searchTerm
      ? PRODUCTS.filter(p => p.name.toLowerCase().includes(searchTerm) || p.category.includes(searchTerm))
      : getProductsByCategory(activeCat);

    const sort = sortSelect.value;
    list = [...list];
    if (sort === "price-asc") list.sort((a,b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a,b) => b.price - a.price);
    if (sort === "rating-desc") list.sort((a,b) => b.rating - a.rating);
    if (sort === "name-asc") list.sort((a,b) => a.name.localeCompare(b.name));

    resultCount.textContent = `${list.length} item${list.length !== 1 ? "s" : ""}`;

    if (list.length === 0){
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">No products found. <a href="category.html?cat=sofas">Browse Sofas</a></div>`;
      return;
    }

    grid.innerHTML = list.map(p => productCardHTML(p)).join("");
    bindProductCardEvents(grid);

    grid.querySelectorAll(".reveal").forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    });
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){ entry.target.classList.add("revealed"); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.1 });
    grid.querySelectorAll(".reveal").forEach(el => obs.observe(el));
  }

  if (!searchTerm) {
    applyHero(activeCat);
    setActiveChip(activeCat);
  } else {
    applyHero(null);
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      window.location.href = `category.html?cat=${chip.dataset.cat}`;
    });
  });

  sortSelect.addEventListener("change", render);

  render();
});
