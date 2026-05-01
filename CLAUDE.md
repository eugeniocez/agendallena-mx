# CLAUDE.md — citas.bot

> Contexto completo del proyecto para Claude Code. Lee este archivo al inicio de cada sesión antes de hacer cambios.

---

## 1. Producto

**Nombre:** citas.bot
**Dominio:** citas.bot
**Tipo:** SaaS B2B (multi-vertical)
**Mercado:** México / LATAM
**Idioma del producto y marketing:** Español (LATAM)
**Etapa:** Lanzamiento (abril 2026)

### Descripción en una línea
El sistema que confirma tus citas por ti.

### Descripción extendida
citas.bot es un sistema de confirmación automática de citas para negocios B2B que viven de su agenda. No es un calendario más, ni un CRM, ni un bot conversacional: es un sistema que convierte cada cita tentativa en una cita confirmada mediante mensajes automáticos de SMS, WhatsApp y llamadas automatizadas.

---

## 2. Problema que resuelve

Los negocios basados en citas (clínicas, estilistas, terapeutas, talleres, consultorios) pierden hasta el 30% de sus citas por inasistencias no gestionadas. Las herramientas actuales son:

- **Libreta física:** pasiva, no avisa, fácil de perder
- **WhatsApp:** las confirmaciones se entierran entre cien conversaciones
- **Memoria:** falla cuando atiendes todo el día
- **Calendly y similares:** no están diseñados para LATAM, no automatizan confirmaciones por SMS/WhatsApp/llamada, no tienen reactivación de clientes

Cada cita perdida es dinero que se va. Una semana entera de ingresos al mes simplemente desaparece.

---

## 3. Usuario objetivo

**Perfil principal:** Dueños y operadores de negocios B2B basados en citas en LATAM.

**Verticales atendidas (multi-vertical):**
- Clínicas dentales, médicos, terapeutas
- Estilistas, barberías, salones de belleza
- Spas, centros de bienestar
- Consultorios profesionales
- Talleres mecánicos
- Cualquier negocio que opere por citas agendadas

**Características del usuario:**
- No es técnico (no es developer, no es power user de software)
- Usa WhatsApp Business o regular como canal principal con clientes
- Generalmente atiende su propio negocio o tiene una recepcionista
- Es operativo, no estratégico: necesita herramientas que funcionen sin curva de aprendizaje
- El precio importa: $199 MXN/mes debe sentirse "barato para lo que hace"

**El usuario NO es:**
- Developer o usuario técnico avanzado
- Empresa grande con equipo de IT
- Negocio que no cobra por citas individuales (ej: e-commerce, restaurantes)

---

## 4. Propuesta de valor

### Promesa central
**"Tus citas, confirmadas."**

### Mensajes secundarios
- Menos inasistencias, más certeza
- Sin perseguir a nadie por WhatsApp
- En 5 minutos estás operando
- Un plan, sin sorpresas: $199 MXN/mes

### Lo que NO somos (importante para evitar drift)
- NO somos "un calendario más bonito"
- NO somos un CRM
- NO somos un bot conversacional con IA
- NO vendemos "agendar mejor" — vendemos "deja de perder dinero por inasistencias"

---

## 5. Funcionalidades del producto (5 módulos)

### 1. Calendario
- Vista por día o 3 días
- Sistema de colores por estado de cita:
  - **Blanco:** cita apartada, recordatorio por enviar
  - **Verde:** cliente confirmó
  - **Amarillo:** recordatorio enviado, sin confirmar
  - **Rojo:** cliente solicitó cancelar
  - **Negro con stripes naranjas:** inasistencia registrada
  - **Verde claro:** cliente llegó sin cita previa
- Navegación por días (pasado/futuro)
- Botón informativo que explica los colores

### 2. Directorio (Clientes)
- Auto-registro de clientes al agendar
- Búsqueda por nombre o celular
- Perfil de cliente: celular, última visita, inasistencias, días sin visitar
- Historial completo de citas
- Acciones desde perfil: editar, agendar nueva cita, agregar a lista de "Invitar"

### 3. Nueva cita
- 4 campos: Nombre, Celular, Fecha, Hora
- Campo opcional: Nota interna
- Citas creadas con menos de 30 minutos de anticipación NO entran al flujo automático

### 4. Invitar (Reactivación de clientes)
- Selección de clientes filtrada por días desde última visita
- Templates de mensajes pre-definidos por tipo de negocio
- Personalización automática con nombre del cliente, nombre del negocio y link wa.me
- Envío masivo por SMS sin límites (mientras no haya abuso)

