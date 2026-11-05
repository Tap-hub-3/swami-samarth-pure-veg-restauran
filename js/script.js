(function () {
  "use strict";
  document.documentElement.classList.add("js");

  /* ---------- helpers ---------- */
  var $ = function (s, ctx) { return (ctx || document).querySelector(s); };
  var $$ = function (s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); };

  function slugify(name) {
    return name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }
  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function dishImage(item) { return "images/menu/" + slugify(item.n) + ".jpg"; }

  /* ---------- site info (phone, WhatsApp, map) ---------- */
  var waUrl = "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(SITE.whatsappMessage);
  var mapUrl = SITE.mapLink || "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(SITE.address);

  $$("[data-wa]").forEach(function (a) {
    a.href = waUrl; a.target = "_blank"; a.rel = "noopener";
  });
  $$("[data-tel]").forEach(function (a) { a.href = "tel:" + SITE.phoneDial; });
  $$("[data-map]").forEach(function (a) { a.href = mapUrl; });
  $$("[data-phone]").forEach(function (el) { el.textContent = SITE.phoneDisplay; });
  $$("[data-address]").forEach(function (el) { el.textContent = SITE.address; });
  $$("[data-hours]").forEach(function (el) { el.textContent = SITE.hours; });
  $("#year").textContent = new Date().getFullYear();

  /* ---------- image fallback (missing photos show a neat placeholder) ---------- */
  function markMissing(img) {
    var box = img.parentElement;
    if (!box || box.classList.contains("img-missing")) return;
    box.classList.add("img-missing");
    box.setAttribute("data-label", img.alt || "Photo");
    img.style.visibility = "hidden";
  }
  document.addEventListener("error", function (e) {
    if (e.target && e.target.tagName === "IMG") markMissing(e.target);
  }, true);
  function checkImages(root) {
    $$("img", root).forEach(function (img) {
      if (img.complete && img.naturalWidth === 0) markMissing(img);
    });
  }

  /* ---------- menu rendering ---------- */
  var state = { cat: "all", q: "" };
  var grid = $("#menuGrid");
  var chips = $("#chips");
  var noResults = $("#noResults");
  var resultCount = $("#resultCount");
  var searchInput = $("#menuSearch");
  var clearBtn = $("#searchClear");

  function cardHTML(item, showBadge) {
    return '<article class="food-card">' +
      '<div class="food-img"><img src="' + esc(dishImage(item)) + '" alt="' + esc(item.n) + '" width="400" height="300" loading="lazy">' +
      (showBadge && item.pop ? '<span class="badge">Popular</span>' : "") + '</div>' +
      '<div class="food-body"><h4 class="food-name">' + esc(item.n) + '</h4>' +
      '<span class="food-price">&#8377;' + esc(item.p) + '</span></div></article>';
  }

  function buildChips() {
    var html = '<button type="button" class="chip is-active" role="tab" aria-selected="true" data-cat="all">All</button>';
    MENU.forEach(function (c) {
      html += '<button type="button" class="chip" role="tab" aria-selected="false" data-cat="' + esc(c.id) + '">' + esc(c.name) + '</button>';
    });
    chips.innerHTML = html;
  }

  function setActiveChip(cat, scroll) {
    $$(".chip", chips).forEach(function (b) {
      var on = b.getAttribute("data-cat") === cat;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
      if (on && scroll) {
        var left = b.offsetLeft - (chips.clientWidth - b.offsetWidth) / 2;
        chips.scrollTo({ left: left, behavior: "smooth" });
      }
    });
  }

  function renderMenu() {
    var q = state.q.trim().toLowerCase();
    var cats = MENU;
    if (!q && state.cat !== "all") {
      cats = MENU.filter(function (c) { return c.id === state.cat; });
    }

    var html = "";
    var total = 0;
    cats.forEach(function (c) {
      var items = c.items.filter(function (it) {
        return !q || it.n.toLowerCase().indexOf(q) !== -1 || c.name.toLowerCase().indexOf(q) !== -1;
      });
      if (!items.length) return;
      total += items.length;
      html += '<section class="menu-category" id="cat-' + esc(c.id) + '">' +
        '<div class="cat-head"><h3>' + esc(c.name) + '</h3>' +
        (c.subtitle ? '<p>' + esc(c.subtitle) + '</p>' : "") + '</div>' +
        '<div class="card-grid">' + items.map(function (it) { return cardHTML(it, true); }).join("") + '</div></section>';
    });

    grid.innerHTML = html;
    grid.classList.remove("swap");
    void grid.offsetWidth; /* restart the soft fade */
    grid.classList.add("swap");
    noResults.hidden = total !== 0;
    grid.hidden = total === 0;

    if (q) {
      resultCount.textContent = total === 0 ? "No results for \u201C" + state.q.trim() + "\u201D" :
        total + (total === 1 ? " dish" : " dishes") + " found for \u201C" + state.q.trim() + "\u201D";
    } else {
      resultCount.textContent = "";
    }
    checkImages(grid);
  }

  function selectCategory(cat) {
    state.cat = cat;
    if (state.q) { state.q = ""; searchInput.value = ""; clearBtn.hidden = true; }
    setActiveChip(cat, true);
    renderMenu();
  }

  chips.addEventListener("click", function (e) {
    var b = e.target.closest(".chip");
    if (b) selectCategory(b.getAttribute("data-cat"));
  });

  var searchTimer;
  searchInput.addEventListener("input", function () {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () {
      state.q = searchInput.value;
      clearBtn.hidden = !state.q;
      if (state.q.trim()) { state.cat = "all"; setActiveChip("all", true); }
      renderMenu();
    }, 120);
  });
  function resetSearch() {
    state.q = ""; state.cat = "all";
    searchInput.value = ""; clearBtn.hidden = true;
    setActiveChip("all", true);
    renderMenu();
  }
  clearBtn.addEventListener("click", function () { resetSearch(); searchInput.focus(); });
  $("#resetSearch").addEventListener("click", resetSearch);

  /* ---------- popular dishes ---------- */
  function renderPopular() {
    var html = "";
    MENU.forEach(function (c) {
      c.items.forEach(function (it) { if (it.pop) html += cardHTML(it, false); });
    });
    $("#popularGrid").innerHTML = html;
    checkImages($("#popularGrid"));
  }

  /* ---------- gallery + lightbox ---------- */
  var galleryGrid = $("#galleryGrid");
  galleryGrid.innerHTML = GALLERY.map(function (g, i) {
    return '<button type="button" class="gallery-item g' + (i + 1) + '" data-i="' + i + '" aria-label="Open photo: ' + esc(g.alt) + '">' +
      '<img src="' + esc(g.src) + '" alt="' + esc(g.alt) + '" width="600" height="600" loading="lazy"></button>';
  }).join("");

  var lightbox = $("#lightbox");
  var lightboxImg = $("#lightboxImg");
  galleryGrid.addEventListener("click", function (e) {
    var b = e.target.closest(".gallery-item");
    if (!b || b.classList.contains("img-missing")) return;
    var g = GALLERY[+b.getAttribute("data-i")];
    lightboxImg.src = g.src; lightboxImg.alt = g.alt;
    if (typeof lightbox.showModal === "function") lightbox.showModal();
  });
  $("#lightboxClose").addEventListener("click", function () { lightbox.close(); });
  lightbox.addEventListener("click", function (e) { if (e.target === lightbox) lightbox.close(); });

  /* ---------- navigation ---------- */
  var header = $("#siteHeader");
  var toggle = $("#navToggle");
  var nav = $("#mainNav");

  function setNav(open) {
    nav.classList.toggle("open", open);
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("nav-open", open);
  }
  toggle.addEventListener("click", function () { setNav(!nav.classList.contains("open")); });
  $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { setNav(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setNav(false); });
  window.addEventListener("resize", function () { if (window.innerWidth > 960) setNav(false); });

  /* active link highlighting */
  var navLinks = $$("a[href^='#']", nav).filter(function (a) { return !a.classList.contains("btn"); });
  var sections = navLinks.map(function (a) { return $(a.getAttribute("href")); }).filter(Boolean);
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          navLinks.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* header shadow + back to top */
  var toTop = $("#toTop");
  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    header.classList.toggle("scrolled", y > 20);
    toTop.hidden = y < 700;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ---------- scroll reveal ---------- */
  function initReveal() {
    var els = $$(".reveal");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- init ---------- */
  buildChips();
  renderMenu();
  renderPopular();
  initReveal();
  checkImages(document);
  window.addEventListener("load", function () { checkImages(document); });
})();
