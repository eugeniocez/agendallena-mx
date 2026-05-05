# agendallena.mx — Brand Guidelines

> **Versión:** 2.2
> **Fecha:** mayo 2026
> **Manual de marca · Documento de identidad visual**

Tagline: **Tu agenda, confirmada.**

Este manual define cómo se ve, suena y se aplica la marca agendallena.mx. Cualquier persona que diseñe, escriba o construya bajo esta marca debería poder responder sus dudas aquí.

---

## Índice

| Sección | Contenido |
|---|---|
| 01 | Esencia de marca — Manifiesto, posicionamiento, personalidad, valores |
| 02 | Logo y símbolo — Wordmark, símbolo reducido, clases HTML |
| 03 | Color — Paleta, reglas de uso, superficies oscuras, sistema semafórico |
| 04 | Tipografía — Plus Jakarta Sans, jerarquía, reglas de uso |
| 05 | Voz y tono — Principios de escritura, traducciones de tono |
| 06 | Usos correctos e incorrectos — Logotipo, restricciones permanentes |
| A | Tokens de sistema — Radios, sombras, movimiento |

---

## 01 — Esencia de marca

Antes del logo, antes del color: lo que somos y por qué existimos.

### 01.1 — Manifiesto · Por qué existimos

Cada cita perdida es dinero que se va. Una libreta no te avisa cuando alguien no va a llegar. WhatsApp se pierde entre cien conversaciones. La memoria falla cuando atiendes todo el día.

agendallena.mx existe para que dejes de perseguir confirmaciones. Para que tu calendario te diga la verdad antes de que el día empiece. Para que sepas, de un vistazo, qué cita está en pie y cuál no.

No somos un calendario más bonito. Somos la diferencia entre esperar y saber.

> **"El sistema que confirma tu agenda por ti."** — Posicionamiento central

### 01.2 — Posicionamiento · Lo que somos y lo que no

agendallena.mx no es un calendario, ni un CRM, ni un bot conversacional. Es un sistema de confirmación automática diseñado para negocios que viven de citas: clínicas, estilistas, terapeutas, talleres, consultorios.

La promesa central no es "agenda mejor". Es **"deja de perder dinero por inasistencias"**.

### 01.3 — Personalidad · Quién somos

Si agendallena.mx fuera una persona: sería ese asistente silencioso, eficiente y absolutamente confiable que llega 5 minutos antes, tiene todo listo, y nunca te falla.

**No es carismático. Es indispensable.**

**Somos:** Directos · Confiables · Operativos · Sobrios · Útiles · Precisos
**No somos:** Lúdicos · Aspiracionales · Disruptivos · Tech-bro · Casuales · Infantiles

### 01.4 — Valores · En qué creemos

Tres principios que guían cada decisión de producto, marketing y comunicación.

**01 — Claridad sobre adorno**
Cada elemento del producto y la marca debe tener una función. Si no comunica algo, no va. El espacio en blanco es un activo, no un desperdicio.

**02 — Automático, no autómata**
Automatizamos las tareas repetitivas para que el dueño del negocio pueda enfocarse en lo humano: atender bien a quien sí llega. La tecnología trabaja en silencio.

**03 — Honestidad operativa**
No vendemos magia. Vendemos un sistema que funciona. Si una cita está en riesgo, lo decimos. Si está confirmada, también. Los precios se escriben sin asteriscos.

---

## 02 — Logo y símbolo

Wordmark como cara principal. Símbolo reducido cuando el formato lo exige.

### 02.1 — Logotipo principal · El wordmark

El logotipo principal es **agendallena.mx** escrito en Plus Jakarta Sans SemiBold (600), con el punto en verde de marca. El dominio es la marca. La marca es el dominio.

| Propiedad | Valor |
|---|---|
| Familia | Plus Jakarta Sans |
| Peso | SemiBold (600) |
| Tracking | -0.03em |
| Caso | Todo en minúsculas, sin espacios |
| Mínimo digital | 80px de ancho |
| Mínimo impreso | 22mm de ancho |

**Versiones:**
- Positiva — uso principal sobre fondos claros
- Negativa — sobre fondos oscuros

**Espacio mínimo de protección:** altura de la "x" del wordmark en todos los lados. Ningún elemento invade ese espacio.

