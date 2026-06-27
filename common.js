/* =========================================================
   ANTERIOR — COMMON (runs on every page)
========================================================= */

function updateBadges(){
  const cartCountEl = document.getElementById("cartCount");
  const wishCountEl = document.getElementById("wishCount");
  if (cartCountEl) cartCountEl.textContent = Store.cartCount();
  if (wishCountEl) wishCountEl.textContent = Store.getWishlist().length;
}

function showToast(message){
  let toast = document.getElementById("anteriorToast");
  if (!toast){
    toast = document.createElement("div");
    toast.id = "anteriorToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function starString(rating){
  const full = Math.round(rating);
  return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
}

document.addEventListener("DOMContentLoaded", () => {
  updateBadges();

  /* ---- mobile nav ---- */
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("mainNav");
  if (hamburger && mainNav){
    hamburger.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", open);
      hamburger.classList.toggle("is-active", open);
    });
  }

  /* ---- categories dropdown (mobile tap) ---- */
  document.querySelectorAll(".has-dropdown > a").forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      if (window.innerWidth <= 880){
        e.preventDefault();
        trigger.parentElement.classList.toggle("dropdown-open");
      }
    });
  });

  /* ---- search panel ---- */
  const searchToggle = document.getElementById("searchToggle");
  const searchPanel = document.getElementById("searchPanel");
  const searchClose = document.getElementById("searchClose");
  if (searchToggle && searchPanel){
    searchToggle.addEventListener("click", () => {
      searchPanel.classList.add("open");
      searchPanel.querySelector("input").focus();
    });
    searchClose.addEventListener("click", () => searchPanel.classList.remove("open"));
    const searchInput = searchPanel.querySelector("input");
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && searchInput.value.trim()){
        window.location.href = `category.html?search=${encodeURIComponent(searchInput.value.trim())}`;
      }
    });
  }

  /* ---- nav active highlight ---- */
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  document.querySelectorAll(".main-nav a, .dropdown-menu a").forEach(link => {
    const navKey = link.dataset.nav;
    if (navKey && cat && navKey === cat) link.classList.add("active");
  });

  /* ---- header shadow + back-to-top on scroll ---- */
  const header = document.getElementById("siteHeader");
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 10);
    if (backToTop) backToTop.classList.toggle("show", window.scrollY > 500);
  });
  if (backToTop){
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---- scroll reveal animations (tuned for mobile reliability) ---- */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(el => observer.observe(el));
  }

  /* ---- hero video: fall back to static image if autoplay/load fails ---- */
  const heroMedia = document.getElementById("heroMedia");
  const heroVideo = document.getElementById("heroVideo");
  if (heroMedia && heroVideo){
    const showFallback = () => heroMedia.classList.add("video-failed");
    heroVideo.addEventListener("error", showFallback);
    const playPromise = heroVideo.play();
    if (playPromise !== undefined){
      playPromise.catch(showFallback);
    }
    
  }

  /* ---- animated counters (trust bar numbers, if present) ---- */
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const tick = () => {
      current += step;
      if (current >= target){ el.textContent = target; return; }
      el.textContent = current;
      requestAnimationFrame(tick);
    };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){ tick(); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
  });
});
