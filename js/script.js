/* ============================================================
   script.js — sticky nav, scroll reveal, skill bars, 3D tilt
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Sticky nav on scroll (throttled with rAF) ----------
  const nav = document.querySelector('.site-nav');
  if (nav) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          nav.classList.toggle('scrolled', window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ---------- Scroll reveal (fade-in / reveal / stagger) ----------
  const revealTargets = document.querySelectorAll('.reveal, .fade-in, .reveal-stagger');
  if (prefersReducedMotion) {
    // Skip the animation entirely — just show content in its final state.
    revealTargets.forEach(el => el.classList.add('in-view'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target); // animate once
        }
      });
    }, { threshold: 0.15 });
    revealTargets.forEach(el => revealObserver.observe(el));
  }

  // ---------- Animated skill progress bars ----------
  const bars = document.querySelectorAll('.bar-fill');
  if (prefersReducedMotion) {
    bars.forEach(el => el.classList.add('in-view'));
  } else {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(el => barObserver.observe(el));
  }

  // ---------- 3D tilt effect ----------
  // Single implementation covering .tilt-card AND the card types that used to
  // have a second, conflicting handler (.project-card, .skill-card, .exp-card).
  // Skipped entirely for prefers-reduced-motion users.
  if (!prefersReducedMotion) {
    const tiltCards = document.querySelectorAll('.tilt-card, .project-card, .skill-card, .exp-card');

    tiltCards.forEach(card => {
      const inner = card.querySelector('.tilt-card-inner') || card;
      const maxTilt = 8; // degrees
      let rafId = null;

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();

        // Guard against zero-size elements (e.g. hidden/collapsed at time of
        // measurement) — avoids NaN/Infinity transforms.
        if (rect.width === 0 || rect.height === 0) return;

        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          inner.style.transform =
            `perspective(1000px) rotateX(${(-y * maxTilt).toFixed(2)}deg) rotateY(${(x * maxTilt).toFixed(2)}deg)`;
          rafId = null;
        });
      });

      card.addEventListener('mouseleave', () => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        // Clear the inline style instead of setting it to 0deg/0deg — this lets
        // the CSS :hover rules (e.g. translateY lift) take effect normally again.
        inner.style.transform = '';
      });
    });
  }

});

emailjs.init("lJxqtnEv1vikaTQFb");

document.getElementById("contactForm").addEventListener("submit", function (e) {

  e.preventDefault();

  emailjs.send("service_mwrndro", "template_zouenxn", {

    from_name: document.getElementById("cfName").value,

    from_email: document.getElementById("cfEmail").value,

    subject: document.getElementById("cfSubject").value,

    message: document.getElementById("cfMessage").value

  }).then(function () {

    alert("Message sent successfully!");

    document.getElementById("contactForm").reset();

  }).catch(function (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send message. Check the browser console (F12).");

  });

});
/* ====================================
   Animated Statistics Counter
==================================== */
/* =========================
   Animated Statistics
========================= */

const counters = document.querySelectorAll(".stat-num");

const counterObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const counter = entry.target;

      // Read value from data-target, otherwise use current text
      const target = parseFloat(
        counter.getAttribute("data-target") || counter.textContent
      );

      // Stop if target is invalid
      if (isNaN(target)) return;

      let current = 0;
      const increment = target / 100;

      function updateCounter() {

        if (current < target) {

          current += increment;

          if (current > target) current = target;

          if (target % 1 !== 0) {
            counter.textContent = current.toFixed(2);
          } else {
            counter.textContent = Math.floor(current);
          }

          requestAnimationFrame(updateCounter);

        } else {

          if (target % 1 !== 0) {
            counter.textContent = target.toFixed(2);
          } else {
            counter.textContent = target;
          }

        }
      }

      updateCounter();

      counterObserver.unobserve(counter);

    }

  });

}, {
  threshold: 0.5
});

counters.forEach(counter => {
  counterObserver.observe(counter);
});
const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

if (dot && outline) {

    document.addEventListener("mousemove", (e) => {

        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";

        outline.style.left = e.clientX + "px";
        outline.style.top = e.clientY + "px";

    });

    document.querySelectorAll("a, button").forEach(item => {

        item.addEventListener("mouseenter", () => {
            outline.style.transform = "translate(-50%, -50%) scale(1.6)";
        });

        item.addEventListener("mouseleave", () => {
            outline.style.transform = "translate(-50%, -50%) scale(1)";
        });

    });

}
/*=========================
   Timeline Animation
=========================*/

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {
  threshold: 0.2
});

timelineItems.forEach(item => {

  timelineObserver.observe(item);

});