### 5. Ajustes
- Editar perfil (nombre, celular, correo opcional, dirección opcional)
- Administración de suscripción (días restantes de trial, activar suscripción)
- FAQ
- Agregar PWA a homescreen
- Métodos de contacto a soporte
- Cerrar sesión

### Flujo automático de confirmación

```
Cliente pide cita por WhatsApp al negocio
  ↓
Negocio agenda cita en citas.bot
  ↓
INMEDIATO: Cliente recibe SMS de confirmación
  "Hola X, tu cita en X está registrada para el X de abril a las XX:XX. Te esperamos."
  ↓
24 HORAS ANTES: Cliente recibe SMS de recordatorio con link
  → Botones: Confirmar / Cancelar / Reagendar
  → Selección se refleja automáticamente en el calendario
  ↓
SI NO CONTESTA → 2 HORAS ANTES: Llamada automatizada
  → Respuesta también se sincroniza
  ↓
SI PIDE REAGENDAR: Recibe link wa.me con mensaje prellenado al WhatsApp del negocio
  ↓
2 HORAS DESPUÉS DE LA CITA: Mensaje de agradecimiento automático
```

### Modelo de precio
- **Plan único:** $199 MXN / mes
- 14 días de prueba gratis sin tarjeta
- Sin contratos, sin permanencia, cancelación en 1 clic
- Sin límites: citas, clientes, mensajes (mientras no haya abuso)

---

## 6. Identidad de marca

### Personalidad
Si citas.bot fuera persona: el asistente silencioso, eficiente y absolutamente confiable que llega 5 minutos antes, tiene todo listo, y nunca te falla. **No es carismático. Es indispensable.**

### Valores
1. **Claridad sobre adorno** — cada elemento debe tener una función
2. **Automático, no autómata** — automatizamos lo repetitivo para que el negocio se enfoque en lo humano
3. **Honestidad operativa** — no vendemos magia, vendemos un sistema que funciona

### Adjetivos que SÍ describen la marca
Directos · Confiables · Operativos · Sobrios · Útiles · Precisos

### Adjetivos que NO describen la marca
Lúdicos · Misteriosos · Aspiracionales · Disruptivos · Casuales · Grandilocuentes · Infantiles · Tech-bro

### Voz y tono
- **Directa:** frases cortas, verbos activos. "Confirma tu cita" — no "Te invitamos a confirmar tu cita"
- **Sin jerga técnica:** nada de engagement, workflow, pipeline, no-show rate, onboarding. El usuario es un estilista, no un PM
- **Sin emojis decorativos** en producto. En marketing solo si suman
- **Honesta con números:** "$199/mes. Sin límites. Sin sorpresas." Sin asteriscos
- **Sentence case siempre.** Nunca Title Case, nunca ALL CAPS (excepto labels muy pequeños con tracking abierto)

### Traducciones de tono (referencia)

| ❌ NO escribir | ✅ SÍ escribir |
|---|---|
| Optimiza tu workflow de bookings | Agenda más rápido |
| Engagement automatizado con clientes | Confirmaciones automáticas |
| Reduce tu no-show rate | Menos inasistencias |
| Onboarding en menos de 5 minutos | Listo en 5 minutos |
| Plataforma all-in-one para tu negocio | Todas tus citas en un solo lugar |

---

## 7. Sistema visual

### Paleta de colores (HEX)

| Token | HEX | Uso |
|---|---|---|
| `--tinta` | `#0A0A0B` | Texto principal, fondos oscuros, símbolo |
| `--hueso` | `#FAFAF7` | Fondo principal (no es blanco puro, más cálido) |
| `--verde` | `#0F7B3F` | Color hero, CTAs, acentos, "confirmado" |
| `--verde-hover` | `#0C6633` | Hover state del verde |
| `--verde-tenue` | `#E8F5EE` | Fondos suaves de éxito, badges |
| `--grafito` | `#6B6B6B` | Texto secundario, captions, jerarquía media |
| `--gris-claro` | `#F1EFE8` | Surfaces secundarios, fondos de cards |
| `--gris-borde` | `#E8E6DE` | Bordes sutiles |
| `--amarillo` | `#F59E0B` | Solo para estado "pendiente" en producto |
| `--rojo` | `#DC2626` | Solo para estado "cancelado" en producto |

