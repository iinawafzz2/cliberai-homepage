export type Lang = "en" | "ar" | "fr" | "de" | "ja" | "zh" | "ko";
export type Theme = "system" | "light" | "dark";

export const langMeta: Record<Lang, { label: string; dir: "ltr" | "rtl"; flag: string }> = {
  en: { label: "English", dir: "ltr", flag: "🇬🇧" },
  ar: { label: "العربية", dir: "rtl", flag: "🇸🇦" },
  fr: { label: "Français", dir: "ltr", flag: "🇫🇷" },
  de: { label: "Deutsch", dir: "ltr", flag: "🇩🇪" },
  ja: { label: "日本語", dir: "ltr", flag: "🇯🇵" },
  zh: { label: "中文", dir: "ltr", flag: "🇨🇳" },
  ko: { label: "한국어", dir: "ltr", flag: "🇰🇷" },
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
  ja: {
    contact: "お問い合わせ",
    heroTitle1: "知能、",
    heroTitle2: "専門化。",
    heroDesc:
      "私たちは汎用AIを作りません。特定の分野を極めるシステムを構築します——ルール、文脈、そして重要なリスクを理解するシステムを。",
    featuredProduct: "注目の製品",
    saudiJudge: "القاضي السعودي",
    featuredDesc:
      "サウジアラビアの法制度向けAI搭載法的判決予測。事案を提出すると、完全な理由付けとともに予測判決を受け取れます。",
    trySaudiJudge: "Saudi Judgeを試す",
    getInTouch: "お問い合わせ",
    contactDesc:
      "当社の製品にご興味がありますか、またはパートナーシップをご検討ですか？ぜひご連絡ください。",
    tagline: "知能、専門化。",
    settings: "設定",
    language: "言語",
    theme: "テーマ",
    themeLight: "ライト",
    themeDark: "ダーク",
    themeSystem: "システム",
  },
  zh: {
    contact: "联系我们",
    heroTitle1: "智能，",
    heroTitle2: "专业化。",
    heroDesc:
      "我们不构建通用人工智能。我们构建精通特定领域的系统——理解规则、上下文和重要的风险。",
    featuredProduct: "特色产品",
    saudiJudge: "القاضي السعودي",
    featuredDesc:
      "面向沙特法律体系的AI驱动法律判决预测。提交案件即可获得附有完整推理的预测裁决。",
    trySaudiJudge: "试用 Saudi Judge",
    getInTouch: "联系我们",
    contactDesc:
      "对我们的产品感兴趣或想探索合作？我们期待您的来信。",
    tagline: "智能，专业化。",
    settings: "设置",
    language: "语言",
    theme: "主题",
    themeLight: "浅色",
    themeDark: "深色",
    themeSystem: "系统",
  },
  ko: {
    contact: "문의하기",
    heroTitle1: "지능,",
    heroTitle2: "전문화.",
    heroDesc:
      "우리는 범용 AI를 만들지 않습니다. 특정 분야를 마스터하는 시스템을 구축합니다 — 규칙, 맥락, 그리고 중요한 위험을 이해하는 시스템을.",
    featuredProduct: "주요 제품",
    saudiJudge: "القاضي السعودي",
    featuredDesc:
      "사우디 법률 시스템을 위한 AI 기반 법적 판결 예측. 사건을 제출하면 완전한 추론과 함께 예측 판결을 받을 수 있습니다.",
    trySaudiJudge: "Saudi Judge 체험하기",
    getInTouch: "연락처",
    contactDesc:
      "저희 제품에 관심이 있으시거나 파트너십을 탐색하고 싶으신가요? 연락을 기다리겠습니다.",
    tagline: "지능, 전문화.",
    settings: "설정",
    language: "언어",
    theme: "테마",
    themeLight: "라이트",
    themeDark: "다크",
    themeSystem: "시스템",
  },
};
