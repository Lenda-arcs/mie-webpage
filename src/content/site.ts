// ╔══════════════════════════════════════════════════════════════╗
// ║  INHALTE DER WEBSITE – hier kannst du ALLES bearbeiten.        ║
// ║  Ändere nur den Text zwischen den "Anführungszeichen".         ║
// ║  Bitte Anführungszeichen und Kommas stehen lassen. :)          ║
// ╚══════════════════════════════════════════════════════════════╝

export const site = {
  // Name oben links + im Footer
  name: "Mie Lene Heesch",

  // Foto im Hero (rund). Datei liegt in /public/ -> z.B. "/mie.jpg"
  heroImage: "/mie.jpg",
  heroImageAlt: "Mie Lene Heesch",

  // ── HERO ───────────────────────────────────────────────
  hero: {
    kicker: "Ernährung. Wissen. Worte.",
    headline: "Hey, ich bin Mie.",
    intro: "Ich schreibe über Ernährung, die wirkt – verständlich, fundiert und mit Herz.",
  },

  // ── WAS ICH MACHE (3 Leistungen) ───────────────────────
  services: [
    {
      title: "Themenentwicklung und Content-Strategie",
      text: "Beschreibung der Leistung – was du genau anbietest.",
    },
    {
      title: "Redaktion und Texterstellung",
      text: "Beschreibung der Leistung – was du genau anbietest.",
    },
    {
      title: "Content-Überarbeitung und Qualitätssicherung",
      text: "Beschreibung der Leistung – was du genau anbietest.",
    },
  ],

  // ── ÜBER MICH ───────────────────────────────────────────
  about: {
    title: "Über mich",
    text: "Hey. Ich bin Mie, Ernährungswissenschaftlerin und arbeite seit über 9 Jahren freiberuflich im Content-Bereich. Hier kommt dein längerer Text über dich, deinen Werdegang und was dich antreibt.",
  },

  // ── MEINE ARBEIT (Arbeitsproben, große Karten + Detailseite) ──
  // slug   = Teil der URL der Detailseite, z.B. "app-content" -> /arbeit/app-content
  // tag    = kleines Label oben (z.B. Format/Kunde)
  // title  = Beschreibung der Arbeit
  // image  = Vorschaubild in /public/work/, z.B. "/work/app.jpg"
  // ── Detailseite ──
  // client / year / role = Meta-Infos oben auf der Detailseite (leer lassen = ausgeblendet)
  // intro  = Einleitungstext
  // blocks = Inhalt der Detailseite (von oben nach unten):
  //          { type: "text",  value: "..." }                       -> Absatz
  //          { type: "image", src: "/work/...jpg", caption: "..." } -> Bild mit optionaler Bildunterschrift
  work: [
    {
      slug: "app-content",
      tag: "App Content",
      title: "Tägliche Ernährungs-Tipps für die XY-App",
      image: "",
      client: "XY Health App",
      year: "2024",
      role: "Redaktion & Content-Strategie",
      intro: "Kurze Einleitung zum Projekt – worum ging es und was war meine Rolle?",
      blocks: [
        { type: "text", value: "Hier beschreibst du den Hintergrund des Projekts und die Aufgabe." },
        { type: "image", src: "", caption: "Beispiel-Screenshot aus der App" },
        { type: "text", value: "Ergebnis und was du daraus mitgenommen hast." },
      ],
    },
    {
      slug: "gesundheitsmagazin",
      tag: "Blog Post",
      title: "Langtext-Redaktion für ein Gesundheitsmagazin",
      image: "",
      client: "Women's Health",
      year: "2023",
      role: "Redaktion",
      intro: "Kurze Einleitung zum Projekt.",
      blocks: [
        { type: "text", value: "Beschreibung des Projekts." },
        { type: "image", src: "", caption: "" },
      ],
    },
    {
      slug: "seo-ratgeber",
      tag: "Blog Post",
      title: "SEO-Ratgeber rund um bewusste Ernährung",
      image: "",
      client: "",
      year: "2023",
      role: "Texterstellung",
      intro: "Kurze Einleitung zum Projekt.",
      blocks: [{ type: "text", value: "Beschreibung des Projekts." }],
    },
    {
      slug: "content-strategie",
      tag: "Redaktion",
      title: "Content-Strategie & Themenplanung für einen Kunden",
      image: "",
      client: "",
      year: "2022",
      role: "Content-Strategie",
      intro: "Kurze Einleitung zum Projekt.",
      blocks: [{ type: "text", value: "Beschreibung des Projekts." }],
    },
  ],

  // ── AUSGEWÄHLTE KUNDEN ───────────────────────────────────
  // Logo: Datei in /public/logos/ ablegen, z.B. "/logos/edeka.svg"
  // Wenn kein Logo (image: ""), wird der Name als Text gezeigt.
  clients: [
    { name: "EDEKA", image: "", url: "" },
    { name: "Women's Health", image: "", url: "" },
    { name: "Kunde 3", image: "", url: "" },
    { name: "Kunde 4", image: "", url: "" },
  ],

  // ── KONTAKT ──────────────────────────────────────────────
  contact: {
    title: "Kontakt",
    subtitle: "Ich freue mich, von dir zu hören.",
    // Web3Forms Access Key (kostenlos auf web3forms.com holen) – Mails gehen an deine Adresse.
    web3formsKey: "DEIN-WEB3FORMS-ACCESS-KEY",
  },

  // ── FOOTER ───────────────────────────────────────────────
  footer: {
    linkedin: "https://www.linkedin.com/in/...",
    email: "mail@mie-heesch.de",
  },
} as const;
