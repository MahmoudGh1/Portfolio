/* ---------------------------------------- */
/* -- Dark / Light Mode Toggle           -- */
/* ---------------------------------------- */
document.querySelector(".hero-Contact").style.color = "white"
const toggle = document.getElementById("switch");

const lightVars = {
    // Base
    "--backgroundColor": "#f9fafb",
    "--text": "#0f172a",
    // Toggle
    "--labelAfterBackGround": "#0f172a",
    "--labelAfterCheck": "dodgerblue",
    "--labelBorder": "#94a3b8",
    // Layout
    "--border": "rgba(15, 23, 42, 0.12)",
    "--accent": "#64748b",
    // Hero badge
    "--heroTitleTopNote1": "rgba(30, 143, 255, 0.06)",
    "--heroTitleTopNote2": "rgba(30, 143, 255, 0.15)",
    "--heroTitleTopNoteBorder": "rgba(30, 143, 255, 0.22)",
    // Brand
    "--fraun": "#1a6ed8",
    "--Gwendolyn": "#1a6ed8",
    // Hero buttons
    "--contactBtnBg": "dodgerblue",
    "--contentBtn": "white",
    "--contentBtnBackgroundHover": "#1558b0",
    "--cvBtnBackground": "#e2e8f0",
    "--cvBtnBackgroundHover": "#cbd5e0",
    // Misc backgrounds
    "--ulBackground": "rgba(15, 23, 42, 0.05)",
    // Scroll bands — dodgerblue + deep navy (intentional contrast)
    "--scrollBackgroundDodge": "dodgerblue",
    "--scrollBackgroundWhite": "#0f172a",
    "--scrollSpanBlack": "white",
    "--scrollSpanDodge": "dodgerblue",
    "--scrollSpanRed": "#dc2626",
    // Contact platform buttons
    "--platformBtnColor": "white",
    "--platformBtnBg": "linear-gradient(90deg, #1a6ed8, #2563eb, #1a6ed8)",
    // Wavy / button gradients
    "--WavyLine": "#dc2626",
    "--buttonFirstColor": "rgba(30, 143, 255, 0.2)",
    "--buttonMiddleColor": "rgba(30, 143, 255, 0.07)",
    "--heroBgImage": 'url("./assets/69791a08-d8f7-4cd2-8986-4c0b0f428c93_removalai_preview.png")',
};

const darkVars = {
    "--backgroundColor": "black",
    "--text": "white",
    "--labelAfterBackGround": "white",
    "--labelAfterCheck": "dodgerblue",
    "--labelBorder": "white",
    "--border": "rgba(128, 128, 128, 0.438)",
    "--accent": "gray",
    "--heroTitleTopNote1": "rgba(30, 143, 255, 0.116)",
    "--heroTitleTopNote2": "rgba(30, 143, 255, 0.349)",
    "--heroTitleTopNoteBorder": "rgba(30, 143, 255, 0.267)",
    "--fraun": "dodgerblue",
    "--Gwendolyn": "dodgerblue",
    "--contactBtnBg": "transparent",
    "--contentBtn": "black",
    "--contentBtnBackgroundHover": "rgb(26, 26, 26)",
    "--cvBtnBackground": "rgb(70, 69, 69)",
    "--cvBtnBackgroundHover": "rgb(36, 36, 36)",
    "--ulBackground": "rgba(128, 128, 128, 0.192)",
    "--scrollBackgroundDodge": "dodgerblue",
    "--scrollBackgroundWhite": "white",
    "--scrollSpanBlack": "black",
    "--scrollSpanDodge": "dodgerblue",
    "--scrollSpanRed": "red",
    "--platformBtnColor": "black",
    "--platformBtnBg": "linear-gradient(90deg, white, gray, white)",
    "--WavyLine": "rgb(189, 26, 26)",
    "--buttonFirstColor": "rgba(255, 255, 255, 0.301)",
    "--buttonMiddleColor": "rgba(128, 128, 128, 0.096)",
    "--heroBgImage": 'url("./assets/84a03b24-9911-4b7e-b1b8-25f47a5a6f17_removalai_preview.png")',
};

