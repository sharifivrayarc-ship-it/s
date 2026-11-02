/**
 * ========================================================
 * Saeed Sharifi Architecture & Interior Design Studio
 * Main JavaScript Application (main.js)
 * Clean, Modular, Standalone & GitHub Pages Ready
 * ========================================================
 */

// Central Configuration & Project Data
const PORTFOLIO_CONFIG = {
  profile: {
    nameEn: "SAEED SHARIFI",
    nameFa: "سعید شریفی",
    titleEn: "Architect | Interior Designer | 3D Visualization Artist",
    titleFa: "معمار | طراح داخلی | هنرمند تجسم سه‌بعدی معماری",
    taglineEn: "Creating meaningful architectural experiences through the balance of creativity, technical precision, materiality, light, and timeless aesthetics.",
    taglineFa: "«خلق تجربه‌های معمارانه معنادار از طریق تعادل میان خلاقیت، دقت فنی، متریال، نور و زیبایی‌شناسی ماندگار.»",
    experienceYears: "15+",
    aboutEn: "Saeed Sharifi is an architect and interior designer with more than 15 years of professional experience in architecture, interior design, facade design, and architectural visualization. His approach combines creativity, technical precision, aesthetic sensitivity, and meticulous attention to detail, light, materials, and spatial experience. He believes that successful architecture is not simply about creating beautiful spaces, but about designing meaningful environments that balance functionality, emotion, and timeless beauty.",
    aboutFa: "سعید شریفی معمار و طراح داخلی با بیش از ۱۵ سال تجربه حرفه‌ای در زمینه طراحی معماری، معماری داخلی، طراحی نما و تجسم سه‌بعدی (Architectural Visualization) است. رویکرد او تلفیقی دقیق از خلاقیت بصری، دقت فنی مهندسی، شناخت عمیق متریال، هدایت نور طبیعی و خلق تجارب فضایی ماندگار است. او باور دارد معماری موفق تنها ساختن فرم‌های چشم‌نواز نیست؛ بلکه سامان‌بخشی به فضاهایی پرمعناست که میان عملکرد، عواطف انسانی و زیباییِ فراتر از زمان تعادل برقرار می‌سازند.",
    philosophyQuoteEn: "Architecture is the art of transforming space into experience.",
    philosophyQuoteFa: "«معماری هنر تبدیل فضا به تجربه است.»",
    philosophySubEn: "My design philosophy is rooted in simplicity, proportion, light, materiality, and human experience. Every project is an opportunity to create a meaningful relationship between form, function, context, and emotion.",
    philosophySubFa: "«فلسفه طراحی من بر پایه سادگی، تناسب، نور، متریال و تجربه انسانی شکل گرفته است. هر پروژه فرصتی برای ایجاد ارتباطی معنادار میان فرم، عملکرد، بستر و احساس است.»",
    contact: {
      phone: "09386544597",
      phoneTel: "+989386544597",
      email: "saeed.sharifi.m17@gmail.com",
      instagramHandle: "@saeed.sharifi.3dsmax",
      instagramUrl: "https://www.instagram.com/saeed.sharifi.3dsmax/",
      website: "www.3dsharifi.com",
      websiteUrl: "https://www.3dsharifi.com"
    }
  },
  skills: [
    {
      num: "01",
      titleEn: "Architecture Design",
      titleFa: "طراحی معماری",
      descEn: "Holistic spatial masterplanning, conceptualization, and sustainable architectural drafting from concept to execution.",
      descFa: "برنامه‌ریزی جامع فضایی، ایده‌پردازی مفهومی، و طراحی نقشه‌های اجرایی و پایدار از ایده تا ساخت."
    },
    {
      num: "02",
      titleEn: "Interior Design",
      titleFa: "طراحی داخلی",
      descEn: "Bespoke residential & commercial luxury interiors harmonizing ergonomics, tactile materials, and ambient lighting.",
      descFa: "طراحی داخلی لوکس مسکونی و تجاری با تاکید بر هارمونی ارگونومی، بافت متریال‌های طبیعی و سناریوی نورپردازی."
    },
    {
      num: "03",
      titleEn: "Facade Design",
      titleFa: "طراحی نما",
      descEn: "Iconic building skins balancing contextual urban identity, climatic responsiveness, and structural elegance.",
      descFa: "طراحی پوسته‌های ماندگار و شاخص شهری با تعادل اقلیمی، هویت کانتکست و زیبایی ساختاری مدرن."
    },
    {
      num: "04",
      titleEn: "3D Modeling",
      titleFa: "مدل‌سازی سه‌بعدی",
      descEn: "Millimeter-accurate complex parametric and architectural solid modeling for uncompromising fabrication reality.",
      descFa: "مدل‌سازی سه‌بعدی پیشرفته و پارامتریک با دقت میلی‌متری مطابق ضوابط دقیق اجرایی و دتایل‌های سازه‌ای."
    },
    {
      num: "05",
      titleEn: "Architectural Rendering",
      titleFa: "رندرینگ و تجسم معماری",
      descEn: "Photorealistic atmospheric visualizations capturing emotional lighting, material decay, and natural context.",
      descFa: "رندرهای واقع‌گرایانه با بازآفرینی اتمسفر نوری دراماتیک، جزییات فیزیکی متریال و حس اصیل محیط پیرامون."
    },
    {
      num: "06",
      titleEn: "Architectural Animation",
      titleFa: "انیمیشن و سینماتیک معماری",
      descEn: "Cinematic camera choreography and real-time immersive spatial walkthroughs presenting dynamic architecture.",
      descFa: "کارگردانی پلان‌های سینمایی و تورهای متحرک سه‌بعدی برای ادراک کامل پویایی و جریان حرکت در فضا."
    }
  ],
  software: [
    { name: "3ds Max", role: "High-Poly Modeling" },
    { name: "V-Ray", role: "Photorealistic Render" },
    { name: "Adobe Photoshop", role: "Post-Production" },
    { name: "Unreal Engine", role: "Realtime ArchViz" },
    { name: "Chaos Vantage", role: "Raytracing Animation" },
    { name: "AutoCAD", role: "Technical Drafting" },
    { name: "Twinmotion", role: "Cinematic Atmosphere" },
    { name: "Artificial Intelligence", role: "Generative Concepting" }
  ],
  projects: [
    {
      id: 1,
      num: "01",
      titleEn: "Villa Horizon & Monolith",
      titleFa: "ویلای تک‌سنگ هورایزن",
      categoryEn: "Residential Architecture",
      categoryFa: "معماری مسکونی",
      categoryKey: "residential",
      year: "2024",
      locationEn: "Lavasan, Tehran",
      locationFa: "لواسان، تهران",
      descEn: "A minimalist monolithic private villa suspended over mountainous topography, balancing board-formed concrete and expansive floor-to-ceiling glass.",
      descFa: "ویلای مینیمال صخره‌ای مستقر بر شیب کوهستانی، حاصل پیوند بتن اکسپوز خطی، شیشه‌های قدی سرتاسری و امتداد خط افق طبیعی.",
      mainImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuChHXywRUn9pVF3NWWZBaVl68QqeldRjDaRMMxe_eaqLCgvBKuWjDnlu4ynpzze-KXkvcVXMMmDMZXU8_2xj3w1t26TCf5de4VZVeqfoZ-ccCOYhUiPPqEdH4y6rA1hPcqItI_XTEF_d5jNnBKkZqpIRuKUhlplO0DWFAe6o_9oufPp0zoNNiwgpM3KQOtpQ-s_AT7fK-ajj3RdV_o4a9VmMooUrB25vB7rVH9t-pI",
      aspect: "col-span-12 lg:col-span-8 min-h-[460px] lg:h-[520px]"
    },
    {
      id: 2,
      num: "02",
      titleEn: "Atelier Noir Penthouse",
      titleFa: "پنت‌هاوس آتلیه نوآر",
      categoryEn: "Interior Design",
      categoryFa: "معماری داخلی",
      categoryKey: "interior",
      year: "2023",
      locationEn: "Elahiyeh, Tehran",
      locationFa: "الهیه، تهران",
      descEn: "Moody, tactile penthouse interior sculpted with charred cedar wood, honed travertine stone, and hidden architectural linear illumination.",
      descFa: "طراحی پنت‌هاوس لوکس با رویکرد مودی و متریال‌های لمس‌پذیر نظیر چوب شو-سوگی‌بان، سنگ تراورتن بدون رزین و نورهای خطی مخفی.",
      mainImg: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
      aspect: "col-span-12 lg:col-span-4 min-h-[460px] lg:h-[520px]"
    },
    {
      id: 3,
      num: "03",
      titleEn: "Brutalist Urban Skin",
      titleFa: "پوسته پویای مجتمع اداری مهر",
      categoryEn: "Facade Design",
      categoryFa: "طراحی نما",
      categoryKey: "facade",
      year: "2024",
      locationEn: "Valiasr Ave, Tehran",
      locationFa: "خیابان ولیعصر، تهران",
      descEn: "Dynamic double-skin facade featuring parametric louvers and terracotta fins optimizing solar angles and acoustic attenuation in a dense urban artery.",
      descFa: "پوسته دو‌جداره هوشمند با لوورهای متحرک سرامیکی و تلفیق سایه‌اندازهای مدرن برای بهینه‌سازی نور خورشید و مهار آلودگی صوتی.",
      mainImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
      aspect: "col-span-12 lg:col-span-5 min-h-[440px] lg:h-[480px]"
    },
    {
      id: 4,
      num: "04",
      titleEn: "Canyon Pavilions",
      titleFa: "پاویون‌های صخره‌ای کیش",
      categoryEn: "Hospitality Design",
      categoryFa: "معماری اقامتی",
      categoryKey: "residential",
      year: "2023",
      locationEn: "Kish Island",
      locationFa: "جزیره کیش",
      descEn: "Luxury seaside retreat blending curved rammed-earth volumes with serene reflecting pools and coastal winds.",
      descFa: "ریزورت لوکس ساحلی با احجام منحنی خاک کوبیده، آب‌نماهای آیینه‌ای بازتابنده و تهویه مطبوع بر پایه جریان باد دریا.",
      mainImg: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85",
      aspect: "col-span-12 lg:col-span-7 min-h-[440px] lg:h-[480px]"
    },
    {
      id: 5,
      num: "05",
      titleEn: "The Glass Monolith Gallery",
      titleFa: "نگارخانه و مرکز فرهنگی مکعب شیشه‌ای",
      categoryEn: "Commercial Architecture",
      categoryFa: "معماری تجاری و فرهنگی",
      categoryKey: "commercial",
      year: "2022",
      locationEn: "Shiraz",
      locationFa: "شیراز",
      descEn: "Contemporary public arts foundation centering on an interior open courtyard, structural glass beams, and natural zenithal lighting.",
      descFa: "گالری هنرهای معاصر با حیاط مرکزی درونگرا، تیرهای تمام شیشه‌ای سازه‌ای و هدایت نور ملایم زنیت از سقف بتنی.",
      mainImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
      aspect: "col-span-12 lg:col-span-12 min-h-[460px] lg:h-[500px]"
    },
    {
      id: 6,
      num: "06",
      titleEn: "Kinetic Dune Habitat",
      titleFa: "زیستگاه کویری سینماتیک",
      categoryEn: "Conceptual Architecture",
      categoryFa: "معماری کانسپچوال",
      categoryKey: "archviz",
      year: "2024",
      locationEn: "Dasht-e Kavir",
      locationFa: "دشت کویر",
      descEn: "Speculative research pavilion responding to wind currents and thermal shifts in desert environments using biomorphic origami geometry.",
      descFa: "طراحی کانسپت پاویون تحقیقاتی منعطف سازگار با طوفان‌های شن و نوسانات شدید دما بر پایه هندسه اریگامی بیومورفیک.",
      mainImg: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85",
      aspect: "col-span-12 lg:col-span-4 min-h-[420px] lg:h-[460px]"
    },
    {
      id: 7,
      num: "07",
      titleEn: "Minimalist Loft 702",
      titleFa: "لوفت مینیمال شماره ۷۰۲",
      categoryEn: "Interior Design",
      categoryFa: "معماری داخلی",
      categoryKey: "interior",
      year: "2023",
      locationEn: "Zaferanieh, Tehran",
      locationFa: "زعفرانیه، تهران",
      descEn: "Reductive residential interior celebrating micro-cement surfaces, concealed seamless cabinetry, and raw brushed brass accents.",
      descFa: "فضای مسکونی مدرن با پوشش میکروسمنت یکپارچه، کابینت‌های توکار فاقد دستگیره و جزییات فلزی برنجی دست‌ساز مات.",
      mainImg: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
      aspect: "col-span-12 lg:col-span-4 min-h-[420px] lg:h-[460px]"
    },
    {
      id: 8,
      num: "08",
      titleEn: "Nordic Twilight Render Study",
      titleFa: "مطالعه نور و متریال در هوای گرگ‌ومیش",
      categoryEn: "Architectural Visualization",
      categoryFa: "تجسم سه‌بعدی معماری",
      categoryKey: "archviz",
      year: "2023",
      locationEn: "Virtual Study",
      locationFa: "پروژه مجازی و شبیه‌سازی",
      descEn: "Photorealistic CGI lighting study capturing blue-hour ambience, wet asphalt reflections, and warm tungsten interiors in V-Ray / 3ds Max.",
      descFa: "شبیه‌سازی فوق‌العاده نور آبی گرگ‌ومیش (Blue Hour)، انعکاس آسفالت باران‌خورده و گرمای نور داخلی توسط 3ds Max و V-Ray.",
      mainImg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
      aspect: "col-span-12 lg:col-span-4 min-h-[420px] lg:h-[460px]"
    },
    {
      id: 9,
      num: "09",
      titleEn: "Terra Cotta Facade Tower",
      titleFa: "برج مسکونی با نمای تراکوتا و سایه‌بان پایدار",
      categoryEn: "Facade Design",
      categoryFa: "طراحی نما",
      categoryKey: "facade",
      year: "2024",
      locationEn: "Sa'adat Abad, Tehran",
      locationFa: "سعادت‌آباد، تهران",
      descEn: "High-rise residential facade layering earth-toned extruded terracotta tiles and deeply recessed balconies creating sculptural shadows.",
      descFa: "نمای مدرن برج مسکونی با ترکیب سرامیک‌های تراکوتا سفالی و بالکن‌های تورفته که سایه‌هایی عمیق و مجسمه‌گون پدید می‌آورند.",
      mainImg: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85",
      aspect: "col-span-12 lg:col-span-7 min-h-[450px] lg:h-[500px]"
    },
    {
      id: 10,
      num: "10",
      titleEn: "Solitude Mountain Observatory",
      titleFa: "رصدخانه و ویلای کوهستان سالیتود",
      categoryEn: "Residential Architecture",
      categoryFa: "معماری مسکونی",
      categoryKey: "residential",
      year: "2023",
      locationEn: "Dizin Heights",
      locationFa: "ارتفاعات دیزین",
      descEn: "Cantilevered steel and dark basalt structure anchored into alpine rock, designed for stargazing and extreme meteorological resistance.",
      descFa: "سازه کنسولی فولادی و سنگ بازالت آتشفشانی مهار شده در صخره‌های آلپی، با دید ۳۶۰ درجه به آسمان شب و مقاومت حداکثری برف.",
      mainImg: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=85",
      aspect: "col-span-12 lg:col-span-5 min-h-[450px] lg:h-[500px]"
    }
  ]
};