### 02.2 — Símbolo reducido · El símbolo `[.]`

Cuando el formato es cuadrado o muy pequeño, el wordmark no funciona. Ahí entra el símbolo: dos corchetes geométricos conteniendo el punto verde de marca.

**Uso reservado para:** favicons, app icons (PWA), avatares en redes sociales, notificaciones push. Nunca como sustituto del wordmark en espacios donde éste sea legible.

| Elemento | Especificación |
|---|---|
| Contenedor | Rectángulo 88×88, radio 6 (casi cuadrado) |
| Corchetes | Trazo 6u, terminaciones cuadradas, separación 40u del centro |
| Punto | Cuadrado 16×16, sin radio, centrado, en `#0F7B3F` |
| Versión estándar | Contenedor negro · corchetes blancos · punto verde |
| Versión inversa | Contenedor blanco · corchetes negros · punto verde |

### 02.3 — Convenciones HTML · Clases globales de marca

Cualquier implementación HTML de agendallena.mx debe incluir estas dos clases. Son globales — no se scopean a componentes.

#### `.dot`

Aplica `color: var(--verde)` al punto del wordmark. Se define una sola vez como regla global.

```css
.dot { color: var(--verde); }
```

```html
agendallena<span class="dot">.</span>mx
```

**Regla:** en toda aparición del nombre en HTML, sin excepción. Wordmark, títulos, body, footer, mockups.

#### `.brand-mention`

Aplica `font-weight: 600; font-style: normal` a la marca en texto corrido — mismo peso que el wordmark, sin negritas pesadas.

```css
.brand-mention { font-weight: 600; font-style: normal; }
```

#### `.brand-llena` — variante editorial en body copy

En body copy (subtítulos, párrafos, FAQ, CTAs, contenido de verticales), la marca se escribe como **`agenda` + `llena`** (sin `.mx`), con `llena` pintada en verde de marca. Refuerza el verbo de la marca y crea un momento mnemotécnico al separar el sustantivo del verbo.

```css
.brand-llena { color: var(--verde); }
```

```html
<strong class="brand-mention">agenda<span class="brand-llena">llena</span></strong>
```

**Cuándo aplica cada forma:**

| Contexto | Forma |
|---|---|
| Wordmark del header/footer | `agendallena.mx` (con `.dot`) |
| `<title>`, meta tags, JSON-LD, canonical | `agendallena.mx` (plain) |
| Páginas legales (`/terminos`, `/privacidad`) | `agendallena.mx` (con `.dot`) |
| Mockups customer-facing (call-name, SMS bubble) | `agendallena.mx` (con `.dot`) |
| Headers de tablas comparativas | `agendallena.mx` (plain) |
| Instrucciones operativas ("Entra a agendallena.mx") | `agendallena.mx` (plain) |
| Body copy: subtítulos, headings de sección, FAQ, CTAs, verticals | **Editorial: `agenda` + `llena` verde** |
| Testimonios (citas textuales de clientes) | `agendallena` plain (sin styling) |

**Regla:** siempre combina `.brand-mention` con `.brand-llena` en body copy. Nunca usar `.brand-llena` sola. Nunca usar la variante editorial fuera de body copy.

---

## 03 — Color

Una paleta restringida y deliberada. El verde no decora: confirma.

### 03.1 — Paleta cromática · Sistema de color

Tres colores hacen el 98% del trabajo: tinta, hueso y verde de marca. Los grises construyen jerarquía. El verde tenue acompaña sin gritar.

| Token | HEX | Uso |
|---|---|---|
| **Tinta** | `#0A0A0B` | Texto principal, fondos oscuros, símbolo |
| **Hueso** | `#FAFAF7` | Fondo principal. No es blanco puro. |
| **Verde** | `#0F7B3F` | Color hero, CTAs, acentos, "confirmado" |
| **Grafito** | `#6B6B6B` | Texto secundario, captions, jerarquía media |
| **Verde tenue** | `#E8F5EE` | Fondos suaves, badges, estado de éxito |
| **Verde hover** | `#0C6633` | Hover state de botones y elementos en verde |
| **Gris claro** | `#F1EFE8` | Surfaces secundarios, fondos de cards |
| **Gris borde** | `#E8E6DE` | Bordes sutiles, separadores, líneas de tabla |

