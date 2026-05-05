# Backlog: crítica integral agendallena.mx
> Generado: mayo 2026. Actualizar estado conforme se van completando tareas.
> Formato: `- [ ]` pendiente · `- [x]` completado

---

## P1 — Bloqueantes de lanzamiento

- [ ] **T01 · D1-01** — Conectar todos los CTAs a URL de signup real
  - `Pricing.astro:28` button sin acción → convertir a `<a href="[url-signup]">`
  - `Hero.astro:24` y `FinalCTA.astro` → actualizar href de "Empezar gratis"
  - `Base.astro:105` → resolver dead links footer (Demo, WhatsApp, Estado del servicio)

- [x] **T02 · D1-03** — Crear páginas Privacidad y Términos (riesgo legal LFPDPPP)
  - Crear `src/pages/privacidad.astro`
  - Crear `src/pages/terminos.astro`
  - Actualizar `Base.astro:130-131` con los hrefs reales

- [ ] **T03 · D1-02** — Neutralizar riesgo de testimonios ficticios
  - Opción A: agregar badge "Casos ilustrativos" en `Testimonials.astro`
  - Opción B (preferida): remover sección hasta tener early adopters reales
  - Afecta: `src/content/verticals/*.ts` (5 archivos) + `Testimonials.astro`

- [x] **T04b · D1-04** — Resolver thin content en páginas verticales (72% contenido idéntico)
  - `[vertical].astro` solo pasa props a 3 de 11 secciones; las 8 restantes son byte-for-byte iguales entre verticales
  - Riesgo SEO real: Google puede tratar las 5 verticales como contenido duplicado de la landing principal
  - Ver propuesta de implementación por fases en el backlog

- [ ] **T04 · S4-01** — Reemplazar round numbers sin fuente por lenguaje cualitativo
  - `StatementStrip.astro:10-24` → quitar −70%, +1 semana como cifras absolutas
  - `FAQ.astro:119` → "tasas superan el 90%" sin fuente
  - Reemplazar por rangos o lenguaje cualitativo hasta tener datos reales del producto

---

## P2 — Mejoras de conversión y SEO

- [x] **T05 · C3-01** — Invertir orden SocialProof / StatementStrip
  - `src/pages/index.astro` + `src/pages/[vertical].astro`
  - Nuevo orden: Hero → **SocialProof** → **StatementStrip** → Problema

- [x] **T06 · C3-05** — Agregar 4 preguntas de compra al FAQ
  - `FAQ.astro` — accordion + JSON-LD
  - Preguntas a agregar:
    1. ¿Los SMS van incluidos en el precio o se cobran aparte?
    2. ¿Qué número ve mi cliente cuando recibe el SMS?
    3. ¿Puedo personalizar el texto de los mensajes?
    4. ¿Funciona con más de un empleado o silla?

- [x] **T07 · V2-01 + V2-02** — Dos correcciones visuales de alto impacto en mobile
  - `global.css` → grid de módulos colapsa a 1 col en ≤600px (antes 800px); featured mantiene jerarquía en tablets
  - `global.css` → scroll shadow en `.comparison-wrap` con background-attachment local/scroll; cover sólido 64px tapa sombra al llegar al límite

- [ ] **T08 · S4-02** — Reescribir H1s de verticales con keywords de intent real
  - 5 archivos: `src/content/verticals/*.ts` — campo `hero.h1` y `meta.title`
  - Cambiar patrón "La solución de citas para X en México"
  - Nuevo patrón: "Confirmación automática de citas para X en México"

- [x] **T09 · C3-03** — Personalizar FAQ con 2 preguntas específicas por vertical
  - Completado como parte de D1-04: `FAQ.astro` acepta `extraItems`, `types.ts` actualizado, 5 archivos de vertical con FAQs únicos

- [ ] **T10 · C3-02** — Resolver "valle de features" — mover Modules después de Comparison
  - `src/pages/index.astro` + `src/pages/[vertical].astro`
  - Nuevo orden: ...HowItWorks → Comparison → Testimonials → Pricing → **Modules** → FAQ → FinalCTA