### Regla de uso de color: 90 / 8 / 2
- **90%** del diseño: tinta, hueso, grises
- **8%** verde de marca
- **2%** verde tenue como acompañante
- Si una composición tiene más de 15% de verde, está fuera del sistema

### IMPORTANTE: Colores del semáforo
Los colores rojo, amarillo, naranja, etc. del sistema semafórico de citas **viven exclusivamente dentro del producto**. NO forman parte de la identidad de marca. Solo aparecen en mockups del producto, nunca como acentos de marketing.

### Tipografía
- **Single-font:** Plus Jakarta Sans (Google Fonts) es la única familia tipográfica. No usar mono ni serif ni ningún otro font.
- **Datos numéricos:** se logran con `font-variant-numeric: tabular-nums` sobre Plus Jakarta Sans (no se necesita mono para alinear cifras).
- **Eyebrows / labels técnicos:** se logran con `text-transform: uppercase` + `letter-spacing: 0.05–0.1em` + peso 500/600 — el "feel técnico" se construye con tracking, no con cambio de familia.

#### Pesos en uso
- **300 Light:** uso editorial limitado
- **400 Regular:** body, párrafos, captions
- **500 Medium:** labels, buttons, énfasis, eyebrows
- **600 SemiBold:** wordmark, headlines, h2, step numbers (peso del logo)
- **700 Bold:** display, h1, momentos clave

#### Reglas tipográficas
- **Tracking:** tamaños grandes (-0.025 a -0.05em). Tamaños pequeños neutro o ligeramente positivo (+0.02em para captions, 0.05–0.1em para eyebrows uppercase)
- **Line-height:** 1.5–1.6 para body, 1.0–1.15 para headlines
- **Sentence case** en todo (excepto eyebrows con tracking abierto)
- **Esquinas de glifos cuadradas** — Plus Jakarta Sans tiene esquinas geométricas, esto es deliberado y forma parte del lenguaje visual
- **Tabular nums obligatorio** en cualquier elemento que muestre números (precios, stats, timestamps, IDs)

### Logotipo
- **Wordmark principal:** `citas.bot` en Plus Jakarta Sans SemiBold (600), tracking -0.03em
- El "." entre "citas" y "bot" debe ir en color verde de marca (`#0F7B3F`)
- Todo en minúsculas, sin espacios
- Espacio mínimo de protección: altura de la "x" del wordmark
- Tamaño mínimo digital: 80px de ancho

### Clase `.dot` (regla global)
La clase CSS `.dot` aplica `color: var(--verde)` globalmente. Cualquier mención de "citas.bot" en HTML — wordmark, títulos, body, footer, mockups — debe usar `citas<span class="dot">.</span>bot` para que el punto vaya en verde de marca automáticamente. La regla está definida una sola vez como `.dot { color: var(--verde); }` y no se debe scopear a `.wordmark`.

### Clase `.brand-mention` (menciones inline en body copy)
Cuando "citas.bot" aparece en texto corrido (subtítulos, párrafos, FAQ, CTAs), se envuelve en `<strong class="brand-mention">citas<span class="dot">.</span>bot</strong>`. La regla aplica `font-weight: 600; font-style: normal` — el mismo peso que el wordmark, sin negritas pesadas. Siempre combina `.brand-mention` con `.dot`: nunca uno sin el otro en body copy.

### Símbolo reducido `[.]`
- Solo para favicons, app icons (PWA), avatares en redes, notificaciones
- Construcción: contenedor 88×88 con radius 6 (casi cuadrado), corchetes con stroke 6 y terminaciones cuadradas, punto cuadrado de 16×16 al centro en verde
- Versión estándar: contenedor negro, corchetes blancos, punto verde
- Versión inversa: contenedor blanco, corchetes negros, punto verde

### Sistema de espaciado y radios
```
--radius-sm: 8px;
--radius-md: 12px;     /* default para componentes */
--radius-lg: 20px;     /* cards */
--radius-xl: 28px;     /* secciones grandes, cards destacadas */
```

### Sombras
```
--shadow-sm: 0 1px 2px rgba(10, 10, 11, 0.04);
--shadow-md: 0 4px 24px rgba(10, 10, 11, 0.06);
--shadow-lg: 0 24px 60px rgba(10, 10, 11, 0.12);
```

---

## 8. Estructura del website

### Arquitectura propuesta (híbrida)