**Regla 90/8/2:** 90% neutros · 8% verde · 2% verde tenue. Máximo 15% de verde en cualquier composición.

### 03.2 — Aplicación del color · Cómo se usan

La marca no es multicolor. Es deliberadamente sobria, con el verde como única chispa de vida. Esta restricción es lo que la hace memorable.

**Combinaciones permitidas:**

| Combinación | Uso |
|---|---|
| Tinta sobre hueso | Body, párrafos, jerarquía principal |
| Hueso sobre tinta | Fondos oscuros, headers de sección |
| Verde sobre hueso | CTAs, eyebrows, acentos |
| Hueso sobre verde | Texto en botones CTA |
| Verde tenue como fondo | Con texto en verde o tinta — badges, callouts |

**Combinaciones prohibidas:**

- ✗ Verde sobre verde tenue como bloques grandes
- ✗ Gradientes entre los colores de marca
- ✗ Verde con cualquier color que no esté en esta paleta
- ✗ Gradientes saturados o multicolor en cualquier superficie

**Por qué esta restricción importa:**
Toda la competencia (Calendly, Fresha, Booksy) usa paletas amplias y vibrantes. Al ir en dirección opuesta — sobria, geométrica, con un solo punto de verde — agendallena.mx se diferencia automáticamente y proyecta seriedad operativa. El verde elegido es deliberadamente más profundo y maduro que un verde brillante: comunica confianza B2B, no startup tech.

### 03.3 — Superficies oscuras del website · Token unificado

Las secciones oscuras de la landing usan un **token unificado de verde forest profundo** (`#1A3F26`, ~14% luminosidad), no negro uniforme.

| Sección | HEX | Nota |
|---|---|---|
| Strip de impacto (stat banner) | `#E8F5EE` | Excepción luminosa — fondo claro |
| Cómo funciona | `#1A3F26` | Verde forest profundo (~14% L) |
| Card Calendario (módulo featured) | `#1A3F26` | Verde forest profundo (~14% L) |
| CTA final | `#1A3F26` | Verde forest profundo (~14% L) |

**Historia de la decisión:**
Una versión anterior de este sistema (v2.0) usaba 3 hex distintos (`#0A1A0F`, `#0C2016`, `#071A10`) pretendiendo crear jerarquía narrativa entre las superficies. En la práctica la diferencia era de ~1-2 puntos de luminosidad — imperceptible al ojo humano. El sistema se simplificó para honrar el principio de "no introducir variación sin propósito perceptible". Si en el futuro se quiere diferenciar superficies oscuras, hacerlo en un eje que sí se vea (textura, gradient, borde, sombra interna), no en luminosidad.

**Anclaje con tinta:** los botones primarios se mantienen en `--tinta` (`#0A0A0B`) para anclar la marca sin saturar de verde. No usar `--tinta` como fondo de secciones — la uniformidad de negro rompe el ritmo del sistema.

### 03.4 — Colores operativos del producto · El sistema semafórico

Dentro de la aplicación, las citas usan un sistema de colores que comunica su estado. **Estos colores viven exclusivamente en el producto y no forman parte de la identidad de marca.** Nunca deben aparecer en marketing, presentaciones ni redes sociales.

| Estado | Significado |
|---|---|
| Blanco | Cita apartada · recordatorio por enviar |
| Verde | Cliente confirmó la cita |
| Amarillo | Recordatorio enviado · sin confirmar |
| Rojo | Cliente solicitó cancelar |
| Negro / naranja | Inasistencia registrada |
| Verde claro | Cliente llegó sin cita previa |

---

## 04 — Tipografía

Una sola familia. Sin excepciones.

### 04.1 — Familia tipográfica · Plus Jakarta Sans

La voz visual de agendallena.mx es **Plus Jakarta Sans**: una sans-serif geométrica con esquinas precisas, presencia premium y excelente legibilidad en pantalla. Open-source, sin restricciones de licencia.

**Single-font policy:** Plus Jakarta Sans es la única familia. No JetBrains Mono, no serif, no display secundario.

**Escala tipográfica de referencia:**

