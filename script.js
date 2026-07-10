/* ============================================================
   GroXincs Enterprise — script.js
   ============================================================ */

/* ---- Portfolio Data ---- */
const projects = [
  /* --- 2D Animation --- */
  {
    title: "Animated Ghana Highway Code for Pedestrians",
    preview: "Know Your Highway Code",
    type: "2D Animated Public Education Video",
    category: "2D Animation",
    year: "2019",
    software: "Adobe Illustrator, Adobe After Effects, Adobe Premiere Pro",
    description:
      "A 2D animated adaptation of the Ghana Highway Code for Pedestrians, created as an undergraduate final-year project in Communication Design at KNUST. The animation raises public awareness on pedestrian safety and makes written codes more accessible through visual storytelling.",
    url: "https://surl.lu/mpqsdf",
    action: "Watch now",
    small: "Click to watch"
  },
  /* --- 3D Animation --- */
  {
    title: "Inter-Courses Senior High School Games (Taekwondo)",
    preview: "Taekwondo Games",
    type: "3D Animated Short Film",
    category: "3D Animation",
    year: "2022",
    software:
      "Autodesk Maya, Adobe Mixamo, Adobe Substance Painter, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro",
    description:
      "A 3D animated short film capturing the excitement of inter-school Taekwondo games that unites students through teamwork and friendly rivalry. Co-supervised as Graduate Assistant, guiding production across modeling, texturing, rigging, animation, lighting, and post-production.",
    url: "https://surl.li/kjfilf",
    action: "Watch now",
    small: "Click to watch"
  },
  /* --- Motion Graphics --- */
  {
    title: "Creating Awareness on Sickle Cell Anemia",
    preview: "Sickle Cell Awareness",
    type: "2D Animation and Motion Graphics",
    category: "Motion Graphics",
    year: "2021",
    software: "Adobe Illustrator, Adobe After Effects, Adobe Premiere Pro",
    description:
      "Combines 2D animation and motion graphics to raise awareness about Sickle Cell Anemia in Ghana. Designed to simplify complex health information through clear visuals and relatable storytelling about causes, symptoms, and prevention.",
    url: "https://surl.lu/agycpl",
    action: "Watch now",
    small: "Click to watch"
  },
  /* --- 3D Animation --- */
  {
    title: "3D Logo Intro for TEK TV",
    preview: "TEK TV Logo Intro",
    type: "3D Logo Animation",
    category: "3D Animation",
    year: "2020",
    software: "Adobe After Effects, Element 3D Plugin",
    description:
      "A 3D animated logo intro for Tek TV under the Department of Communication Design, KNUST. The concept integrates iconic Ghanaian landmarks and Adinkra symbols, blending modern motion design with cultural storytelling.",
    url: "https://surl.lu/awabrz",
    action: "Watch now",
    small: "Click to watch"
  },
  /* --- Motion Graphics --- */
  {
    title: "COVID-19 Prevention Protocols for KNUST Library",
    preview: "Be COVIDWise",
    type: "Motion Graphics Awareness Video",
    category: "Motion Graphics",
    year: "2020",
    software: "Adobe After Effects, Adobe Illustrator, Adobe Premiere Pro",
    description:
      "A motion graphics awareness video promoting COVID-19 safety protocols at the Prempeh II Library, KNUST. Developed motion graphics, visual layout, and pacing to ensure educational and memorable content during the pandemic.",
    url: "https://surl.lt/fhobmm",
    action: "Watch now",
    small: "Click to watch"
  },
  /* --- Motion Graphics --- */
  {
    title: "Turnitin: The Plagiarism Detection Software",
    preview: "Turnitin Guide",
    type: "Educational Motion Graphics Video",
    category: "Motion Graphics",
    year: "2020",
    software: "Adobe After Effects, Adobe Illustrator, Adobe Premiere Pro",
    description:
      "An educational motion graphics video for the Prempeh II Library, KNUST, educating students and faculty on academic integrity and Turnitin usage. Transformed technical information into clear, visually engaging communication.",
    url: "https://shorturl.at/XPmW3",
    action: "Watch now",
    small: "Click to watch"
  },
  /* --- 3D Animation --- */
  {
    title: "Product Ad for Doughmaster",
    preview: "Doughmaster",
    type: "3D Product Animation / Commercial",
    category: "3D Animation",
    year: "2025",
    software: "Autodesk Maya, Adobe Substance Painter, Adobe After Effects, Adobe Premiere Pro",
    description:
      "A short 3D advertisement showcasing Doughmaster's Rock Barns — a realistic product walkthrough highlighting key features and material details. Contributed to compositing and post-production in After Effects and Premiere Pro.",
    url: "https://shorturl.at/9plbe",
    action: "Watch now",
    small: "Click to watch"
  },
  /* --- Video --- */
  {
    title: "KNUST Campus 360",
    preview: "KNUST Campus 360",
    type: "Virtual Campus Tour / Motion Graphics",
    category: "Video",
    year: "2022",
    software: "Adobe Illustrator, Adobe After Effects, Adobe Premiere Pro",
    description:
      "A video-based virtual tour integrating live footage with motion graphics to guide students, prospective applicants, and visitors through key KNUST campus locations — using directional map animations, transitions, and on-screen text.",
    url: "https://shorturl.at/1iRla",
    action: "Watch now",
    small: "Click to watch"
  },
  /* --- Research --- */
  {
    title: "Exploring VR in Documenting Indigenous Ghanaian Sculpture",
    preview: "Virtual Reality Research",
    type: "Academic Research / Digital Heritage Study",
    category: "Research",
    year: "2024",
    software: "Adobe Illustrator, MS Word, Google Scholar",
    description:
      "MPhil research at KNUST exploring how Virtual Reality can be applied in documenting and preserving indigenous Ghanaian sculpture, examining practical and ethical challenges of its adoption in Ghana.",
    url: "https://shorturl.at/Z2JTS",
    action: "View Slides",
    small: "Click to view"
  },
  /* --- Video --- */
  {
    title: "Gari and Beans (Gobe) Culture, KNUST",
    preview: "Gobe Culture",
    type: "Short Documentary / Campus Lifestyle Video",
    category: "Video",
    year: "2025",
    software: "Adobe Illustrator, Adobe After Effects, Adobe Premiere Pro",
    description:
      "A lifestyle documentary celebrating one of the most iconic student meals at KNUST — Gari and Beans. Contributed to concept development, logo design, and final video composition connecting humor, nostalgia, and everyday campus life.",
    url: "https://shorturl.at/okxQc",
    action: "Watch now",
    small: "Click to watch"
  },
  /* --- Flyer Designs (placeholder) --- */
  {
    title: "Flyer Designs — Coming Soon",
    preview: "Flyer Designs",
    type: "Graphic Design / Flyer",
    category: "Flyer Designs",
    year: "",
    software: "Adobe Photoshop, Adobe Illustrator",
    description: "A collection of professional flyer designs by GroXincs Enterprise. Assets will be uploaded soon.",
    url: "#",
    action: "Coming Soon",
    small: "Upload pending",
    placeholder: true
  },
  /* --- Picture Designs (placeholder) --- */
  {
    title: "Picture Designs — Coming Soon",
    preview: "Picture Designs",
    type: "Photography / Picture Design",
    category: "Picture Designs",
    year: "",
    software: "Adobe Lightroom, Adobe Photoshop",
    description: "A curated collection of picture designs and photography works by GroXincs Enterprise. Assets will be uploaded soon.",
    url: "#",
    action: "Coming Soon",
    small: "Upload pending",
    placeholder: true
  }
];

