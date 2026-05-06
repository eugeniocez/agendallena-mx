# CLAUDE.md — agendallena

> Contexto completo del proyecto para Claude Code. Lee este archivo al inicio de cada sesión antes de hacer cambios.

---

## 1. Reglas absolutas

### Nunca cambiar

- **Nombre de marca:** `agendallena` — todo minúsculas, sin punto, sin `.mx`. Aplica en wordmark, `<title>`, meta tags, JSON-LD `name`, copyright, comparativas
- **Dominio:** `agendallena.mx` — solo en URLs (`https://agendallena.mx/...`), emails (`@agendallena.mx`), instrucciones operativas tipo "Entra a agendallena.mx"
- **Tagline:** "Tu agenda, confirmada." — no parafrasear
- **Tipografía:** Plus Jakarta Sans es la **única** familia — sin mono, serif ni display secundario (ver §2)
- **Verde de marca:** `#0F7B3F` — no cambiar por verde más brillante ni más oscuro (ver §2)
- **Fondo principal:** `#FAFAF7` — no usar blanco puro `#FFFFFF`
- **Precio:** $199 MXN/mes mostrado sin asteriscos ni tarifas escondidas
- **Sentence case** en todo el copy — nunca Title Case, nunca ALL CAPS (excepción: eyebrows uppercase con tracking abierto)
- **Botones en pill** (`border-radius: 999px`) — aplica a `.btn`, `.btn-primary-lg`, `.btn-secondary-lg`, `.pricing-cta`
- **Superficies oscuras:** token `var(--verde-superficie)` = `#245C32` — no usar `--tinta` ni los hex descartados (`#0A1A0F`, `#0C2016`, `#071A10`, `#1A3F26`)
- **Easing canónico:** `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)` — no usar ease-spring en botones
- **Hero:** mesh gradient verde (4 blobs radiales asimétricos + blur 40px), no fondo plano
- **Marquee de industrias:** Plus Jakarta Sans 600 (no 700), `rgba(10,10,11,0.85)`, animación 100s desktop / 80s mobile
- **Comparativa:** columna agendallena.mx con header verde sólido + texto hueso 700; body tinte verde 8% peso 600

### Nunca hacer

- Generar mockups del producto en HTML/CSS (calendario, dashboard, módulos internos) — esperar capturas reales del PWA
- Usar emojis decorativos en producto o landing
- Usar paletas multicolor o gradientes saturados
- Inventar testimonios con nombres de personas reales (los actuales son placeholders ficticios)
- Escribir copy con jerga tech-bro: engagement, workflow, pipeline, no-show rate, onboarding
- Usar mayúsculas para énfasis
- Agregar morado/púrpura como color de marca
- Aplicar palomitas con check redondo como ícono (cliché en el nicho)
- Usar cualquier fuente que no sea Plus Jakarta Sans
- Cambiar el dominio o sugerir uno diferente
- Nivelar todos los pasos de "Cómo funciona" al mismo tratamiento — la asimetría es deliberada (01 y 05 compactos sin visual; 02, 03 y 04 con visual ilustrativo)

### Ilustraciones: permitidas vs no

| ✅ SÍ (ilustraciones del mensaje al cliente) | ❌ NO (mockups de la app del negocio) |
|---|---|
| SMS bubble al cliente (paso 02) | Vista del calendario interno |
| SMS con pills Confirmar/Cancelar/Reagendar (paso 03) | Dashboard o módulos de la app |
| Call card horizontal (paso 04) | Cualquier vista interna del PWA |

### Avisar antes de hacer

- Agregar nuevas secciones a la landing
- Cambiar el orden de secciones existentes
- Modificar el copy del hero o tagline
- Ajustar colores de la paleta
- Agregar dependencias o frameworks nuevos

---

## 2. Sistema visual

### Paleta de colores

| Token | HEX | Uso |
|---|---|---|
| `--tinta` | `#0A0A0B` | Texto principal, fondos oscuros, símbolo |
| `--hueso` | `#FAFAF7` | Fondo principal (cálido, no blanco puro) |
| `--verde` | `#0F7B3F` | Color hero, CTAs, acentos, "confirmado" |
| `--verde-hover` | `#0C6633` | Hover state del verde |
| `--verde-tenue` | `#E8F5EE` | Fondos suaves de éxito, badges |
| `--verde-acento` | `#4ADE80` | Acentos **solo sobre `--verde-superficie`** — no usar en fondos claros |
| `--verde-superficie` | `#245C32` | Secciones oscuras landing (ver mapeo abajo) |
| `--grafito` | `#6B6B6B` | Texto secundario, captions |
| `--gris-claro` | `#F1EFE8` | Surfaces secundarios, fondos de cards |
| `--gris-borde` | `#E8E6DE` | Bordes sutiles |
| `--amarillo` | `#F59E0B` | Solo estado "pendiente" en **producto** |
| `--rojo` | `#DC2626` | Solo estado "cancelado" en **producto** |