| Nivel | Peso | Tamaño | Tracking | Notas |
|---|---|---|---|---|
| Display | SemiBold 600 | 30pt | -0.035em | Tu agenda, confirmada. |
| Headline | SemiBold 600 | 18pt | -0.025em | Menos inasistencias. Más certeza. |
| Body | Regular 400 | 10pt | — | Line-height 1.55 |
| Caption | Regular 400 | 8.5pt | — | Color grafito |
| Eyebrow | Medium 500 | 7pt | +0.1em | Uppercase |

### 04.2 — Pesos en uso · Jerarquía tipográfica

Una sola familia con cinco pesos. La jerarquía se construye con tamaño y peso, no con colores ni con cambio de familia.

- **Plus Jakarta Sans Light 300** — uso editorial limitado
- **Plus Jakarta Sans Regular 400** — body, párrafos, captions
- **Plus Jakarta Sans Medium 500** — labels, buttons, énfasis, eyebrows
- **Plus Jakarta Sans SemiBold 600** — wordmark, headlines, h2, step numbers
- **Plus Jakarta Sans Bold 700** — display, h1, momentos clave

### 04.3 — Reglas de uso · Cómo aplicar la tipografía

| Propiedad | Regla |
|---|---|
| Capitalización | Sentence case en todo. Nunca Title Case, nunca ALL CAPS — excepto eyebrows con tracking abierto |
| Tracking en grandes | Tamaños grandes llevan tracking negativo (-0.025 a -0.05em) |
| Tracking en pequeños | Neutro o ligeramente positivo (+0.02em captions, 0.05–0.1em para eyebrows uppercase) |
| Line-height | 1.5–1.6 para body. 1.0–1.15 para headlines |
| Datos numéricos | `font-variant-numeric: tabular-nums` — no se necesita mono para alinear cifras |
| Feel técnico | Se logra con uppercase + tracking abierto sobre Plus Jakarta Sans. No cambiar de familia |
| Esquinas de glifos | Plus Jakarta Sans tiene esquinas geométricas cuadradas. Es deliberado, no se corrige |

---

## 05 — Voz y tono

Hablamos como ese asistente que tiene todo bajo control y nunca alza la voz.

### 05.1 — Principios de voz · Cómo escribimos

La voz de agendallena.mx es directa, sobria y útil. No vendemos sueños: vendemos certeza operativa. Cada palabra carga peso.

**Directos**
Frases cortas. Verbos activos. "Confirma tu cita" — no "Te invitamos a confirmar tu cita".

**Sin jerga técnica**
Nuestro usuario es un estilista, una doctora, un mecánico. No "engagement", no "workflow", no "pipeline", no "onboarding", no "no-show rate". Hablamos como hablaría un cliente.

**Sin emojis decorativos**
En comunicación de producto: nunca. En marketing: solo si suman información, nunca como adorno.

**Honestos con los números**
"$199 al mes. Sin límites. Sin sorpresas." No usamos asteriscos, no escondemos costos, no inflamos beneficios.

**Sentence case siempre**
Nunca Title Case. Nunca ALL CAPS para énfasis. Nunca mayúsculas donde no corresponde. Solo los eyebrows técnicos (uppercase + tracking abierto) son la excepción — y son funcionales, no decorativos.

### 05.2 — Traducciones de tono · Lo que decimos y cómo lo decimos

Antes de publicar cualquier copy, esta tabla es la prueba de fuego. Si lo que escribiste se parece a la columna izquierda, reescríbelo.

| ✗ Cómo NO escribimos | ✓ Cómo SÍ escribimos |
|---|---|
| Optimiza tu workflow de bookings | Agenda más rápido |
| Engagement automatizado con clientes | Confirmaciones automáticas |
| Reduce tu no-show rate | Menos inasistencias |
| Onboarding en menos de 5 minutos | Listo en 5 minutos |
| Plataforma all-in-one para tu negocio | Todas tus citas en un solo lugar |
| Disrupción en la gestión de citas | Una mejor forma de confirmar |
| Empodera a tu equipo | Tu equipo trabaja mejor |
| Solución inteligente con IA conversacional | El sistema confirma por ti |

**Regla de oro:** si el dueño de una barbería en Monterrey tiene que buscar la palabra en Google, no va en el copy.

---

## 06 — Usos correctos e incorrectos

Mantener la integridad visual: lo que sí, lo que no, y por qué.

### 06.1 — Uso del logotipo · Lo que sí, lo que no

