export type Lang = "en" | "ar" | "fr" | "de";
export type Theme = "system" | "light" | "dark";

export const langMeta: Record<Lang, { label: string; dir: "ltr" | "rtl"; flag: string }> = {
  en: { label: "English", dir: "ltr", flag: "🇬🇧" },
  ar: { label: "العربية", dir: "rtl", flag: "🇸🇦" },
  fr: { label: "Français", dir: "ltr", flag: "🇫🇷" },
  de: { label: "Deutsch", dir: "ltr", flag: "🇩🇪" },
};

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    contact: "Contact",
    heroTitle1: "Intelligence,",
    heroTitle2: "Specialized.",
    heroDesc:
      "We don't build general-purpose AI. We build systems that master specific domains — understanding the rules, the context, and the stakes that matter.",
    featuredProduct: "Featured Product",
    saudiJudge: "القاضي السعودي",
    featuredDesc:
      "AI-powered legal judgment prediction for the Saudi legal system. Provide a case and receive a predicted ruling with full reasoning.",
    trySaudiJudge: "Try Saudi Judge",
    getInTouch: "Get in Touch",
    contactDesc:
      "Interested in our products or want to explore a partnership? We'd love to hear from you.",
    tagline: "Intelligence, Specialized.",
    settings: "Settings",
    language: "Language",
    theme: "Theme",
    themeLight: "Light",
    themeDark: "Dark",
    themeSystem: "System",
  },
  ar: {
    contact: "تواصل معنا",
    heroTitle1: "ذكاء",
    heroTitle2: "متخصص.",
    heroDesc:
      "نحن لا نبني ذكاءً اصطناعياً عاماً. نبني أنظمة تتقن مجالات محددة — تفهم القواعد والسياق والمخاطر التي تهم.",
    featuredProduct: "المنتج المميز",
    saudiJudge: "القاضي السعودي",
    featuredDesc:
      "توقع أحكام قضائية مدعوم بالذكاء الاصطناعي للنظام القانوني السعودي. قدّم قضية واحصل على حكم متوقع مع التسبيب الكامل.",
    trySaudiJudge: "جرّب القاضي السعودي",
    getInTouch: "تواصل معنا",
    contactDesc:
      "مهتم بمنتجاتنا أو ترغب في استكشاف شراكة؟ يسعدنا سماع رأيك.",
    tagline: "ذكاء متخصص.",
    settings: "الإعدادات",
    language: "اللغة",
    theme: "المظهر",
    themeLight: "فاتح",
    themeDark: "داكن",
    themeSystem: "النظام",
  },
  fr: {
    contact: "Contact",
    heroTitle1: "Intelligence,",
    heroTitle2: "Spécialisée.",
    heroDesc:
      "Nous ne construisons pas d'IA généraliste. Nous créons des systèmes qui maîtrisent des domaines spécifiques — comprenant les règles, le contexte et les enjeux qui comptent.",
    featuredProduct: "Produit Vedette",
    saudiJudge: "القاضي السعودي",
    featuredDesc:
      "Prédiction de jugements juridiques alimentée par l'IA pour le système juridique saoudien. Soumettez une affaire et recevez un verdict prédit avec un raisonnement complet.",
    trySaudiJudge: "Essayer Saudi Judge",
    getInTouch: "Contactez-nous",
    contactDesc:
      "Intéressé par nos produits ou souhaitez explorer un partenariat ? Nous serions ravis de vous entendre.",
    tagline: "Intelligence, Spécialisée.",
    settings: "Paramètres",
    language: "Langue",
    theme: "Thème",
    themeLight: "Clair",
    themeDark: "Sombre",
    themeSystem: "Système",
  },
  de: {
    contact: "Kontakt",
    heroTitle1: "Intelligenz,",
    heroTitle2: "Spezialisiert.",
    heroDesc:
      "Wir bauen keine allgemeine KI. Wir entwickeln Systeme, die bestimmte Bereiche beherrschen — die Regeln, den Kontext und die Risiken verstehen, die zählen.",
    featuredProduct: "Hervorgehobenes Produkt",
    saudiJudge: "القاضي السعودي",
    featuredDesc:
      "KI-gestützte Urteilsprognose für das saudische Rechtssystem. Reichen Sie einen Fall ein und erhalten Sie ein prognostiziertes Urteil mit vollständiger Begründung.",
    trySaudiJudge: "Saudi Judge testen",
    getInTouch: "Kontaktieren Sie uns",
    contactDesc:
      "Interessiert an unseren Produkten oder möchten Sie eine Partnerschaft erkunden? Wir freuen uns von Ihnen zu hören.",
    tagline: "Intelligenz, Spezialisiert.",
    settings: "Einstellungen",
    language: "Sprache",
    theme: "Design",
    themeLight: "Hell",
    themeDark: "Dunkel",
    themeSystem: "System",
  },
};
