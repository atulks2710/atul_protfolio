/* ==========================================
   PORTFOLIO JAVASCRIPT
========================================== */


/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load", () => {

    const preloader =
        document.querySelector(".preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 1600);

});


/* ==========================================
   DOM
========================================== */

const body =
    document.body;

const navbar =
    document.querySelector(".navbar");

const scrollProgress =
    document.querySelector(".scroll-progress");

const menuToggle =
    document.querySelector(".menu-toggle");

const mobileMenu =
    document.querySelector(".mobile-menu");

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");

const navLinks =
    document.querySelectorAll(".nav-link");

const revealElements =
    document.querySelectorAll(".reveal");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


/* ==========================================
   NAVBAR
========================================== */

function updateNavbar() {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateNavbar);


/* ==========================================
   SCROLL PROGRESS
========================================== */

function updateScrollProgress() {

    const scrollTop = window.scrollY;

    const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        scrollHeight > 0
            ? (scrollTop / scrollHeight) * 100
            : 0;

    scrollProgress.style.width =
        `${progress}%`;

}

window.addEventListener("scroll", updateScrollProgress);


/* ==========================================
   MOBILE MENU
========================================== */

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

    body.classList.toggle("menu-open");

});


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        body.classList.remove("menu-open");

    });

});


/* ==========================================
   ACTIVE NAV
========================================== */

const sections =
    document.querySelectorAll("section[id]");


function updateActiveNav() {

    const scrollPosition =
        window.scrollY + 180;

    sections.forEach(section => {

        const top = section.offsetTop;

        const height = section.offsetHeight;

        const id = section.getAttribute("id");

        if (
            scrollPosition >= top &&
            scrollPosition < top + height
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") === `#${id}`
                ) {

                    link.classList.add("active");

                }

            });

        }

    });

}

window.addEventListener("scroll", updateActiveNav);


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ==========================================
   PROJECT DATA
========================================== */

