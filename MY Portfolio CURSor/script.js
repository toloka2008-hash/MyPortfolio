/**
 * Premium Portfolio — Interactions & Animations
 */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(pointer: coarse)").matches;

  /* ---------- i18n (EN / RU / UZ) ---------- */
  const I18N = {
    en: {
      meta: {
        description:
          "Premium personal portfolio — Prompt Engineer, Web Creator, AI Solutions Designer. Projects, videos, gallery, and contact.",
        ogTitle: "[YOUR FULL NAME] — Portfolio",
        ogDescription: "Prompt Engineer · Web Creator · AI Solutions Designer",
      },
      nav: { projects: "Projects", videos: "Videos", gallery: "Gallery", about: "About", contact: "Contact" },
      hero: { portfolioWord: "PORTFOLIO", iAm: "I am a", explore: "Explore My Work", scroll: "Scroll" },
      projects: { tag: "Work", title: "MY PROJECTS", subtitle: "Selected websites and digital experiences" },
      videos: { tag: "Media", title: "MY VIDEOS", subtitle: "Motion work and creative showcases" },
      gallery: { tag: "Visuals", title: "MY GALLERY", subtitle: "Creative imagery and design snapshots" },
      about: {
        tag: "Profile",
        title: "ABOUT ME",
        subtitle: "Crafting intelligent digital experiences",
        intro:
          "I specialize in bridging creativity and artificial intelligence — designing prompts, workflows, and web experiences that feel effortless yet powerful. From automation pipelines to cinematic interfaces, I build solutions that help brands move faster and think smarter.",
        experience: "Experience",
        skills: "Skills",
        expertise: "Expertise",
        cards: {
          prompt: {
            title: "Professional Prompt Engineering",
            desc: "Precision-crafted prompts and evaluation frameworks for reliable, scalable AI outputs across products and campaigns.",
          },
          workflow: {
            title: "AI Workflow Design",
            desc: "End-to-end systems that connect tools, data, and human review — optimized for clarity, speed, and quality control.",
          },
          automation: {
            title: "AI Automation",
            desc: "Intelligent automations that eliminate repetitive work while keeping humans in the loop where it matters most.",
          },
          web: {
            title: "Website Creation",
            desc: "Premium, performance-focused websites with modern UX, responsive layouts, and memorable visual identity.",
          },
          creative: {
            title: "Creative Problem Solving",
            desc: "Translating complex requirements into elegant solutions — strategy, design, and execution in one cohesive flow.",
          },
          modern: {
            title: "Modern AI Technologies",
            desc: "LLMs, agents, RAG, multimodal models, and emerging stacks — applied with purpose, not hype.",
          },
        },
      },
      contact: {
        tag: "Connect",
        title: "CONTACT",
        tagline: "Let's Build Something Amazing Together",
        sub: "Ready to elevate your brand with AI-powered creativity? Reach out — I'd love to hear about your vision.",
        email: "Email",
        telegram: "Telegram",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
      footer: { name: "A'zamjon", crafted: "Crafted with precision." },
      common: { visit: "Visit Website" },
      roles: ["Prompt Engineer", "Web Creator", "AI Solutions Designer"],
    },
    ru: {
      meta: {
        description:
          "Премиальное портфолио — промпт-инженер, веб‑креатор, AI‑дизайнер решений. Проекты, видео, галерея и контакты.",
        ogTitle: "[YOUR FULL NAME] — Портфолио",
        ogDescription: "Промпт‑инженер · Веб‑креатор · AI‑дизайнер решений",
      },
      nav: { projects: "Проекты", videos: "Видео", gallery: "Галерея", about: "Обо мне", contact: "Контакты" },
      hero: { portfolioWord: "ПОРТФОЛИО", iAm: "Я", explore: "Смотреть работы", scroll: "Листай" },
      projects: { tag: "Работы", title: "МОИ ПРОЕКТЫ", subtitle: "Избранные сайты и цифровые продукты" },
      videos: { tag: "Медиа", title: "МОИ ВИДЕО", subtitle: "Шоурилы и креативные ролики" },
      gallery: { tag: "Визуал", title: "МОЯ ГАЛЕРЕЯ", subtitle: "Подборка изображений и дизайн‑кадров" },
      about: {
        tag: "Профиль",
        title: "ОБО МНЕ",
        subtitle: "Создаю умные цифровые впечатления",
        intro:
          "Я соединяю креатив и искусственный интеллект — проектирую промпты, рабочие процессы и веб‑опыт, который ощущается легко, но работает мощно. От автоматизаций до кинематографичных интерфейсов — делаю решения, которые помогают брендам ускоряться и мыслить точнее.",
        experience: "Опыт",
        skills: "Навыки",
        expertise: "Экспертиза",
        cards: {
          prompt: {
            title: "Профессиональная промпт‑инженерия",
            desc: "Точные промпты и системы оценки для стабильных, масштабируемых AI‑результатов.",
          },
          workflow: {
            title: "Дизайн AI‑процессов",
            desc: "Системы end‑to‑end, связывающие инструменты, данные и human‑review — быстро и прозрачно.",
          },
          automation: {
            title: "AI‑автоматизация",
            desc: "Автоматизации, которые убирают рутину, сохраняя контроль там, где он важен.",
          },
          web: {
            title: "Создание сайтов",
            desc: "Премиальные сайты с современной UX‑логикой, адаптивностью и высокой скоростью загрузки.",
          },
          creative: {
            title: "Креативное решение задач",
            desc: "Перевожу сложные требования в элегантные решения — стратегия, дизайн и реализация в одном потоке.",
          },
          modern: {
            title: "Современные AI‑технологии",
            desc: "LLM, агенты, RAG, мультимодальность и новые стеки — применяю по делу, без хайпа.",
          },
        },
      },
      contact: {
        tag: "Связь",
        title: "КОНТАКТЫ",
        tagline: "Давайте создадим что‑то потрясающее",
        sub: "Хотите усилить бренд AI‑креативом? Напишите — буду рад услышать вашу идею.",
        email: "Почта",
        telegram: "Телеграм",
        instagram: "Инстаграм",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
      footer: { name: "A'zamjon", crafted: "Сделано с точностью." },
      common: { visit: "Открыть сайт" },
      roles: ["Промпт‑инженер", "Веб‑креатор", "AI‑дизайнер решений"],
    },
    uz: {
      meta: {
        description:
          "Premium portfolio — Prompt Engineer, Web Creator, AI yechimlar dizayneri. Loyihalar, videolar, galereya va kontaktlar.",
        ogTitle: "[YOUR FULL NAME] — Portfolio",
        ogDescription: "Prompt Engineer · Web Creator · AI yechimlar dizayneri",
      },
      nav: { projects: "Loyihalar", videos: "Videolar", gallery: "Galereya", about: "Men haqimda", contact: "Aloqa" },
      hero: { portfolioWord: "PORTFOLIO", iAm: "Men", explore: "Ishlarimni ko‘rish", scroll: "Pastga" },
      projects: { tag: "Ishlar", title: "MENING LOYIHALARIM", subtitle: "Tanlangan saytlar va raqamli tajribalar" },
      videos: { tag: "Media", title: "MENING VIDEOLARIM", subtitle: "Motion ishlar va kreativ namoyishlar" },
      gallery: { tag: "Vizual", title: "MENING GALEREYAM", subtitle: "Ijodiy rasmlar va dizayn lavhalari" },
      about: {
        tag: "Profil",
        title: "MEN HAQIMDA",
        subtitle: "Aqlli raqamli tajribalar yarataman",
        intro:
          "Men kreativlik va sun’iy intellektni uyg‘unlashtiraman — promptlar, workflow’lar va kuchli, ammo yengil seziladigan web tajribalarni loyihalayman. Avtomatlashtirishdan tortib kinomatografik interfeyslargacha — brendlarni tezlashtiradigan va aniqlashtiradigan yechimlar quraman.",
        experience: "Tajriba",
        skills: "Ko‘nikmalar",
        expertise: "Ekspertiza",
        cards: {
          prompt: {
            title: "Professional Prompt Engineering",
            desc: "Barqaror va kengaytiriladigan AI natijalari uchun aniq promptlar va baholash tizimlari.",
          },
          workflow: {
            title: "AI Workflow dizayni",
            desc: "Tool’lar, data va human‑review’ni bog‘laydigan end‑to‑end tizimlar — tez va tushunarli.",
          },
          automation: {
            title: "AI avtomatlashtirish",
            desc: "Qayta‑qayta ishlarni kamaytirib, muhim joyda nazoratni saqlaydigan avtomatsiyalar.",
          },
          web: {
            title: "Veb‑sayt yaratish",
            desc: "Premium saytlar: zamonaviy UX, responsiv dizayn va yuqori tezlik.",
          },
          creative: {
            title: "Kreativ muammo yechish",
            desc: "Murakkab talablarni nafis yechimga aylantiraman — strategiya, dizayn va kod bitta oqimda.",
          },
          modern: {
            title: "Zamonaviy AI texnologiyalar",
            desc: "LLM, agentlar, RAG, multimodal va yangi stacklar — maqsadli qo‘llayman.",
          },
        },
      },
      contact: {
        tag: "Bog‘lanish",
        title: "ALOQA",
        tagline: "Keling, ajoyib narsa yaratamiz",
        sub: "Brendingizni AI‑kreativ bilan kuchaytirmoqchimisiz? Yozing — g‘oyangizni eshitishdan xursand bo‘laman.",
        email: "Email",
        telegram: "Telegram",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
      footer: { name: "A'zamjon", crafted: "Aniqlik bilan yaratildi." },
      common: { visit: "Saytga kirish" },
      roles: ["Prompt Engineer", "Web Creator", "AI yechimlar dizayneri"],
    },
  };

  function getByPath(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  }

  function applyLang(lang) {
    const pack = I18N[lang] || I18N.en;
    document.documentElement.lang = lang === "uz" ? "uz" : lang;
    document.documentElement.dataset.lang = lang;
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = getByPath(pack, key);
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const raw = el.getAttribute("data-i18n-attr") || "";
      const [attr, key] = raw.split(":");
      if (!attr || !key) return;
      const value = getByPath(pack, key);
      if (typeof value === "string") el.setAttribute(attr, value);
    });

    // Update the animated hero title letters when language changes
    const titleWord = document.querySelector(".hero-title-word");
    if (titleWord) {
      const txt = getByPath(pack, "hero.portfolioWord");
      if (typeof txt === "string") {
        titleWord.dataset.text = txt;
        titleWord.dataset.split = "";
        titleWord.textContent = txt;
        initHeroLetters();
      }
    }

    // Update roles list for the rotator
    const nextRoles = getByPath(pack, "roles");
    if (Array.isArray(nextRoles)) {
      roles.splice(0, roles.length, ...nextRoles);
      roleIndex = 0;
      if (roleEl) roleEl.textContent = roles[0] || "";
    }

    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });
  }

  const savedLang = localStorage.getItem("lang") || "en";
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang-btn") || "en"));
  });

  /* ---------- Loader ---------- */
  const loader = document.getElementById("loader");
  const loaderProgress = document.querySelector(".loader-progress");
  document.body.classList.add("loading");

  let loadProgress = 0;
  const loadInterval = setInterval(() => {
    loadProgress += Math.random() * 18 + 8;
    if (loadProgress >= 100) {
      loadProgress = 100;
      clearInterval(loadInterval);
      if (loaderProgress) loaderProgress.style.width = "100%";
      setTimeout(finishLoad, 400);
    } else if (loaderProgress) {
      loaderProgress.style.width = loadProgress + "%";
    }
  }, 120);

  function finishLoad() {
    loader?.classList.add("hidden");
    document.body.classList.remove("loading");
    loader?.setAttribute("aria-busy", "false");
    applyLang(savedLang);
    initHeroLetters();
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  window.addEventListener("load", () => {
    if (loadProgress < 100) {
      loadProgress = 100;
      clearInterval(loadInterval);
      if (loaderProgress) loaderProgress.style.width = "100%";
      setTimeout(finishLoad, 300);
    }
  });

  /* ---------- Year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Hero letter reveal ---------- */
  function initHeroLetters() {
    const titleWord = document.querySelector(".hero-title-word");
    if (!titleWord || titleWord.dataset.split) return;
    const text = titleWord.dataset.text || titleWord.textContent;
    titleWord.dataset.split = "1";
    titleWord.textContent = "";
    [...text].forEach((char, i) => {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.animationDelay = `${0.05 * i + 0.3}s`;
      titleWord.appendChild(span);
    });
  }

  /* ---------- Role rotator ---------- */
  const roles = [...I18N.en.roles];
  const roleEl = document.getElementById("role-rotator");
  let roleIndex = 0;

  if (roleEl && !prefersReducedMotion) {
    setInterval(() => {
      roleEl.classList.add("fade-out");
      setTimeout(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        roleEl.textContent = roles[roleIndex];
        roleEl.classList.remove("fade-out");
      }, 300);
    }, 3200);
  }

  /* ---------- Custom cursor ---------- */
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  const mouseGlow = document.querySelector(".mouse-glow");
  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  if (!isTouch && dot && ring) {
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
      if (mouseGlow) {
        mouseGlow.style.left = mouseX + "px";
        mouseGlow.style.top = mouseY + "px";
      }
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      requestAnimationFrame(animateRing);
    }
    animateRing();

    document.querySelectorAll("a, button, .project-card, .gallery-item, .video-card").forEach((el) => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
  }

  /* ---------- Scroll progress ---------- */
  const progressBar = document.querySelector(".scroll-progress-bar");
  const header = document.getElementById("header");

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = progress + "%";
    header?.classList.toggle("scrolled", scrollTop > 40);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        if (entry.target.classList.contains("skills-block") || entry.target.closest(".skills-block")) {
          animateSkillBars(entry.target.closest(".about-section") || entry.target);
        }
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    if (!document.body.classList.contains("loading")) observer.observe(el);
  });

  let skillsAnimated = false;
  function animateSkillBars(root) {
    if (skillsAnimated) return;
    const section = root?.classList?.contains("about-section")
      ? root
      : document.querySelector(".about-section");
    if (!section) return;
    skillsAnimated = true;
    section.querySelectorAll(".skill-fill").forEach((fill) => {
      const w = fill.dataset.width || "0";
      requestAnimationFrame(() => {
        fill.style.width = w + "%";
      });
    });
  }

  const skillsBlock = document.querySelector(".skills-block");
  if (skillsBlock) {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateSkillBars(document.querySelector(".about-section"));
          skillObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    skillObserver.observe(skillsBlock);
  }

  /* ---------- Smooth anchor scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
      closeMobileNav();
    });
  });

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  function closeMobileNav() {
    navToggle?.classList.remove("active");
    navLinks?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  }

  navToggle?.addEventListener("click", () => {
    const open = navLinks?.classList.toggle("open");
    navToggle.classList.toggle("active", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  /* ---------- Particle canvas ---------- */
  const canvas = document.getElementById("particle-canvas");
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext("2d");
    let particles = [];
    let w, h;
    let mouse = { x: null, y: null };

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function createParticles(count) {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p, i) => {
        if (mouse.x !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            p.vx -= dx * 0.00008;
            p.vy -= dy * 0.00008;
          }
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 160, 255, ${p.opacity})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 100) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(draw);
    }

    resize();
    createParticles(Math.min(80, Math.floor((w * h) / 18000)));
    window.addEventListener("resize", () => {
      resize();
      createParticles(Math.min(80, Math.floor((w * h) / 18000)));
    });
    document.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    draw();
  }

  /* ---------- Parallax orbs ---------- */
  if (!prefersReducedMotion) {
    const orbs = document.querySelectorAll(".gradient-orb");
    window.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.5;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    });
  }

  /* ---------- Card tilt ---------- */
  document.querySelectorAll("[data-tilt]").forEach((card) => {
    if (isTouch || prefersReducedMotion) return;
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-8px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  /* ---------- Video cards ---------- */
  const videoModal = document.getElementById("video-modal");
  const videoModalPlayer = document.querySelector(".video-modal-player");
  const videoModalClose = document.querySelector(".video-modal-close");

  document.querySelectorAll("[data-video-card]").forEach((card) => {
    const video = card.querySelector(".video-preview");
    const playBtn = card.querySelector(".video-play-btn");

    card.addEventListener("mouseenter", () => {
      if (!video) return;
      video.play().catch(() => {});
    });
    card.addEventListener("mouseleave", () => {
      if (!video) return;
      video.pause();
      video.currentTime = 0;
    });

    playBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!video?.src) return;
      openVideoModal(video.src);
    });
  });

  function openVideoModal(src) {
    if (!videoModal || !videoModalPlayer) return;
    videoModalPlayer.src = src;
    videoModal.hidden = false;
    requestAnimationFrame(() => videoModal.classList.add("active"));
    videoModalPlayer.play().catch(() => {});
  }

  function closeVideoModal() {
    if (!videoModal || !videoModalPlayer) return;
    videoModal.classList.remove("active");
    videoModalPlayer.pause();
    videoModalPlayer.src = "";
    setTimeout(() => {
      videoModal.hidden = true;
    }, 400);
  }

  videoModalClose?.addEventListener("click", closeVideoModal);
  videoModal?.addEventListener("click", (e) => {
    if (e.target === videoModal) closeVideoModal();
  });

  /* ---------- Lightbox ---------- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");
  const lightboxPrev = document.querySelector(".lightbox-prev");
  const lightboxNext = document.querySelector(".lightbox-next");
  const galleryItems = [...document.querySelectorAll("[data-lightbox]")];
  let lightboxIndex = 0;

  function openLightbox(index) {
    if (!lightbox || !lightboxImg) return;
    lightboxIndex = index;
    lightboxImg.src = galleryItems[index].href;
    lightboxImg.alt = galleryItems[index].querySelector("img")?.alt || "Gallery image";
    lightbox.hidden = false;
    requestAnimationFrame(() => lightbox.classList.add("active"));
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox?.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(() => {
      if (lightbox) lightbox.hidden = true;
      if (lightboxImg) lightboxImg.src = "";
    }, 400);
  }

  galleryItems.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      openLightbox(i);
    });
  });

  lightboxClose?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  lightboxPrev?.addEventListener("click", () => {
    lightboxIndex = (lightboxIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(lightboxIndex);
  });

  lightboxNext?.addEventListener("click", () => {
    lightboxIndex = (lightboxIndex + 1) % galleryItems.length;
    openLightbox(lightboxIndex);
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox?.classList.contains("active") && !videoModal?.classList.contains("active")) return;
    if (e.key === "Escape") {
      closeLightbox();
      closeVideoModal();
    }
    if (lightbox?.classList.contains("active")) {
      if (e.key === "ArrowLeft") lightboxPrev?.click();
      if (e.key === "ArrowRight") lightboxNext?.click();
    }
  });

  /* ---------- Section page transition feel ---------- */
  const sections = document.querySelectorAll(".section");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("section-active");
      });
    },
    { threshold: 0.08 }
  );
  sections.forEach((s) => sectionObserver.observe(s));
})();