/* ============================================================
   THEME TOGGLE
   ============================================================ */
const html = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("groxincs-theme", theme);
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}

// Load saved theme preference, default dark
const savedTheme = localStorage.getItem("groxincs-theme") || "dark";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

/* ============================================================
   SPLASH SCREEN
   ============================================================ */
const splash = document.getElementById("splash");

function hideSplash() {
  document.body.classList.remove("is-loading");
  splash.classList.add("is-hidden");
  window.setTimeout(() => splash.setAttribute("aria-hidden", "true"), 760);
}

window.addEventListener("load", () => window.setTimeout(hideSplash, 1900));
window.setTimeout(hideSplash, 4200); // safety net

/* ============================================================
   HEADER SCROLL EFFECT
   ============================================================ */
const siteHeader = document.getElementById("site-header");

window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 60);
}, { passive: true });

/* ============================================================
   NAVIGATION
   ============================================================ */
const menuToggle = document.getElementById("menu-toggle");
const navLinks   = document.getElementById("nav-links");
const navAnchors = [...document.querySelectorAll(".nav-links a[href^='#']")];
const sections   = [...document.querySelectorAll("[data-section]")];

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navAnchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", anchor.getAttribute("href"));
    }
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Active nav link on scroll
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navAnchors.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === `#${id}`)
      );
    });
  },
  { rootMargin: "-40% 0px -40% 0px", threshold: 0.01 }
);