const projectData = [

    /* ======================================
       PROJECT 01
    ====================================== */
{
    title: "LeagueTrack",

    category: "APP / BACKEND",

    description: `
LeagueTrack is a football tournament management platform developed to simplify the organization and management of online and offline football tournaments. It provides a complete solution for tournament hosts, teams and players, bringing tournament creation, team registration, fixture generation, live match management, points tables and player statistics together in one application.

The platform supports different tournament formats, allowing organizers to manage competitive football events, whether they are conducted online or played on the ground. From creating a tournament to tracking the final results, LeagueTrack provides an organized and interactive football tournament experience.

KEY FEATURES:

• Online Tournament Management – Create, host and join football tournaments from anywhere.
• Offline Tournament Management – Organize and manage real-world football tournaments and matches.
• Private Tournaments – Create private tournaments with unique access codes.
• Team Management – Manage participating teams and their registered players.
• Multiple Tournament Formats – Support for League, Knockout and Hybrid tournament formats.
• Flexible League Settings – Configure single-leg and double-leg league matches.
• Automatic Fixture Generation – Generate match schedules based on the selected tournament format.
• Live Match Management – Manage ongoing matches with real-time score updates.
• Match Timer – Track first half, half-time, second half, full-time and extra-time progress.
• Goal Tracking – Record normal goals, penalty goals, own goals and goal scorers.
• Match Statistics – Track match metrics such as shots, possession and other enabled statistics.
• Points Table – Automatically calculate points, wins, draws, losses, goals for and goals against.
• Player Statistics – Track individual player performances and tournament statistics.
• Match Results – View completed matches, winners and match summaries.
• Man of the Match – Record outstanding player performances for individual matches.

TECHNOLOGIES USED:

• Flutter (Dart) – Cross-platform mobile application development.
• Firebase Authentication – User registration, login and authentication.
• Cloud Firestore – Real-time database for tournaments, teams, fixtures, match results and statistics.
• Firebase Storage – Storage for tournament-related images and media.
• Dart – Application logic, tournament workflows and match management.
• Flutter Animate – Smooth animations and interactive UI elements.

PROJECT OBJECTIVE:

To develop a complete football tournament management ecosystem that makes organizing and participating in football tournaments easier. LeagueTrack aims to replace manual tournament management with a digital platform where organizers can manage teams, generate fixtures, monitor matches, calculate standings and track player performances.

By supporting both online and offline tournaments, the application provides a centralized platform for managing football competitions, improving transparency, reducing manual work and delivering a better experience for organizers, teams and players.
`,

    images: [

        "assets/images/project-01-000.png",
        "assets/images/project-01-0.jpeg",
        "assets/images/project-01-1.jpg",
        "assets/images/project-01-2.jpg",
        "assets/images/project-01-3.jpeg",
        "assets/images/project-01-4.jpeg",
        "assets/images/project-01-5.jpeg",
        "assets/images/project-01-6.jpeg",
        "assets/images/project-01-7.jpeg",
        "assets/images/project-01-8.jpeg",
        "assets/images/project-01-9.jpeg",
        "assets/images/project-01-10.jpeg",
        "assets/images/project-01-11.jpeg",
        "assets/images/project-01-12.jpeg",
        "assets/images/project-01-13.jpeg",
        "assets/images/project-01-14.jpeg",
        "assets/images/project-01-15.jpeg",
        "assets/images/project-01-16.jpeg",
        "assets/images/project-01-17.jpeg",
        "assets/images/project-01-18.jpeg",
        "assets/images/project-01-19.jpeg",
        "assets/images/project-01-20.jpeg"

    ],

    labels: [

        "HOME SCREEN",
        "ONLINE TOURNAMENTS",
        "OFFLINE TOURNAMENTS",
        "TOURNAMENT DETAILS",
        "MATCH FIXTURES",
        "LIVE MATCH",
        "POINTS TABLE",
        "PLAYER STATISTICS"

    ],

    fallback:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=85",

    tags: [

        "Flutter",
        "Dart",
        "Firebase",
        "Firestore",
        "Firebase Auth",
        "Real-Time Database",
        "Mobile Application"

    ],

    link: "https://footballfeverapp.web.app"

},

    /* ======================================
       PROJECT 02
    ====================================== */
{

    title: "SentinelX",

    category: "CYBERSECURITY / SIEM",

    description: `
SentinelX is a centralized security monitoring platform designed to monitor multiple computers and collect security-related activities in real time. It uses lightweight endpoint agents to track USB device connections, file activities and application processes, sending security events to a central server for monitoring and analysis.

KEY FEATURES:

• Real-time endpoint monitoring through lightweight Python agents
• USB device detection with VID, PID and serial number identification
• USB whitelist management to identify approved and unauthorized devices
• File activity monitoring (creation, modification and deletion)
• Application and process monitoring (application opened and closed)
• Automatic endpoint registration and heartbeat monitoring
• Offline event queue using pending_logs.json to prevent event loss during server downtime
• Centralized security event collection and storage
• Web-based administrator dashboard
• Endpoint activity monitoring through MongoDB

TECHNOLOGIES USED:

• Python – Endpoint agent development and system monitoring
• Flask – Central server and web dashboard
• Flask-SocketIO – Real-time communication between agents and server
• MongoDB – Centralized storage for endpoint and security logs
• WMI – Windows hardware and USB device identification
• Watchdog – File system activity monitoring
• psutil – Application and process monitoring
• JSON – Local event queue and data management
• HTML, CSS and JavaScript – Dashboard interface

PROJECT OBJECTIVE:

To develop a modular and centralized security monitoring platform that provides administrators with visibility into endpoint activities, USB device usage, file modifications and application processes. The system aims to simplify security event management and provide a foundation for future endpoint detection, response and extended threat monitoring capabilities.
`,

    images: [
"assets/images/project-02-000.png",
        "assets/images/project-02-01.jpeg",
        "assets/images/project-02-2.jpeg",
        "assets/images/project-02-3.jpeg",
       
    ],

    labels: [

        "DASHBOARD",
        "CLIENTS",
        "USB LOGS",
        "FILE LOGS",
        "PROCESS LOGS",
        "SECURITY EVENTS"

    ],

    fallback:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",

    tags: [

        "Python",
        "Flask",
        "MongoDB",
        "Socket.IO",
        "WMI",
        "Watchdog",
        "SIEM"

    ],

    link: "#"

},

    /* ======================================
       PROJECT 03
    ====================================== */


{
    title: "ANSORA Mark Processing System",

    category: "WEB APPLICATION / AUTOMATION",

    description: `
ANSORA Mark Processing System is a web-based academic result processing platform designed to automate student mark processing and generate organized, student-wise mark sheets. It simplifies the process of extracting internal assessment marks and university examination grades from PDF documents, matching student records and exporting the processed results into Excel.

KEY FEATURES:

• Upload and process internal assessment mark PDFs
• Support for multiple assessment scales (50, 75 and 100 marks)
• Upload university result PDFs and extract student grades
• Manually enter course codes for result processing
• Automatically match students using registration numbers
• Convert university grades into corresponding university marks
• Calculate CO1–CO8 attainment values for regular internal assessments
• Display student-wise processed marks in an interactive table
• Identify students with missing grades or unmatched records
• Change course codes and reprocess results
• Export processed student marks into formatted Excel spreadsheets
• Maintain organized processing summaries

TECHNOLOGIES USED:

• Python – Backend logic and PDF processing
• Flask – Web application and server-side processing
• PyMuPDF – Extracting information from PDF documents
• OpenPyXL – Excel spreadsheet generation and formatting
• HTML – Web application structure
• CSS – User interface styling and responsive design
• JavaScript – Interactive dashboard and frontend functionality
• Git & GitHub – Version control and project management
• Render – Web application deployment

PROJECT OBJECTIVE:

To develop an automated mark processing solution that reduces manual effort in academic result preparation. The system aims to improve accuracy, simplify student record matching, automate mark calculations and generate structured Excel reports through an easy-to-use web interface.
`,

    images: [

        "assets/images/Screenshot 2026-11-09 221305.png",
        "assets/images/Screenshot 2026-11-09 221314.png",
        "assets/images/Screenshot 2026-11-09 221337.png",
        "assets/images/Screenshot 2026-11-09 221422.png",
        "assets/images/Screenshot 2026-11-09 221506.png",
        "assets/images/Screenshot 2026-11-09 221513.png",
        "assets/images/Screenshot 2026-11-09 221531.png",
        "assets/images/Screenshot 2026-11-09 221602.png",
        "assets/images/Screenshot 2026-11-09 221610.png",
    ],

    labels: [

        "DASHBOARD",
        "INTERNAL MARKS",
        "PDF PROCESSING",
        "STUDENT RESULTS",
        "MARK CALCULATIONS",
        "EXCEL EXPORT"

    ],

    fallback:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",

    tags: [

        "Python",
        "Flask",
        "PyMuPDF",
        "OpenPyXL",
        "JavaScript",
        "HTML",
        "CSS",
        "PDF Automation"

    ],

    link: "https://mark-system-opd5.onrender.com"

},
    /* ======================================
       PROJECT 04 — SKILL BRIDGE
    ====================================== */
    {
        title: "Skill Bridge",
        category: "HACKATHON / WEB PLATFORM",
        description: `
Skill Bridge is a multi-role academia–industry collaboration platform developed for a hackathon. It is designed to connect students, educational institutions, academicians and industry partners through a shared platform for skill development, career opportunities and collaboration.

KEY FEATURES:

• Multi-role access for students, institutions, academicians and industry partners
• Skill mapping to help connect learner competencies with industry requirements
• Career and opportunity recommendations
• Internship and placement opportunity listings
• Student applications and application tracking
• Industry hiring pipelines and candidate evaluation workflows
• Competency evaluations and verified skill records
• Digital portfolios highlighting skills, projects and achievements
• Campus drives and institution-industry collaboration workflows

TECHNOLOGIES USED:

• Firebase Authentication — user authentication and role-based access
• Cloud Firestore — application data, users, opportunities and workflows
• Cloudinary — image and media storage
• HTML, CSS and JavaScript — web interface and client-side functionality

PROJECT OBJECTIVE:

To bridge the gap between academic learning and industry expectations by providing a common digital space where students can showcase verified skills, institutions can support career development and companies can discover and evaluate potential candidates.
`,
        images: [
            "assets/images/skill-bridge-1.png",
            "assets/images/skill-bridge-2.png",
            "assets/images/skill-bridge-3.png"
        ],
        labels: [
            "DASHBOARD",
            "OPPORTUNITIES",
            "STUDENT PORTFOLIO"
        ],
        fallback: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
        tags: [
            "Firebase",
            "Cloud Firestore",
            "Cloudinary",
            "JavaScript",
            "Web Application",
            "Hackathon"
        ],
        link: "#"
    },


    /* ======================================
       PROJECT 05
       SMART PET CARE
    ====================================== */

    {

        title: "PetCare+",

        category: "APP / BACKEND",

        description: `
Smart Pet Care is a mobile application designed to help pet owners manage their pets’ healthcare in one convenient place. It brings together pet profiles, vaccination schedules, digital medical records and timely care reminders.

KEY FEATURES:

• Pet registration and profile management
• Vaccination records, schedules and reminders
• Digital pet health records
• QR-code-based digital health certificates
• Smart notifications for important care activities

TECHNOLOGIES USED:

• Flutter (Dart) – Cross-platform mobile app development
• Firebase Authentication – User sign-in and authentication
• Cloud Firestore – Pet profiles and healthcare data
• Firebase Storage – Pet images and related documents
• Node.js – Server-side and backend functionality
• QR Code – Access to a pet’s digital health certificate

PROJECT OBJECTIVE:

To make pet healthcare more organized and accessible by helping owners maintain medical information, track vaccinations and stay informed about upcoming care activities.
`,

        images: [

            "assets/images/project-06-0.png",
            "assets/images/project-06-1.jpg",
            "assets/images/project-06-2.jpg",
            "assets/images/project-06-3.jpg",
            "assets/images/project-06-4.jpg",
            "assets/images/project-06-5.jpg",
            "assets/images/project-06-6.jpg",
            "assets/images/project-06-7.jpg",
            "assets/images/project-06-8.jpg",
            "assets/images/project-06-9.jpg",
            "assets/images/project-06-10.jpg",
            "assets/images/project-06-11.jpg"

        ],

        labels: [

            "HOME",
            "PET PROFILE",
            "VACCINATION",
            "REMINDERS",
            "MEDICAL RECORD",
            "QR CERTIFICATE"

        ],

        fallback:
            "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1200&q=85",

        tags: [

            "Flutter",
            "Dart",
            "Node.js",
            "Firebase",
            "Backend"

        ],

        link: "https://smart-pet-care-da029.web.app"

    }

];