```
citas.bot/                  ← Landing principal extensa (multi-vertical)
citas.bot/dentistas         ← Landing específica para Ads/SEO (futuro, Fase 2)
citas.bot/estilistas        ← Landing específica para Ads/SEO (futuro, Fase 2)
citas.bot/spas              ← Landing específica para Ads/SEO (futuro, Fase 2)
citas.bot/clinicas          ← Landing específica para Ads/SEO (futuro, Fase 2)
```

Las landings por vertical se construyen como clones del template principal, cambiando únicamente el copy, los testimonios y los ejemplos para hablarle directo a esa industria.

### Secciones de la landing principal (en orden)

1. **Header sticky** — wordmark + nav (Producto, Cómo funciona, Precio, FAQ) + CTA "Empezar gratis"
2. **Hero** — eyebrow + título grande centrado + subtítulo + 2 CTAs + meta de garantías
3. **Strip de impacto** — eyebrow "El impacto" + título "Qué cambia cuando citas.bot empieza a trabajar por ti" + 4 outcomes (−70% inasistencias, +1 semana de ingresos, 0 min persiguiendo confirmaciones, 24/7 cobertura)
4. **Verticales** — marquee horizontal infinito con 12 tipos de negocio (clínicas dentales, estilistas, barberías, spas, consultorios médicos, terapeutas, quiroprácticos, talleres mecánicos, veterinarias, nutriólogos, estudios de yoga, tatuadores)
5. **El problema** — 3 cards (WhatsApp se pierde, La libreta no avisa, Tu memoria falla) + stat banner del 30%
6. **Cómo funciona** — sección con fondo verde profundo (`#0A1A0F`) con 5 pasos. Los pasos automáticos (02, 03, 04) llevan visual ilustrativo (SMS bubble, SMS con pills de acción, call card horizontal); manual/resultado (01, 05) son compactos
7. **El producto (módulos)** — 5 cards de los módulos. La de Calendario es destacada (full-width, fondo verde oscuro `#0C2016`)
8. **Comparativa** — tabla vs Libreta, WhatsApp, Calendly, citas.bot
9. **Testimonios** — 3 cards placeholder (Dra. Regina Estrada / Carla Mendoza / Javier Ramírez)
10. **Precio** — card centrada con $199 MXN/mes y lista de features incluidas
11. **FAQ** — 7 preguntas con acordeón funcional, primera abierta por default
12. **CTA final** — sección con fondo verde muy oscuro (`#071A10`) con título + 2 CTAs
13. **Footer** — wordmark + 3 columnas de links + bottom bar

### CTAs primarios
- **Principal:** "Empezar gratis" (lleva al signup)
- **Secundario:** "Ver demo" (lleva a video o demo interactiva)

### Precio en la landing
**SÍ se muestra claramente:** $199 MXN/mes, sin asteriscos, sin tarifas escondidas. Esta es una decisión deliberada — la honestidad de precio es parte del posicionamiento.

---

## 9. Decisiones de diseño ya tomadas

Estas decisiones están cerradas y NO deben cambiarse sin discusión:

1. **Identidad principal = wordmark `citas.bot`**, no un símbolo gráfico. El dominio es la marca.
2. **El "." del wordmark va siempre en verde de marca**, en cualquier aplicación.
3. **El símbolo `[.]`** se usa solo cuando el formato es cuadrado/pequeño (favicons, app icons, avatares).
4. **Plus Jakarta Sans en peso 600** para el wordmark. Sin variaciones.
4.1. **Single-font policy:** Plus Jakarta Sans es la única familia. No JetBrains Mono, no serif, no display secundario. Si necesitas alinear números, usa `tabular-nums`. Si necesitas un eyebrow técnico, usa uppercase + tracking.
5. **Esquinas geométricas/cuadradas** en glifos. La fuente Plus Jakarta Sans tiene esto naturalmente.
6. **Verde de marca:** `#0F7B3F` (verde forest sobrio, no verde menta brillante). Se ajustó del original `#10B981` para coherencia con el verde del producto.
7. **Fondo principal:** `#FAFAF7` (hueso, no blanco puro).
8. **Paleta restringida:** la marca NO es multicolor. Solo verde como acento. Los colores del semáforo son del producto, no de la marca.
9. **Sin emojis decorativos** en producto y comunicación de marca.
10. **Sentence case en todo.** Nunca Title Case, nunca mayúsculas (excepto eyebrows tipo `JetBrains Mono` con tracking).
11. **Tagline oficial:** "Tus citas, confirmadas."
12. **Posicionamiento:** "El sistema que confirma tus citas por ti."
13. **Mockups — distinción crítica:**
    - **Mockups del PRODUCTO** (calendario, dashboard, módulos, vistas internas de la app): NO permitidos en HTML/CSS generados por IA. Esperar capturas reales del PWA, sobre frame de iPhone moderno, fondo limpio.
    - **Ilustraciones del MENSAJE saliente** (SMS al cliente, notificación de llamada, customer-facing communication): SÍ permitidas en HTML/CSS porque ilustran lo que el cliente ve, no la app del negocio. Hoy viven en la sección "Cómo funciona" como SMS bubble (paso 02), SMS con pills de acción (paso 03), y call card horizontal (paso 04). NO sustituirlas por capturas — son ilustraciones, no mockups del producto.

