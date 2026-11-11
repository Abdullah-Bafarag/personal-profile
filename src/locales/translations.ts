import type { Direction, Language } from '@/types';

/**
 * Base English translation dictionary.
 * All keys and nested objects define the canonical contract for the portfolio's localized content.
 */
export const en = {
  common: {
    language: 'Language',
    switchLanguage: 'عربي',
    name: 'Abdullah Bafarag',
    theme: {
      light: 'Light Mode',
      dark: 'Dark Mode',
      toggle: 'Switch theme',
    },
    loading: 'Loading...',
    copied: 'Copied to clipboard!',
    copy: 'Copy to clipboard',
    viewAll: 'View All',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    cta: "Let's Talk",
    toggleMenu: 'Toggle Navigation Menu',
    switchTheme: 'Toggle color scheme',
  },
  hero: {
    badge: 'Available for engineering roles & consulting',
    greeting: "Hi, I'm ",
    role: 'Software Developer | Web & Mobile Developer',
    headline: 'Crafting modern, responsive web applications and cross-platform mobile solutions.',
    bio: "Computer Science graduate from Sana'a University (GPA: 83%). Passionate about engineering clean, performant web and mobile applications with React.js, Flutter, Node js, Astro.js, and the Express js Framework.",
    ctaProjects: 'View Projects',
    ctaContact: 'Get In Touch',
    ctaWhatsapp: 'WhatsApp',
    connectLabel: 'Connect:',
  },
  about: {
    badge: 'About Me',
    title: 'Engineering for clarity, resilience, and speed.',
    description: 'A look into my background, architectural perspective, and how I approach modern software development.',
    principlesTitle: 'Engineering Principles & Work Style',
    paragraphs: [
      "I am a passionate Software Developer based in Yemen, holding a Bachelor of Science in Computer Science from Sana'a University with a GPA of 83%. I specialize in web and mobile application development, building clean, resilient, and user-centric software solutions.",
      'My technical repertoire includes JavaScript, TypeScript, React.js, Astro.js, Bootstrap and Flutter. Whether developing real-time chat applications, or interactive analytics dashboards, I emphasize clean architecture, modularity, and smooth user experiences.',
      'I am fluent in Arabic (Native) and proficient in English (Very Good). I enjoy taking on challenging problems, designing scalable database structures, and translating complex requirements into reliable, production-grade applications.',
    ],
    principles: [
      {
        title: 'Clean Architecture',
        description: 'Writing maintainable, modular, and well-structured code adhering to modern OOP and clean design principles.',
        icon: 'layers' as const,
      },
      {
        title: 'Web & Mobile Synergy',
        description: 'Building responsive, high-performance web frontends with React and native-feel mobile apps with Flutter.',
        icon: 'code' as const,
      },
      {
        title: 'Reliable Systems',
        description: 'Developing robust backend integrations with RESTful APIs, secure data handling, and relational databases.',
        icon: 'cpu' as const,
      },
      {
        title: 'Continuous Growth',
        description: 'Constantly exploring modern frameworks, performance optimizations, and agile software development workflows.',
        icon: 'zap' as const,
      },
    ],
    highlights: {
      education: 'Education',
      educationVal: 'B.Sc.',
      educationDesc: "Computer Science, Sana'a University (GPA: 83%)",
      focus: 'Core Focus',
      focusVal: 'Web & Mobile',
      focusDesc: 'React.js, Flutter, Node js & Express js Framework',
      languages: 'Languages',
      languagesVal: 'Bilingual',
      languagesDesc: 'Arabic (Native) & English (Very Good)',
    },
  },
  skills: {
    badge: 'Technical Stack',
    title: 'Technologies & Architecture Tools',
    description: 'A curated ecosystem of battle-tested languages, frameworks, databases, and infrastructure tools I use to build scalable products.',
    coreToolsSuffix: 'core tools',
    productionReady: 'Production Ready',
    categories: {
      layout: {
        name: 'Frontend & Mobile Development',
        description: 'Modern, component-driven web interfaces and cross-platform mobile applications.',
      },
      server: {
        name: 'Backend & Enterprise Frameworks',
        description: 'Server-side logic, enterprise frameworks, API integrations, and database architectures.',
      },
      wrench: {
        name: 'Tools, DevOps & Platforms',
        description: 'Version control, development environments, API testing, and deployment platforms.',
      },
    },
  },
  projects: {
    badge: 'Featured Work',
    title: 'Engineered for impact and scale.',
    description: 'A selection of software systems and web platforms demonstrating full-stack engineering, real-time collaboration, and architecture design.',
    exploreGithub: 'Explore all repositories on GitHub',
    liveDemo: 'Live Demo',
    sourceCode: 'Source Code',
    items: {
      'academic-attendance-management-system': {
        title: 'Academic Attendance Management System',
        description:
          'A comprehensive student and academic attendance management system developed as a university graduation project using the Express js Framework. Features lecture attendance tracking, automated student absence calculation, administrative reporting, and role-based access control.',
      },
      'real-time-chat-application': {
        title: 'Real-Time Chat Application',
        description:
          'A cross-platform mobile messaging application engineered with Flutter. Delivers instantaneous real-time messaging, user authentication, direct chat rooms, online status tracking, and state management for a responsive mobile experience.',
      },
      'weather-forecast-dashboard': {
        title: '5-Day Weather Forecast Dashboard',
        description:
          'An interactive weather forecasting dashboard built with React.js that consumes the Open-Meteo REST API. Provides dynamic 5-day weather projections, temperature fluctuations, wind metrics, humidity details, and location-based weather tracking.',
      },
      'todo-task-management-app': {
        title: 'To-Do Task Management Application',
        description:
          'A productivity and task management web application crafted with React.js and local storage persistence. Enables users to organize tasks with priority levels, due dates, completion filtering, and persistent state across browser sessions.',
      },
      'personal-developer-portfolio': {
        title: 'Personal Developer Portfolio',
        description:
          'A clean, modern, and fully responsive developer portfolio built with React.js, TypeScript, and Tailwind CSS. Features dynamic Light/Dark theme switching, decoupled configuration architecture, and continuous deployment via Vercel.',
      },
    },
  },
  contact: {
    badge: 'Get In Touch',
    title: "Let's build something exceptional together.",
    description: 'Whether you have an upcoming project, a full-time engineering opportunity, or just want to discuss software architecture, reach out directly.',
    optionsTitle: 'Direct Contact Options',
    formTitle: 'Send a Direct Message',
    formSubtitle: "Fill in your details below and I'll get back to you within 24 hours.",
    formName: 'Your Name',
    formEmail: 'Your Email',
    formMessage: 'Message',
    placeholderName: 'Your full name',
    placeholderEmail: 'your.email@example.com',
    placeholderMessage: 'Tell me about your project, timeline, and goals...',
    sendButton: 'Send Message',
    messagePrepared: 'Message Prepared!',
    messagePreparedDesc: 'Your email client has been opened with your inquiry. You can also chat on WhatsApp for faster response.',
    sendAnother: 'Send another message',
    actions: {
      call: 'Call',
      message: 'Message',
      sendEmail: 'Send Email',
      viewRepos: 'View Repos',
      connect: 'Connect',
    },
  },
  footer: {
    copyright: 'All rights reserved.',
    builtWith: 'Built with React, TypeScript & Tailwind CSS',
    location: 'Yemen (Open to Remote Opportunities)',
  },
};