// Make config globally accessible if needed
window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;

// Translations dictionary for full bilingual support
const translations = {
  fa: {
    "page-title": "سعید شریفی | معمار و طراح داخلی",
    "header-subtitle": "معمار & طراح",
    "nav-about": "درباره من",
    "nav-expertise": "تخصص‌ها",
    "nav-projects": "پروژه‌ها",
    "nav-philosophy": "فلسفه طراحی",
    "nav-contact": "تماس",
    "hero-available": "استودیو معماری و طراحی فضایی",
    "hero-name": "سعید شریفی",
    "hero-title": "معمار | طراح داخلی | هنرمند تجسم سه‌بعدی معماری",
    "hero-tagline": "«خلق تجربه‌های معمارانه معنادار از طریق تعادل میان خلاقیت، دقت فنی، متریال، نور و زیبایی‌شناسی ماندگار.»",
    "hero-cta": "مشاهده پروژه‌ها",
    "hero-scroll": "اسکرول",
    "about-badge": "معمار ارشد & بنیان‌گذار استودیو",
    "about-exp-number": "15+",
    "about-exp-text": "سال سابقه تخصصی معماری",
    "about-section-tag": "درباره من / ABOUT ME",
    "about-headline": "تلفیق حس هنری، دقت مهندسی و تجسم فضاهای فراتر از زمان.",
    "about-paragraph-1": "سعید شریفی معمار و طراح داخلی با بیش از ۱۵ سال تجربه حرفه‌ای در معماری، معماری داخلی، طراحی نما و شبیه‌سازی پیشرفته سه‌بعدی است.",
    "about-paragraph-2": "رویکرد او ترکیبی از خلاقیت، دقت فنی مهندسی، حساسیت به زیبایی‌شناسی و وسواس دقیق در جزییات، نور، متریال‌ها و تجربه فضایی است.",
    "about-paragraph-3": "او باور دارد معماری موفق صرفاً ایجاد فرم‌های زیبا نیست؛ بلکه طراحی محیط‌هایی معنادار است که میان عملکرد، عواطف و زیبایی ماندگار توازن خلق می‌کنند.",
    "metric-projects": "پروژه طراحی شده",
    "metric-years": "سال تجربه تخصصی",
    "metric-precision": "دقت در جزئیات مهندسی",
    "expertise-tag": "حوزه‌های مهارت & تخصص",
    "expertise-title": "تخصص‌ها و خدمات معماری",
    "expertise-sub": "ارائه راهکارهای یکپارچه از مراحل اولیه دیاگرام‌های کانسپچوال تا رندرهای فوق‌واقع‌گرایانه و نقشه‌های اجرایی فاز دو.",
    "software-title": "ابزارها و نرم‌افزارهای تخصصی / SOFTWARE & DIGITAL TOOLS",
    "projects-tag": "پروژه‌های منتخب معمار",
    "projects-title": "گزیده آثار و پروژه‌ها",
    "filter-all": "همه (۱۰)",
    "filter-residential": "مسکونی",
    "filter-interior": "داخلی",
    "filter-facade": "نما",
    "filter-archviz": "رندر و شبیه‌سازی",
    "explore-details": "مشاهده جزئیات پروژه",
    "bespoke-delivery": "طراحی اختصاصی",
    "philosophy-tag": "فلسفه و جهان‌بینی طراحی",
    "philosophy-quote": "«معماری هنر تبدیل فضا به تجربه است.»",
    "philosophy-body": "«فلسفه طراحی من بر پایه سادگی، تناسب، نور، متریال و تجربه انسانی شکل گرفته است. هر پروژه فرصتی برای ایجاد ارتباطی معنادار میان فرم، عملکرد، بستر و احساس است.»",
    "pillar-light": "خلوص نور (Light)",
    "pillar-material": "اصالت متریال (Material)",
    "pillar-proportion": "تناسبات طلایی (Proportion)",
    "pillar-human": "انسان و بستر (Context)",
    "contact-tag": "در ارتباط باشیم / CONTACT",
    "contact-title": "آغاز یک همکاری معمارانه.",
    "contact-subtitle": "برای طراحی پروژه‌های معماری، فضاهای داخلی، نما، مدل‌سازی و انیمیشن‌های سه‌بعدی و مشاوره‌های تخصصی، با من در تماس باشید.",
    "contact-location-label": "موقعیت استودیو & فعالیت",
    "contact-location-val": "تهران، ایران | پذیرش پروژه‌های بین‌المللی",
    "contact-status": "آماده پذیرش سفارشات",
    "form-title": "فرم ارسال پیام و درخواست پروژه",
    "form-name-label": "نام و نام‌خانوادگی",
    "form-name-ph": "مثال: مهندس رادپور",
    "form-contact-label": "ایمیل یا شماره تماس",
    "form-contact-ph": "example@domain.com یا 0912...",
    "form-type-label": "نوع همکاری یا زمینه پروژه",
    "form-opt-arch": "طراحی معماری و پلان‌های اجرایی",
    "form-opt-interior": "معماری و دکوراسیون داخلی",
    "form-opt-facade": "طراحی نمای مدرن و پایدار",
    "form-opt-archviz": "مدل‌سازی سه‌بعدی و رندرهای واقع‌گرایانه",
    "form-opt-consult": "مشاوره و نظارت معماری",
    "form-msg-label": "شرح پیام یا مشخصات پروژه",
    "form-msg-ph": "توضیحات کلی پروژه، متراژ، کاربری یا سوالات مدنظر خود را بنویسید...",
    "form-submit": "ارسال پیام و استعلام پروژه",
    "form-guarantee": "پاسخگویی معمولاً حداکثر طی ۲۴ ساعت کاری انجام می‌گردد.",
    "form-success": "پیام شما با موفقیت ثبت شد. به‌زودی با شما تماس خواهیم گرفت.",
    "footer-role": "معمار & طراح داخلی | ARCHITECT & INTERIOR DESIGNER",
    "footer-back-top": "بازگشت به بالا",
    "modal-view-gallery": "گالری تصاویر پروژه",
    "modal-category": "دسته‌بندی",
    "modal-year": "سال ساخت / طراحی",
    "modal-location": "موقعیت مکانی"
  },
  en: {
    "page-title": "Saeed Sharifi | Architect & Interior Designer",
    "header-subtitle": "Architect & Designer",
    "nav-about": "About",
    "nav-expertise": "Expertise",
    "nav-projects": "Projects",
    "nav-philosophy": "Philosophy",
    "nav-contact": "Contact",
    "hero-available": "Architecture & Spatial Design Studio",
    "hero-name": "SAEED SHARIFI",
    "hero-title": "Architect | Interior Designer | 3D Visualization Artist",
    "hero-tagline": "“Creating meaningful architectural experiences through the balance of creativity, technical precision, materiality, light, and timeless aesthetics.”",
    "hero-cta": "View Selected Works",
    "hero-scroll": "Scroll",
    "about-badge": "Lead Architect & Studio Founder",
    "about-exp-number": "15+",
    "about-exp-text": "Years of Professional Practice",
    "about-section-tag": "ABOUT ME / PROFILE",
    "about-headline": "Harmonizing artistic sensitivity, technical rigor, and timeless spatial experiences.",
    "about-paragraph-1": "Saeed Sharifi is an architect and interior designer with more than 15 years of professional experience in architecture, interior design, facade design, and architectural visualization.",
    "about-paragraph-2": "His approach combines creativity, technical precision, aesthetic sensitivity, and meticulous attention to detail, light, materials, and spatial experience.",
    "about-paragraph-3": "He believes that successful architecture is not simply about creating beautiful spaces, but about designing meaningful environments that balance functionality, emotion, and timeless beauty.",
    "metric-projects": "Architectural Works",
    "metric-years": "Years of Experience",
    "metric-precision": "Detail Precision",
    "expertise-tag": "CAPABILITIES & PRACTICE",
    "expertise-title": "Areas of Expertise",
    "expertise-sub": "Delivering holistic solutions from early conceptual diagrams to photorealistic visualizations and construction-grade detailing.",
    "software-title": "SOFTWARE & DIGITAL TOOLS",
    "projects-tag": "PORTFOLIO & SELECTED WORKS",
    "projects-title": "Selected Architecture",
    "filter-all": "All (10)",
    "filter-residential": "Residential",
    "filter-interior": "Interior",
    "filter-facade": "Facade",
    "filter-archviz": "Visualization",
    "explore-details": "Explore Project Details",
    "bespoke-delivery": "Bespoke Delivery",
    "philosophy-tag": "DESIGN MANIFESTO & VALUES",
    "philosophy-quote": "“Architecture is the art of transforming space into experience.”",
    "philosophy-body": "“My design philosophy is rooted in simplicity, proportion, light, materiality, and human experience. Every project is an opportunity to create a meaningful relationship between form, function, context, and emotion.”",
    "pillar-light": "Purity of Light",
    "pillar-material": "Honesty of Material",
    "pillar-proportion": "Harmonic Proportion",
    "pillar-human": "Human & Context",
    "contact-tag": "LET’S WORK TOGETHER",
    "contact-title": "Initiate a Spatial Collaboration.",
    "contact-subtitle": "For architectural commissions, interior transformations, bespoke facade design, 3D CGI visuals, or consulting, feel free to get in touch.",
    "contact-location-label": "Studio Location & Scope",
    "contact-location-val": "Tehran, Iran | Open to Global Collaborations",
    "contact-status": "Open for New Commissions",
    "form-title": "Project Inquiry & Consultation Form",
    "form-name-label": "Full Name",
    "form-name-ph": "e.g. John Doe / Studio Lead",
    "form-contact-label": "Email or Phone Number",
    "form-contact-ph": "example@domain.com or +1...",
    "form-type-label": "Project Scope or Inquiry Type",
    "form-opt-arch": "Architectural Design & Blueprint Drafting",
    "form-opt-interior": "Interior Architecture & High-End Styling",
    "form-opt-facade": "Modern & Sustainable Facade Engineering",
    "form-opt-archviz": "3D High-Poly Modeling & CGI Visualization",
    "form-opt-consult": "Architectural Advisory & Supervision",
    "form-msg-label": "Project Details & Message",
    "form-msg-ph": "Please describe your project scope, location, timeline or any questions...",
    "form-submit": "Send Inquiry & Request Consultation",
    "form-guarantee": "Inquiries are typically answered within 24 business hours.",
    "form-success": "Your message has been sent successfully. We will get back to you shortly.",
    "footer-role": "Architect & Interior Designer",
    "footer-back-top": "Back to Top",
    "modal-view-gallery": "Project Gallery",
    "modal-category": "Category",
    "modal-year": "Year",
    "modal-location": "Location"
  }
};