| ✓ Sí | ✗ No |
|---|---|
| Colores oficiales y peso correcto | Mayúsculas, colores no oficiales |
| Versión negativa sobre fondos oscuros sólidos | Gradientes saturados, colores alterados |
| Tracking y proporciones originales | Tracking alterado, nombre abreviado |

### 06.2 — Restricciones permanentes · Lo que nunca se hace

Reglas que protegen la integridad de la marca a lo largo del tiempo. Sin excepciones.

- **✗ Sin efectos visuales en el logotipo.** Prohibido: sombras, brillos, contornos, gradientes, biseles, reflejos, glow, neon o cualquier tratamiento decorativo. El wordmark es plano siempre.
- **✗ Sin contenedores alrededor del wordmark.** No colocar dentro de cajas, círculos, escudos o marcos adicionales. La única excepción es el símbolo reducido `[.]`, que ya tiene su contenedor definido.
- **✗ Sin alteraciones del nombre — con una excepción editorial documentada.** "Agenda Llena", "AgendaLlena", "Agendallena.mx" o cualquier variante con espacios o capitalización distinta no son válidas. La forma estructural y legal del nombre es siempre **agendallena.mx** — minúsculas, con punto, con .mx, sin espacios. La única variante permitida es la **editorial en body copy** (`agenda` + `llena` con `llena` en verde, sin `.mx`) — ver sección 02.3, clase `.brand-llena`. Esta variante NO sustituye al wordmark estructural, solo aplica en texto corrido.
- **✗ Sin reemplazo del color del punto.** El "." siempre va en verde de marca (`#0F7B3F`). En blanco y negro estricto puede ir en negro — esa es la única excepción.
- **✗ Sin íconos cliché en producto.** No usar palomitas verdes con check redondo como ícono principal. Es el cliché del nicho de citas y elimina la diferenciación visual.
- **✗ Sin mockups del producto en HTML/CSS.** Las vistas internas de la app (calendario, dashboard, módulos) se muestran solo con capturas reales del PWA, sobre frame de iPhone. No simularlas con código.
- **✗ Sin segunda familia tipográfica.** No JetBrains Mono, no Inter, no serif. El feel técnico se logra con uppercase + tracking abierto sobre Plus Jakarta Sans.
- **✗ Sin paleta multicolor.** La marca es verde + neutros. Cualquier otro color de acento es una violación del sistema.
- **✗ Sin emojis decorativos** en producto, landing ni comunicación de marca.
- **✗ Sin precio con asteriscos.** $199 MXN/mes se escribe siempre completo, sin condiciones ocultas ni letra chica.

---

## A — Tokens de sistema

Variables canónicas para radios, sombras y movimiento. Úsalas como tokens — no las hardcodees.

### A.1 — Radios

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 8px | Elementos pequeños (badges, chips) |
| `--radius-md` | 12px | Default para componentes |
| `--radius-lg` | 20px | Cards |
| `--radius-xl` | 28px | Secciones grandes, cards destacadas |
| Botones | `border-radius: 999px` | Pill global — sin excepciones |

### A.2 — Sombras

| Token | Valor |
|---|---|
| `--shadow-sm` | `0 1px 2px rgba(10, 10, 11, 0.04)` |
| `--shadow-md` | `0 4px 24px rgba(10, 10, 11, 0.06)` |
| `--shadow-lg` | `0 24px 60px rgba(10, 10, 11, 0.12)` |

### A.3 — Movimiento

| Token | Valor |
|---|---|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` · curva canónica |

**Curva canónica:** se usa en hovers, transiciones y reveals. No usar curvas con bounce en botones — se siente discordante con la personalidad sobria de la marca. Spring solo para decoraciones puntuales si fuera necesario.

### A.4 — Variables CSS globales

```css
:root {
  --tinta: #0A0A0B;
  --hueso: #FAFAF7;
  --verde: #0F7B3F;
  --verde-hover: #0C6633;
  --verde-tenue: #E8F5EE;
  --grafito: #6B6B6B;
  --gris-claro: #F1EFE8;
  --gris-borde: #E8E6DE;
  --amarillo: #F59E0B; /* solo en producto */
  --rojo: #DC2626;     /* solo en producto */
}
```

---

**agendallena.mx** · Brand Guidelines v2.2 · mayo 2026
**Tu agenda, confirmada.**