**Regla 90 / 8 / 2:** 90% tinta/hueso/grises · 8% verde de marca · 2% verde tenue. Más de 15% de verde = fuera del sistema.

**Colores del semáforo** (amarillo, rojo, naranja): solo dentro del producto. No son colores de marca, nunca aparecen en marketing.

**Mapeo de superficies oscuras:**

| Componente | Token de fondo |
|---|---|
| `.stat-banner` | `var(--verde-tenue)` — excepción luminosa (fondo claro, texto oscuro) |
| `.how-it-works` | `var(--verde-superficie)` |
| `.module-card.featured` (Calendario) | `var(--verde-superficie)` |
| `.final-cta` | `var(--verde-superficie)` |

**Acentos dentro de superficies oscuras:** `var(--verde-acento)` (#4ADE80), no `--verde` de marca (contraste insuficiente ~1.5:1). Aplica en: `.step-num`, `.step-tag`, `.module-num`, `.module-feature::before`, `.final-cta h2 .accent`, `.final-cta .brand-llena`, `.call-name .dot`.

**Botones en superficies oscuras:** mantener en `--tinta`. Excepción: `.final-cta .btn-primary-lg` usa `--hueso` con texto `--tinta`.

### Tipografía

Single-font: **Plus Jakarta Sans** vía Google Fonts. Sin mono, serif ni ninguna otra familia.
- Números alineados: `font-variant-numeric: tabular-nums` (no se necesita mono)
- Eyebrows técnicos: `text-transform: uppercase` + `letter-spacing: 0.05–0.1em` + peso 500/600

| Peso | Uso |
|---|---|
| 300 Light | Uso editorial limitado |
| 400 Regular | Body, párrafos, captions |
| 500 Medium | Labels, buttons, énfasis, eyebrows |
| 600 SemiBold | Wordmark, headlines, h2, step numbers |
| 700 Bold | Display, h1, momentos clave |

- Tracking: tamaños grandes −0.025 a −0.05em · captions +0.02em · eyebrows uppercase 0.05–0.1em
- Line-height: 1.5–1.6 body · 1.0–1.15 headlines
- Tabular nums obligatorio en precios, stats, timestamps, IDs

### Logotipo

- Wordmark: `agendallena` en Plus Jakarta Sans SemiBold 600, tracking −0.03em, todo minúsculas, sin `.mx`
- Protección mínima: altura de la "x" · Tamaño mínimo digital: 80px de ancho

### Clases CSS de marca

```css
.dot           { color: var(--verde); }              /* "." del dominio agendallena.mx */
.brand-mention { font-weight: 600; font-style: normal; }
.brand-llena   { color: var(--verde); }              /* "llena" pintada en verde */
```

| Contexto | Patrón HTML |
|---|---|
| Body copy (subtítulos, FAQ, CTAs, párrafos) | `<strong class="brand-mention">agenda<span class="brand-llena">llena</span></strong>` |
| Dominio como URL ("Entra a agendallena.mx") | `agendallena<span class="dot">.</span>mx` |
| Wordmark header/footer, `<title>`, meta tags, JSON-LD, copyright | `agendallena` plain, sin clases |
| Testimonios (citas textuales) | `agendallena` plain — no romper la naturalidad del habla |

### Símbolo reducido `[.]`

Solo para favicons, app icons (PWA), avatares, notificaciones. Contenedor 88×88 radius 6, corchetes stroke 6 terminaciones cuadradas, punto cuadrado 16×16 verde. Estándar: fondo negro, corchetes blancos, punto verde. Inverso: fondo blanco, corchetes negros, punto verde.

### Radios

```css
--radius-sm: 8px;
--radius-md: 12px;   /* default para componentes */
--radius-lg: 20px;   /* cards */
--radius-xl: 28px;   /* secciones grandes, cards destacadas */
```

### Sombras

```css
--shadow-sm: 0 1px 2px rgba(10, 10, 11, 0.04);
--shadow-md: 0 4px 24px rgba(10, 10, 11, 0.06);
--shadow-lg: 0 24px 60px rgba(10, 10, 11, 0.12);
```

---

## 3. Copy y voz

**Personalidad:** el asistente silencioso, eficiente y absolutamente confiable que llega 5 minutos antes, tiene todo listo, y nunca te falla. No es carismático. Es indispensable.

**Adjetivos SÍ:** Directos · Confiables · Operativos · Sobrios · Útiles · Precisos

**Adjetivos NO:** Lúdicos · Misteriosos · Aspiracionales · Disruptivos · Casuales · Grandilocuentes · Infantiles · Tech-bro

### Reglas de voz

- Frases cortas, verbos activos — "Confirma tu cita", no "Te invitamos a confirmar tu cita"
- Sin jerga técnica: nada de engagement, workflow, pipeline, no-show rate, onboarding
- Sin emojis decorativos
- Honesta con números: "$199/mes. Sin límites. Sin sorpresas." Sin asteriscos
- Sentence case siempre

### Traducciones de tono

| ❌ NO escribir | ✅ SÍ escribir |
|---|---|
| Optimiza tu workflow de bookings | Agenda más rápido |
| Engagement automatizado con clientes | Confirmaciones automáticas |
| Reduce tu no-show rate | Menos inasistencias |
| Onboarding en menos de 5 minutos | Listo en 5 minutos |
| Plataforma all-in-one para tu negocio | Todas tus citas en un solo lugar |

---

## 4. Producto

**Tagline:** "Tu agenda, confirmada." · **Posicionamiento:** "El sistema que confirma tu agenda por ti."

agendallena es un sistema de confirmación automática de citas para negocios B2B que viven de su agenda. No es un calendario más, ni un CRM, ni un bot conversacional: convierte cada cita tentativa en una cita confirmada mediante SMS, WhatsApp y llamadas automatizadas.

**Precio:** $199 MXN/mes · 14 días de prueba gratis sin tarjeta · Sin contratos · Sin límites

### 5 módulos

| Módulo | Función |
|---|---|
| Calendario | Vista día/3 días con sistema semafórico de estados (blanco, verde, amarillo, rojo, negro+naranja, verde claro) |
| Directorio | Base de clientes auto-registrada al agendar, con historial y perfil |
| Nueva cita | 4 campos; citas con <30 min de anticipación no entran al flujo automático |
| Invitar | Reactivación masiva por SMS a clientes filtrados por días sin visitar |
| Ajustes | Perfil, suscripción, métodos de pago (tarjeta recurrente / OXXO / tarjeta único), FAQ, PWA |

### Flujo automático de confirmación

```
Negocio agenda cita en agendallena.mx
  ↓
INMEDIATO: SMS de confirmación al cliente
  ↓
24 HORAS ANTES: SMS de recordatorio con link → Confirmar / Cancelar / Reagendar
  → Selección se refleja en el calendario automáticamente
  ↓
SI NO CONTESTA → 2 HORAS ANTES: Llamada automatizada → respuesta sincronizada
  ↓
SI PIDE REAGENDAR: Link wa.me prellenado al WhatsApp del negocio
  ↓
2 HORAS DESPUÉS DE LA CITA: Mensaje de agradecimiento automático
```

---

## 5. Contexto de negocio

Los negocios basados en citas pierden hasta el **30% de sus citas** por inasistencias no gestionadas. Las herramientas existentes (libreta, WhatsApp, Calendly) no automatizan confirmaciones para el mercado LATAM.

**Usuario objetivo:** Dueños/operadores de negocios B2B basados en citas en México/LATAM — no técnico, usa WhatsApp como canal principal con clientes, opera el negocio personalmente o con recepcionista, el precio importa ($199 debe sentirse barato para lo que hace).

**Verticales:** Clínicas dentales · Consultorios médicos · Psicólogos · Estilistas · Barberías · Spas · Talleres mecánicos · y cualquier negocio que opere por citas.

**Lo que NO somos:**
- No somos "un calendario más bonito"
- No somos un CRM
- No somos un bot con IA
- No vendemos "agendar mejor" — vendemos "deja de perder dinero por inasistencias"

---

## 6. Stack y estructura

**Stack:** Astro 6 · CSS3 vanilla en `src/styles/global.css` · Plus Jakarta Sans vía Google Fonts CDN · JavaScript vanilla con `is:inline` · Vercel

```
agendallena-mx/
├── CLAUDE.md
├── astro.config.mjs
├── package.json
├── docs/
│   └── brand-guidelines.md            ← Brand guidelines v3.0 (fuente de verdad visual)
├── public/
│   └── assets/                        ← imágenes estáticas (/assets/*)
├── src/
│   ├── pages/
│   │   ├── index.astro                ← landing principal
│   │   ├── [vertical].astro           ← página dinámica para verticales
│   │   ├── soporte.astro              ← centro de ayuda
│   │   ├── landing-b.astro            ← variante B (A/B test, excluida del sitemap)
│   │   └── landing-c.astro            ← variante C (A/B test, excluida del sitemap)
│   ├── layouts/
│   │   └── Base.astro                 ← head, header, footer, scripts
│   ├── components/
│   │   ├── Hero.astro                 ← props: eyebrow, subtitle
│   │   ├── StatementStrip.astro
│   │   ├── SocialProof.astro
│   │   ├── Problema.astro             ← props: cards
│   │   ├── HowItWorks.astro
│   │   ├── Modules.astro
│   │   ├── Comparison.astro
│   │   ├── Testimonials.astro         ← props: heading, items
│   │   ├── Pricing.astro
│   │   ├── FAQ.astro
│   │   └── FinalCTA.astro
│   ├── content/
│   │   └── verticals/
│   │       ├── types.ts               ← interfaz VerticalContent
│   │       ├── index.ts               ← export allVerticals
│   │       ├── dentistas.ts
│   │       ├── consultorios-medicos.ts
│   │       ├── psicologos.ts
│   │       ├── salones-de-belleza.ts
│   │       └── barberias.ts
│   └── styles/
│       └── global.css                 ← todas las variables y estilos
```

---

## 7. Páginas y arquitectura

### Rutas live

| Ruta | Descripción |
|---|---|
| `/` | Landing principal multi-vertical |
| `/dentistas` | Vertical clínicas dentales |
| `/consultorios-medicos` | Vertical consultorios médicos |
| `/psicologos` | Vertical psicólogos y terapeutas |
| `/salones-de-belleza` | Vertical salones de belleza |
| `/barberias` | Vertical barberías |
| `/soporte` | Centro de ayuda |

**Rutas pendientes (Fase 4):** `/spas` · `/salones-de-unas` · `/entrenadores-personales` · `/despachos-legales` · `/terapistas`

Las landings de verticales usan el mismo template, cambiando solo el copy del hero, las cards del problema, los testimonios y el FAQ. El copy de cada vertical vive en `src/content/verticals/[slug].ts`.

### Secciones de la landing principal (en orden)

1. Header sticky — wordmark + nav (Producto, Cómo funciona, Precio, FAQ) + CTA "Empezar gratis"
2. Hero — eyebrow + título + subtítulo + 2 CTAs + meta de garantías
3. Strip de impacto — eyebrow "El impacto" · 4 outcomes: −70% inasistencias, +1 semana ingresos, 0 min persiguiendo, 24/7
4. Marquee de industrias — 12 tipos de negocio, animación lenta contemplativa
5. El problema — 3 cards (WhatsApp, libreta, memoria) + stat banner 30%
6. Cómo funciona — fondo `--verde-superficie` · 5 pasos con asimetría narrativa
7. Módulos — 5 cards · Calendario destacado full-width en `--verde-superficie`
8. Comparativa — tabla vs Libreta, WhatsApp, Calendly, agendallena.mx
9. Testimonios — 3 cards (placeholders ficticios — no reemplazar con nombres reales)
10. Precio — $199 MXN/mes
11. FAQ — 7 preguntas, acordeón, primera abierta por default
12. CTA final — fondo `--verde-superficie` + título + 2 CTAs
13. Footer — wordmark + 3 columnas de links + bottom bar

**CTAs primarios:** "Empezar gratis" (→ signup) · "Ver demo" (→ video o demo)

---

## 8. Cómo trabajar

1. Lee este archivo primero. Si una tarea entra en conflicto con algo aquí, pregunta antes de actuar.
2. Usa las variables CSS ya definidas, no inventes colores nuevos.
3. Antes de escribir copy, revisa §3 (voz y tono) y la tabla de traducciones.
4. Cuando dudes entre dos opciones, elige la más sobria, directa y limpia. La marca premia restricción.
5. Avisa antes de agregar dependencias o frameworks.
6. Verifica mobile en breakpoints 700px y 800px al hacer cambios visuales.
7. Copy nuevo: sin emojis, sin jerga técnica, sin mayúsculas, sin asteriscos en precios.

### Fase 4 — en curso

- Reemplazar mockups CSS por capturas reales del producto (PWA en iPhone frame moderno)
- Blog para SEO orgánico
- Páginas `/privacidad` y `/terminos`
- Verticales: `/spas`, `/salones-de-unas`, `/entrenadores-personales`, `/despachos-legales`, `/terapistas`

---

**Última actualización:** Mayo 2026 · **Versión:** 4.0