sections.forEach((s) => sectionObserver.observe(s));

/* ============================================================
   PORTFOLIO GRID + FILTERS
   ============================================================ */
const filterRow  = document.getElementById("filter-row");
const projectGrid = document.getElementById("project-grid");
const categories = ["All", ...new Set(projects.map((p) => p.category))];
let activeCategory = "All";

function renderFilters() {
  filterRow.innerHTML = "";
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = cat;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", cat === activeCategory ? "true" : "false");
    btn.classList.toggle("active", cat === activeCategory);
    btn.addEventListener("click", () => {
      activeCategory = cat;
      renderFilters();
      renderGrid();
    });
    filterRow.appendChild(btn);
  });
}

// Colour tints per category for the card media background
const categoryTints = {
  "2D Animation":   "radial-gradient(circle at 30% 20%, rgba(9,169,236,0.28), transparent 60%)",
  "3D Animation":   "radial-gradient(circle at 30% 20%, rgba(149,89,236,0.28), transparent 60%)",
  "Motion Graphics":"radial-gradient(circle at 30% 20%, rgba(236,169,9,0.22), transparent 60%)",
  "Video":          "radial-gradient(circle at 30% 20%, rgba(9,236,149,0.20), transparent 60%)",
  "Research":       "radial-gradient(circle at 30% 20%, rgba(236,89,89,0.22), transparent 60%)",
  "Flyer Designs":  "radial-gradient(circle at 30% 20%, rgba(9,169,236,0.18), transparent 60%)",
  "Picture Designs":"radial-gradient(circle at 30% 20%, rgba(236,120,9,0.22), transparent 60%)"
};

