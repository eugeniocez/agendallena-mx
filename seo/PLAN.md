# Plan SEO — citas.bot

**Mercado:** México / LATAM (es-MX)
**Stack:** Astro 6 + Vercel
**Estado:** Pre-lanzamiento (mayo 2026), 5 páginas verticales con copy base
**Última actualización:** 2026-05-04

---

## 1. Resumen ejecutivo

citas.bot juega en un mercado saturado de "agenda mejor" pero **vacante en "confirma citas automáticamente"**. La estrategia SEO se construye sobre esa cuña: capturar tráfico de búsquedas con intención de solucionar **inasistencias**, no de "agendar mejor".

**Posicionamiento SEO central:**
> "El sistema que confirma tus citas por ti" — no competimos con Calendly en "agenda" ni con Fresha en "salones". Competimos en **automatización de confirmaciones para negocios B2B en LATAM**.

**Tres apuestas:**
1. **Verticales primero, no genérico.** El SEO se gana por vertical (`/dentistas`, `/barberias`, etc.), no por la home. Cada vertical es una landing optimizada para 3-8 keywords específicas.
2. **Spanish LATAM nativo.** Casi toda la competencia tiene SEO en inglés con traducción flaca al español. Aquí ganamos con copy nativo, modismos correctos ("turnos" para barberos en MX, "citas" para clínicas, "sesiones" para psicólogos).
3. **Comparativas y alternativas.** Páginas tipo `/alternativa-a-calendly`, `/vs-fresha`, `/vs-doctoralia` capturan búsquedas de alta intención (4-7% de conversión vs. 0.5% del blog estándar).

**Métricas objetivo a 12 meses:**
- 5,000-8,000 visitas orgánicas/mes
- Top 10 en SERP para 25+ keywords primarias
- 200+ trials gratis generados desde orgánico
- Domain Authority: 15-25 (partiendo de 0)

---

## 2. Estado actual

### Lo que ya tenemos
| Asset | Estado |
|---|---|
| Landing principal `/` | ✅ Implementada, copy sólido, mockups CSS placeholder |
| 5 verticales (dentistas, consultorios médicos, psicólogos, salones de belleza, barberías) | ✅ Implementadas con copy base, testimonios placeholder |
| Stack Astro + Vercel | ✅ Build estático, Core Web Vitals óptimos por default |
| Brand voice consolidado | ✅ Documentado en CLAUDE.md y brand guidelines |
| Schema markup `SoftwareApplication` | ✅ En layout base |

### Lo que falta (gaps SEO)
| Asset | Prioridad |
|---|---|
| `sitemap.xml` | 🔴 Crítica |
| `robots.txt` | 🔴 Crítica |
| Meta titles + descriptions optimizados por vertical | 🔴 Crítica |
| H1 con keyword principal por vertical | 🔴 Crítica |
| Schema `Service` + `FAQPage` por vertical | 🟡 Alta |
| Open Graph images únicas por página | 🟡 Alta |
| `/precio` página dedicada | 🟡 Alta |
| Páginas comparativas (`/alternativa-a-calendly`, etc.) | 🟢 Media |
| Blog | 🟢 Media (Fase 2) |
| 5 verticales restantes | 🟢 Media (Fase 4 ya planeada) |
| Centro de ayuda / soporte | 🔵 Baja (Fase 4) |

---

## 3. Análisis competitivo

### Competidores directos (mismo mercado, mismo target)

#### Calendly
- **Fortaleza:** Brand awareness global, integraciones, freemium agresivo
- **Debilidad:** Inglés-first, español flaco, no automatiza confirmaciones por SMS/WhatsApp/llamada (solo email)
- **Oportunidad para nosotros:** Capturar usuarios de Calendly frustrados con la falta de WhatsApp/SMS en LATAM
- **Página objetivo:** `/alternativa-a-calendly`

#### Fresha
- **Fortaleza:** Modelo gratis para el negocio (cobra al cliente final), fuerte en beauty/wellness
- **Debilidad:** Vertical limitado (solo belleza/wellness), comisiona transacciones, complejidad de pagos
- **Oportunidad:** Negocios que NO quieren cobrar via plataforma, o que quieren modelo de costo fijo
- **Página objetivo:** `/vs-fresha` (enfoque: precio fijo vs. comisión)