/* ==========================================
   PROJECT FILTER
========================================== */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        projectCards.forEach(card => {

            const category = card.dataset.category;

            const show =
                filter === "all" ||
                category === filter;

            if (show) {

                card.classList.remove("hidden");

                requestAnimationFrame(() => {

                    card.style.opacity = "1";

                    card.style.transform = "translateY(0)";

                });

            } else {

                card.style.opacity = "0";

                card.style.transform = "translateY(20px)";

                setTimeout(() => {

                    card.classList.add("hidden");

                }, 250);

            }

        });

    });

});


/* ==========================================
   GALLERY ELEMENTS
========================================== */

const modal =
    document.querySelector(".project-modal");

const modalOverlay =
    document.querySelector(".modal-overlay");

const modalClose =
    document.querySelector(".modal-close");

const modalImage =
    document.querySelector("#modalImage");

const modalTitle =
    document.querySelector("#modalTitle");

const modalCategory =
    document.querySelector("#modalCategory");

const modalDescription =
    document.querySelector("#modalDescription");


/* ==========================================
   DESCRIPTION SHOW MORE / SHOW LESS
========================================== */

let descriptionToggle = null;

if (modalDescription) {

    modalDescription.classList.add("project-description");

    descriptionToggle = document.createElement("button");

    descriptionToggle.type = "button";

    descriptionToggle.className = "show-more-btn";

    descriptionToggle.textContent = "Show More +";

    descriptionToggle.setAttribute("aria-expanded", "false");

    modalDescription.insertAdjacentElement(
        "afterend",
        descriptionToggle
    );

    descriptionToggle.addEventListener("click", () => {

        const isExpanded =
            modalDescription.classList.toggle("expanded");

        descriptionToggle.textContent =
            isExpanded
                ? "Show Less −"
                : "Show More +";

        descriptionToggle.setAttribute(
            "aria-expanded",
            String(isExpanded)
        );

    });

}