function renderGrid() {
  projectGrid.innerHTML = "";
  const visible = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  visible.forEach((project, visIndex) => {
    const globalIndex = projects.indexOf(project);
    const card = document.createElement("article");
    card.className = "project-card" + (project.placeholder ? " card-placeholder" : "");
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View details for ${project.title}`);

    const tint = categoryTints[project.category] || categoryTints["2D Animation"];
    card.style.setProperty("--card-tint", tint);

    if (project.placeholder) {
      card.innerHTML = `
        <div class="card-media">
          <span class="card-swipe"></span>
          <div class="card-placeholder-label">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <span>Upload Pending</span>
          </div>
        </div>
        <div class="card-body">
          <span class="card-type">${project.category}</span>
          <h3 class="card-title">${project.preview}</h3>
          <span class="card-cta">Coming Soon</span>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="card-media">
          <span class="card-swipe"></span>
          ${project.year ? `<span class="card-year">${project.year}</span>` : ""}
          <span class="card-play" aria-hidden="true"></span>
        </div>
        <div class="card-body">
          <span class="card-type">${project.category}</span>
          <h3 class="card-title">${project.preview}</h3>
          <span class="card-cta">View Details</span>
        </div>
      `;
    }

    const open = () => {
      if (!project.placeholder) openModal(globalIndex);
    };
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });

    projectGrid.appendChild(card);
  });
}

/* ============================================================
   PROJECT MODAL
   ============================================================ */
let currentProject = 0;
let lastFocused;
let slideTimer;

const modal            = document.getElementById("project-modal");
const modalBackdrop    = document.getElementById("modal-backdrop");
const modalClose       = document.getElementById("modal-close");
const projectTitle     = document.getElementById("project-title");
const projectType      = document.getElementById("project-type");
const projectYear      = document.getElementById("project-year");
const projectSoftware  = document.getElementById("project-software");
const projectDesc      = document.getElementById("project-description");
const projectLink      = document.getElementById("project-link");
const projectAction    = document.getElementById("project-action");
const projectSmall     = document.getElementById("project-small");
const projectShell     = document.querySelector(".project-shell");
const prevBtn          = document.getElementById("prev-project");
const nextBtn          = document.getElementById("next-project");
const playBtn          = document.getElementById("play-project");
const progressBar      = document.querySelector(".slide-controls i");

// Only non-placeholder projects go into modal navigation
const modalProjects = projects.filter((p) => !p.placeholder);

function updateModal() {
  const project = modalProjects[currentProject];
  projectTitle.textContent    = project.title;
  projectType.textContent     = project.type;
  projectYear.textContent     = project.year;
  projectSoftware.textContent = project.software;
  projectDesc.textContent     = project.description;
  projectLink.href            = project.url;
  projectAction.textContent   = project.action;
  projectSmall.textContent    = project.small;
  playBtn.setAttribute("aria-label", `Play ${project.title}`);
  progressBar.style.width     = `${((currentProject + 1) / modalProjects.length) * 100}%`;
  window.setTimeout(() => projectShell.classList.remove("is-changing"), 60);
}

function showProject(index) {
  currentProject = (index + modalProjects.length) % modalProjects.length;
  projectShell.classList.add("is-changing");
  window.clearTimeout(slideTimer);
  slideTimer = window.setTimeout(updateModal, 180);
}

function openModal(globalIndex) {
  const project = projects[globalIndex];
  if (project.placeholder) return;
  lastFocused = document.activeElement;
  currentProject = modalProjects.indexOf(project);
  updateModal();
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  window.requestAnimationFrame(() => modalClose.focus());
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

prevBtn.addEventListener("click", () => showProject(currentProject - 1));
nextBtn.addEventListener("click", () => showProject(currentProject + 1));
playBtn.addEventListener("click", () => {
  window.open(modalProjects[currentProject].url, "_blank", "noopener");
});
modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (modal.hidden) return;
  if (e.key === "Escape")     closeModal();
  if (e.key === "ArrowRight") showProject(currentProject + 1);
  if (e.key === "ArrowLeft")  showProject(currentProject - 1);
});

/* ============================================================
   SCROLL REVEAL (Intersection Observer)
   ============================================================ */
const revealTargets = document.querySelectorAll(
  ".studio-card, .service-card, .stat-card, .contact-item"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);

revealTargets.forEach((el, i) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(28px)";
  el.style.transition = `opacity 480ms ease ${i * 60}ms, transform 480ms ease ${i * 60}ms, border-color 240ms ease, box-shadow 240ms ease`;
  revealObserver.observe(el);
});

document.addEventListener("revealed-added", () => {});

// Patch .revealed via CSS class
const revealStyle = document.createElement("style");
revealStyle.textContent = `.revealed { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(revealStyle);

/* ============================================================
   INIT
   ============================================================ */
document.getElementById("year").textContent = new Date().getFullYear();
renderFilters();
renderGrid();