/**
 * Translation schema type derived directly from the canonical English dictionary.
 */
export type TranslationSchema = typeof en;

/**
 * Alias for TranslationSchema for developer convenience.
 */
export type Translation = TranslationSchema;

/**
 * Arabic translation dictionary adhering strictly to the base English TranslationSchema
 * ensuring 100% structural and type parity.
 */
export const ar: TranslationSchema = {
  common: {
    language: 'اللغة',
    switchLanguage: 'English',
    name: 'عبدالله بافرج',
    theme: {
      light: 'الوضع الفاتح',
      dark: 'الوضع الداكن',
      toggle: 'تبديل المظهر',
    },
    loading: 'جاري التحميل...',
    copied: 'تم النسخ إلى الحافظة!',
    copy: 'نسخ إلى الحافظة',
    viewAll: 'عرض الكل',
  },
  nav: {
    about: 'عنّي',
    skills: 'المهارات',
    projects: 'المشاريع',
    contact: 'تواصل معي',
    cta: 'لنبدأ الحديث',
    toggleMenu: 'تبديل القائمة',
    switchTheme: 'تبديل المظهر',
  },
  hero: {
    badge: 'متاح لفرص العمل البرمجية والاستشارات',
    greeting: 'مرحباً، أنا',
    role: 'مطوّر برمجيات | مطوّر ويب وتطبيقات هواتف',
    headline: 'أبني تطبيقات ويب حديثة ومتجاوبة وحلول هواتف ذكية عابرة للمنصات.',
    bio: 'خريج بكالوريوس علوم حاسوب من جامعة صنعاء (بمعدل 83%). شغوف بتطوير تطبيقات ويب وهواتف ذكية نظيفة وعالية الأداء باستخدام React.js و Flutter و Node js و Astro.js وإطار عمل Express js.',
    ctaProjects: 'استعراض المشاريع',
    ctaContact: 'تواصل معي',
    ctaWhatsapp: 'واتساب',
    connectLabel: 'تواصل عبر:',
  },
  about: {
    badge: 'نبذة عنّي',
    title: 'هندسة برمجية توازن بين الوضوح، والمرونة، والسرعة.',
    description: 'نظرة على مساري البرمجي، ومنهجيتي في التصميم المعماري، وأسلوبي في تطوير البرمجيات الحديثة.',
    principlesTitle: 'المبادئ الهندسية وأسلوب العمل',
    paragraphs: [
      'أنا مطوّر برمجيات متحمس مقيم في اليمن، أحمل درجة البكالوريوس في علوم الحاسوب من جامعة صنعاء بمعدل 83%. أتخصص في تطوير تطبيقات الويب والهواتف الذكية، وأبني حلولاً برمجية نظيفة وقابلة للتوسع تضع تجربة المستخدم في مقدمة الأولويات.',
      'خبرتي التقنية تشمل JavaScript و TypeScript و React.js و Astro.js و Bootstrap و Flutter. سواء أكان ذلك في تطوير تطبيقات المحادثة الفورية أو لوحات التحليلات التفاعلية، أحرص دائماً على البنية المعمارية النظيفة، والتصميم المُعياري، وسلاسة تجربة المستخدم.',
      'أتقن اللغة العربية كلغة أم، ولديّ مستوى جيد جداً في اللغة الإنجليزية. أستمتع بالتعامل مع المسائل المعقدة، وتصميم هياكل قواعد البيانات القابلة للتوسع، وترجمة المتطلبات المعقدة إلى تطبيقات موثوقة وجاهزة للإنتاج.',
    ],
    principles: [
      {
        title: 'البنية المعمارية النظيفة',
        description: 'كتابة كود قابل للصيانة، ومُعياري، ومُهيكل بشكل جيد وفق مبادئ البرمجة كائنية التوجه وأفضل معايير التصميم.',
        icon: 'layers' as const,
      },
      {
        title: 'تكامل الويب والموبايل',
        description: 'بناء واجهات ويب متجاوبة وعالية الأداء باستخدام React، وتطبيقات هواتف ذكية بتجربة أصيلة باستخدام Flutter.',
        icon: 'code' as const,
      },
      {
        title: 'أنظمة موثوقة',
        description: 'تطوير تكاملات خلفية متينة مع RESTful APIs، ومعالجة آمنة للبيانات، وتصميم محكم لقواعد البيانات العلائقية.',
        icon: 'cpu' as const,
      },
      {
        title: 'التطوير المستمر',
        description: 'استكشاف مستمر للأطر البرمجية الحديثة، وتحسينات الأداء، ومنهجيات التطوير الرشيق.',
        icon: 'zap' as const,
      },
    ],
    highlights: {
      education: 'التعليم',
      educationVal: 'بكالوريوس',
      educationDesc: 'علوم حاسوب، جامعة صنعاء (معدل: 83%)',
      focus: 'المجال الأساسي',
      focusVal: 'ويب وموبايل',
      focusDesc: 'React.js و Flutter و Node js وإطار Express js',
      languages: 'اللغات',
      languagesVal: 'ثنائي اللغة',
      languagesDesc: 'العربية (اللغة الأم) والإنجليزية (جيد جداً)',
    },
  },
  skills: {
    badge: 'المهارات والتقنيات',
    title: 'التقنيات والأدوات الهندسية',
    description: 'مجموعة مختارة من لغات البرمجة وأطر العمل وقواعد البيانات وأدوات البنية التحتية لبناء برمجيات قابلة للتوسع.',
    coreToolsSuffix: 'أدوات أساسية',
    productionReady: 'جاهزة للإنتاج',
    categories: {
      layout: {
        name: 'تطوير واجهات الويب وتطبيقات الموبايل',
        description: 'واجهات ويب حديثة قائمة على المكونات وتطبيقات هواتف ذكية عابرة للمنصات بأعلى معايير التجاوب.',
      },
      server: {
        name: 'الأنظمة الخلفية وأطر العمل المتقدمة',
        description: 'منطق الخوادم، وأطر العمل المؤسسية، وتكامل واجهات RESTful APIs، وبناء هياكل قواعد البيانات المترابطة.',
      },
      wrench: {
        name: 'الأدوات، والمنصات، وبيئات التطوير',
        description: 'إدارة الإصدارات والتحكم بالأكواد، وبيئات التطوير المتكاملة، واختبار الـ APIs، ومنصات النشر السحابي.',
      },
    },
  },
  projects: {
    badge: 'أبرز الأعمال',
    title: 'مشاريع صُممت لتحدث أثراً وتواكب التوسع.',
    description: 'مجموعة من الأنظمة البرمجية وتطبيقات الويب والموبايل التي تبرز كفاءة التطوير الشامل، والتفاعل الفوري، وجودة البناء المعماري.',
    exploreGithub: 'استكشاف جميع المستودعات على GitHub',
    liveDemo: 'معاينة حية',
    sourceCode: 'الكود المصدري',
    items: {
      'academic-attendance-management-system': {
        title: 'نظام إدارة الحضور الأكاديمي',
        description:
          'نظام شامل لإدارة حضور الطلاب والعملية الأكاديمية تم تطويره كمشروع تخرج جامعي باستخدام إطار عمل Express js. يتميز بتتبع حضور المحاضرات، واحتساب نسب غياب الطلاب آلياً، واستخراج التقارير الإدارية، وإدارة صلاحيات المستخدمين حسب الأدوار.',
      },
      'real-time-chat-application': {
        title: 'تطبيق محادثة فورية',
        description:
          'تطبيق مراسلة فورية للهواتف الذكية عابر للمنصات تم بناؤه باستخدام Flutter. يتيح المراسلة الفورية بالوقت الحقيقي، وتوثيق المستخدمين، وغرف المحادثة المباشرة، وتتبع حالة الاتصال، مع إدارة احترافية للحالة لتوفير تجربة مستخدم سلسة.',
      },
      'weather-forecast-dashboard': {
        title: 'لوحة توقعات الطقس لخمسة أيام',
        description:
          'لوحة تفاعلية لتوقعات الطقس مبنية باستخدام React.js تتكامل مع واجهة برمجة تطبيقات Open-Meteo REST API. توفر توقعات تفاعلية للطقس لـ 5 أيام، وتقلبات درجات الحرارة، وسرعة الرياح، ومستويات الرطوبة، مع إمكانية التتبع بناءً على الموقع الجغرافي.',
      },
      'todo-task-management-app': {
        title: 'تطبيق إدارة المهام (To-Do)',
        description:
          'تطبيق ويب لزيادة الإنتاجية وإدارة المهام اليومية تم تطويره باستخدام React.js مع حفظ البيانات محلياً (Local Storage). يتيح تنظيم المهام حسب مستويات الأولوية وتواريخ الإنجاز، وفلترة المهام المكتملة، مع الحفاظ على البيانات عبر جلسات المتصفح.',
      },
      'personal-developer-portfolio': {
        title: 'معرض الأعمال البرمجية الشخصي',
        description:
          'موقع بورتفوليو احترافي ومتجاوب تم تصميمه وتطويره باستخدام React.js و TypeScript و Tailwind CSS. يدعم التبديل السلس بين الوضع الفاتح والداكن، وتعدد اللغات، مع بنية معمارية منفصلة للبيانات ونشر مستمر على منصة Vercel.',
      },
    },
  },
  contact: {
    badge: 'تواصل معي',
    title: 'دعنا نبني معاً شيئاً استثنائياً.',
    description: 'سواء كان لديك مشروع قادم، أو فرصة عمل، أو ترغب في مناقشة الحلول البرمجية والمعمارية، يسعدني تواصلك المباشر.',
    optionsTitle: 'خيارات التواصل المباشر',
    formTitle: 'إرسال رسالة مباشرة',
    formSubtitle: 'أدخل بياناتك أدناه وسأرد عليك خلال 24 ساعة.',
    formName: 'الاسم الكامل',
    formEmail: 'البريد الإلكتروني',
    formMessage: 'الرسالة',
    placeholderName: 'اسمك الكريم',
    placeholderEmail: 'your.email@example.com',
    placeholderMessage: 'أخبرني عن مشروعك، الجدول الزمني، وأهدافك...',
    sendButton: 'إرسال الرسالة',
    messagePrepared: 'تم تجهيز الرسالة!',
    messagePreparedDesc: 'تم فتح تطبيق البريد الإلكتروني مع تفاصيل رسالتك. يمكنك أيضاً المراسلة مباشرة عبر واتساب لرد أسرع.',
    sendAnother: 'إرسال رسالة أخرى',
    actions: {
      call: 'اتصال',
      message: 'مراسلة',
      sendEmail: 'إرسال بريد',
      viewRepos: 'المستودعات',
      connect: 'تواصل',
    },
  },
  footer: {
    copyright: 'جميع الحقوق محفوظة.',
    builtWith: 'تم البناء باستخدام React و TypeScript و Tailwind CSS',
    location: 'اليمن (متاح للعمل عن بُعد عالمياً)',
  },
};

/**
 * Strongly-typed translations map indexable by the Language union type ('ar' | 'en').
 */
export const translations: Record<Language, TranslationSchema> = {
  en,
  ar,
};

/**
 * Direction map for text alignment and document flow.
 */
export const directions: Record<Language, Direction> = {
  en: 'ltr',
  ar: 'rtl',
};