function applyTheme(vars) {
    const root = document.documentElement;
    Object.entries(vars).forEach(([key, value]) => {
        root.style.setProperty(key, value);
    });
}

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        applyTheme(lightVars);
    } else {
        applyTheme(darkVars);
    }
});


/* ---------------------------------------- */
/* -- Active Nav Link on Scroll          -- */
/* ---------------------------------------- */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".mainNav ul li a");

const observerOptions = {
    root: null,
    rootMargin: "-30% 0px -60% 0px",
    threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
                link.classList.remove("active-nav");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active-nav");
                }
            });
        }
    });
}, observerOptions);

sections.forEach((section) => observer.observe(section));


/* ---------------------------------------- */
/* -- Smooth Scroll Offset for sticky nav-- */
/* ---------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        const target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        const headerHeight = document.querySelector(".Page_Header").offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({ top: targetPos, behavior: "smooth" });
    });
});


/* ---------------------------------------- */
/* -- Dynamic Year in Footer             -- */
/* ---------------------------------------- */
const yearEl = document.getElementById("yearOfRights");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}


/* ---------------------------------------- */
/* -- Hero Button Functions              -- */
/* ---------------------------------------- */
function goToContact() {
    const target = document.querySelector("#contact");
    if (!target) return;
    const headerHeight = document.querySelector(".Page_Header").offsetHeight;
    const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
    window.scrollTo({ top: targetPos, behavior: "smooth" });
}

function downloadCV() {
    window.open("./assets/cv.png", "_blank");
}

function viewMyGithub() {
    window.open("https://www.github.com/MahmoudGh1", "_blank");
}

function viewMyLinkedIn() {
    window.open("https://www.linkedin.com/in/mahmoud-gharib-187627233/", "_blank");
}


/* ---------------------------------------- */
/* -- Project Screen Preview             -- */
/* ---------------------------------------- */
const screen = document.querySelector(".Screen");
const projectItems = document.querySelectorAll(".project");

