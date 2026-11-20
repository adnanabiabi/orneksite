(function () {
  'use strict';

  const siteContent = (typeof window !== 'undefined' && window.siteContent) ? window.siteContent : {};
  const getIcon = (typeof window !== 'undefined' && window.getIcon) ? window.getIcon : (() => '');

function runInit() {
  try {
    initPreloader();
    renderNavbar();
    renderHero();
    initCountdown();
    renderAbout();
    initStatsCounters();
    renderSchedule();
    renderSpeakers();
    renderTeam();
    renderApplicationCTA();
    renderVenue();
    renderFAQ();
    renderSponsors();
    renderFooter();
    initScrollSpy();
    initBackToTop();
    initScrollReveal();
  } catch (err) {
    document.title = 'INIT ERROR: ' + err.message;
    console.error('App init failed:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runInit);
} else {
  runInit();
}

/* ==========================================================================
   1. PRELOADER
   ========================================================================== */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  const hide = () => {
    preloader.classList.add('loaded');
  };
  if (document.readyState === 'complete') {
    setTimeout(hide, 100);
  } else {
    window.addEventListener('load', () => setTimeout(hide, 100));
    setTimeout(hide, 400);
  }
}

/* ==========================================================================
   2. NAVBAR & MOBİL MENÜ
   ========================================================================== */
function renderNavbar() {
  const navContainer = document.getElementById('nav-links-container');
  const mobileNavContainer = document.getElementById('mobile-nav-links');
  const navCtaContainer = document.getElementById('nav-cta-wrap');
  const mobileSocialWrap = document.getElementById('mobile-social-wrap');

  // Masaüstü Menü Linkleri
  if (navContainer) {
    navContainer.innerHTML = siteContent.navLinks.map(link => `
      <a href="${link.href}" class="nav-link">${link.label}</a>
    `).join('');
  }

  // Mobil Menü Linkleri
  if (mobileNavContainer) {
    mobileNavContainer.innerHTML = siteContent.navLinks.map(link => `
      <a href="${link.href}" class="mobile-nav-link">
        <span>${link.label}</span>
        ${getIcon('arrow-right', { size: 18 })}
      </a>
    `).join('');
  }

  // Navbar CTA Butonu
  const hasAppUrl = Boolean(siteContent.meta.applicationUrl && siteContent.meta.applicationUrl.trim());
  const ctaButtonHtml = hasAppUrl
    ? `<a href="${siteContent.meta.applicationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-hero-solid">
        ${getIcon('sparkles', { size: 16 })}
        <span>Başvur</span>
       </a>`
    : `<a href="#basvuru" class="btn btn-hero-solid">
        ${getIcon('sparkles', { size: 16 })}
        <span>Başvur</span>
       </a>`;

  if (navCtaContainer) navCtaContainer.innerHTML = ctaButtonHtml;

  // Mobil Sosyal İkonlar
  if (mobileSocialWrap) {
    mobileSocialWrap.innerHTML = `
      <a href="${siteContent.socialMedia.instagram}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="SZAL Çalıştayı Instagram">
        ${getIcon('instagram', { size: 20 })}
      </a>
      <a href="${siteContent.socialMedia.tiktok}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="SZAL Çalıştayı TikTok">
        ${getIcon('tiktok', { size: 20 })}
      </a>
    `;
  }

  // Mobil Menü Aç/Kapa
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    menuToggle?.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
    menuToggle?.setAttribute('aria-expanded', 'false');
  }

  menuToggle?.addEventListener('click', openDrawer);
  closeMenuBtn?.addEventListener('click', closeDrawer);

  // Linke tıklandığında çekmeceyi kapat
  mobileDrawer?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // ESC tuşuyla çekmeceyi kapat
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Scroll Durumunda Navbar Blur ve Arka Plan
  const navbar = document.getElementById('header-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   3. HERO BÖLÜMÜ
   ========================================================================== */
function renderHero() {
  const heroBadge = document.getElementById('hero-badge');
  const heroTitle = document.getElementById('hero-title');
  const heroSlogan = document.getElementById('hero-slogan');
  const heroDesc = document.getElementById('hero-desc');
  const heroMetaWrap = document.getElementById('hero-meta-badges');
  const heroCtaWrap = document.getElementById('hero-cta-group');

  if (heroBadge) {
    heroBadge.innerHTML = `
      ${getIcon('sparkles', { size: 16 })}
      <span>${siteContent.hero.badge}</span>
    `;
  }

  if (heroTitle) heroTitle.textContent = siteContent.hero.mainTitle;
  if (heroSlogan) heroSlogan.textContent = siteContent.hero.slogan;
  if (heroDesc) heroDesc.textContent = siteContent.hero.description;

  if (heroMetaWrap) {
    heroMetaWrap.innerHTML = `
      <div class="meta-pill">
        ${getIcon('calendar', { size: 18 })}
        <span>${siteContent.meta.eventDateRange}</span>
      </div>
      <div class="meta-pill">
        ${getIcon('map-pin', { size: 18 })}
        <span>${siteContent.meta.venueName}</span>
      </div>
    `;
  }

  const hasAppUrl = Boolean(siteContent.meta.applicationUrl && siteContent.meta.applicationUrl.trim());
  if (heroCtaWrap) {
    heroCtaWrap.innerHTML = `
      <a href="${hasAppUrl ? siteContent.meta.applicationUrl : '#basvuru'}" ${hasAppUrl ? 'target="_blank" rel="noopener noreferrer"' : ''} class="btn btn-hero-solid">
        <span>${siteContent.hero.ctaPrimary}</span>
        ${getIcon('arrow-right', { size: 18 })}
      </a>
      <a href="#program" class="btn btn-hero-outline">
        <span>${siteContent.hero.ctaSecondary}</span>
      </a>
    `;
  }

  // Bizi Takip Edin Şeridi
  const heroSocialWrap = document.getElementById('hero-social-strip');
  if (heroSocialWrap) {
    heroSocialWrap.innerHTML = `
      <span>${siteContent.hero.socialFollowText || 'Bizi Takip Edin'}:</span>
      <div class="hero-social-strip-links">
        <a href="${siteContent.socialMedia.instagram}" target="_blank" rel="noopener noreferrer" aria-label="SZAL Çalıştayı Instagram">
          ${getIcon('instagram', { size: 16 })}
          <span>Instagram</span>
        </a>
        <a href="${siteContent.socialMedia.tiktok}" target="_blank" rel="noopener noreferrer" aria-label="SZAL Çalıştayı TikTok">
          ${getIcon('tiktok', { size: 16 })}
          <span>TikTok</span>
        </a>
      </div>
    `;
  }
}

/* ==========================================================================
   4. CANLI GERİ SAYIM SAYACI
   ========================================================================== */
function initCountdown() {
  const targetTime = new Date(siteContent.meta.countdownTarget).getTime();
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minutesEl = document.getElementById('cd-minutes');
  const secondsEl = document.getElementById('cd-seconds');
  const countdownTitle = document.getElementById('countdown-title');
  const countdownGrid = document.getElementById('countdown-grid');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  function update() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      if (countdownTitle) countdownTitle.textContent = siteContent.hero.countdownEndedText;
      if (countdownGrid) {
        countdownGrid.innerHTML = `
          <div style="grid-column: span 4; text-align: center; font-size: 1.4rem; font-weight: 700; color: #FFFFFF; padding: 12px 0;">
            ${siteContent.hero.countdownEndedText}
          </div>
        `;
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   5. HAKKINDA & RAKAMLAR
   ========================================================================== */
function renderAbout() {
  const aboutTextWrap = document.getElementById('about-text-content');
  const statsGrid = document.getElementById('about-stats-grid');
  const whyGrid = document.getElementById('about-why-grid');

  if (aboutTextWrap) {
    aboutTextWrap.innerHTML = siteContent.about.paragraphs.map(p => `
      <p>${p}</p>
    `).join('');
  }

  if (statsGrid) {
    statsGrid.innerHTML = siteContent.about.stats.map(stat => `
      <div class="stat-card reveal-fade-up">
        <div class="stat-number-wrapper">
          <span class="stat-counter" data-target="${stat.number}">0</span><span>${stat.suffix}</span>
        </div>
        <div class="stat-label">${stat.label}</div>
        <div class="stat-desc">${stat.desc}</div>
      </div>
    `).join('');
  }

  if (whyGrid) {
    whyGrid.innerHTML = siteContent.about.whyJoin.map(item => `
      <div class="why-card reveal-fade-up">
        <div class="why-card-icon">
          ${getIcon(item.icon, { size: 26 })}
        </div>
        <h3 class="why-card-title">${item.title}</h3>
        <p class="why-card-desc">${item.description}</p>
      </div>
    `).join('');
  }
}

// Sayaç Animasyonu (IntersectionObserver)
function initStatsCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute('data-target');
        const duration = 1200; // ms
        const startTime = performance.now();

        function animate(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out expo
          const currentVal = Math.floor(progress * target);
          entry.target.textContent = currentVal;

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            entry.target.textContent = target;
          }
        }

        requestAnimationFrame(animate);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => observer.observe(counter));
}

/* ==========================================================================
   6. PROGRAM & TİMELİNE
   ========================================================================== */
function renderSchedule() {
  const tabsWrap = document.getElementById('schedule-tabs-wrap');
  const timelineTrack = document.getElementById('timeline-track');
  if (!tabsWrap || !timelineTrack) return;

  // Sekme Butonları
  tabsWrap.innerHTML = siteContent.schedule.days.map((day, idx) => `
    <button class="schedule-tab-btn ${idx === 0 ? 'active' : ''}" data-day-index="${idx}">
      ${day.label}
    </button>
  `).join('');

  // Günün Etkinliklerini Çiz
  function showDay(index) {
    const day = siteContent.schedule.days[index];
    if (!day) return;

    timelineTrack.innerHTML = day.events.map(ev => `
      <div class="timeline-item reveal-fade-up">
        <div class="timeline-card">
          <div class="timeline-header">
            <span class="timeline-time-badge">
              ${getIcon('clock', { size: 14 })}
              ${ev.time}
            </span>
            <span class="timeline-location-badge">
              ${getIcon('map-pin', { size: 14 })}
              ${ev.location}
            </span>
          </div>
          <h3 class="timeline-title">${ev.title}</h3>
          <p class="timeline-desc">${ev.description}</p>
        </div>
      </div>
    `).join('');

    initScrollReveal();
  }

  showDay(0);

  // Sekme Tıklamaları
  tabsWrap.querySelectorAll('.schedule-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      tabsWrap.querySelectorAll('.schedule-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const idx = +btn.getAttribute('data-day-index');
      showDay(idx);
    });
  });
}

