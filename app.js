const I18N = {
en: {
  "nav.services": "Services",
  "nav.products": "Products",
  "nav.gallery": "Gallery",
  "nav.why": "Why us",
  "nav.faq": "FAQ",
  "nav.reviews": "Reviews",
  "nav.contact": "Contact",
  "nav.call": "504 822-4003",
  "hero.kicker": "New Orleans, Louisiana · Master plumber · BBB A+",
  "hero.title": "A/C & plumbing<br>done right.",
  "hero.sub": "5.0-star Google rating: A/C installation and repair plus master-plumber quality plumbing — serving the New Orleans metro for 30+ years.",
  "hero.cta1": "Book now",
  "hero.cta2": "See services",
  "stats.hoursNum": "Mon – Sat",
  "stats.hours": "Open 6 days a week",
  "stats.makesNum": "5.0",
  "stats.makes": "Google rating",
  "stats.diagNum": "Since 1993",
  "stats.diag": "30+ years of experience",
  "stats.quoteNum": "A+",
  "stats.quote": "BBB accredited rating",
  "services.kicker": "What we do",
  "services.title": "A/C and plumbing, one master team",
  "services.s1t": "A/C installation",
  "services.s1d": "New central A/C systems sized and installed for New Orleans heat.",
  "services.s2t": "A/C repair & maintenance",
  "services.s2d": "Fast A/C repair and seasonal tune-ups to keep you cool.",
  "services.s3t": "Plumbing repairs",
  "services.s3d": "Leaks, clogs and fixtures — master-plumber quality work.",
  "services.s4t": "Drain cleaning",
  "services.s4d": "Stubborn drains cleared with professional equipment.",
  "services.s5t": "Water heaters",
  "services.s5d": "Tank and tankless water heaters repaired and installed.",
  "services.s6t": "Heating & gas service",
  "services.s6d": "Gas inspections, heating repair and system checks for winter.",
  "walkin.w1t": "BBB Accredited A+",
  "walkin.w1d": "Committed to trust standards",
  "walkin.w2t": "Master plumber",
  "walkin.w2d": "30+ years experience",
  "walkin.w3t": "Upfront pricing",
  "walkin.w3d": "Agreed before we start",
  "makes.kicker": "All major brands",
  "makes.title": "We service every brand",
  "makes.sub": "A/C systems and plumbing fixtures from the brands professionals trust.",
  "why.kicker": "Why choose us",
  "why.title": "New Orleans' master plumber",
  "why.intro": "A master licensed plumber with 30+ years of experience, BBB accredited with an A+ rating. When it matters, you want the master — not the apprentice.",
  "why.l1t": "Master plumber",
  "why.l1d": "Calvin Magee — master licensed plumber with 30+ years of experience.",
  "why.l2t": "BBB A+ accredited",
  "why.l2d": "Committed to the BBB Standards for Trust.",
  "why.l3t": "A/C + plumbing in one",
  "why.l3d": "One call for your cooling and your pipes.",
  "why.l4t": "Upfront pricing",
  "why.l4d": "You approve the price before any work begins.",
  "products.kicker": "We install",
  "products.title": "Quality equipment we trust",
  "products.sub": "The same quality equipment we install every day — ask us what's right for your home.",
  "products.p1t": "A/C systems",
  "products.p1d": "High-efficiency central air systems sized for your home.",
  "products.p2t": "Water heaters",
  "products.p2d": "Tank and tankless models sized right for your household.",
  "products.p3t": "Smart thermostats",
  "products.p3d": "Save energy with a professionally installed smart thermostat.",
  "products.note": "Call us to ask about equipment options for your home.",
  "products.cta": "Call to ask",
  "gallery.kicker": "On the job",
  "gallery.title": "Professional work, every time",
  "gallery.c1": "A/C service by experienced technicians",
  "gallery.c2": "New A/C installation in New Orleans",
  "gallery.c3": "Neat, professional pipe work",
  "reviews.kicker": "Word on the street",
  "reviews.title": "Rated 5.0 on Google",
  "reviews.more": "<strong>5.0 rating · Google reviews</strong> &mdash; see what customers say",
  "faq.kicker": "Good to know",
  "faq.title": "Frequently asked questions",
  "faq.q1": "Do you do both A/C and plumbing?",
  "faq.a1": "Yes — air conditioning installation, repair and maintenance, plus full plumbing service from a master plumber.",
  "faq.q2": "Are you licensed?",
  "faq.a2": "Yes — a master licensed plumber with over 30 years of experience, and BBB accredited with an A+ rating.",
  "faq.q3": "How fast can you come out?",
  "faq.a3": "Call (504) 822-4003 — we'll get you scheduled at the earliest available slot.",
  "faq.q4": "What are your hours?",
  "faq.a4": "Monday to Friday 8:00 AM to 6:00 PM, Saturday 8:00 AM to 12:00 PM. Closed Sundays.",
  "contact.kicker": "Come see us",
  "contact.title": "Book your visit",
  "contact.addr": "Address",
  "contact.phone": "Phone",
  "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 8:00 AM – 6:00 PM<br>Sat: 8:00 AM – 12:00 PM<br>Sun: closed",
  "contact.cta": "Call now to book",
  "promo.kicker": "Beat the heat",
  "promo.title": "A/C tune-up before the heat",
  "promo.text": "New Orleans summers are brutal on air conditioners — a seasonal tune-up keeps you cool and your energy bills down.",
  "promo.cta": "Schedule your tune-up",
  "footer.tag": "Master plumbing & A/C · New Orleans, Louisiana"
}
};

let lang = "en";

function applyLang(l) {
  lang = l;
  localStorage.setItem("demo-lang", l);
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[l][key];
    if (val !== undefined) el.innerHTML = val;
  });
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang(lang);