#### Booksy
- **Fortaleza:** Líder en barberías/belleza, marketplace con tráfico propio
- **Debilidad:** Caro, lento, software pesado, soporte deficiente en LATAM
- **Oportunidad:** Barberías y salones que quieren dejar de pagar comisiones de marketplace
- **Página objetivo:** `/vs-booksy`

#### Doctoralia (MX/LATAM-específico)
- **Fortaleza:** Dominante en buscador médico LATAM, marketplace de pacientes
- **Debilidad:** Solo médicos, modelo marketplace caro, no es software de gestión
- **Oportunidad:** Consultorios que quieren independizarse del marketplace y gestionar agenda directo
- **Página objetivo:** `/vs-doctoralia` (enfoque: marketplace vs. software propio)

#### Agendapro
- **Fortaleza:** LATAM-focused, multi-vertical, soporte en español
- **Debilidad:** UI compleja, precio mayor, curva de aprendizaje
- **Oportunidad:** Negocios chicos que necesitan algo simple por $199 MXN
- **Página objetivo:** `/vs-agendapro`

### Competidores indirectos
- **WhatsApp Business** — la "competencia" real para 80% del mercado actual. Nuestra propuesta: "todo lo que haces en WhatsApp, pero automático".
- **Libreta de papel** — sigue siendo cómo opera la mayoría. Aquí el SEO es educativo.
- **Excel/Google Sheets** — para los más técnicos.

### Brecha clave
**Nadie en español LATAM domina el SEO de "automatización de confirmaciones".** Calendly y Fresha lo tocan tangencialmente. Hay un hueco de 18-24 meses para posicionarse antes de que alguien lo claim.

---

## 4. Keyword research por vertical

> **Nota:** Volúmenes estimados sin DataForSEO. Validar con Google Keyword Planner / Ubersuggest antes de scaling. Foco en intención sobre volumen.

### Patrones de búsqueda recurrentes (todos los verticales)

| Patrón | Ejemplo | Intención |
|---|---|---|
| `software [vertical]` | "software dentistas" | Comercial alta |
| `agenda [vertical]` | "agenda barberia" | Comercial media |
| `sistema citas [vertical]` | "sistema citas dental" | Comercial alta |
| `app [vertical]` | "app barberia" | Comercial alta |
| `recordatorio citas [vertical]` | "recordatorio citas medicas" | Comercial alta |
| `confirmar citas [vertical]` | "confirmar citas dentista automatico" | Comercial muy alta |
| `evitar inasistencias` | "como evitar inasistencias clinica" | Informacional → comercial |
| `plataforma [vertical]` | "plataforma para psicologos" | Comercial media |

### `/dentistas`

**Primary:**
- "software para dentistas" (~1,400/mes MX)
- "agenda dentistas" (~880/mes MX)
- "sistema de citas dental" (~720/mes MX)

**Secondary:**
- "software clinica dental"
- "programa para consultorio dental"
- "app para dentistas"
- "recordatorio citas dentista"

**Long-tail (alta intención):**
- "como evitar inasistencias dentista"
- "confirmar citas dentista por whatsapp"
- "software para clinica dental pequeña"
- "sistema de recordatorios consultorio dental"

**Title sugerido:**
`Software para dentistas — agenda y confirma citas automáticamente | citas.bot`

**Meta description sugerida:**
`Agenda, confirma y organiza tus citas dentales en automático. Menos inasistencias, más pacientes que llegan. Para clínicas dentales en México. $199 MXN/mes.`

**H1 sugerido:**
`Software de citas para dentistas en México`

---

### `/consultorios-medicos`

**Primary:**
- "software medico" (~2,400/mes MX)
- "agenda medica" (~1,900/mes MX)
- "sistema de citas medicas" (~1,300/mes MX)

**Secondary:**
- "software para consultorios"
- "programa para consultorio medico"
- "agenda doctores"
- "recordatorio citas medicas automatico"

**Long-tail:**
- "como reducir inasistencias en consultorio"
- "confirmacion citas medicas whatsapp"
- "software gestion consultorio mexico"
- "sistema citas para medicos privados"

