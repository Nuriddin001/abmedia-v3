/* Numbers, contacts and business facts. Same values as abmedia-site/src/content.rs.
   Only real facts belong here; the journey model is an estimate and the page says so. */
window.ABM_DATA = {
  offer_minutes: 5,
  bonus: {
    en: "2 extra concept options, free",
    es: "2 opciones de concepto extra, gratis",
    ru: "2 дополнительных варианта концепции — бесплатно",
    ar: "خياران إضافيان للفكرة مجانًا"
  },
  contacts: {
    phone: "+1 929 652 4542",
    telegram: {
      en: "https://t.me/abror_bakhtiyarovich_usa",
      es: "https://t.me/abror_bakhtiyarovich_espana",
      ru: "https://t.me/abror_bakhtiyarovich_russia",
      ar: "https://t.me/abror_bakhtiyarovich_arabia"
    },
    instagram: {
      en: "https://www.instagram.com/abror_bakhtiyarovich_usa/",
      es: "https://www.instagram.com/abror_bakhtiyarovich_espana/",
      ru: "https://www.instagram.com/abror_bakhtiyarovich_russia/",
      ar: "https://www.instagram.com/abror_bakhtiyarovich_arabia/"
    },
    youtube: "https://www.youtube.com/@abrorbaxtiyarovich"
  },
  /* Google Apps Script web app that appends each request to the "AB Media — requests" sheet */
  leads_sheet: "https://script.google.com/macros/s/AKfycbxWZGHMbo5I-Xoo1IXqQBDXOIEhqA5vH9dJCIjP1hosAS2u7sFOi700QSIyinG1CxW_Lw/exec",
  /* film shown in the hero chip, then the order of the Work grid */
  featured: "Good Day Cappuccino",
  order: ["Good Day Cappuccino", "Sales Doctor Academy", "Grand Capital", "IMZO", "Yuksalish Choy", "ZO'R TV", "To'xtaniyoz Ota"],
  /* estimated model, per 100 000 people reached: saw, know, trust, bought */
  cjm: {
    base_reach: 100000,
    now: [100000, 12000, 3100, 900],
    film: [100000, 21000, 6400, 1800],
    reach_min: 50000,
    reach_max: 3000000,
    reach_default: 300000
  },
  /* what each working format includes (keys of the "sc" dictionary in i18n.js) */
  formats: [
    ["aud", "pos", "story", "contS"],
    ["aud", "pos", "story", "cont"],
    ["aud", "pos", "story", "cont", "gtm", "run"]
  ]
};