// Reset screen to default idle state
function resetScreen() {
    screen.classList.remove("screen--active", "screen--error");
    screen.innerHTML = `
        <div class="screen-idle">
            <div class="screen-idle__icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <path d="M8 21h8M12 17v4"/>
                </svg>
            </div>
            <p class="screen-idle__label">Select a project to preview</p>
            <div class="screen-idle__dots">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
}

// Show a project image in the screen
let currentProjectData = null;

function showProjectImage(projectName, imgSlug, projectData) {
    currentProjectData = projectData;
    screen.classList.add("screen--active");
    screen.classList.remove("screen--error");
    screen.innerHTML = `
        <div class="screen-preview">
            <div class="screen-preview__bar">
                <span class="screen-preview__dot red"></span>
                <span class="screen-preview__dot yellow"></span>
                <span class="screen-preview__dot green"></span>
                <span class="screen-preview__title">${projectName}</span>
            </div>
            <div class="screen-preview__imgWrap">
                <img
                    src="./assets/${imgSlug}"
                    alt="${projectName} preview"
                    class="screen-preview__img"
                    onerror="handleImgError(this, '${projectName}')"
                />
                // <div class="screen-preview__loader">Loading...</div>
            </div>
        </div>
    `;
    const previewImg = screen.querySelector(".screen-preview__img");
    if (previewImg) {
        previewImg.addEventListener("click", () => openProjectModal(projectData));
    }
}

// Fallback if image doesn't exist
function handleImgError(img, projectName) {
    const wrap = img.closest(".screen-preview__imgWrap");
    wrap.innerHTML = `
        <div class="screen-error">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            <p>No preview image found</p>
            <p class="screen-error__hint">Add <code>public/${projectName.toLowerCase().replace(/\s+/g, '-')}.jpg</code></p>
        </div>
    `;
}

// Wire up each project item
projectItems.forEach((item) => {
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
        // Remove active class from all
        projectItems.forEach((p) => p.classList.remove("project--selected"));
        item.classList.add("project--selected");

        const name = item.querySelector("p").textContent.trim().replace(/Featured\s*$/, "").trim();
        const slug = item.dataset.img || name.toLowerCase().replace(/\s+/g, "-") + ".png";

        const techList = Array.from(item.querySelectorAll(".techStack li")).map((li) => li.textContent.trim());

        const projectData = {
            name,
            imgSlug: slug,
            role: item.dataset.role || "",
            description: item.dataset.description || "",
            points: item.dataset.points ? item.dataset.points.split("|") : [],
            github: item.dataset.github || "https://www.github.com/MahmoudGh1",
            tech: techList,
        };

        showProjectImage(name, slug, projectData);
    });
});

// Init
resetScreen();

/* ---------------------------------------- */
/* -- Project Detail Modal               -- */
/* ---------------------------------------- */
const projectModal = document.getElementById("projectModal");
const projectModalBackdrop = document.getElementById("projectModalBackdrop");
const projectModalClose = document.getElementById("projectModalClose");
const projectModalImg = document.getElementById("projectModalImg");
const projectModalRole = document.getElementById("projectModalRole");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalTech = document.getElementById("projectModalTech");
const projectModalDescription = document.getElementById("projectModalDescription");
const projectModalPoints = document.getElementById("projectModalPoints");
const projectModalGithub = document.getElementById("projectModalGithub");

function openProjectModal(data) {
    if (!data || !projectModal) return;

    projectModalImg.src = `./assets/${data.imgSlug}`;
    projectModalImg.alt = `${data.name} preview`;
    projectModalRole.textContent = data.role || "Practice Project";
    projectModalTitle.textContent = data.name;
    projectModalDescription.textContent = data.description || "";
    projectModalGithub.href = data.github;

    projectModalTech.innerHTML = "";
    (data.tech || []).forEach((t) => {
        const li = document.createElement("li");
        li.textContent = t;
        projectModalTech.appendChild(li);
    });

    projectModalPoints.innerHTML = "";
    (data.points || []).forEach((pt) => {
        const li = document.createElement("li");
        li.textContent = pt;
        projectModalPoints.appendChild(li);
    });
    projectModalPoints.style.display = (data.points && data.points.length) ? "flex" : "none";

    projectModal.classList.add("ProjectModal--open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("ProjectModal_Locked");
}

function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove("ProjectModal--open");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("ProjectModal_Locked");
}

if (projectModalBackdrop) projectModalBackdrop.addEventListener("click", closeProjectModal);
if (projectModalClose) projectModalClose.addEventListener("click", closeProjectModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal && projectModal.classList.contains("ProjectModal--open")) {
        closeProjectModal();
    }
});


/* ---------------------------------------- */
/* -- Figma Hero Page Switcher + Zoom    -- */
/* ---------------------------------------- */
const pageLayerButtons = document.querySelectorAll(".Hero_PagesAndLayers .Layer");
const figmaPreviewFrame = document.getElementById("figmaPreviewFrame");
const zoomTransition = document.getElementById("zoomTransition");
const zoomTransitionImg = document.getElementById("zoomTransitionImg");

function setActiveFigmaPage(pageKey) {
    if (!figmaPreviewFrame) return;
    figmaPreviewFrame.querySelectorAll(".FigmaPreview").forEach((panel) => {
        panel.classList.toggle("FigmaPreview--active", panel.dataset.page === pageKey);
    });
    pageLayerButtons.forEach((btn) => {
        btn.classList.toggle("Layer--active", btn.dataset.target === pageKey);
    });
}

// Show the idle greeting by default until the user picks a page tab
setActiveFigmaPage("idle");
pageLayerButtons.forEach((btn) => btn.classList.remove("Layer--active"));

function playZoomTransitionTo(sectionId, imgSrc) {
    if (!zoomTransition || !zoomTransitionImg) {
        scrollToSectionId(sectionId);
        return;
    }

    // Reset any in-flight transition state first
    zoomTransition.classList.remove("ZoomTransition--active");
    zoomTransitionImg.src = imgSrc;

    const startTransition = () => {
        // Force a reflow so the browser commits the reset state before animating
        void zoomTransition.offsetWidth;
        zoomTransition.classList.add("ZoomTransition--active");

        let cleaned = false;
        const cleanup = () => {
            if (cleaned) return;
            cleaned = true;
            zoomTransition.classList.remove("ZoomTransition--active");
            zoomTransitionImg.removeEventListener("animationend", cleanup);
            clearTimeout(safetyTimer);
        };

        // Primary cleanup path: real animation finishing
        zoomTransitionImg.addEventListener("animationend", cleanup);

        // Safety net: if the animation is skipped entirely (e.g. prefers-reduced-motion,
        // a paused tab, or any browser quirk that drops the event), force cleanup anyway
        // so the overlay can NEVER permanently block clicks on the page.
        const safetyTimer = setTimeout(cleanup, 1000);

        // Scroll mid-animation so the "dive through" lands on the real section
        setTimeout(() => scrollToSectionId(sectionId), 380);
    };

    // Wait for the image to be ready (decoded) before starting the animation,
    // falling back to a rAF if it's already cached/instant.
    if (zoomTransitionImg.complete) {
        requestAnimationFrame(startTransition);
    } else {
        zoomTransitionImg.addEventListener("load", () => requestAnimationFrame(startTransition), { once: true });
    }
}

function scrollToSectionId(sectionId) {
    const target = document.getElementById(sectionId);
    if (!target) return;
    const headerHeight = document.querySelector(".Page_Header").offsetHeight;
    const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
    window.scrollTo({ top: targetPos, behavior: "smooth" });
}

pageLayerButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        setActiveFigmaPage(btn.dataset.target);
    });
});

if (figmaPreviewFrame) {
    figmaPreviewFrame.querySelectorAll(".FigmaPreview_Img").forEach((img) => {
        img.addEventListener("click", () => {
            const sectionId = img.dataset.section;
            playZoomTransitionTo(sectionId, img.src);
        });
    });
}


/* ---------------------------------------- */
/* -- Scroll Reveal Animations           -- */
/* ---------------------------------------- */
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal--visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
);

revealEls.forEach((el) => revealObserver.observe(el));


/* ---------------------------------------- */
/* -- Scroll Progress Bar                -- */
/* ---------------------------------------- */
const scrollProgressBar = document.createElement("div");
scrollProgressBar.className = "ScrollProgress";
document.body.prepend(scrollProgressBar);

function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgressBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();


/* ---------------------------------------- */
/* -- Cursor Spotlight (Header + Hero, unified) -- */
/* ---------------------------------------- */
const cursorSpotlight = document.getElementById("cursorSpotlight");
const heroSectionEl = document.querySelector(".hero_Section");

if (cursorSpotlight && heroSectionEl) {
    document.addEventListener("mousemove", (e) => {
        // Only show the glow while the cursor is within the header+hero zone,
        // using viewport coordinates so there's no seam between the two elements.
        const heroBottom = heroSectionEl.getBoundingClientRect().bottom;
        if (e.clientY <= heroBottom) {
            cursorSpotlight.style.setProperty("--spotlightX", `${e.clientX}px`);
            cursorSpotlight.style.setProperty("--spotlightY", `${e.clientY}px`);
            cursorSpotlight.style.opacity = "1";
        } else {
            cursorSpotlight.style.opacity = "0";
        }
    });
}


/* ---------------------------------------- */
/* -- Magnetic Tilt on Cards              -- */
/* ---------------------------------------- */
function applyTiltEffect(selector, intensity = 10) {
    document.querySelectorAll(selector).forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `perspective(600px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg)`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
        });
    });
}

applyTiltEffect(".project", 4);
applyTiltEffect(".Skills-Grid li", 8);


/* ---------------------------------------- */
/* -- Button Ripple Micro-interaction    -- */
/* ---------------------------------------- */
function attachRippleEffect(selector) {
    document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener("click", (e) => {
            const rect = el.getBoundingClientRect();
            el.style.setProperty("--rippleX", `${e.clientX - rect.left}px`);
            el.style.setProperty("--rippleY", `${e.clientY - rect.top}px`);
            el.classList.remove("is-rippling");
            // Force reflow so the animation can restart on rapid clicks
            void el.offsetWidth;
            el.classList.add("is-rippling");
        });
    });
}

attachRippleEffect(".btn");
attachRippleEffect(".contactPlatform button");