- [ ] **T-NEW · C3-04** — Personalizar comparativa por vertical con competidores reales del sector
  - `/dentistas` → incluir software como Dentrix, Open Dental en la tabla
  - `/psicologos` → software de salud mental (TheraNest, SimplePractice)
  - `/salones-de-belleza` → MindBody, Vagaro
  - Afecta: `Comparison.astro` (necesita aceptar prop `extraRows?`) + 5 archivos de vertical

---

## P3 — Pulido de brand voice y visual

- [ ] **T11 · S4-03** — Corregir 3 violaciones de brand voice
  - `Modules.astro:15` → "Sync instantánea" → "Actualización en tiempo real"
  - `Modules.astro:48` → "Templates por tipo" → "Plantillas por tipo"
  - `Comparison.astro:57` → "Diseñado para negocios LATAM" → "Pensado para México"

- [ ] **T12 · V2-03 + D1-07** — Dos correcciones menores de consistencia
  - `global.css` → unificar color CTA primario (negro o verde, no ambos)
  - `FinalCTA.astro` → cambiar copy a closing argument sobre precio vs. cita perdida
  - ~~D1-08~~ `Base.astro:97` — "La solución que confirma tu agenda por ti." aprobada por el usuario. No cambiar.

- [ ] **T13 · C3-07** — Reescribir Pricing features como beneficios
  - `Pricing.astro:22-26` → reescribir 6 items con beneficio explícito (qué significa para ti, no qué hace)
  - ~~D1-05~~ `Modules.astro` → orden actualizado: Calendario → Nueva cita → Invitar → Directorio → Ajustes ✓

- [ ] **T14 · V2-05 + V2-06 + D1-09** — Tres mejoras de calidad de 1-3 líneas cada una
  - `global.css` → `text-wrap: balance` en `.section-title`
  - `global.css` → `.marquee:hover .marquee-track { animation-play-state: paused; }` (WCAG 2.2.2)
  - Opcional: noise overlay fixed en body (`opacity: 0.025; pointer-events: none`)

- [ ] **T15 · S4-06** — Corregir subtitle en vertical /psicologos
  - `src/content/verticals/psicologos.ts:12`
  - "Sin perseguir pacientes" → "Sin interrumpir el ritmo de tu consulta, sin llamadas de seguimiento"

- [ ] **T16 · V2-07 + C3-06** — Limpiar peso tipográfico no usado + optimizar call-pulse mobile
  - `Base.astro:49` → eliminar peso 800 de Google Fonts: `wght@300;400;500;600;700`
  - `global.css` → agregar `will-change: transform, opacity` a `.call-pulse`

- [ ] **T-NEW · D1-06** — Establecer jerarquía visual en las 4 métricas del StatementStrip
  - `StatementStrip.astro:8-26` → las 4 stats tienen el mismo peso/tamaño, no hay distinción de impacto
  - Destacar visualmente las 2 claims más poderosas (−inasistencias, +ingresos) sobre las de contexto (0min, 24/7)

- [ ] **T-NEW · S4-04** — Reemplazar "la solución" por nombre o "el sistema" en copy de verticales
  - Hero subtitles y testimonios de verticales usan "la solución" como proxy del nombre → menos memorable
  - `src/content/verticals/*.ts` — revisar `hero.subtitle` y `testimonials.items[].quote` en los 5 archivos
  - Reemplazar con "agendallena.mx" o "el sistema" según contexto

- [ ] **T-NEW · V2-04** — Aumentar contraste del fondo del StatementStrip
  - `global.css` → `.statement-strip` usa `var(--verde-tenue)` (#E8F5EE) sobre fondo hueso (#FAFAF7)
  - Diferencia de luminosidad ~3-4 puntos: el strip pierde rol visual de separador en monitores con gamma alto
  - Ajustar a #D4EDE6 o similar con mayor contraste perceptual

- [ ] **T-NEW · V2-08** — Estado visual alternativo en cards con spotlight para dispositivos touch
  - `global.css` → `.spotlight` solo activo en `(hover: hover) and (pointer: fine)`, sin alternativa touch
  - Cards de problema, módulos y testimonios se ven completamente planas en mobile
  - Agregar `:active` state con subtle background shift para compensar la ausencia de spotlight