14. **Hero usa mesh gradient verde**, no fondo plano. 4 blobs radiales asimétricos (3 verdes en distintas opacidades + 1 tinta sutil) con `filter: blur(40px)` y promoción a layer GPU. La grilla de líneas verticales es secundaria, sutil.

15. **Industrias atendidas en marquee horizontal**, no grid estático. Plus Jakarta Sans **600** (no 700 — el bold puro saturaba), color `rgba(10, 10, 11, 0.85)` con hover full tinta gated en `(hover: hover) and (pointer: fine)`, animación 100s desktop / 80s mobile (lento contemplativo).

16. **Comparativa con columna citas.bot dominante:** header en verde sólido + texto hueso peso 700; body con tinte verde 8%, peso 600. NO regresar al tinte tenue 5% original — la columna debe ganar visualmente desde el primer escaneo.

17. **"Cómo funciona" con asimetría narrativa:**
    - Pasos manuales o de resultado (01, 05): tratamiento compacto sin visual.
    - Pasos automáticos (02, 03, 04): tratamiento featured con visual ilustrativo (SMS bubble / SMS con actions / call card horizontal). Es el mecanismo que destaca los 3 procesos automáticos como protagonistas.
    - NO emparejar todos los pasos al mismo tratamiento — la asimetría es deliberada.

18. **Strip de stats en hero usa "El impacto"**, no metrics de feature. Título: "Qué cambia cuando citas.bot empieza a trabajar por ti." 4 outcomes: `−70%` inasistencias, `+1 semana` de ingresos, `0 min` persiguiendo confirmaciones, `24/7` cobertura. NO regresar a stats de feature (3/10, 90%, 5min, $199) que repetían info de hero-meta y pricing.

19. **Botones globalmente rounded pill** (`border-radius: 999px`). Aplica a `.btn`, `.btn-primary-lg`, `.btn-secondary-lg`, `.pricing-cta`. NO regresar a `--radius-md`.

20. **Easings:** `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)` es la curva canónica para hovers, transiciones, reveals. NO usar `--ease-spring` (con bounce) en botones — quedó descartado por sentirse playful contra una marca sobria. Spring solo para decoraciones puntuales si fuera necesario.

21. **Superficies oscuras de la landing — jerarquía de verde profundo, no negro uniforme:** Las secciones oscuras no usan `--tinta` (`#0A0A0B`) de forma indiscriminada. Cada superficie tiene su propio tono de verde oscuro para crear ritmo sin saturar de negro:
    - `.stat-banner` → `var(--verde-tenue)` (fondo claro, texto oscuro — la excepción luminosa)
    - `.how-it-works` → `#0A1A0F` (verde profundo, la sección más importante)
    - `.module-card.featured` (Calendario) → `#0C2016` (verde oscuro)
    - `.final-cta` → `#071A10` (verde muy oscuro)
    - **Botones primarios** → se mantienen en `--tinta` (negro) para anclar la marca sin saturar de verde
    - NO regresar a `--tinta` en estas secciones. La uniformidad de negro se sentía pesada y sin identidad.

---

## 10. Lo que NO se debe cambiar

### NO modificar bajo ninguna circunstancia
- Nombre `citas.bot` (todo en minúsculas, con punto, sin espacios)
- Tagline "Tus citas, confirmadas."
- Verde de marca `#0F7B3F` para el "." del wordmark
- Tipografía Plus Jakarta Sans como **única** familia (single-font)
- El precio mostrado claramente en la landing ($199 MXN/mes)
- Sentence case en todos los textos
- Fondo principal `#FAFAF7` (no usar blanco puro `#FFFFFF`)

