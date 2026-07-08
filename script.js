const projects = [
  {
    title: "Animated Ghana Highway Code for Pedestrians",
    preview: "Know Your Highway Code",
    type: "2D Animated Public Education Video",
    category: "2D Animation",
    year: "2019",
    software: "Adobe Illustrator, Adobe After Effects, Adobe Premiere Pro",
    description:
      "This project is a 2D animated adaptation of the Ghana Highway Code for Pedestrians, created as my undergraduate final-year project in Communication Design at KNUST. The animation was developed to raise public awareness on pedestrian safety and make the written codes more accessible to a broader audience through visual storytelling. I contributed to the research, character illustration, and rigging using the Duik plugin in After Effects, and assisted with animation and scene transitions.",
    url: "https://surl.lu/mpqsdf",
    action: "Watch now",
    small: "Click to watch"
  },
  {
    title: "Inter-Courses Senior High School Games (Taekwondo)",
    preview: "Taekwondo Games",
    type: "3D Animated Short Film",
    category: "3D Animation",
    year: "2022",
    software:
      "Autodesk Maya, Adobe Mixamo, Adobe Substance Painter, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro",
    description:
      "This 3D animated short film captures the excitement of inter-school games, focusing on a Taekwondo competition that unites students through teamwork and friendly rivalry. As a Graduate Assistant, I co-supervised the production, offering guidance and technical demonstrations throughout modeling, texturing, rigging, animation, lighting, and post-production stages.",
    url: "https://surl.li/kjfilf",
    action: "Watch now",
    small: "Click to watch"
  },
  {
    title: "Creating Awareness on Sickle Cell Anemia",
    preview: "Sickle Cell Awareness",
    type: "2D Animation and Motion Graphics Awareness Video",
    category: "Motion Graphics",
    year: "2021",
    software: "Adobe Illustrator, Adobe After Effects, Adobe Premiere Pro",
    description:
      "This project combines 2D animation and motion graphics to raise awareness about Sickle Cell Anemia in Ghana. Designed to simplify complex health information for broader audiences, the animation uses clear visuals and relatable storytelling to communicate the causes, symptoms, and preventive measures of the condition.",
    url: "https://surl.lu/agycpl",
    action: "Watch now",
    small: "Click to watch"
  },
  {
    title: "3D Logo Intro for TEK TV",
    preview: "TEK TV Logo Intro",
    type: "3D Logo Animation",
    category: "3D Animation",
    year: "2020",
    software: "Adobe After Effects, Element 3D Plugin",
    description:
      "This project involved creating a 3D animated logo intro for Tek TV, a television initiative under the Department of Communication Design, KNUST. The concept integrated iconic Ghanaian landmarks and Adinkra symbols, blending modern motion design with cultural storytelling.",
    url: "https://surl.lu/awabrz",
    action: "Watch now",
    small: "Click to watch"
  },
  {
    title: "COVID 19 Prevention Protocols for Using KNUST Library",
    preview: "Be COVIDWise",
    type: "Motion Graphics Awareness Video",
    category: "Motion Graphics",
    year: "2020",
    software: "Adobe After Effects, Adobe Illustrator, Adobe Premiere Pro",
    description:
      "Be COVIDWise is a motion graphics awareness video produced to promote safety protocols at the Prempeh II Library, KNUST, during the COVID-19 pandemic. I developed the motion graphics, visual layout, and pacing to ensure the content was educational and easy to remember.",
    url: "https://surl.lt/fhobmm",
    action: "Watch now",
    small: "Click to watch"
  },
  {
    title: "Turnitin: The Plagiarism Detection Software",
    preview: "Turnitin Guide",
    type: "Educational Motion Graphics Video",
    category: "Motion Graphics",
    year: "2020",
    software: "Adobe After Effects, Adobe Illustrator, Adobe Premiere Pro",
    description:
      "This educational motion graphics video was produced for the Prempeh II Library, KNUST, to educate students and faculty on academic integrity and the use of Turnitin. I transformed technical information into clear and visually engaging communication.",
    url: "https://shorturl.at/XPmW3",
    action: "Watch now",
    small: "Click to watch"
  },
  {
    title: "Product Ad for Doughmaster",
    preview: "Doughmaster",
    type: "3D Product Animation / Commercial",
    category: "3D Animation",
    year: "2025",
    software: "Autodesk Maya, Adobe Substance Painter, Adobe After Effects, Adobe Premiere Pro",
    description:
      "This short 3D advertisement showcases Doughmaster's Rock Barns, presenting a realistic product walkthrough designed to highlight key features and material details. My role included assisting in compositing and post-production in After Effects and Premiere Pro.",
    url: "https://shorturl.at/9plbe",
    action: "Watch now",
    small: "Click to watch"
  },
  {
    title: "KNUST Campus 360",
    preview: "KNUST Campus 360",
    type: "Video and Motion Graphics / Virtual Campus Tour",
    category: "Video",
    year: "2022",
    software: "Adobe Illustrator, Adobe After Effects, Adobe Premiere Pro",
    description:
      "KNUST Campus 360 is a video-based virtual tour that integrates live footage with motion graphics to guide students, prospective applicants, and visitors through key locations on campus. The project uses directional map animations, transitions, and on-screen text to improve orientation and storytelling.",
    url: "https://shorturl.at/1iRla",
    action: "Watch now",
    small: "Click to watch"
  },
  {
    title: "Exploring the Potentials of Virtual Reality in Documenting Indigenous Ghanaian Sculpture",
    preview: "Virtual Reality Research",
    type: "Academic Research / Digital Heritage Study",
    category: "Research",
    year: "2024",
    software: "Adobe Illustrator, MS Word, Google Scholar and other research tools",
    description:
      "This project formed the core of my Master of Philosophy research at KNUST. The study explored how Virtual Reality can be applied in documenting and preserving indigenous Ghanaian sculpture while examining the practical and ethical challenges associated with its adoption in Ghana.",
    url: "https://shorturl.at/Z2JTS",
    action: "Presentation Slides",
    small: "Click to view"
  },
  {
    title: "Gari and Beans (Gobe) Culture, KNUST",
    preview: "Gobe Culture",
    type: "Short Documentary / Campus Lifestyle Video",
    category: "Video",
    year: "2025",
    software: "Adobe Illustrator, Adobe After Effects, Adobe Premiere Pro",
    description:
      "Gari and Beans Culture is a short lifestyle documentary celebrating one of the most iconic student meals at KNUST. I contributed to concept development, logo design, and final video composition, ensuring a cohesive presentation that connects humor, nostalgia, and everyday student life.",
    url: "https://shorturl.at/okxQc",
    action: "Watch now",
    small: "Click to watch"
  }
];