/* ==========================================================================
   7. KONUŞMACILAR
   ========================================================================== */
function renderSpeakers() {
  const grid = document.getElementById('speakers-grid');
  const noticeWrap = document.getElementById('speakers-notice-wrap');
  if (!grid) return;

  const isUpcoming = !siteContent.speakers.isAnnounced;

  grid.innerHTML = siteContent.speakers.list.map(sp => `
    <div class="speaker-card ${isUpcoming ? 'is-upcoming' : ''} reveal-fade-up">
      <div class="speaker-avatar-wrap">
        ${sp.photo 
          ? `<img src="${sp.photo}" alt="${sp.name}" loading="lazy" />` 
          : `<div class="speaker-placeholder-icon">${getIcon('users', { size: 44 })}</div>`}
      </div>
      <h3 class="speaker-name">${sp.name}</h3>
      <div class="speaker-role">${sp.role}</div>
      <div class="speaker-company">${sp.company}</div>
      <span class="speaker-tag">${sp.tag}</span>
      ${isUpcoming ? `<span class="speaker-upcoming-pill">${getIcon('sparkles', { size: 12 })} Yakında</span>` : ''}
    </div>
  `).join('');

  if (noticeWrap && isUpcoming) {
    noticeWrap.innerHTML = `
      <div class="speakers-notice-banner reveal-fade-up">
        ${getIcon('sparkles', { size: 22 })}
        <span>${siteContent.speakers.announcementNotice}</span>
      </div>
    `;
  } else if (noticeWrap) {
    noticeWrap.innerHTML = '';
  }
}