// Application State
let currentLang = 'fa';
let currentFilter = 'all';

/**
 * Render the 6 Architectural Expertise Cards
 */
function renderExpertise() {
  const container = document.getElementById('expertise-container');
  if (!container) return;

  const skills = PORTFOLIO_CONFIG.skills;
  const isFa = currentLang === 'fa';

  container.innerHTML = skills.map(skill => `
    <div class="group p-8 bg-brand-charcoal/40 hover:bg-brand-charcoal border border-white/5 hover:border-brand-accent/40 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-6">
          <span class="font-mono text-xs text-brand-accent tracking-widest">${skill.num}</span>
          <div class="w-8 h-[1px] bg-white/10 group-hover:bg-brand-accent transition-colors"></div>
        </div>
        <h3 class="text-xl font-medium text-brand-offwhite mb-3 group-hover:text-brand-accent transition-colors">
          ${isFa ? skill.titleFa : skill.titleEn}
        </h3>
        <p class="text-sm font-light text-brand-gray leading-relaxed">
          ${isFa ? skill.descFa : skill.descEn}
        </p>
      </div>
      <div class="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-white/50 group-hover:text-white uppercase tracking-wider">
        <span>${isFa ? 'طراحی اختصاصی' : 'Bespoke Delivery'}</span>
        <span class="transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">→</span>
      </div>
    </div>
  `).join('');
}