const modalTags =
    document.querySelector("#modalTags");

const modalLink =
    document.querySelector("#modalLink");

const thumbnailContainer =
    document.querySelector("#thumbnailContainer");

const currentScreen =
    document.querySelector("#currentScreen");

const totalScreens =
    document.querySelector("#totalScreens");

const screenLabel =
    document.querySelector("#screenLabel");

const galleryPrev =
    document.querySelector("#galleryPrev");

const galleryNext =
    document.querySelector("#galleryNext");


/* ==========================================
   CURRENT GALLERY
========================================== */

let currentProject = 0;

let currentImage = 0;


/* ==========================================
   OPEN PROJECT
========================================== */

function openProject(projectIndex) {

    const project =
        projectData[projectIndex];

    if (!project) return;

    currentProject = projectIndex;

    currentImage = 0;


    /* Project text */

    modalTitle.textContent =
        project.title;

    modalCategory.textContent =
        project.category;

    modalDescription.textContent =
        project.description;


    /* Reset description */

    modalDescription.classList.remove("expanded");

    if (descriptionToggle) {

        descriptionToggle.textContent = "Show More +";

        descriptionToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    modalLink.href =
        project.link;


    /* Tags */

    modalTags.innerHTML = "";

    project.tags.forEach(tag => {

        const span =
            document.createElement("span");

        span.textContent = tag;

        modalTags.appendChild(span);

    });


    /* Number */

    totalScreens.textContent =
        String(project.images.length).padStart(2, "0");


    /* Build thumbnails */

    buildThumbnails(project);


    /* Show first */

    showGalleryImage(0, false);


    /* Open */

    modal.classList.add("open");

    body.classList.add("modal-open");

}


/* ==========================================
   BUILD THUMBNAILS
========================================== */

function buildThumbnails(project) {

    thumbnailContainer.innerHTML = "";

    project.images.forEach((image, index) => {

        const thumbnail =
            document.createElement("button");

        thumbnail.className =
            "gallery-thumbnail";

        thumbnail.type = "button";

        thumbnail.setAttribute(
            "aria-label",
            `Open screenshot ${index + 1}`
        );


        /* Image */

        const img =
            document.createElement("img");

        img.src = image;

        img.alt =
            `${project.title} screenshot ${index + 1}`;


        /* Local image fallback */

        img.onerror = () => {

            img.onerror = null;

            img.src = project.fallback;

        };


        /* Number */

        const number =
            document.createElement("span");

        number.className =
            "thumbnail-number";

        number.textContent =
            String(index + 1).padStart(2, "0");


        /* Label */

        const label =
            document.createElement("span");

        label.className =
            "thumbnail-label";

        label.textContent =
            project.labels[index] || `SCREEN ${index + 1}`;


        thumbnail.appendChild(img);

        thumbnail.appendChild(number);

        thumbnail.appendChild(label);


        thumbnail.addEventListener("click", () => {

            showGalleryImage(index, true);

        });


        thumbnailContainer.appendChild(thumbnail);

    });

}


/* ==========================================
   SHOW GALLERY IMAGE
========================================== */

function showGalleryImage(index, animate = true) {

    const project =
        projectData[currentProject];

    if (!project) return;

    const total =
        project.images.length;


    /* Loop around */

    if (index < 0) {

        index = total - 1;

    }

    if (index >= total) {

        index = 0;

    }

    currentImage = index;

    const image =
        project.images[index];

    const fallback =
        project.fallback;


    /* Image transition */

    if (animate) {

        modalImage.style.opacity = "0";

        modalImage.style.transform = "scale(0.985)";

    }


    setTimeout(() => {

        const imageWrap = modalImage.closest(".gallery-image-wrap");

        const applyImageLayout = () => {

            if (!imageWrap || !modalImage.naturalWidth || !modalImage.naturalHeight) {
                return;
            }

            const ratio = modalImage.naturalWidth / modalImage.naturalHeight;

            imageWrap.classList.remove("is-portrait", "is-landscape", "is-square");

            if (ratio < 0.82) {
                imageWrap.classList.add("is-portrait");
            } else if (ratio > 1.22) {
                imageWrap.classList.add("is-landscape");
            } else {
                imageWrap.classList.add("is-square");
            }

            modalImage.style.opacity = "1";
            modalImage.style.transform = "scale(1)";

        };

        modalImage.alt =
            `${project.title} — ${project.labels[index] || "Screenshot"}`;

        modalImage.onload = applyImageLayout;

        modalImage.onerror = () => {

            modalImage.onerror = null;
            modalImage.src = fallback;

        };

        modalImage.src = image;

        // Cached images may already be complete and not fire a fresh load event.
        if (modalImage.complete && modalImage.naturalWidth) {
            applyImageLayout();
        }

    }, animate ? 150 : 0);


    /* Counter */

    currentScreen.textContent =
        String(index + 1).padStart(2, "0");


    /* Label */

    screenLabel.textContent =
        project.labels[index] || `SCREEN ${index + 1}`;


    /* Active thumbnail */

    const thumbnails =
        thumbnailContainer.querySelectorAll(".gallery-thumbnail");

    thumbnails.forEach((thumbnail, thumbnailIndex) => {

        thumbnail.classList.toggle(
            "active",
            thumbnailIndex === index
        );

    });


    /* Keep the selected thumbnail visible by scrolling only the horizontal
       thumbnail strip. Avoid scrollIntoView because it can move the whole page. */

    const activeThumbnail = thumbnails[index];
    const thumbnailViewport = thumbnailContainer.parentElement;

    if (activeThumbnail && thumbnailViewport) {

        const thumbLeft = activeThumbnail.offsetLeft;
        const thumbRight = thumbLeft + activeThumbnail.offsetWidth;
        const visibleLeft = thumbnailViewport.scrollLeft;
        const visibleRight = visibleLeft + thumbnailViewport.clientWidth;

        if (thumbLeft < visibleLeft) {
            thumbnailViewport.scrollTo({
                left: Math.max(0, thumbLeft - 12),
                behavior: "smooth"
            });
        } else if (thumbRight > visibleRight) {
            thumbnailViewport.scrollTo({
                left: thumbRight - thumbnailViewport.clientWidth + 12,
                behavior: "smooth"
            });
        }

    }

}


/* ==========================================
   NEXT / PREVIOUS
========================================== */

function nextImage() {

    const project =
        projectData[currentProject];

    if (!project) return;

    showGalleryImage(currentImage + 1, true);

}


function previousImage() {

    const project =
        projectData[currentProject];

    if (!project) return;

    showGalleryImage(currentImage - 1, true);

}


galleryNext.addEventListener("click", nextImage);

galleryPrev.addEventListener("click", previousImage);


/* ==========================================
   CLOSE MODAL
========================================== */

function closeProject() {

    modal.classList.remove("open");

    body.classList.remove("modal-open");

}


modalClose.addEventListener("click", closeProject);

modalOverlay.addEventListener("click", closeProject);


/* ==========================================
   PROJECT CARD CLICK
========================================== */

projectCards.forEach(card => {

    card.addEventListener("click", () => {

        const index =
            Number(card.dataset.project);

        openProject(index);

    });

});


/* ==========================================
   KEYBOARD GALLERY
========================================== */

document.addEventListener("keydown", event => {

    if (!modal.classList.contains("open")) {

        return;

    }

    if (event.key === "Escape") {

        closeProject();

    }

    if (event.key === "ArrowRight") {

        nextImage();

    }

    if (event.key === "ArrowLeft") {

        previousImage();

    }

});


/* ==========================================
   CUSTOM CURSOR
========================================== */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorRing =
    document.querySelector(".cursor-ring");


let mouseX =
    window.innerWidth / 2;

let mouseY =
    window.innerHeight / 2;

let ringX =
    mouseX;

let ringY =
    mouseY;


window.addEventListener("mousemove", event => {

    mouseX = event.clientX;

    mouseY = event.clientY;

    cursorDot.style.left =
        `${mouseX}px`;

    cursorDot.style.top =
        `${mouseY}px`;

});


function animateCursor() {

    ringX += (mouseX - ringX) * 0.15;

    ringY += (mouseY - ringY) * 0.15;

    cursorRing.style.left =
        `${ringX}px`;

    cursorRing.style.top =
        `${ringY}px`;

    requestAnimationFrame(animateCursor);

}

animateCursor();


const hoverElements =
    document.querySelectorAll(
        "a, button, .project-card, .circle-link"
    );


hoverElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursorRing.classList.add("hover");

    });

    element.addEventListener("mouseleave", () => {

        cursorRing.classList.remove("hover");

    });

});