/* ==========================================================================
   8. EKİBİMİZ (HİYERARŞİK)
   ========================================================================== */
function renderTeam() {
  const gcGrid = document.getElementById('team-gc-grid');
  const dirGrid = document.getElementById('team-directors-grid');

  // Genel Koordinatörler (Büyük Kartlar)
  if (gcGrid) {
    gcGrid.innerHTML = siteContent.team.generalCoordinators.map(member => `
      <div class="gc-card reveal-fade-up">
        <div class="gc-avatar">
          ${member.photo 
            ? `<img src="${member.photo}" alt="${member.name}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;" loading="lazy" />` 
            : member.initials}
        </div>
        <h3 class="gc-name">${member.name}</h3>
        <span class="gc-role-badge">${member.role}</span>
        <p class="gc-bio">${member.bio}</p>
      </div>
    `).join('');
  }

  // Direktörler (Eşit Kartlar)
  if (dirGrid) {
    dirGrid.innerHTML = siteContent.team.directors.map(member => `
      <div class="director-card reveal-fade-up">
        <div class="director-avatar">
          ${member.photo 
            ? `<img src="${member.photo}" alt="${member.name}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;" loading="lazy" />` 
            : member.initials}
        </div>
        <h3 class="director-name">${member.name}</h3>
        <div class="director-role">${member.role}</div>
        <p class="director-bio">${member.bio}</p>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   9. BAŞVURU BÖLÜMÜ (CTA BANNER)
   ========================================================================== */
function renderApplicationCTA() {
  const titleEl = document.getElementById('cta-title');
  const descEl = document.getElementById('cta-desc');
  const deadlineEl = document.getElementById('cta-deadline');
  const buttonWrap = document.getElementById('cta-button-wrap');

  if (titleEl) titleEl.textContent = siteContent.application.title;
  if (descEl) descEl.textContent = siteContent.application.description;
  if (deadlineEl) {
    deadlineEl.innerHTML = `
      ${getIcon('clock', { size: 16 })}
      <span>${siteContent.meta.applicationDeadlineText}</span>
    `;
  }

  const hasAppUrl = Boolean(siteContent.meta.applicationUrl && siteContent.meta.applicationUrl.trim());
  if (buttonWrap) {
    if (hasAppUrl) {
      buttonWrap.innerHTML = `
        <a href="${siteContent.meta.applicationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-hero-solid" style="padding: 16px 42px; font-size: 1.1rem;">
          <span>${siteContent.application.buttonActiveText}</span>
          ${getIcon('arrow-right', { size: 20 })}
        </a>
      `;
    } else {
      buttonWrap.innerHTML = `
        <button class="btn btn-disabled" disabled style="padding: 16px 42px; font-size: 1.05rem;">
          ${getIcon('clock', { size: 18 })}
          <span>${siteContent.application.buttonDisabledText}</span>
        </button>
      `;
    }
  }
}

/* ==========================================================================
   10. MEKAN VE ULAŞIM
   ========================================================================== */
function renderVenue() {
  const venueTitle = document.getElementById('venue-name');
  const venueAddress = document.getElementById('venue-address');
  const mapIframe = document.getElementById('map-iframe');
  const transportGrid = document.getElementById('transport-grid');

  if (venueTitle) venueTitle.textContent = siteContent.meta.venueName;
  if (venueAddress) venueAddress.textContent = siteContent.meta.venueFullAddress;
  if (mapIframe) mapIframe.src = siteContent.meta.googleMapsEmbedUrl;

  if (transportGrid) {
    transportGrid.innerHTML = siteContent.venue.transportOptions.map(opt => `
      <div class="transport-card reveal-fade-up">
        <div class="transport-icon">
          ${getIcon(opt.icon, { size: 22 })}
        </div>
        <h3 class="transport-title">${opt.title}</h3>
        <p class="transport-desc">${opt.description}</p>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   11. SSS (ACCORDION)
   ========================================================================== */
function renderFAQ() {
  const faqWrap = document.getElementById('faq-accordion-wrap');
  if (!faqWrap) return;

  faqWrap.innerHTML = siteContent.faq.items.map((item, idx) => `
    <div class="faq-item reveal-fade-up ${idx === 0 ? 'active' : ''}">
      <button class="faq-trigger" aria-expanded="${idx === 0 ? 'true' : 'false'}" aria-controls="faq-desc-${idx}">
        <span>${item.question}</span>
        <span class="faq-icon-arrow">${getIcon('chevron-down', { size: 20 })}</span>
      </button>
      <div class="faq-content" id="faq-desc-${idx}">
        <p>${item.answer}</p>
      </div>
    </div>
  `).join('');

  // Accordion Toggle Olayları
  faqWrap.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parent = trigger.closest('.faq-item');
      const isAlreadyActive = parent.classList.contains('active');

      // Opsiyonel: Diğerlerini kapat
      faqWrap.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
      });

      if (!isAlreadyActive) {
        parent.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   12. SPONSORLAR (Opsiyonel)
   ========================================================================== */
function renderSponsors() {
  const section = document.getElementById('sponsors-section');
  if (!section) return;

  if (!siteContent.sponsors || siteContent.sponsors.length === 0) {
    section.style.display = 'none';
    return;
  }

  const grid = document.getElementById('sponsors-grid');
  if (grid) {
    grid.innerHTML = siteContent.sponsors.map(sp => `
      <div class="sponsor-logo-box reveal-fade-up">
        <img src="${sp.logo}" alt="${sp.name}" loading="lazy" />
      </div>
    `).join('');
  }
}

/* ==========================================================================
   13. FOOTER
   ========================================================================== */
function renderFooter() {
  const quickLinksWrap = document.getElementById('footer-quick-links');
  const footerSocialWrap = document.getElementById('footer-social-wrap');
  const footerContactWrap = document.getElementById('footer-contact-wrap');
  const footerYear = document.getElementById('footer-year');

  if (quickLinksWrap) {
    quickLinksWrap.innerHTML = siteContent.navLinks.map(link => `
      <li><a href="${link.href}">${link.label}</a></li>
    `).join('');
  }

  if (footerSocialWrap) {
    footerSocialWrap.innerHTML = `
      <a href="${siteContent.socialMedia.instagram}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="Instagram">
        ${getIcon('instagram', { size: 20 })}
      </a>
      <a href="${siteContent.socialMedia.tiktok}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="TikTok">
        ${getIcon('tiktok', { size: 20 })}
      </a>
    `;
  }

  if (footerContactWrap) {
    footerContactWrap.innerHTML = `
      <div class="footer-contact-item">
        ${getIcon('mail', { size: 18 })}
        <span>${siteContent.socialMedia.email}</span>
      </div>
      <div class="footer-contact-item">
        ${getIcon('phone', { size: 18 })}
        <span>${siteContent.socialMedia.phone}</span>
      </div>
    `;
  }

  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  const footerVenueNote = document.getElementById('footer-venue-note');
  if (footerVenueNote) {
    footerVenueNote.textContent = `${siteContent.meta.venueName} İş Birliğiyle`;
  }
}

/* ==========================================================================
   14. SCROLL-SPY & AKTİF BÖLÜM
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    desktopLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      if (href === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      if (href === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   15. BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  btn.innerHTML = getIcon('arrow-up', { size: 22 });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   16. SCROLL REVEAL ANİMASYONLARI (AŞAĞIDAN YUKARI FADE IN)
   ========================================================================== */
function initScrollReveal() {
  // Animasyona dahil edilecek tüm yazılar, kutucuklar ve logolar
  const targetSelectors = [
    '.section-header',
    '.about-text-content > p',
    '.about-quote',
    '.why-attend-title',
    '.stat-card',
    '.why-card',
    '.schedule-tabs',
    '.timeline-item',
    '.speaker-card',
    '.speakers-notice-banner',
    '.team-group-title',
    '.gc-card',
    '.director-card',
    '.cta-box',
    '.map-container',
    '.venue-info-card',
    '.transport-title',
    '.transport-card',
    '.faq-item',
    '.sponsor-logo-box',
    '.sponsors-grid > *',
    '.footer-grid > div'
  ];

  // Hedef elemanlara reveal-fade-up sınıfını ekle (Hero hariç)
  targetSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      if (!el.closest('#hero')) {
        el.classList.add('reveal-fade-up');
      }
    });
  });

  const reveals = document.querySelectorAll('.reveal-fade-up:not(.active)');
  if (!reveals.length) return;

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('active'));
    return;
  }

  document.documentElement.classList.add('js-reveal');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => {
    // Sayfa ilk yüklendiğinde halihazırda görünen alandakileri hemen aktif et
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 30 && rect.bottom > 0) {
      el.classList.add('active');
    } else {
      observer.observe(el);
    }
  });

  // Belirli bir bölüme tıklandığında veya hash değiştiğinde o bölümü aktif et
  function activateSectionByHash(hash) {
    if (!hash || hash === '#') return;
    try {
      const targetSec = document.querySelector(hash);
      if (targetSec) {
        targetSec.querySelectorAll('.reveal-fade-up').forEach(el => el.classList.add('active'));
      }
    } catch (_) {}
  }

  if (window.location.hash) {
    activateSectionByHash(window.location.hash);
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      const hash = link.getAttribute('href');
      setTimeout(() => activateSectionByHash(hash), 120);
    });
  });

  window.addEventListener('hashchange', () => activateSectionByHash(window.location.hash));
}

})();
