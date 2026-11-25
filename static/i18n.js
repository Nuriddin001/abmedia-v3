/* AB Media landing: all texts in 4 languages (EN, ES, RU, AR), people and the 7 cases.
   AB Media builds the story and runs the go-to-market campaign; copy is kept short, the animation tells the story.
   Numbers come from the Rust server (window.ABM_DATA). */
(function(){
"use strict";
const L = {
 "en": {
  "sending": "Sending…",
  "e_send": "We couldn't send your request. Please try again in a minute.",
  "e_rate": "Too many attempts. Please try again a little later.",
  "name": "Abror Bakhtiyarovich",
  "role": "Production, storytelling & go-to-market, AB Media",
  "bar": "Request in 5 min, get a bonus:",
  "nav": [
   "Journey",
   "Work",
   "Process",
   "FAQ"
  ],
  "cta": "Free business audit",
  "hero_tag": "Video production and brand films that build awareness and trust",
  "hero_cta": "Free business audit",
  "hero_line": "Be known.\nBe trusted.",
  "cue": "Scroll to play",
  "hero_q": "Why do 88 of 100 people forget your ad?",
  "reel_now": "On screen",
  "cur_play": "Play",
  "mf_eb": "Manifesto",
  "mf": "*88 of 100* people forget your ad. We make them *remember* you, then *trust* you.",
  "stat_l": [
   "projects",
   "years",
   "views",
   "projects a month, max"
  ],
  "j_eb": "Customer journey",
  "j_h": "Where brands lose customers",
  "s_steps": [
   [
    "{r0} saw your ad",
    "Seeing isn't knowing."
   ],
   [
    "{lost1} forgot you",
    "Only {r1} remember the brand."
   ],
   [
    "{p2}% don't trust you",
    "{r2} trust. {r3} buy."
   ],
   [
    "A story campaign changes it",
    "{f1} know · {f2} trust · {f3} buy"
   ]
  ],
  "j_stages": [
   "Saw",
   "Know",
   "Trust",
   "Bought"
  ],
  "j_zone": "AB Media zone",
  "j_ours": "AB Media",
  "j_modes": [
   "Today",
   "With our campaign"
  ],
  "calc_h": "Your numbers",
  "c_reach": "Monthly ad reach",
  "c_cta": "Send with this estimate",
  "j_sum": "<b>+{n}</b> buyers a month on the same budget. Each one costs <b>{x}×</b> less.",
  "j_note": "Estimated model. Exact numbers in the free business audit.",
  "calc_l": "Journey estimate",
  "calc_s": "{r} reach → +{n} buyers a month",
  "d_eb": "One-off ads vs a story",
  "d_h": "Ads stop. Stories stay.",
  "d_ad": "One-off ads",
  "d_film": "Story campaign",
  "d_end": "Ad budget ends",
  "d_y": "Attention",
  "cs_eb": "Work",
  "cs_h": "Stories we've told",
  "cs_more": "More films",
  "cs_less": "Show less",
  "k_views": "views",
  "open_case": "Open case",
  "more": "+{n} more projects. On the call we'll show work from your industry.",
  "f_eb": "The fix",
  "f_h": "Others leave it. We fix it.",
  "fixes": [
   [
    "Nobody remembers the brand",
    "One story only you own"
   ],
   [
    "Leads keep getting pricier",
    "Trust makes ads cheaper"
   ],
   [
    "Content without a plan",
    "Every piece serves one story"
   ],
   [
    "Five contractors, no owner",
    "One team from story to market"
   ],
   [
    "Launched once, then forgotten",
    "We run the campaign, not just the launch"
   ],
   [
    "No way to measure it",
    "Awareness measured before and after"
   ]
  ],
  "why_eb": "Behind the camera",
  "why_h": "One team. From story to market.",
  "why": [
   "Story, launch and campaign under one roof",
   "Stories for Good Day, Sales Doctor and Yuksalish",
   "Works with your team or agency",
   "Built for awareness and trust"
  ],
  "how_eb": "Process",
  "how_h": "From audit to market",
  "modes": [
   "We run it",
   "With your team"
  ],
  "mode_d": [
   "We take it from the audit to the market and keep it running.",
   "We plug into your team and make the content together; we lead the story and the launch."
  ],
  "chip": {
   "full": "AB Media",
   "sup": "Led by AB Media",
   "you": "Your team",
   "with": "Together",
   "opt": "Optional"
  },
  "steps": [
   [
    "Business audit",
    "Where customers drop off, and why"
   ],
   [
    "Positioning",
    "The one thing only you can say"
   ],
   [
    "Storytelling",
    "A story people remember and retell"
   ],
   [
    "Content",
    "Films, reels and posts that carry it"
   ],
   [
    "Go-to-market",
    "Launch on the channels your buyers use"
   ],
   [
    "Run & measure",
    "Keep it running, measure awareness and trust"
   ]
  ],
  "b_eb": "Planner",
  "b_h": "Plan your launch in 30 seconds",
  "b_q": [
   "Where do you lose customers?",
   "What do you have?",
   "Run the campaign with us?"
  ],
  "b_goal": {
   "launch": "They don't know us",
   "trust": "They don't trust us",
   "explain": "They don't get what we do",
   "social": "Social message"
  },
  "b_have": {
   "task": "Just the goal",
   "idea": "An idea",
   "agency": "A content team"
  },
  "b_dist": {
   "yes": "Yes, run it",
   "no": "No, we run it"
  },
  "r_format": "Format",
  "r_focus": "Stage",
  "r_stages": "Steps",
  "r_case": "Similar story",
  "r_send": "Send this brief",
  "r_watch": "Watch",
  "focus": {
   "launch": "Awareness",
   "trust": "Trust",
   "explain": "Awareness → Trust",
   "social": "Awareness"
  },
  "fm": [
   [
    "Story + your team"
   ],
   [
    "Story campaign"
   ],
   [
    "Story campaign + go-to-market"
   ]
  ],
  "rq_eb": "Free business audit",
  "rq_h": "Let's launch your story",
  "rq_p": "Leave your contacts. Abror calls back.",
  "nx_h": "Next",
  "nx": [
   "Abror reads it",
   "30-min business audit call",
   "Concept + budget"
  ],
  "slots": "Slots left this month: {n}.",
  "f_name": "Name",
  "f_phone": "Phone",
  "f_email": "Email",
  "f_btn": "Send request",
  "privacy": "Used only to contact you about your project.",
  "e_name": "Enter your name.",
  "e_phone": "Enter a valid phone number.",
  "e_email": "Enter a valid email, for example name@gmail.com.",
  "done_h": "Cut! Request received.",
  "ok": "Thanks, {n}. Abror will contact you by phone or email.",
  "again": "Send another request",
  "brief_l": "From the planner",
  "remove": "Remove",
  "slate": [
   "Production",
   "Scene",
   "Take",
   "Director"
  ],
  "faq_eb": "FAQ",
  "faq_h": "Questions",
  "faq": [
   [
    "What is the business audit?",
    "A free 30-minute call. We find where your customers drop off — awareness, trust or purchase — and what to launch first."
   ],
   [
    "Do you make films?",
    "Yes, we are a production studio. We make the films and the content ourselves, and build the story and the go-to-market campaign around them."
   ],
   [
    "What does go-to-market mean here?",
    "Taking your product to its buyers: positioning, story, channels, launch, and keeping the campaign running."
   ],
   [
    "Can you work with our team or agency?",
    "Yes, but you don't need one: we bring our own team and make the content ourselves. If you have a team or agency, we plug in and work with it."
   ],
   [
    "How do you measure trust?",
    "A short audience survey before and after the launch, plus reach, watch-through and branded searches."
   ],
   [
    "How much does it cost?",
    "It depends on the market, the channels and the content. You get a budget after the audit call."
   ]
  ],
  "foot": "Production, storytelling and go-to-market for awareness and trust.",
  "ct": [
   "Phone",
   "Telegram",
   "Instagram",
   "Email",
   "YouTube"
  ],
  "cat": {
   "Sales Doctor Academy": "Business education",
   "Grand Capital": "Real estate",
   "Yuksalish Choy": "Tea",
   "IMZO": "Door frames",
   "Good Day Cappuccino": "Coffee drink",
   "ZO'R TV": "TV channel",
   "To'xtaniyoz Ota": "Meat products"
  },
  "l_exec": "Production company",
  "l_task": "Brief",
  "l_concept": "Concept",
  "l_scope": "Scope",
  "l_team": "Credits",
  "r_dir": "Director",
  "r_prod": "Producer",
  "r_cam": "Camera operator",
  "r_amb": "Ambassador",
  "r_ambs": "Ambassadors",
  "sc": {
   "sVO": "Script and voice-over",
   "c": "Concept",
   "s": "Script",
   "pre": "Pre-production",
   "prod": "Shoot",
   "post": "Post-production",
   "dist": "Release & measure",
   "preS": "Pre-production supervision",
   "prodS": "Shoot supervision",
   "postS": "Post-production supervision",
   "aud": "Business audit",
   "pos": "Positioning",
   "story": "Storytelling",
   "cont": "Content",
   "contS": "Content by your team",
   "gtm": "Go-to-market",
   "run": "Run & measure"
  },
  "v_play": "Play video",
  "v_film": "Video",
  "v_bts": "Backstage",
  "close": "Close",
  "alt_p": "Abror Bakhtiyarovich on Wall Street, New York",
  "alt_still": "Still from the {c} film",
  "alt_bts": "Behind the scenes of the Sales Doctor Academy shoot",
  "scene_l": "Scene",
  "scene": {
   "top": "Opening",
   "manifest": "Manifesto",
   "journey": "Journey",
   "diff": "Ads vs story",
   "cases": "Work",
   "fixes": "The fix",
   "why": "Abror",
   "how": "Process",
   "plan": "Planner",
   "request": "Request",
   "faq": "FAQ"
  }
 },
 "es": {
  "sending": "Enviando…",
  "e_send": "No pudimos enviar tu solicitud. Inténtalo de nuevo en un minuto.",
  "e_rate": "Demasiados intentos. Prueba un poco más tarde.",
  "name": "Abror Bakhtiyarovich",
  "role": "Producción, storytelling y go-to-market, AB Media",
  "bar": "Solicita en 5 min y llévate un bono:",
  "nav": [
   "Recorrido",
   "Trabajos",
   "Proceso",
   "Preguntas"
  ],
  "cta": "Auditoría de negocio gratis",
  "hero_tag": "Productora de vídeo: películas de marca que generan notoriedad y confianza",
  "hero_cta": "Auditoría de negocio gratis",
  "hero_line": "Que te conozcan.\nQue confíen en ti.",
  "cue": "Desplázate para ver",
  "hero_q": "¿Por qué 88 de cada 100 personas olvidan tu anuncio?",
  "reel_now": "En pantalla",
  "cur_play": "Ver",
  "mf_eb": "Manifiesto",
  "mf": "*88 de cada 100* personas olvidan tu anuncio. Hacemos que te *recuerden* y luego *confíen* en ti.",
  "stat_l": [
   "proyectos",
   "años",
   "visualizaciones",
   "proyectos al mes, máximo"
  ],
  "j_eb": "Recorrido del cliente",
  "j_h": "Dónde las marcas pierden clientes",
  "s_steps": [
   [
    "{r0} vieron tu anuncio",
    "Ver no es conocer."
   ],
   [
    "{lost1} te olvidaron",
    "Solo {r1} recuerdan la marca."
   ],
   [
    "El {p2}% no confía en ti",
    "{r2} confían. {r3} compran."
   ],
   [
    "Una campaña con historia lo cambia",
    "{f1} conocen · {f2} confían · {f3} compran"
   ]
  ],
  "j_stages": [
   "Vieron",
   "Conocen",
   "Confían",
   "Compraron"
  ],
  "j_zone": "Zona AB Media",
  "j_ours": "AB Media",
  "j_modes": [
   "Hoy",
   "Con nuestra campaña"
  ],
  "calc_h": "Tus números",
  "c_reach": "Alcance publicitario mensual",
  "c_cta": "Enviar con este cálculo",
  "j_sum": "<b>+{n}</b> compradores al mes con el mismo presupuesto. Cada uno cuesta <b>{x}×</b> menos.",
  "j_note": "Modelo estimado. Cifras exactas en la auditoría de negocio gratuita.",
  "calc_l": "Cálculo del recorrido",
  "calc_s": "Alcance {r} → +{n} compradores al mes",
  "d_eb": "Anuncios sueltos vs una historia",
  "d_h": "Los anuncios se apagan. Las historias se quedan.",
  "d_ad": "Anuncios sueltos",
  "d_film": "Campaña con historia",
  "d_end": "Fin del presupuesto publicitario",
  "d_y": "Atención",
  "cs_eb": "Trabajos",
  "cs_h": "Historias que hemos contado",
  "cs_more": "Más videos",
  "cs_less": "Mostrar menos",
  "k_views": "vistas",
  "open_case": "Ver caso",
  "more": "+{n} proyectos más. En la llamada te mostramos trabajos de tu sector.",
  "f_eb": "La solución",
  "f_h": "Otros lo dejan así. Nosotros lo arreglamos.",
  "fixes": [
   [
    "Nadie recuerda la marca",
    "Una historia que solo tú tienes"
   ],
   [
    "Los leads cada vez más caros",
    "La confianza abarata la publicidad"
   ],
   [
    "Contenido sin plan",
    "Cada pieza sirve a una historia"
   ],
   [
    "Cinco proveedores, ningún responsable",
    "Un equipo de la historia al mercado"
   ],
   [
    "Se lanzó una vez y se olvidó",
    "Llevamos la campaña, no solo el lanzamiento"
   ],
   [
    "Imposible medirlo",
    "Notoriedad medida antes y después"
   ]
  ],
  "why_eb": "Detrás de la cámara",
  "why_h": "Un equipo. De la historia al mercado.",
  "why": [
   "Historia, lanzamiento y campaña en manos de un solo equipo",
   "Historias para Good Day, Sales Doctor y Yuksalish",
   "Trabaja con tu equipo o agencia",
   "Pensado para generar notoriedad y confianza"
  ],
  "how_eb": "Proceso",
  "how_h": "De la auditoría al mercado",
  "modes": [
   "Lo llevamos nosotros",
   "Con tu equipo"
  ],
  "mode_d": [
   "Lo llevamos de la auditoría al mercado y lo mantenemos en marcha.",
   "Nos sumamos a tu equipo y creamos el contenido juntos; nosotros llevamos la historia y el lanzamiento."
  ],
  "chip": {
   "full": "AB Media",
   "sup": "Dirige AB Media",
   "you": "Tu equipo",
   "with": "Juntos",
   "opt": "Opcional"
  },
  "steps": [
   [
    "Auditoría de negocio",
    "Dónde se pierden los clientes y por qué"
   ],
   [
    "Posicionamiento",
    "Lo único que solo tú puedes decir"
   ],
   [
    "Storytelling",
    "Una historia que se recuerda y se cuenta"
   ],
   [
    "Contenido",
    "Videos, reels y posts que la cuentan"
   ],
   [
    "Go-to-market",
    "Lanzamiento en los canales de tus compradores"
   ],
   [
    "Gestión y medición",
    "La mantenemos y medimos notoriedad y confianza"
   ]
  ],
  "b_eb": "Planificador",
  "b_h": "Planifica tu lanzamiento en 30 segundos",
  "b_q": [
   "¿Dónde pierdes clientes?",
   "¿Qué tienes?",
   "¿Llevamos la campaña?"
  ],
  "b_goal": {
   "launch": "No nos conocen",
   "trust": "No confían en nosotros",
   "explain": "No entienden qué hacemos",
   "social": "Mensaje social"
  },
  "b_have": {
   "task": "Solo el objetivo",
   "idea": "Una idea",
   "agency": "Un equipo de contenido"
  },
  "b_dist": {
   "yes": "Sí, llévenla",
   "no": "No, la llevamos nosotros"
  },
  "r_format": "Formato",
  "r_focus": "Etapa",
  "r_stages": "Pasos",
  "r_case": "Historia similar",
  "r_send": "Enviar este brief",
  "r_watch": "Ver",
  "focus": {
   "launch": "Notoriedad",
   "trust": "Confianza",
   "explain": "Notoriedad → Confianza",
   "social": "Notoriedad"
  },
  "fm": [
   [
    "Historia + tu equipo"
   ],
   [
    "Campaña con historia"
   ],
   [
    "Campaña con historia + go-to-market"
   ]
  ],
  "rq_eb": "Auditoría de negocio gratis",
  "rq_h": "Lancemos tu historia",
  "rq_p": "Deja tus datos. Abror te llama.",
  "nx_h": "Próximos pasos",
  "nx": [
   "Abror lee tu solicitud",
   "Llamada de 30 min: auditoría de negocio",
   "Concepto + presupuesto"
  ],
  "slots": "Plazas libres este mes: {n}.",
  "f_name": "Nombre",
  "f_phone": "Teléfono",
  "f_email": "Email",
  "f_btn": "Enviar solicitud",
  "privacy": "Solo lo usamos para contactarte sobre tu proyecto.",
  "e_name": "Escribe tu nombre.",
  "e_phone": "Escribe un teléfono válido.",
  "e_email": "Escribe un email válido, por ejemplo nombre@gmail.com.",
  "done_h": "¡Corten! Solicitud recibida.",
  "ok": "Gracias, {n}. Abror te contactará por teléfono o email.",
  "again": "Enviar otra solicitud",
  "brief_l": "Del planificador",
  "remove": "Quitar",
  "slate": [
   "Producción",
   "Escena",
   "Toma",
   "Director"
  ],
  "faq_eb": "Preguntas",
  "faq_h": "Preguntas",
  "faq": [
   [
    "¿Qué es la auditoría de negocio?",
    "Una llamada gratuita de 30 minutos. Vemos dónde se pierden tus clientes —notoriedad, confianza o compra— y qué lanzar primero."
   ],
   [
    "¿Hacen películas?",
    "Sí, somos una productora. Hacemos nosotros mismos los videos y el contenido, y construimos a su alrededor la historia y la campaña go-to-market."
   ],
   [
    "¿Qué significa go-to-market aquí?",
    "Llevar tu producto a sus compradores: posicionamiento, historia, canales, lanzamiento y mantener la campaña en marcha."
   ],
   [
    "¿Trabajan con nuestro equipo o agencia?",
    "Sí, pero no hace falta: traemos nuestro propio equipo y hacemos el contenido nosotros. Si tienes un equipo o agencia, nos sumamos y trabajamos con ellos."
   ],
   [
    "¿Cómo miden la confianza?",
    "Una encuesta breve a tu audiencia antes y después del lanzamiento, más alcance, retención y búsquedas de marca."
   ],
   [
    "¿Cuánto cuesta?",
    "Depende del mercado, los canales y el contenido. Recibes el presupuesto después de la llamada de auditoría."
   ]
  ],
  "foot": "Producción, storytelling y go-to-market para notoriedad y confianza.",
  "ct": [
   "Teléfono",
   "Telegram",
   "Instagram",
   "Email",
   "YouTube"
  ],
  "cat": {
   "Sales Doctor Academy": "Formación empresarial",
   "Grand Capital": "Inmobiliaria",
   "Yuksalish Choy": "Té",
   "IMZO": "Marcos de puerta",
   "Good Day Cappuccino": "Bebida de café",
   "ZO'R TV": "Canal de TV",
   "To'xtaniyoz Ota": "Productos cárnicos"
  },
  "l_exec": "Productora",
  "l_task": "Encargo",
  "l_concept": "Concepto",
  "l_scope": "Alcance",
  "l_team": "Créditos",
  "r_dir": "Director",
  "r_prod": "Productor",
  "r_cam": "Operador de cámara",
  "r_amb": "Embajador",
  "r_ambs": "Embajadores",
  "sc": {
   "sVO": "Guion y locución",
   "c": "Concepto",
   "s": "Guion",
   "pre": "Preproducción",
   "prod": "Rodaje",
   "post": "Postproducción",
   "dist": "Estreno y medición",
   "preS": "Supervisión de preproducción",
   "prodS": "Supervisión de rodaje",
   "postS": "Supervisión de postproducción",
   "aud": "Auditoría de negocio",
   "pos": "Posicionamiento",
   "story": "Storytelling",
   "cont": "Contenido",
   "contS": "Contenido de tu equipo",
   "gtm": "Go-to-market",
   "run": "Gestión y medición"
  },
  "v_play": "Ver video",
  "v_film": "Video",
  "v_bts": "Detrás de cámaras",
  "close": "Cerrar",
  "alt_p": "Abror Bakhtiyarovich en Wall Street, Nueva York",
  "alt_still": "Fotograma del vídeo de {c}",
  "alt_bts": "Detrás de cámaras del rodaje de Sales Doctor Academy",
  "scene_l": "Escena",
  "scene": {
   "top": "Apertura",
   "manifest": "Manifiesto",
   "journey": "Recorrido",
   "diff": "Anuncios vs historia",
   "cases": "Trabajos",
   "fixes": "La solución",
   "why": "Abror",
   "how": "Proceso",
   "plan": "Planificador",
   "request": "Solicitud",
   "faq": "Preguntas"
  }
 },
 "ru": {
  "sending": "Отправляем…",
  "e_send": "Не удалось отправить заявку. Попробуйте ещё раз через минуту.",
  "e_rate": "Слишком много попыток. Попробуйте чуть позже.",
  "name": "Аброр Бахтиярович",
  "role": "Продакшн, сторителлинг и go-to-market, AB Media",
  "bar": "Заявка за 5 минут — и бонус:",
  "nav": [
   "Путь клиента",
   "Работы",
   "Процесс",
   "Вопросы"
  ],
  "cta": "Бесплатный бизнес-аудит",
  "hero_tag": "Видеопродакшн: имиджевые ролики, которые дают узнаваемость и доверие",
  "hero_cta": "Бесплатный бизнес-аудит",
  "hero_line": "Вас узнают.\nВам доверяют.",
  "cue": "Листайте, чтобы смотреть",
  "hero_q": "Почему 88 из 100 забывают вашу рекламу?",
  "reel_now": "В кадре",
  "cur_play": "Смотреть",
  "mf_eb": "Манифест",
  "mf": "*88 из 100* забывают вашу рекламу. Мы делаем так, чтобы вас *помнили*, а потом *доверяли*.",
  "stat_l": [
   "проектов",
   "лет",
   "просмотров",
   "проекта в месяц, максимум"
  ],
  "j_eb": "Путь клиента",
  "j_h": "Где бренды теряют клиентов",
  "s_steps": [
   [
    "{r0} увидели рекламу",
    "Увидеть — не значит узнать."
   ],
   [
    "{lost1} вас забыли",
    "Бренд помнят только {r1}."
   ],
   [
    "{p2}% не доверяют",
    "{r2} доверяют. {r3} покупают."
   ],
   [
    "Кампания с историей это меняет",
    "{f1} узнают · {f2} доверяют · {f3} покупают"
   ]
  ],
  "j_stages": [
   "Увидели",
   "Узнают",
   "Доверяют",
   "Купили"
  ],
  "j_zone": "Зона AB Media",
  "j_ours": "AB Media",
  "j_modes": [
   "Сейчас",
   "С нашей кампанией"
  ],
  "calc_h": "Ваши цифры",
  "c_reach": "Рекламный охват в месяц",
  "c_cta": "Отправить с этим расчётом",
  "j_sum": "<b>+{n}</b> покупателей в месяц при том же бюджете. Каждый в <b>{x} раза</b> дешевле.",
  "j_note": "Оценочная модель. Точные цифры — на бесплатном бизнес-аудите.",
  "calc_l": "Расчёт пути клиента",
  "calc_s": "Охват {r} → +{n} покупателей в месяц",
  "d_eb": "Разовая реклама и история",
  "d_h": "Реклама гаснет. История остаётся.",
  "d_ad": "Разовая реклама",
  "d_film": "Кампания с историей",
  "d_end": "Рекламный бюджет закончился",
  "d_y": "Внимание",
  "cs_eb": "Работы",
  "cs_h": "Истории, которые мы рассказали",
  "cs_more": "Ещё видео",
  "cs_less": "Свернуть",
  "k_views": "просмотров",
  "open_case": "Открыть кейс",
  "more": "Ещё +{n} проектов. На звонке покажем работы из вашей отрасли.",
  "f_eb": "Решение",
  "f_h": "Другие оставляют как есть. Мы исправляем.",
  "fixes": [
   [
    "Бренд никто не помнит",
    "История, которая есть только у вас"
   ],
   [
    "Лиды всё дороже",
    "Доверие удешевляет рекламу"
   ],
   [
    "Контент без плана",
    "Каждый материал работает на одну историю"
   ],
   [
    "Пять подрядчиков, ответственного нет",
    "Одна команда от истории до рынка"
   ],
   [
    "Запустили и забыли",
    "Ведём кампанию, а не только запуск"
   ],
   [
    "Результат не измерить",
    "Замеряем узнаваемость до и после"
   ]
  ],
  "why_eb": "За камерой",
  "why_h": "Одна команда. От истории до рынка.",
  "why": [
   "История, запуск и кампания в одних руках",
   "Истории для Good Day, Sales Doctor и Yuksalish",
   "Работает с вашей командой или агентством",
   "Работает на узнаваемость и доверие"
  ],
  "how_eb": "Процесс",
  "how_h": "От аудита до рынка",
  "modes": [
   "Ведём мы",
   "С вашей командой"
  ],
  "mode_d": [
   "От аудита до рынка — и поддерживаем кампанию дальше.",
   "Мы подключаемся к вашей команде и делаем контент вместе; историю и запуск ведём мы."
  ],
  "chip": {
   "full": "AB Media",
   "sup": "Ведёт AB Media",
   "you": "Ваша команда",
   "with": "Вместе",
   "opt": "По желанию"
  },
  "steps": [
   [
    "Бизнес-аудит",
    "Где и почему теряются клиенты"
   ],
   [
    "Позиционирование",
    "То, что можете сказать только вы"
   ],
   [
    "Сторителлинг",
    "История, которую помнят и пересказывают"
   ],
   [
    "Контент",
    "Видео, рилсы и посты, которые её рассказывают"
   ],
   [
    "Go-to-market",
    "Запуск в каналах ваших покупателей"
   ],
   [
    "Ведение и замер",
    "Ведём кампанию и измеряем узнаваемость и доверие"
   ]
  ],
  "b_eb": "Планировщик",
  "b_h": "Спланируйте запуск за 30 секунд",
  "b_q": [
   "Где теряете клиентов?",
   "Что у вас есть?",
   "Ведём кампанию вместе?"
  ],
  "b_goal": {
   "launch": "Нас не знают",
   "trust": "Нам не доверяют",
   "explain": "Не понимают, что мы делаем",
   "social": "Социальный посыл"
  },
  "b_have": {
   "task": "Только цель",
   "idea": "Идея",
   "agency": "Своя контент-команда"
  },
  "b_dist": {
   "yes": "Да, ведите",
   "no": "Нет, ведём сами"
  },
  "r_format": "Формат",
  "r_focus": "Этап",
  "r_stages": "Шаги",
  "r_case": "Похожая история",
  "r_send": "Отправить бриф",
  "r_watch": "Смотреть",
  "focus": {
   "launch": "Узнаваемость",
   "trust": "Доверие",
   "explain": "Узнаваемость → Доверие",
   "social": "Узнаваемость"
  },
  "fm": [
   [
    "История + ваша команда"
   ],
   [
    "Кампания с историей"
   ],
   [
    "Кампания с историей + go-to-market"
   ]
  ],
  "rq_eb": "Бесплатный бизнес-аудит",
  "rq_h": "Давайте запустим вашу историю",
  "rq_p": "Оставьте контакты. Аброр перезвонит.",
  "nx_h": "Что дальше",
  "nx": [
   "Аброр читает заявку",
   "30-минутный звонок: бизнес-аудит",
   "Концепция + бюджет"
  ],
  "slots": "Свободных мест в этом месяце: {n}.",
  "f_name": "Имя",
  "f_phone": "Телефон",
  "f_email": "Email",
  "f_btn": "Отправить заявку",
  "privacy": "Используем только для связи по проекту.",
  "e_name": "Введите имя.",
  "e_phone": "Введите корректный номер телефона.",
  "e_email": "Введите корректный email, например name@gmail.com.",
  "done_h": "Стоп, снято! Заявка принята.",
  "ok": "Спасибо, {n}. Аброр свяжется с вами по телефону или email.",
  "again": "Отправить ещё одну заявку",
  "brief_l": "Из планировщика",
  "remove": "Удалить",
  "slate": [
   "Продакшн",
   "Сцена",
   "Дубль",
   "Режиссёр"
  ],
  "faq_eb": "Вопросы",
  "faq_h": "Вопросы",
  "faq": [
   [
    "Что такое бизнес-аудит?",
    "Бесплатный 30-минутный звонок. Находим, где теряются клиенты — узнаваемость, доверие или покупка — и что запускать первым."
   ],
   [
    "Вы снимаете фильмы?",
    "Да, мы продакшн-студия. Сами снимаем видео и создаём контент, а вокруг них строим историю и кампанию go-to-market."
   ],
   [
    "Что значит go-to-market?",
    "Вывод продукта к покупателям: позиционирование, история, каналы, запуск и ведение кампании."
   ],
   [
    "Работаете с нашей командой или агентством?",
    "Да, но своя команда не обязательна: мы подключаем свою команду и делаем контент сами. Если у вас есть команда или агентство, мы подключаемся и работаем вместе с ними."
   ],
   [
    "Как вы измеряете доверие?",
    "Короткий опрос аудитории до и после запуска, плюс охват, досматриваемость и брендовые запросы."
   ],
   [
    "Сколько это стоит?",
    "Зависит от рынка, каналов и контента. Бюджет назовём после звонка-аудита."
   ]
  ],
  "foot": "Продакшн, сторителлинг и go-to-market для узнаваемости и доверия.",
  "ct": [
   "Телефон",
   "Telegram",
   "Instagram",
   "Email",
   "YouTube"
  ],
  "cat": {
   "Sales Doctor Academy": "Бизнес-образование",
   "Grand Capital": "Недвижимость",
   "Yuksalish Choy": "Чай",
   "IMZO": "Дверные коробки",
   "Good Day Cappuccino": "Кофейный напиток",
   "ZO'R TV": "Телеканал",
   "To'xtaniyoz Ota": "Мясная продукция"
  },
  "l_exec": "Продакшн",
  "l_task": "Задача",
  "l_concept": "Концепция",
  "l_scope": "Объём работ",
  "l_team": "Команда",
  "r_dir": "Режиссёр",
  "r_prod": "Продюсер",
  "r_cam": "Оператор",
  "r_amb": "Амбассадор",
  "r_ambs": "Амбассадоры",
  "sc": {
   "sVO": "Сценарий и дикторский текст",
   "c": "Концепция",
   "s": "Сценарий",
   "pre": "Препродакшн",
   "prod": "Съёмка",
   "post": "Постпродакшн",
   "dist": "Выход и замер",
   "preS": "Контроль препродакшна",
   "prodS": "Контроль съёмки",
   "postS": "Контроль постпродакшна",
   "aud": "Бизнес-аудит",
   "pos": "Позиционирование",
   "story": "Сторителлинг",
   "cont": "Контент",
   "contS": "Контент вашей команды",
   "gtm": "Go-to-market",
   "run": "Ведение и замер"
  },
  "v_play": "Смотреть видео",
  "v_film": "Видео",
  "v_bts": "Бэкстейдж",
  "close": "Закрыть",
  "alt_p": "Аброр Бахтиярович на Уолл-стрит, Нью-Йорк",
  "alt_still": "Кадр из ролика {c}",
  "alt_bts": "Бэкстейдж съёмок Sales Doctor Academy",
  "scene_l": "Сцена",
  "scene": {
   "top": "Вступление",
   "manifest": "Манифест",
   "journey": "Путь клиента",
   "diff": "Реклама и история",
   "cases": "Работы",
   "fixes": "Решение",
   "why": "Аброр",
   "how": "Процесс",
   "plan": "Планировщик",
   "request": "Заявка",
   "faq": "Вопросы"
  }
 },
 "ar": {
  "sending": "جارٍ الإرسال…",
  "e_send": "تعذّر إرسال طلبك. حاول مجددًا بعد دقيقة.",
  "e_rate": "محاولات كثيرة. حاول بعد قليل.",
  "name": "أبرور بختياروفيتش",
  "role": "الإنتاج وسرد القصص والدخول إلى السوق، AB Media",
  "bar": "اطلب خلال 5 دقائق واحصل على مكافأة:",
  "nav": [
   "رحلة العميل",
   "أعمالنا",
   "طريقة العمل",
   "الأسئلة"
  ],
  "cta": "تدقيق أعمال مجاني",
  "hero_tag": "إنتاج فيديو وأفلام للعلامات التجارية تبني الشهرة والثقة",
  "hero_cta": "تدقيق أعمال مجاني",
  "hero_line": "ليعرفوك.\nوليثقوا بك.",
  "cue": "مرّر للتشغيل",
  "hero_q": "لماذا ينسى 88 شخصًا من كل 100 إعلانك؟",
  "reel_now": "على الشاشة",
  "cur_play": "شاهد",
  "mf_eb": "البيان",
  "mf": "*88 من كل 100* ينسون إعلانك. نحن نجعلهم *يتذكرونك* ثم *يثقون* بك.",
  "stat_l": [
   "مشروعًا",
   "سنوات",
   "مشاهدة",
   "مشاريع شهريًا كحد أقصى"
  ],
  "j_eb": "رحلة العميل",
  "j_h": "أين تخسر العلامات عملاءها",
  "s_steps": [
   [
    "{r0} شاهدوا إعلانك",
    "المشاهدة ليست معرفة."
   ],
   [
    "{lost1} نسوك",
    "{r1} فقط يتذكرون العلامة."
   ],
   [
    "{p2}% لا يثقون بك",
    "{r2} يثقون. {r3} يشترون."
   ],
   [
    "حملة بقصة تغيّر ذلك",
    "{f1} يعرفونك · {f2} يثقون · {f3} يشترون"
   ]
  ],
  "j_stages": [
   "شاهدوا",
   "عرفوا",
   "وثقوا",
   "اشتروا"
  ],
  "j_zone": "منطقة AB Media",
  "j_ours": "AB Media",
  "j_modes": [
   "اليوم",
   "مع حملتنا"
  ],
  "calc_h": "أرقامك",
  "c_reach": "الوصول الشهري للإعلان",
  "c_cta": "أرسل مع هذا التقدير",
  "j_sum": "<b>+{n}</b> مشترٍ شهريًا بنفس الميزانية. وتكلفة كل مشترٍ أقل بمعامل <b>{x}</b>.",
  "j_note": "نموذج تقديري. الأرقام الدقيقة في تدقيق الأعمال المجاني.",
  "calc_l": "تقدير رحلة العميل",
  "calc_s": "وصول {r} ← +{n} مشترٍ شهريًا",
  "d_eb": "إعلانات عابرة مقابل قصة",
  "d_h": "الإعلان يتوقف. القصة تبقى.",
  "d_ad": "إعلانات عابرة",
  "d_film": "حملة بقصة",
  "d_end": "انتهاء ميزانية الإعلان",
  "d_y": "الانتباه",
  "cs_eb": "أعمالنا",
  "cs_h": "قصص رويناها",
  "cs_more": "المزيد من الفيديوهات",
  "cs_less": "عرض أقل",
  "k_views": "مشاهدة",
  "open_case": "اعرض العمل",
  "more": "+{n} مشروعًا آخر. في المكالمة نعرض أعمالًا من مجالك.",
  "f_eb": "الحل",
  "f_h": "غيرنا يتركه. نحن نصلحه.",
  "fixes": [
   [
    "لا أحد يتذكر العلامة",
    "قصة لا يملكها غيرك"
   ],
   [
    "العملاء المحتملون يزدادون كلفة",
    "الثقة تجعل الإعلان أرخص"
   ],
   [
    "محتوى بلا خطة",
    "كل مادة تخدم قصة واحدة"
   ],
   [
    "خمسة متعهدين بلا مسؤول",
    "فريق واحد من القصة إلى السوق"
   ],
   [
    "أُطلقت مرة ثم نُسيت",
    "ندير الحملة، لا الإطلاق فقط"
   ],
   [
    "لا يمكن قياس النتيجة",
    "نقيس الشهرة قبل وبعد"
   ]
  ],
  "why_eb": "خلف الكاميرا",
  "why_h": "فريق واحد. من القصة إلى السوق.",
  "why": [
   "القصة والإطلاق والحملة تحت إدارة واحدة",
   "قصص لـ Good Day وSales Doctor وYuksalish",
   "يعمل مع فريقك أو وكالتك",
   "مصمَّم للشهرة والثقة"
  ],
  "how_eb": "طريقة العمل",
  "how_h": "من التدقيق إلى السوق",
  "modes": [
   "نديرها نحن",
   "مع فريقك"
  ],
  "mode_d": [
   "من التدقيق إلى السوق، ونواصل إدارة الحملة.",
   "ننضم إلى فريقك ونصنع المحتوى معًا، ونقود القصة والإطلاق."
  ],
  "chip": {
   "full": "AB Media",
   "sup": "بقيادة AB Media",
   "you": "فريقك",
   "with": "معًا",
   "opt": "اختياري"
  },
  "steps": [
   [
    "تدقيق الأعمال",
    "أين ولماذا يضيع العملاء"
   ],
   [
    "التموضع",
    "ما لا يستطيع قوله أحد غيرك"
   ],
   [
    "سرد القصة",
    "قصة يتذكرها الناس ويعيدون روايتها"
   ],
   [
    "المحتوى",
    "فيديوهات ومقاطع ومنشورات تنقلها"
   ],
   [
    "الدخول إلى السوق",
    "الإطلاق في قنوات مشتريك"
   ],
   [
    "الإدارة والقياس",
    "ندير الحملة ونقيس الشهرة والثقة"
   ]
  ],
  "b_eb": "المخطِّط",
  "b_h": "خطّط إطلاقك في 30 ثانية",
  "b_q": [
   "أين تخسر العملاء؟",
   "ماذا لديك؟",
   "هل ندير الحملة معًا؟"
  ],
  "b_goal": {
   "launch": "لا يعرفوننا",
   "trust": "لا يثقون بنا",
   "explain": "لا يفهمون ما نفعله",
   "social": "رسالة اجتماعية"
  },
  "b_have": {
   "task": "الهدف فقط",
   "idea": "فكرة",
   "agency": "فريق محتوى"
  },
  "b_dist": {
   "yes": "نعم، أديروها",
   "no": "لا، نديرها بأنفسنا"
  },
  "r_format": "الصيغة",
  "r_focus": "المرحلة",
  "r_stages": "الخطوات",
  "r_case": "قصة مشابهة",
  "r_send": "أرسل هذا الملخص",
  "r_watch": "شاهد",
  "focus": {
   "launch": "الشهرة",
   "trust": "الثقة",
   "explain": "الشهرة ← الثقة",
   "social": "الشهرة"
  },
  "fm": [
   [
    "قصة + فريقك"
   ],
   [
    "حملة بقصة"
   ],
   [
    "حملة بقصة + دخول إلى السوق"
   ]
  ],
  "rq_eb": "تدقيق أعمال مجاني",
  "rq_h": "لنطلق قصتك",
  "rq_p": "اترك بياناتك. أبرور سيتصل بك.",
  "nx_h": "الخطوات التالية",
  "nx": [
   "أبرور يقرأ طلبك",
   "مكالمة 30 دقيقة: تدقيق الأعمال",
   "الفكرة + الميزانية"
  ],
  "slots": "الأماكن المتاحة هذا الشهر: {n}.",
  "f_name": "الاسم",
  "f_phone": "الهاتف",
  "f_email": "البريد الإلكتروني",
  "f_btn": "أرسل الطلب",
  "privacy": "نستخدم بياناتك فقط للتواصل معك بشأن مشروعك.",
  "e_name": "اكتب اسمك.",
  "e_phone": "اكتب رقم هاتف صحيحًا.",
  "e_email": "اكتب بريدًا إلكترونيًا صحيحًا، مثل name@gmail.com.",
  "done_h": "اقطع! وصلنا طلبك.",
  "ok": "شكرًا {n}. سيتواصل معك أبرور عبر الهاتف أو البريد.",
  "again": "أرسل طلبًا آخر",
  "brief_l": "من المخطِّط",
  "remove": "إزالة",
  "slate": [
   "الإنتاج",
   "المشهد",
   "اللقطة",
   "المخرج"
  ],
  "faq_eb": "الأسئلة",
  "faq_h": "الأسئلة",
  "faq": [
   [
    "ما هو تدقيق الأعمال؟",
    "مكالمة مجانية مدتها 30 دقيقة. نحدد أين يضيع عملاؤك: الشهرة أو الثقة أو الشراء، وما الذي نطلقه أولًا."
   ],
   [
    "هل تصنعون أفلامًا؟",
    "نعم، نحن استوديو إنتاج. نصنع الأفلام والمحتوى بأنفسنا، ونبني حولها القصة وحملة الدخول إلى السوق."
   ],
   [
    "ماذا يعني الدخول إلى السوق هنا؟",
    "إيصال منتجك إلى مشتريه: التموضع والقصة والقنوات والإطلاق ومواصلة إدارة الحملة."
   ],
   [
    "هل تعملون مع فريقنا أو وكالتنا؟",
    "نعم، لكنك لا تحتاج إلى فريق: نأتي بفريقنا ونصنع المحتوى بأنفسنا. وإن كان لديك فريق أو وكالة، ننضم إليهم ونعمل معهم."
   ],
   [
    "كيف تقيسون الثقة؟",
    "استبيان قصير لجمهورك قبل الإطلاق وبعده، إضافة إلى الوصول ومدة المشاهدة وعمليات البحث عن العلامة."
   ],
   [
    "كم التكلفة؟",
    "تعتمد على السوق والقنوات والمحتوى. تحصل على الميزانية بعد مكالمة التدقيق."
   ]
  ],
  "foot": "الإنتاج وسرد القصص والدخول إلى السوق للشهرة والثقة.",
  "ct": [
   "الهاتف",
   "تيليغرام",
   "إنستغرام",
   "البريد",
   "يوتيوب"
  ],
  "cat": {
   "Sales Doctor Academy": "تعليم الأعمال",
   "Grand Capital": "العقارات",
   "Yuksalish Choy": "الشاي",
   "IMZO": "إطارات الأبواب",
   "Good Day Cappuccino": "مشروب القهوة",
   "ZO'R TV": "قناة تلفزيونية",
   "To'xtaniyoz Ota": "منتجات اللحوم"
  },
  "l_exec": "شركة الإنتاج",
  "l_task": "المهمة",
  "l_concept": "الفكرة",
  "l_scope": "نطاق العمل",
  "l_team": "فريق العمل",
  "r_dir": "المخرج",
  "r_prod": "المنتج",
  "r_cam": "المصوّر",
  "r_amb": "السفير",
  "r_ambs": "السفراء",
  "sc": {
   "sVO": "السيناريو والتعليق الصوتي",
   "c": "الفكرة",
   "s": "السيناريو",
   "pre": "ما قبل الإنتاج",
   "prod": "التصوير",
   "post": "ما بعد الإنتاج",
   "dist": "العرض والقياس",
   "preS": "الإشراف على ما قبل الإنتاج",
   "prodS": "الإشراف على التصوير",
   "postS": "الإشراف على ما بعد الإنتاج",
   "aud": "تدقيق الأعمال",
   "pos": "التموضع",
   "story": "سرد القصة",
   "cont": "المحتوى",
   "contS": "محتوى فريقك",
   "gtm": "الدخول إلى السوق",
   "run": "الإدارة والقياس"
  },
  "v_play": "شاهد الفيديو",
  "v_film": "الفيديو",
  "v_bts": "الكواليس",
  "close": "إغلاق",
  "alt_p": "أبرور بختياروفيتش في وول ستريت، نيويورك",
  "alt_still": "لقطة من فيلم {c}",
  "alt_bts": "كواليس تصوير Sales Doctor Academy",
  "scene_l": "مشهد",
  "scene": {
   "top": "الافتتاح",
   "manifest": "البيان",
   "journey": "رحلة العميل",
   "diff": "الإعلان والقصة",
   "cases": "أعمالنا",
   "fixes": "الحل",
   "why": "أبرور",
   "how": "طريقة العمل",
   "plan": "المخطِّط",
   "request": "الطلب",
   "faq": "الأسئلة"
  }
 }
};

const P = {
 "AB": {
  "en": "Abror Bakhtiyarovich",
  "ru": "Аброр Бахтиярович",
  "ar": "أبرور بختياروفيتش"
 },
 "RS": {
  "en": "Rikhsitilla Shermukhammedov",
  "ru": "Рихситилла Шермухаммедов",
  "ar": "ريخسيتيلا شيرمحمدوف"
 },
 "AI": {
  "en": "Alisher Isaev",
  "ru": "Алишер Исаев",
  "ar": "عليشير عيسايف"
 },
 "JB": {
  "en": "Jasur Buriev",
  "ru": "Жасур Буриев",
  "ar": "جاسور بورييف"
 },
 "KZ": {
  "en": "Kamoliddin Ziyovuddinov",
  "ru": "Камолиддин Зиёвуддинов",
  "ar": "كمال الدين ضياء الدينوف"
 },
 "AK": {
  "en": "Abbos Kenjaev",
  "ru": "Аббос Кенжаев",
  "ar": "عباس كنجاييف"
 },
 "AN": {
  "en": "Alisher Normetov",
  "ru": "Алишер Норметов",
  "ar": "عليشير نورمتوف"
 },
 "SK": {
  "en": "Sarvar and Komil",
  "es": "Sarvar y Komil",
  "ru": "Сарвар и Комил",
  "ar": "سرور وكامل"
 },
 "HA": {
  "en": "Husan Aliev",
  "ru": "Хусан Алиев",
  "ar": "حسن علييف"
 },
 "HN": {
  "en": "Habibullo Nabiev",
  "ru": "Хабибулло Набиев",
  "ar": "حبيب الله نبييف"
 },
 "BG": {
  "en": "Bogdan",
  "ru": "Богдан",
  "ar": "بوغدان"
 },
 "BK": {
  "en": "Bakhtiyor",
  "ru": "Бахтиёр",
  "ar": "بختيار"
 },
 "SS": {
  "en": "Sarvar Sobirov",
  "ru": "Сарвар Собиров",
  "ar": "سرور صابروف"
 },
 "IL": {
  "en": "Ilya",
  "ru": "Илья",
  "ar": "إيليا"
 }
};

const CASES = [
 {
  "client": "Sales Doctor Academy",
  "exec": "Meet Up",
  "video": "sales-doctor",
  "dur": "1:50",
  "bts": {
   "video": "sales-doctor-backstage",
   "dur": "1:41"
  },
  "scope": [
   "c",
   "s",
   "pre",
   "prod",
   "post"
  ],
  "mx": "FFFFF",
  "roles": [
   "r_dir",
   "r_prod"
  ],
  "credits": [
   [
    "r_dir",
    [
     "AB"
    ]
   ],
   [
    "r_prod",
    [
     "AB"
    ]
   ],
   [
    "r_cam",
    [
     "RS"
    ]
   ],
   [
    "r_amb",
    [
     "AI"
    ]
   ]
  ],
  "t": {
   "en": [
    "Explain what Sales Doctor Academy does.",
    "However bad things get for a business, it can be saved, and Sales Doctor Academy is there to help."
   ],
   "es": [
    "Explicar a qué se dedica Sales Doctor Academy.",
    "Por muy mal que esté un negocio, se puede salvar, y Sales Doctor Academy llega para ayudar."
   ],
   "ru": [
    "Объяснить, чем занимается Sales Doctor Academy.",
    "Как бы тяжело ни было бизнесу, его можно спасти, и Sales Doctor Academy приходит на помощь."
   ],
   "ar": [
    "شرح ما تقوم به Sales Doctor Academy.",
    "مهما ساءت حال الشركة، يمكن إنقاذها، وSales Doctor Academy هنا لتساعد."
   ]
  }
 },
 {
  "client": "Grand Capital",
  "exec": "Bek Shox",
  "video": "grand-capital",
  "dur": "1:24",
  "scope": [
   "c",
   "s",
   "preS",
   "prodS",
   "postS"
  ],
  "mx": "FFSSS",
  "roles": [
   "r_prod"
  ],
  "credits": [
   [
    "r_dir",
    [
     "JB"
    ]
   ],
   [
    "r_prod",
    [
     "AB"
    ]
   ],
   [
    "r_cam",
    [
     "KZ"
    ]
   ],
   [
    "r_ambs",
    [
     "SK"
    ]
   ]
  ],
  "t": {
   "en": [
    "An explainer film with Sarvar and Komil showing the advantages of Grand Capital homes.",
    "Sarvar and Komil can't find a home that suits their taste. After a presentation, they fall for the homes built by Grand Capital."
   ],
   "es": [
    "Un video informativo con Sarvar y Komil que muestra las ventajas de las viviendas de Grand Capital.",
    "Sarvar y Komil no encuentran una casa a su gusto. Tras una presentación, se enamoran de las casas construidas por Grand Capital."
   ],
   "ru": [
    "Информационный ролик с Сарваром и Комилом о преимуществах домов Grand Capital.",
    "Сарвар и Комил не могут найти дом по своему вкусу. После презентации они влюбляются в дома, построенные Grand Capital."
   ],
   "ar": [
    "فيلم تعريفي بمشاركة سرور وكامل يُبرز مزايا منازل Grand Capital.",
    "لا يجد سرور وكامل منزلًا يناسب ذوقهما، وبعد العرض التقديمي تعجبهما المنازل التي بنتها Grand Capital."
   ]
  }
 },
 {
  "client": "Yuksalish Choy",
  "exec": "AB Media",
  "video": "yuksalish",
  "dur": "0:33",
  "scope": [
   "c",
   "s",
   "pre",
   "prod",
   "post"
  ],
  "mx": "FFFFF",
  "roles": [
   "r_dir",
   "r_prod"
  ],
  "credits": [
   [
    "r_dir",
    [
     "AB"
    ]
   ],
   [
    "r_prod",
    [
     "AB"
    ]
   ],
   [
    "r_cam",
    [
     "HA"
    ]
   ]
  ],
  "t": {
   "en": [
    "Yuksalish Choy is new to the market. Find what sets it apart on entry and build a film around it.",
    "Part of the revenue from Yuksalish tea goes to students in need. By drinking it, people sponsor young people's education."
   ],
   "es": [
    "Yuksalish Choy es una marca nueva. Encontrar lo que la distingue al entrar al mercado y construir un video en torno a eso.",
    "Parte de los ingresos del té Yuksalish se destina a estudiantes con necesidades. Quien lo bebe patrocina la educación de jóvenes."
   ],
   "ru": [
    "Yuksalish Choy — новый бренд на рынке. Найти, чем он выделяется при выходе на рынок, и снять ролик с акцентом на этом.",
    "Часть дохода от чая Yuksalish идёт нуждающимся студентам. Покупая этот чай, люди спонсируют учёбу молодых людей."
   ],
   "ar": [
    "Yuksalish Choy علامة جديدة في السوق. المطلوب إيجاد ما يميّزها عند دخولها السوق وبناء فيلم حوله.",
    "يُخصَّص جزء من عائدات شاي Yuksalish لطلاب العلم المحتاجين، فكل من يشربه يرعى تعليم شاب محتاج."
   ]
  }
 },
 {
  "client": "IMZO",
  "exec": "Khabi Media",
  "video": "imzo",
  "dur": "1:11",
  "scope": [
   "pre",
   "prodS",
   "postS"
  ],
  "mx": "00FSS",
  "roles": [
   "r_prod"
  ],
  "credits": [
   [
    "r_dir",
    [
     "HN"
    ]
   ],
   [
    "r_prod",
    [
     "AB"
    ]
   ],
   [
    "r_cam",
    [
     "SS"
    ]
   ]
  ],
  "t": {
   "en": [
    "Tell people that Imzo frame production is now running in Samarkand, Fergana and other cities.",
    "Door frames used to be ordered from Tashkent, with days of waiting, and any defect meant another trip to Tashkent and more days. Now Imzo is in your city, so there's no waiting."
   ],
   "es": [
    "Comunicar que Imzo ya fabrica marcos de puerta en Samarcanda, Fergana y otras ciudades.",
    "Antes los marcos de puerta se pedían a Taskent y había que esperar días; cualquier defecto implicaba volver a Taskent y esperar otra vez. Ahora Imzo está en tu ciudad y no hace falta esperar."
   ],
   "ru": [
    "Сообщить людям, что производство дверных коробок Imzo запущено в Самарканде, Фергане и других городах.",
    "Раньше дверные коробки заказывали в Ташкенте и ждали несколько дней, а при любом дефекте везли обратно в Ташкент и снова ждали. Теперь Imzo в вашем городе, и ждать не нужно."
   ],
   "ar": [
    "إبلاغ الناس بأن إنتاج إطارات Imzo انطلق في سمرقند وفرغانة ومدن أخرى.",
    "كانت إطارات الأبواب تُطلب من طشقند مع انتظار لأيام، وأي عيب يعني العودة إلى طشقند وأيامًا أخرى من الانتظار. الآن Imzo في مدينتك، ولا داعي للانتظار."
   ]
  }
 },
 {
  "client": "Good Day Cappuccino",
  "exec": "AB Media",
  "video": "good-day",
  "dur": "0:45",
  "scope": [
   "c",
   "s",
   "pre",
   "prod",
   "post"
  ],
  "mx": "FFFFF",
  "roles": [
   "r_dir",
   "r_prod"
  ],
  "credits": [
   [
    "r_dir",
    [
     "AB"
    ]
   ],
   [
    "r_prod",
    [
     "AB"
    ]
   ],
   [
    "r_cam",
    [
     "HA"
    ]
   ]
  ],
  "t": {
   "en": [
    "Bring Good Day Cappuccino to the Uzbek market. Show that it tastes close to freshly made cappuccino but costs less, and that it suits people of every background and age, in a musical ad that sticks in the ear.",
    "People who spend their days at the bazaar, on building sites, at school, out on the street and in the office sing with joy at finding the cappuccino they wanted."
   ],
   "es": [
    "Introducir Good Day Cappuccino en el mercado uzbeko. Mostrar que su sabor se parece al de un capuchino recién hecho pero cuesta menos, y que sirve para personas de todos los perfiles y edades, con un anuncio musical pegadizo.",
    "Personas que pasan sus días en el bazar, en la obra, en el aula, en la calle y en la oficina cantan felices por haber encontrado el capuchino que querían."
   ],
   "ru": [
    "Вывести Good Day Cappuccino на рынок Узбекистана. Показать, что по вкусу он близок к свежесваренному капучино, но дешевле, и что он подходит людям разных слоёв и возрастов, в музыкальной рекламе, которая врезается в память.",
    "Люди, которые проводят дни на базаре, на стройке, на учёбе, на улице и в офисе, поют от радости, найдя тот капучино, который хотели."
   ],
   "ar": [
    "إدخال Good Day Cappuccino إلى السوق الأوزبكية، وإظهار أن طعمه قريب من الكابتشينو الطازج لكنه أرخص، وأنه يناسب الناس من مختلف الفئات والأعمار، في إعلان موسيقي يعلق في الأذن.",
    "أناس يقضون أيامهم في السوق وفي مواقع البناء وفي أماكن الدراسة وفي الشارع وفي المكتب، يغنّون فرحًا لأنهم وجدوا الكابتشينو الذي أرادوه."
   ]
  }
 },
 {
  "client": "ZO'R TV",
  "exec": "AB Media",
  "video": "zor-tv",
  "dur": "2:05",
  "scope": [
   "c",
   "s",
   "pre",
   "prod",
   "post"
  ],
  "mx": "FFFFF",
  "roles": [
   "r_prod"
  ],
  "credits": [
   [
    "r_dir",
    [
     "AK"
    ]
   ],
   [
    "r_prod",
    [
     "AB"
    ]
   ],
   [
    "r_cam",
    [
     "AN"
    ]
   ]
  ],
  "t": {
   "en": [
    "A public-service film about saving electricity. Viewers should come away thinking seriously about it.",
    "A schoolboy watches his mother blow through a long pipe to feed air to the stove fire, and the flame catches. He then tries to light the light bulbs by blowing through the same pipe."
   ],
   "es": [
    "Un spot social sobre el ahorro de electricidad. Quien lo vea debe quedarse pensando en serio en ello.",
    "Un niño en edad escolar ve a su madre soplar por un tubo largo para avivar el fuego del fogón, y la llama prende. Entonces intenta encender los focos soplando por el mismo tubo."
   ],
   "ru": [
    "Социальный ролик об экономии электроэнергии. Зритель должен всерьёз задуматься об этом.",
    "Школьник видит, как мама дует в длинную трубу, чтобы раздуть огонь в очаге, и огонь разгорается. Тогда он пытается через ту же трубу зажечь лампочки."
   ],
   "ar": [
    "فيلم توعوي عن ترشيد استهلاك الكهرباء، يجعل المشاهد يفكر بجدية في توفيرها.",
    "يرى تلميذ أمه تنفخ في أنبوب طويل لتوصل الهواء إلى نار الموقد فتشتعل، فيحاول أن يضيء المصابيح بالنفخ في الأنبوب نفسه."
   ]
  }
 },
 {
  "client": "To'xtaniyoz Ota",
  "exec": "AB Media",
  "video": "toxtaniyoz",
  "dur": "0:34",
  "scope": [
   "c",
   "pre",
   "prod",
   "post"
  ],
  "mx": "F0FFF",
  "roles": [
   "r_dir",
   "r_prod"
  ],
  "credits": [
   [
    "r_dir",
    [
     "AB"
    ]
   ],
   [
    "r_prod",
    [
     "AB"
    ]
   ],
   [
    "r_cam",
    [
     "KZ"
    ]
   ]
  ],
  "t": {
   "en": [
    "Make To'xtaniyoz Ota sausages look appetizing and show that they are made to time-honoured recipes.",
    "A granddaughter tastes the sausages her grandfather made and loves them. The grandfather reveals the secret of their flavour, and his son starts making sausages to that recipe in the factory."
   ],
   "es": [
    "Mostrar las salchichas To'xtaniyoz Ota de forma apetitosa y que se elaboran con recetas de toda la vida.",
    "Una nieta prueba las salchichas que preparó su abuelo y le encantan. El abuelo revela el secreto de su sabor, y su hijo empieza a elaborarlas con esa receta en la fábrica."
   ],
   "ru": [
    "Показать сосиски To'xtaniyoz Ota аппетитно и подчеркнуть, что их готовят по старинным рецептам.",
    "Внучка пробует сосиски, которые приготовил дедушка, и восхищается их вкусом. Дедушка раскрывает секрет, а его сын начинает готовить сосиски по этому рецепту в цеху."
   ],
   "ar": [
    "إظهار نقانق To'xtaniyoz Ota بشكل يفتح الشهية، وإبراز أنها تُصنع وفق وصفات عريقة.",
    "تتذوق الحفيدة النقانق التي صنعها جدها فتُعجب بطعمها. يكشف الجد سر مذاقها، ويبدأ ابنه بصنع النقانق وفق هذه الوصفة في المصنع."
   ]
  }
 }
];

window.ABM_I18N = { L, P, CASES, LANGS: ["en", "es", "ru", "ar"] };
})();