/* ---------------- Splash screen ---------------- */
const splash = document.getElementById("splash");

function hideSplash() {
  document.body.classList.remove("is-loading");
  splash.classList.add("is-hidden");
  window.setTimeout(() => splash.setAttribute("aria-hidden", "true"), 760);
}

window.addEventListener("load", () => {
  window.setTimeout(hideSplash, 1900);
});
// Safety net in case the load event is delayed or already fired.
window.setTimeout(hideSplash, 4200);

/* ---------------- Nav ---------------- */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navAnchors = [...document.querySelectorAll(".nav-links a[href^='#']")];
const sections = [...document.querySelectorAll("[data-section]")];

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navAnchors.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", anchor.getAttribute("href"));
    }
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navAnchors.forEach((anchor) => {
        anchor.classList.toggle("active", anchor.getAttribute("href") === `#${id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
);

sections.forEach((section) => observer.observe(section));

/* ---------------- Portfolio grid + filters ---------------- */
const filterRow = document.getElementById("filter-row");
const projectGrid = document.getElementById("project-grid");
const categories = ["All", ...new Set(projects.map((p) => p.category))];
let activeCategory = "All";

function renderFilters() {
  filterRow.innerHTML = "";
  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = category;
    btn.classList.toggle("active", category === activeCategory);
    btn.addEventListener("click", () => {
      activeCategory = category;
      renderFilters();
      renderGrid();
    });
    filterRow.appendChild(btn);
  });
}

function renderGrid() {
  projectGrid.innerHTML = "";
  projects.forEach((project, index) => {
    if (activeCategory !== "All" && project.category !== activeCategory) return;

    const card = document.createElement("article");
    card.className = "project-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View details for ${project.title}`);

    card.innerHTML = `
      <div class="card-media">
        <span class="card-swipe"></span>
        <span class="card-year">${project.year}</span>
        <span class="card-play" aria-hidden="true"></span>
      </div>
      <div class="card-body">
        <span class="card-type">${project.category}</span>
        <h3 class="card-title">${project.preview}</h3>
        <span class="card-cta">View Details</span>
      </div>
    `;

    const open = () => openModal(index);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });

    projectGrid.appendChild(card);
  });
}

/* ---------------- Project modal ---------------- */
let currentProject = 0;

const modal = document.getElementById("project-modal");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalClose = document.getElementById("modal-close");
const projectTitle = document.getElementById("project-title");
const projectType = document.getElementById("project-type");
const projectYear = document.getElementById("project-year");
const projectSoftware = document.getElementById("project-software");
const projectDescription = document.getElementById("project-description");
const projectLink = document.getElementById("project-link");
const projectAction = document.getElementById("project-action");
const projectSmall = document.getElementById("project-small");
const projectShell = document.querySelector(".project-shell");
const prevProject = document.getElementById("prev-project");
const nextProject = document.getElementById("next-project");
const playProject = document.getElementById("play-project");
const progressBar = document.querySelector(".slide-controls i");
let slideTimer;
let lastFocused;

function updateProjectContent() {
  const project = projects[currentProject];
  projectTitle.textContent = project.title;
  projectType.textContent = project.type;
  projectYear.textContent = project.year;
  projectSoftware.textContent = project.software;
  projectDescription.textContent = project.description;
  projectLink.href = project.url;
  projectAction.textContent = project.action;
  projectSmall.textContent = project.small;
  playProject.setAttribute("aria-label", `Play ${project.title}`);
  progressBar.style.width = `${((currentProject + 1) / projects.length) * 100}%`;

  window.setTimeout(() => projectShell.classList.remove("is-changing"), 60);
}

function showProject(index) {
  currentProject = (index + projects.length) % projects.length;
  projectShell.classList.add("is-changing");
  window.clearTimeout(slideTimer);
  slideTimer = window.setTimeout(updateProjectContent, 180);
}

function openModal(index) {
  lastFocused = document.activeElement;
  currentProject = index;
  updateProjectContent();
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  window.requestAnimationFrame(() => modalClose.focus());
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

prevProject.addEventListener("click", () => showProject(currentProject - 1));
nextProject.addEventListener("click", () => showProject(currentProject + 1));
playProject.addEventListener("click", () => {
  window.open(projects[currentProject].url, "_blank", "noopener");
});

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (modal.hidden) return;
  if (event.key === "Escape") closeModal();
  if (event.key === "ArrowRight") showProject(currentProject + 1);
  if (event.key === "ArrowLeft") showProject(currentProject - 1);
});

/* ---------------- Init ---------------- */
document.getElementById("year").textContent = new Date().getFullYear();
renderFilters();
renderGrid();