/* ==========================================
   MAGNETIC BUTTON
========================================== */

const magneticButtons =
    document.querySelectorAll(".magnetic");


magneticButtons.forEach(button => {

    button.addEventListener("mousemove", event => {

        const rect =
            button.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const moveX =
            (x - rect.width / 2) * 0.18;

        const moveY =
            (y - rect.height / 2) * 0.18;


        button.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


/* ==========================================
   PROJECT CARD TILT
========================================== */

const tiltCards =
    document.querySelectorAll(".tilt-card");


tiltCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        if (window.innerWidth < 800) {

            return;

        }

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;


        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-4px)
        `;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ==========================================
   PARTICLES
========================================== */

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");

let particles = [];

let particleCount =
    window.innerWidth < 700
        ? 30
        : 65;


function resizeCanvas() {

    canvas.width =
        window.innerWidth * window.devicePixelRatio;

    canvas.height =
        window.innerHeight * window.devicePixelRatio;


    canvas.style.width =
        `${window.innerWidth}px`;

    canvas.style.height =
        `${window.innerHeight}px`;


    ctx.setTransform(
        window.devicePixelRatio,
        0,
        0,
        window.devicePixelRatio,
        0,
        0
    );

}


function createParticles() {

    particles = [];

    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        particles.push({

            x:
                Math.random() * window.innerWidth,

            y:
                Math.random() * window.innerHeight,

            radius:
                Math.random() * 1.2 + 0.3,

            speedX:
                (Math.random() - 0.5) * 0.15,

            speedY:
                (Math.random() - 0.5) * 0.15,

            alpha:
                Math.random() * 0.35 + 0.05

        });

    }

}


function drawParticles() {

    ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );


    particles.forEach(particle => {

        particle.x += particle.speedX;

        particle.y += particle.speedY;


        if (particle.x < 0) {

            particle.x = window.innerWidth;

        }

        if (particle.x > window.innerWidth) {

            particle.x = 0;

        }

        if (particle.y < 0) {

            particle.y = window.innerHeight;

        }

        if (particle.y > window.innerHeight) {

            particle.y = 0;

        }


        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.radius,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            `rgba(197, 161, 91, ${particle.alpha})`;

        ctx.fill();

    });


    requestAnimationFrame(drawParticles);

}


resizeCanvas();

createParticles();

drawParticles();


window.addEventListener("resize", () => {

    resizeCanvas();

    particleCount =
        window.innerWidth < 700
            ? 30
            : 65;

    createParticles();

});


/* ==========================================
   YEAR
========================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ==========================================
   INTERNAL LINKS
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const id =
            link.getAttribute("href");


        if (
            id === "#" ||
            !document.querySelector(id)
        ) {

            return;

        }


        event.preventDefault();

        const target =
            document.querySelector(id);


        window.scrollTo({

            top: target.offsetTop - 80,

            behavior: "smooth"

        });

    });

});


/* ==========================================
   INITIAL
========================================== */

updateNavbar();

updateScrollProgress();

updateActiveNav();