### Nunca hacer
- Generar mockups del producto en HTML/CSS (esperar capturas reales)
- Usar emojis decorativos en producto o landing
- Usar paletas multicolor o gradientes saturados
- Inventar testimonios con nombres de personas reales (los actuales son placeholders ficticios)
- Hablar como "tech bro" (engagement, workflow, pipeline, etc.)
- Usar mayúsculas para énfasis
- Agregar morado/púrpura como color (ya existe en el producto pero se está migrando al verde de marca)
- Usar cualquier fuente que no sea Plus Jakarta Sans (single-font policy)
- Aplicar palomitas verdes con check redondo como ícono principal del producto (es cliché en este nicho)
- Cambiar el dominio o sugerir uno diferente

### Hacer con precaución (avisar al usuario antes)
- Agregar nuevas secciones a la landing
- Cambiar el orden de las secciones existentes
- Modificar el copy del hero o tagline
- Ajustar colores de la paleta
- Agregar dependencias o frameworks nuevos

---

## 11. Stack tecnológico

### Landing actual
- **HTML5 + CSS3 + JavaScript vanilla** (sin frameworks)
- **Sin build step** — el archivo es directo, listo para servir
- **Plus Jakarta Sans** vía Google Fonts CDN (single-font, sin mono ni serif)
- **Responsive** con CSS Grid y Flexbox
- **Animaciones CSS** (fadeInUp en hero, accordion en FAQ)
- **JavaScript mínimo** solo para el FAQ accordion

### Por qué este stack
- Carga rápida (sin JS bundle)
- SEO-friendly por default
- Hosteable gratis en Vercel, Netlify, Cloudflare Pages
- Fácil de iterar sin re-builds
- No requiere mantenimiento de dependencias

### Hosting recomendado para producción
- **Vercel** (preferido) o **Cloudflare Pages**
- Apuntar el dominio `citas.bot` directamente
- HTTPS automático

### Para escalar (si se necesita en el futuro)
- Migrar a **Astro** si se necesitan más páginas estáticas con componentes reutilizables (ideal para landings por vertical)
- **Next.js** si se requiere autenticación, dashboard en el sitio público, o blog
- **Tailwind CSS** si el equipo crece y se necesita un sistema más sistematizado

### Producto (la app citas.bot)
El stack del producto NO está documentado en este archivo porque vive en otro repo. Esto solo aplica al website (citas.bot landing).

---

## 12. Archivos del proyecto

```
citas-bot-web/
├── CLAUDE.md                          ← Este archivo
├── citas_bot_landing.html             ← Landing principal
└── assets/
    ├── citas_bot_brand_guidelines.pdf ← Manual de marca completo (23 páginas)
    └── (futuras capturas reales del producto)
```

---

## 13. Roadmap del website

### Fase 1 (actual) ✅
- Landing principal extensa con todas las secciones core
- Brand guidelines como PDF
- Sistema de identidad definido

### Fase 2 (próximo)
- Reemplazar mockups CSS placeholder por capturas reales del producto
- Crear landings por vertical: `/dentistas`, `/estilistas`, `/spas`
- Subir a producción en Vercel apuntando a `citas.bot`

### Fase 3 (futuro)
- Blog para SEO orgánico
- Centro de ayuda (`citas.bot/soporte`)
- Casos de éxito por industria
- Posible migración a Astro si la cantidad de páginas crece

---

## 14. Cómo trabajar este proyecto

Cuando recibas una tarea relacionada con el website de citas.bot:

1. **Lee este archivo primero.** Si la tarea entra en conflicto con algo aquí, pregunta antes de actuar.
2. **Mantén el sistema visual.** Usa las variables CSS ya definidas, no inventes colores nuevos.
3. **Mantén la voz.** Antes de escribir copy, revisa la sección 6 (voz y tono) y la tabla de traducciones.
4. **Cuando dudes entre dos opciones**, elige la más sobria, la más directa, la más limpia. La marca premia restricción.
5. **Si vas a agregar dependencias o frameworks nuevos**, avisa antes. El stack actual es deliberadamente simple.
6. **Cuando hagas cambios visuales**, verifica que sigan funcionando bien en mobile (breakpoints en 700px y 800px).
7. **Cuando agregues copy nuevo**, evita: emojis decorativos, jerga técnica, mayúsculas, asteriscos en precios, promesas exageradas.

---

**Última actualización:** Abril 2026
**Versión del documento:** 1.0