/**
 * Render the Filtered Project Gallery
 */
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  let projects = PORTFOLIO_CONFIG.projects;
  if (filter !== 'all') {
    projects = projects.filter(p => p.categoryKey === filter);
  }

  const isFa = currentLang === 'fa';
  const exploreLabel = isFa ? 'مشاهده جزئیات پروژه' : 'Explore Details';

  grid.innerHTML = projects.map(p => {
    const title = isFa ? p.titleFa : p.titleEn;
    const category = isFa ? p.categoryFa : p.categoryEn;
    const desc = isFa ? p.descFa : p.descEn;

    return `
      <div class="${p.aspect} group relative cursor-pointer overflow-hidden border border-white/10 bg-brand-charcoal" onclick="openProjectModal(${p.id})">
        <img 
          src="${p.mainImg}" 
          alt="${title}" 
          loading="lazy"
          class="w-full h-full object-cover img-zoom-target filter brightness-90 group-hover:brightness-100 transition-all duration-700"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/45 to-transparent opacity-85 group-hover:opacity-65 transition-opacity"></div>
        
        <div class="absolute top-6 start-6 end-6 flex justify-between items-center pointer-events-none z-10">
          <span class="font-mono text-xs px-2.5 py-1 bg-brand-black/70 backdrop-blur-md border border-white/10 text-brand-offwhite">
            ${p.num}
          </span>
          <span class="text-xs uppercase tracking-widest text-white/80 bg-brand-black/70 backdrop-blur-md px-3 py-1 border border-white/10 font-mono">
            ${p.year}
          </span>
        </div>

        <div class="absolute bottom-6 start-6 end-6 z-10">
          <span class="inline-block text-[11px] uppercase tracking-widest text-brand-accent font-medium mb-1">
            ${category}
          </span>
          <h3 class="text-2xl sm:text-3xl font-light text-brand-offwhite tracking-tight mb-2">
            ${title}
          </h3>
          <p class="text-xs sm:text-sm text-brand-lightgray/80 line-clamp-2 font-light max-w-xl opacity-85 group-hover:opacity-100 transition-opacity">
            ${desc}
          </p>
          <div class="mt-3 flex items-center space-x-2 rtl:space-x-reverse text-xs uppercase tracking-widest text-white/90">
            <span>${exploreLabel}</span>
            <span class="transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Filter projects by category
 */
function filterProjects(category) {
  currentFilter = category;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const isTarget = btn.getAttribute('data-category') === category;
    if (isTarget) {
      btn.classList.add('active', 'bg-brand-offwhite', 'text-brand-black');
      btn.classList.remove('bg-brand-charcoal', 'text-brand-lightgray');
    } else {
      btn.classList.remove('active', 'bg-brand-offwhite', 'text-brand-black');
      btn.classList.add('bg-brand-charcoal', 'text-brand-lightgray');
    }
  });

  renderProjects(category);
}

/**
 * Open Project Lightbox Modal
 */
function openProjectModal(id) {
  const project = PORTFOLIO_CONFIG.projects.find(p => p.id === id);
  if (!project) return;

  const isFa = currentLang === 'fa';
  const t = translations[currentLang];
  const title = isFa ? project.titleFa : project.titleEn;
  const category = isFa ? project.categoryFa : project.categoryEn;
  const desc = isFa ? project.descFa : project.descEn;
  const location = isFa ? project.locationFa : project.locationEn;

  const modalBody = document.getElementById('modal-body');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div class="flex items-center space-x-3 rtl:space-x-reverse mb-3">
      <span class="font-mono text-sm text-brand-accent">${project.num} //</span>
      <span class="text-xs uppercase tracking-widest text-brand-gray font-semibold">${category}</span>
    </div>
    
    <h2 class="text-3xl sm:text-4xl font-light text-brand-offwhite mb-4 leading-tight">${title}</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 mb-6 border-y border-white/10 text-xs">
      <div>
        <span class="text-brand-gray uppercase tracking-wider block mb-1">${t['modal-year']}</span>
        <span class="text-white font-mono text-sm">${project.year}</span>
      </div>
      <div>
        <span class="text-brand-gray uppercase tracking-wider block mb-1">${t['modal-location']}</span>
        <span class="text-white text-sm">${location}</span>
      </div>
      <div>
        <span class="text-brand-gray uppercase tracking-wider block mb-1">${t['modal-category']}</span>
        <span class="text-white text-sm">${category}</span>
      </div>
    </div>

    <p class="text-brand-lightgray/90 text-sm sm:text-base leading-relaxed font-light mb-8">${desc}</p>

    <div class="aspect-video bg-black overflow-hidden border border-white/10 relative">
      <img src="${project.mainImg}" alt="${title}" class="w-full h-full object-cover">
    </div>
  `;

  const modal = document.getElementById('project-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

/**
 * Close Project Lightbox Modal
 */
function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

/**
 * Toggle Language Between Persian (FA) and English (EN)
 */
function setLanguage(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  const html = document.documentElement;
  const isFa = lang === 'fa';

  html.setAttribute('lang', lang);
  html.setAttribute('dir', isFa ? 'rtl' : 'ltr');

  const faBtn = document.getElementById('lang-fa-btn');
  const enBtn = document.getElementById('lang-en-btn');

  if (isFa) {
    faBtn.className = "px-3 py-1 rounded-full transition-all bg-white text-brand-black font-semibold";
    enBtn.className = "px-3 py-1 rounded-full transition-all text-brand-gray hover:text-white";
  } else {
    enBtn.className = "px-3 py-1 rounded-full transition-all bg-white text-brand-black font-semibold";
    faBtn.className = "px-3 py-1 rounded-full transition-all text-brand-gray hover:text-white";
  }

  const dict = translations[lang];

  // Update text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update placeholders with data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update document title
  if (dict['page-title']) {
    document.title = dict['page-title'];
  }

  // Re-render dynamic components
  renderExpertise();
  renderProjects(currentFilter);
}

/**
 * Toggle Mobile Drawer Menu
 */
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const iconBars = document.getElementById('menu-icon-bars');
  const iconClose = document.getElementById('menu-icon-close');

  if (!menu) return;
  const isHidden = menu.classList.contains('hidden');

  if (isHidden) {
    menu.classList.remove('hidden');
    iconBars.classList.add('hidden');
    iconClose.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
    iconBars.classList.remove('hidden');
    iconClose.classList.add('hidden');
  }
}

/**
 * Handle Contact Form Submission with In-App Notification Toast
 */
function handleContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const msg = translations[currentLang]['form-success'];

  // Display Toast Notification
  showToast(msg);
  form.reset();
}

/**
 * Display sleek Toast notification
 */
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-8 start-1/2 -translate-x-1/2 z-50 bg-brand-offwhite text-brand-black px-6 py-3.5 shadow-2xl border border-white/20 text-xs sm:text-sm font-medium flex items-center space-x-3 rtl:space-x-reverse transition-all duration-300';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

/**
 * Header Scroll Watcher
 */
function handleHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Bind Global Functions to Window for direct HTML triggers
window.setLanguage = setLanguage;
window.filterProjects = filterProjects;
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.toggleMobileMenu = toggleMobileMenu;
window.handleContactForm = handleContactForm;

// Setup Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  renderExpertise();
  renderProjects('all');

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });

  // Escape key closes modal
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeProjectModal();
  });

  // Modal backdrop click
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target.id === 'project-modal') closeProjectModal();
    });
  }

  // Smooth scroll links with offset for sticky header
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile drawer if opened
        const menu = document.getElementById('mobile-menu');
        if (menu && !menu.classList.contains('hidden')) {
          toggleMobileMenu();
        }
      }
    });
  });
});