**Title:**
`Software para consultorios médicos — agenda con confirmación automática | citas.bot`

**H1:**
`Software de citas para consultorios médicos`

---

### `/psicologos`

**Primary:**
- "agenda para psicologos" (~720/mes MX)
- "software psicologos" (~590/mes MX)
- "sistema citas psicologia" (~480/mes MX)

**Secondary:**
- "plataforma para terapeutas"
- "programa para consulta psicologica"
- "app para psicologos"
- "recordatorio sesiones terapia"

**Long-tail:**
- "como evitar ausencias en terapia"
- "confirmacion automatica citas psicologo"
- "software consulta privada psicologia"
- "agenda online psicologos mexico"

**Title:**
`Software para psicólogos — agenda y confirma sesiones automáticamente | citas.bot`

**H1:**
`Software de citas para psicólogos en México`

---

### `/salones-de-belleza`

**Primary:**
- "software para salon de belleza" (~1,600/mes MX)
- "agenda salon de belleza" (~1,300/mes MX)
- "sistema de citas salon" (~880/mes MX)

**Secondary:**
- "software estilistas"
- "programa para salon"
- "app para salones de belleza"
- "agenda online estetica"

**Long-tail:**
- "como evitar cancelaciones salon de belleza"
- "confirmacion citas salon whatsapp"
- "software salon de belleza pequeño"
- "alternativa a fresha para salon"

**Title:**
`Software para salones de belleza — agenda y confirma citas | citas.bot`

**H1:**
`Software de citas para salones de belleza en México`

---

### `/barberias`

**Primary:**
- "software para barberia" (~1,100/mes MX)
- "agenda barberia" (~980/mes MX)
- "app barberia" (~720/mes MX)

**Secondary:**
- "sistema de turnos barberia"
- "programa para barberia"
- "agenda online barberos"
- "reserva turnos barberia"

**Long-tail:**
- "como confirmar turnos barberia automatico"
- "alternativa a booksy barberia"
- "software barberia pequeña mexico"
- "evitar cancelaciones barberia"

**Title:**
`Software para barberías — confirma turnos en automático | citas.bot`

**H1:**
`Software de citas y turnos para barberías en México`

---

### Cluster de keywords genéricas (para la home)

**Primary (home):**
- "sistema de confirmacion de citas" (~390/mes MX)
- "software de citas mexico" (~590/mes MX)
- "app citas negocio" (~480/mes MX)
- "como reducir inasistencias citas" (~210/mes MX)

**Title home:**
`citas.bot — Tus citas, confirmadas | Sistema de confirmación automática`

---

## 5. Arquitectura de URLs

### Actual
```
/                          ← landing principal
/dentistas
/consultorios-medicos
/psicologos
/salones-de-belleza
/barberias
```

### Propuesta corto plazo (Fase 1-2)
```
/                          ← landing principal
/precio                    ← (NUEVA) — pricing dedicado, alto-conversión
/dentistas                 ← optimizar SEO
/consultorios-medicos      ← optimizar SEO
/psicologos                ← optimizar SEO
/salones-de-belleza        ← optimizar SEO
/barberias                 ← optimizar SEO

/alternativa-a-calendly    ← (NUEVA) — comparativa
/vs/fresha                 ← (NUEVA) — comparativa
/vs/booksy                 ← (NUEVA) — comparativa
/vs/doctoralia             ← (NUEVA) — comparativa
/vs/agendapro              ← (NUEVA) — comparativa
```

### Propuesta mediano plazo (Fase 3)
```
+5 verticales (Fase 4 actual): /spas, /salones-de-unas, /entrenadores-personales,
                                /despachos-legales, /terapistas

/blog                      ← (NUEVA) — content hub
/blog/[slug]               ← artículos individuales
/recursos                  ← (NUEVA) — guías PDF, calculadoras
/casos-de-exito            ← (NUEVA) — case studies por vertical
/casos-de-exito/[slug]
```

### Propuesta largo plazo (Fase 4)
```
/soporte                   ← centro de ayuda
/soporte/[slug]            ← artículos help center
/api                       ← documentación si abrimos API
```

### Reglas de URLs
- Sin trailing slash (`citas.bot/dentistas`, no `/dentistas/`) — configurar en `astro.config.mjs`
- Lowercase, guiones para separar palabras
- Sin parámetros UTM en canonicals
- Canonical absoluto en cada página: `https://citas.bot/[ruta]`

---

## 6. Plan de contenido

### Comparativas (alta prioridad — alta conversión)

Implementar **5 páginas comparativas** en Fase 1 inmediata. Estas convierten 4-7x mejor que blog estándar.

| Página | Target keyword | Volumen estimado | Prioridad |
|---|---|---|---|
| `/alternativa-a-calendly` | "alternativa a calendly", "calendly en español" | 1,300/mes | 🔴 |
| `/vs/fresha` | "fresha alternativa", "comparar fresha" | 590/mes | 🟡 |
| `/vs/booksy` | "booksy alternativa", "vs booksy" | 720/mes | 🟡 |
| `/vs/doctoralia` | "doctoralia alternativa software" | 480/mes | 🟡 |
| `/vs/agendapro` | "agendapro alternativa" | 320/mes | 🟢 |

**Estructura de cada página:**
1. H1 con keyword exacta
2. Tabla comparativa (precio, features clave, soporte LATAM, idioma)
3. "Por qué los negocios cambian a citas.bot" (3-5 razones honestas)
4. 1-2 testimonios de usuarios que cambiaron
5. FAQ con FAQPage schema
6. CTA prominente al trial

### Blog (Fase 2 — meses 3-6)

**Pilares de contenido (4 clusters):**

#### Cluster 1: Inasistencias y no-shows
- "Cómo reducir inasistencias en tu negocio en 30 días"
- "El costo real de las inasistencias: cuánto pierde tu clínica al año"
- "5 estrategias probadas para que tus clientes confirmen sus citas"
- "Por qué el 30% de tus citas no llegan (y qué hacer al respecto)"
- "Confirmaciones por WhatsApp vs SMS: cuál funciona mejor"

#### Cluster 2: Productividad operativa
- "Cómo organizar tu agenda cuando atiendes 20+ clientes al día"
- "El método 5-minutos para revisar tu agenda al inicio del día"
- "Recepcionista vs sistema automático: ¿qué te conviene?"
- "Cómo cobrar anticipos sin espantar al cliente"

#### Cluster 3: Por vertical (5 artículos por vertical de lanzamiento = 25 piezas)

**Dentistas:**
- "Software para dentistas: la guía completa 2026"
- "Cómo manejar urgencias dentales sin descuidar la agenda"
- "El protocolo de confirmación que reduce inasistencias en clínicas dentales"
- "Por qué los pacientes dentales cancelan (y cómo prevenirlo)"
- "Recepcionista en clínica dental: rol, costos, alternativas"

(Estructura similar para consultorios-medicos, psicologos, salones-de-belleza, barberias)

#### Cluster 4: Comparativas y reviews
- "Calendly en español: ¿vale la pena en 2026?"
- "Fresha vs Booksy vs citas.bot: comparativa para salones LATAM"
- "Los mejores softwares de citas para PyMEs en México"
- "Doctoralia: cuándo te conviene y cuándo no"

### Cadencia recomendada
- **Mes 1-2:** 2 artículos pilares por mes (foundation content)
- **Mes 3-6:** 4-6 artículos por mes (escalando)
- **Mes 6-12:** 8 artículos por mes + actualización de pilares

### Recursos descargables (lead magnets)
- Calculadora "¿Cuánto pierdes por inasistencias?" (interactiva, captura email)
- Plantilla "Mensaje de confirmación que sí responden" (PDF)
- Guía PDF "Cómo migrar de WhatsApp a un sistema de citas en 1 semana"

---

## 7. Schema markup

### Por tipo de página

| Página | Schemas a implementar |
|---|---|
| Home `/` | `Organization`, `WebSite` (+SearchAction), `SoftwareApplication` (ya existe), `FAQPage` |
| Verticales `/dentistas`, etc. | `Service`, `SoftwareApplication`, `FAQPage`, `BreadcrumbList` |
| `/precio` | `SoftwareApplication`, `Offer` |
| Comparativas `/vs/*` | `Article`, `FAQPage`, `BreadcrumbList` |
| Blog posts | `BlogPosting`, `Article`, `Author` |
| `/casos-de-exito/*` | `Article`, `Organization` (cliente), `Review` |

### Service schema por vertical (template)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Sistema de confirmación de citas para [vertical]",
  "provider": {
    "@type": "Organization",
    "name": "citas.bot",
    "url": "https://citas.bot"
  },
  "areaServed": {
    "@type": "Country",
    "name": "México"
  },
  "serviceType": "Software de gestión de citas",
  "offers": {
    "@type": "Offer",
    "price": "199",
    "priceCurrency": "MXN",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "billingDuration": "P1M"
    }
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "[vertical descriptivo]"
  }
}
```

### FAQPage schema en componente FAQ

Las 7 preguntas del FAQ ya estructuradas como acordeón se transforman en `FAQPage` schema. Una sola implementación en `FAQ.astro` cubre todas las páginas.

---

## 8. Roadmap de implementación

### Fase 1 — Foundation (semanas 1-2) 🔴 PRIORIDAD MÁXIMA

**Objetivo:** Cerrar gaps técnicos críticos antes de cualquier promoción.

- [x] **Sitemap** — generar `sitemap.xml` con `@astrojs/sitemap`
- [x] **Robots.txt** — `public/robots.txt` con sitemap reference
- [x] **Optimizar meta tags** de las 6 páginas existentes (titles + descriptions con keywords primarias)
- [x] **Optimizar H1s** — incluir keyword principal en cada vertical
- [x] **Schema `Service`** por vertical
- [x] **Schema `FAQPage`** en componente FAQ
- [ ] **Open Graph image** genérica para todas las páginas — **PENDIENTE** (decidido aplazar a Fase 2 con OG por vertical)
- [x] **Trailing slash config** en `astro.config.mjs` (`trailingSlash: 'never'`)
- [x] **Redirects 301** de variantes (con trailing slash → sin) — vía `cleanUrls` en `vercel.json`
- [ ] **Verificar Search Console** y Bing Webmaster Tools — **PENDIENTE** (acción manual del founder)

**Entregable:** 6 páginas técnicamente impecables, indexables, con schema completo. ✅ entregado.

### Fase 2 — Conversión y comparativas (semanas 3-6) 🟡

**Objetivo:** Páginas de alta conversión + 5 verticales restantes.

- [ ] **Página `/precio`** dedicada
- [ ] **5 páginas comparativas** (`/alternativa-a-calendly`, `/vs/fresha`, etc.)
- [ ] **5 verticales restantes** (Fase 4 actual de roadmap del proyecto): `/spas`, `/salones-de-unas`, `/entrenadores-personales`, `/despachos-legales`, `/terapistas`
- [ ] **OG images únicas** por vertical (10 imágenes total con Banana o similar)
- [ ] **Schema BreadcrumbList** en todas las páginas
- [ ] **Internal linking** — cada vertical enlaza a 2-3 verticales relacionadas + comparativas relevantes

**Entregable:** 16 páginas totales, todas optimizadas, todas con schema, todas con OG únicos.

### Fase 3 — Content marketing (meses 3-6) 🟢

**Objetivo:** Construir autoridad temática vía blog.

- [ ] **Setup `/blog`** con Astro Content Collections
- [ ] **Lanzar con 5 artículos pilares** (cluster 1 — inasistencias)
- [ ] **Cadencia 4-6 artículos/mes**
- [ ] **Lead magnet: Calculadora de inasistencias** (página interactiva, captura email)
- [ ] **Newsletter mensual** vía Resend o Buttondown
- [ ] **Optimización on-page** de todos los posts (title, meta, schema BlogPosting)

**Entregable:** 20-30 posts publicados, lead magnet activo, lista de email creciendo.

### Fase 4 — Authority building (meses 6-12) 🔵

**Objetivo:** Backlinks, casos de éxito, expansion temática.

- [ ] **Casos de éxito** con clientes reales (por vertical)
- [ ] **PR / outreach** — guest posts en directorios de PyMEs LATAM
- [ ] **Backlinks de directorios verticales** (asociaciones de dentistas, etc.)
- [ ] **Centro de ayuda `/soporte`**
- [ ] **Glosario de términos** (`/glosario` para SEO de cola larga)
- [ ] **Extensión multi-país** (Colombia, Argentina, España) si la tracción lo justifica

---

## 9. KPIs y métricas

### Baseline (mes 0, mayo 2026)
| Métrica | Valor |
|---|---|
| Páginas indexadas | 6 (post-implementación de sitemap) |
| Tráfico orgánico mensual | ~0 |
| Keywords ranqueadas | 0 |
| Domain Authority | 0-5 |
| Backlinks | 0-2 |

### Targets

| Métrica | 3 meses | 6 meses | 12 meses |
|---|---|---|---|
| Páginas indexadas | 16-20 | 40-60 | 80-120 |
| Tráfico orgánico/mes | 200-500 | 1,500-3,000 | 5,000-8,000 |
| Keywords top 10 | 5-10 | 15-25 | 30-50 |
| Domain Authority | 8-12 | 15-20 | 20-28 |
| Trials desde orgánico | 5-15/mes | 40-80/mes | 150-250/mes |
| Open rate newsletter | — | 25-30% | 30-35% |

### Core Web Vitals (mantener verde permanente)
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1

Astro estático en Vercel debe mantener estos números trivialmente. Monitorear en CrUX.

### Herramientas de tracking

| Tool | Para qué | Costo |
|---|---|---|
| Google Search Console | Performance + indexación | Gratis |
| Vercel Analytics | Tráfico real (ya integrado) | Incluido |
| Plausible o GA4 | Conversiones | Gratis-$9/mes |
| Ahrefs Webmaster Tools | Backlinks + keywords | Gratis |
| Ubersuggest | Keyword research básica | $29/mes |
| DataForSEO | Keyword research avanzada (opcional) | $50-100/mes |

---

## 10. Próximos pasos inmediatos

**Este sesión / próxima:** ejecutar Fase 1 (Foundation):

1. Generar `sitemap.xml` con `@astrojs/sitemap` → comando: `/claude-seo:seo-sitemap`
2. Crear `robots.txt`
3. Optimizar meta tags y H1s en las 6 páginas existentes
4. Implementar schema `Service` por vertical
5. Implementar schema `FAQPage` en componente FAQ
6. Configurar `trailingSlash: 'never'` en `astro.config.mjs`
7. Verificar Google Search Console + enviar sitemap

**Siguiente sesión dedicada:** Fase 2 — comparativas + 5 verticales restantes.

**Decisión pendiente del founder:**
- ¿Empezamos con el blog desde mes 1 o esperamos a tener tracción de las verticales primero? Recomendación: esperar 4-6 semanas, validar verticales, y luego blog.
- ¿Invertimos en DataForSEO ($50-100/mes) para keyword research real? Recomendación: sí, vale la inversión a partir del mes 2.

---

## Anexo A — Skills del plugin claude-seo aplicables

Lista de skills que se invocarán durante la implementación:

| Skill | Cuándo |
|---|---|
| `seo-sitemap` | Fase 1 — generar sitemap.xml |
| `seo-schema` | Fase 1 y 2 — generar Service, FAQPage, BreadcrumbList schemas |
| `seo-page` | Fase 1 — análisis profundo de cada vertical antes de optimizar |
| `seo-technical` | Fase 1 — verificación final post-implementación |
| `seo-competitor-pages` | Fase 2 — generar las 5 páginas comparativas |
| `seo-image-gen` | Fase 2 — Open Graph images por vertical |
| `seo-cluster` | Fase 3 — clustering de keywords para arquitectura del blog |
| `seo-content` | Fase 3 — review de calidad E-E-A-T de cada post |
| `seo-local` | Cuando se considere expandir a páginas geo-específicas (`/dentistas-cdmx`, etc.) |
| `seo-backlinks` | Fase 4 — análisis de oportunidades de backlinks |
| `seo-google` | Cuando se conecte Search Console para datos reales |
| `seo-drift` | Setup desde Fase 1 — detectar regresiones SEO en cada deploy |
