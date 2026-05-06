/**
 * Brand Guidelines PDF builder — v3.0
 *
 * Run: npm run build:brand-pdf
 */

import { writeFile, unlink, readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const TMP_HTML_PATH = resolve(root, 'docs/_brand-guidelines.tmp.html');
const PDF_PATH = resolve(root, 'docs/brand-guidelines-v3.0.pdf');
const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const FONTS_PATH = resolve(__dirname, 'pjs-fonts.css');

const fontCss = await readFile(FONTS_PATH, 'utf8');

const css = `
${fontCss}

:root {
  --tinta: #0A0A0B;
  --hueso: #FAFAF7;
  --verde: #0F7B3F;
  --verde-hover: #0C6633;
  --verde-tenue: #E8F5EE;
  --verde-acento: #4ADE80;
  --verde-superficie: #245C32;
  --grafito: #6B6B6B;
  --gris-claro: #F1EFE8;
  --gris-borde: #E8E6DE;
  --amarillo: #F59E0B;
  --rojo: #DC2626;
}

@page {
  size: Letter;
  margin: 64pt 64pt 56pt;
}

@page :first {
  margin: 0;
}

* { box-sizing: border-box; }

html, body {
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  font-size: 9.5pt;
  line-height: 1.55;
  color: var(--tinta);
  background: var(--hueso);
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  font-feature-settings: "tnum";
}

p { margin: 0 0 8pt; }
strong { font-weight: 600; color: var(--tinta); }
a { color: var(--verde); text-decoration: none; }
ul { margin: 6pt 0 8pt; padding-left: 16pt; }
li { margin-bottom: 4pt; }

hr {
  border: none;
  height: 0.5pt;
  background: var(--gris-borde);
  margin: 18pt 0;
}

/* ============================================================
   PAGE STRUCTURE
============================================================ */

.page {
  page-break-before: always;
  page-break-inside: auto;
  position: relative;
}

.page:first-child { page-break-before: auto; }

/* ============================================================
   COVER PAGE
============================================================ */

.cover {
  background: var(--tinta);
  color: var(--hueso);
  width: 8.5in;
  height: 11in;
  margin: 0;
  padding: 64pt;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  page-break-after: always;
}

.cover-eyebrow {
  font-size: 8.5pt;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(250, 250, 247, 0.7);
  margin-bottom: 16pt;
}

.cover-wordmark {
  font-size: 56pt;
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1;
  margin-bottom: 14pt;
  color: var(--hueso);
}

.cover-caption {
  font-size: 11pt;
  color: rgba(250, 250, 247, 0.85);
  margin: 0 0 4pt;
  font-weight: 400;
}

.cover-tagline {
  font-size: 11pt;
  color: rgba(250, 250, 247, 0.85);
  margin: 0 0 28pt;
  font-weight: 400;
}

.cover-rule {
  background: rgba(250, 250, 247, 0.15);
  margin: 0 0 18pt;
  height: 0.5pt;
  border: none;
}

.cover-meta {
  font-size: 8.5pt;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(250, 250, 247, 0.55);
}

/* ============================================================
   NAMED PAGE FOOTERS
============================================================ */

@page section-index { @bottom-left { content: "agendallena · Brand Guidelines v3.0"; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; color: #6B6B6B; } @bottom-right { content: counter(page); font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; color: #6B6B6B; } }
@page section-01 { @bottom-left { content: "agendallena · 01 Esencia"; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; color: #6B6B6B; } @bottom-right { content: counter(page); font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; color: #6B6B6B; } }
@page section-02 { @bottom-left { content: "agendallena · 02 Logo"; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; color: #6B6B6B; } @bottom-right { content: counter(page); font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; color: #6B6B6B; } }
@page section-03 { @bottom-left { content: "agendallena · 03 Color"; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; color: #6B6B6B; } @bottom-right { content: counter(page); font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; color: #6B6B6B; } }
@page section-04 { @bottom-left { content: "agendallena · 04 Tipografía"; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; color: #6B6B6B; } @bottom-right { content: counter(page); font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; color: #6B6B6B; } }
@page section-05 { @bottom-left { content: "agendallena · 05 Voz y tono"; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; color: #6B6B6B; } @bottom-right { content: counter(page); font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; color: #6B6B6B; } }
@page section-06 { @bottom-left { content: "agendallena · 06 Usos"; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; color: #6B6B6B; } @bottom-right { content: counter(page); font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; color: #6B6B6B; } }
@page section-A  { @bottom-left { content: "agendallena · Tokens de sistema"; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; color: #6B6B6B; } @bottom-right { content: counter(page); font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8pt; color: #6B6B6B; } }

.page--index { page: section-index; }
.page--s01   { page: section-01; }
.page--s02   { page: section-02; }
.page--s03   { page: section-03; }
.page--s04   { page: section-04; }
.page--s05   { page: section-05; }
.page--s06   { page: section-06; }
.page--sA    { page: section-A; }

/* ============================================================
   SECTION OPENER
============================================================ */

.opener {
  display: grid;
  grid-template-columns: 88pt 1fr;
  gap: 0;
  margin-bottom: 18pt;
}

.opener-num {
  font-size: 8pt;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--verde);
  padding-top: 10pt;
}

.opener-title {
  font-size: 30pt;
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
  margin: 0 0 6pt;
  color: var(--tinta);
}

.opener-subtitle {
  font-size: 10pt;
  color: var(--grafito);
  margin: 0;
  max-width: 480pt;
}

.index-eyebrow {
  font-size: 8pt;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--verde);
  margin: 0 0 10pt;
}

.index-title {
  font-size: 30pt;
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
  margin: 0 0 8pt;
  color: var(--tinta);
}

.index-lead {
  font-size: 10pt;
  color: var(--grafito);
  margin: 0 0 18pt;
  max-width: 540pt;
}

/* ============================================================
   SUBSECTION
============================================================ */

.subsection {
  margin-top: 18pt;
  page-break-inside: auto;
}

.subsection-eyebrow {
  font-size: 8pt;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--verde);
  margin: 0 0 8pt;
}

.subsection-title {
  font-size: 14pt;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 0 0 8pt;
  color: var(--tinta);
}

.subsection h4 {
  font-size: 10.5pt;
  font-weight: 600;
  margin: 14pt 0 6pt;
  color: var(--tinta);
  page-break-after: avoid;
}

.lead {
  font-size: 10.5pt;
  color: var(--tinta);
  margin: 0 0 8pt;
  max-width: 520pt;
}

/* ============================================================
   TABLES
============================================================ */

table {
  width: 100%;
  border-collapse: collapse;
  margin: 10pt 0;
  font-size: 9pt;
  page-break-inside: auto;
}

thead { background: var(--gris-claro); }

th, td {
  text-align: left;
  padding: 8pt 12pt;
  border-bottom: 0.5pt solid var(--gris-borde);
  vertical-align: top;
  line-height: 1.45;
}

th {
  font-size: 7.5pt;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--grafito);
  padding: 9pt 12pt;
}

td:first-child { color: var(--tinta); }

td code, th code {
  font-family: 'Plus Jakarta Sans', monospace;
  font-size: 8.5pt;
  background: var(--gris-claro);
  padding: 1pt 4pt;
  border-radius: 3pt;
  font-weight: 500;
  color: var(--tinta);
}

.index-table td:first-child {
  font-weight: 500;
  color: var(--verde);
  letter-spacing: 0.05em;
  padding-left: 16pt;
  width: 70pt;
}

.index-table td:last-child {
  text-align: right;
  color: var(--grafito);
  font-size: 8.5pt;
  width: 50pt;
  padding-right: 16pt;
}

.index-table th { padding-left: 16pt; }
.index-table th:last-child { text-align: right; padding-right: 16pt; }

.swatch-table .swatch-cell { width: 60pt; padding: 8pt 12pt; }

.swatch {
  display: inline-block;
  width: 28pt;
  height: 28pt;
  border-radius: 3pt;
  border: 0.5pt solid var(--gris-borde);
  vertical-align: middle;
}

/* ============================================================
   CALLOUTS
============================================================ */

.callout {
  border-left: 2.5pt solid var(--verde);
  background: var(--verde-tenue);
  padding: 11pt 14pt;
  margin: 10pt 0;
  border-radius: 0 4pt 4pt 0;
  page-break-inside: avoid;
}

.callout p { margin: 0; font-size: 9.5pt; color: var(--tinta); }
.callout strong { color: var(--tinta); font-weight: 600; }

.callout-decision {
  border-left: 2.5pt solid var(--grafito);
  background: var(--hueso);
  padding: 12pt 16pt;
  margin: 12pt 0;
  border-radius: 0 4pt 4pt 0;
  page-break-inside: avoid;
}

.callout-decision p { margin: 0 0 8pt; font-size: 9pt; }
.callout-decision p:last-child { margin: 0; }

.decision-row {
  display: grid;
  grid-template-columns: 68pt 1fr;
  gap: 6pt 12pt;
  font-size: 9pt;
  margin-top: 4pt;
  padding-top: 6pt;
  border-top: 0.5pt solid var(--gris-borde);
}

.decision-label {
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 7pt;
  color: var(--grafito);
  padding-top: 2pt;
}

/* ============================================================
   PILLS
============================================================ */

.pill-row {
  display: flex;
  gap: 6pt;
  flex-wrap: wrap;
  margin: 8pt 0;
}

.pill-group-label {
  font-size: 7.5pt;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--grafito);
  margin: 0 0 6pt;
}

.pill {
  display: inline-block;
  padding: 4pt 10pt;
  border: 0.5pt solid var(--gris-borde);
  border-radius: 999pt;
  font-size: 9pt;
  font-weight: 500;
  background: var(--hueso);
  color: var(--tinta);
  white-space: nowrap;
}

.pill-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24pt;
  margin: 12pt 0;
}

/* ============================================================
   COLOR PALETTE GRID
============================================================ */

.palette-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10pt;
  margin: 14pt 0 6pt;
}

.palette-card {
  border: 0.5pt solid var(--gris-borde);
  border-radius: 6pt;
  overflow: hidden;
  page-break-inside: avoid;
}

.palette-color { height: 56pt; border-bottom: 0.5pt solid var(--gris-borde); }

.palette-meta { padding: 9pt 12pt 11pt; }

.palette-name {
  font-size: 9.5pt;
  font-weight: 600;
  margin: 0 0 1pt;
  color: var(--tinta);
}

.palette-hex {
  font-size: 8.5pt;
  font-weight: 500;
  color: var(--grafito);
  margin: 0 0 4pt;
  font-feature-settings: "tnum";
}

.palette-desc {
  font-size: 8.5pt;
  color: var(--grafito);
  margin: 0;
  line-height: 1.4;
}

.palette-rule .palette-color {
  background: linear-gradient(135deg, var(--verde) 50%, var(--verde-tenue) 50%);
}

.palette-product .palette-name::after {
  content: " ·";
  font-weight: 400;
  color: var(--grafito);
}

.palette-product-note {
  font-size: 8pt;
  color: var(--grafito);
  margin: 2pt 0 10pt;
  font-style: italic;
}

/* ============================================================
   LOGO CARDS
============================================================ */

.logo-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14pt;
  margin: 14pt 0;
}

.logo-card {
  border: 0.5pt solid var(--gris-borde);
  border-radius: 6pt;
  overflow: hidden;
  page-break-inside: avoid;
}

.logo-card-display {
  padding: 30pt 24pt;
  text-align: center;
  font-size: 24pt;
  font-weight: 600;
  letter-spacing: -0.03em;
}

.logo-card-display.positive { background: var(--hueso); color: var(--tinta); }
.logo-card-display.negative { background: var(--tinta); color: var(--hueso); }
.logo-card-display .dot { color: var(--verde); }

.logo-card-meta {
  background: var(--gris-claro);
  padding: 8pt 14pt;
  font-size: 8.5pt;
  color: var(--grafito);
}

.logo-card-meta .si {
  display: inline-block;
  font-size: 8pt;
  font-weight: 500;
  color: var(--verde);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-right: 8pt;
}

.props-card {
  border: 0.5pt solid var(--gris-borde);
  border-radius: 6pt;
  padding: 16pt 18pt;
  margin: 12pt 0;
  page-break-inside: avoid;
}

.props-card .props-grid {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 8pt 24pt;
  font-size: 9pt;
}

.props-card .prop-label { font-weight: 600; color: var(--tinta); }
.props-card .prop-value { color: var(--grafito); }

.props-stack {
  border: 0.5pt solid var(--gris-borde);
  border-radius: 6pt;
  padding: 14pt 18pt;
  margin: 10pt 0;
  page-break-inside: avoid;
}

.props-stack-row {
  display: grid;
  grid-template-columns: 130pt 1fr;
  gap: 12pt;
  font-size: 9pt;
  padding: 5pt 0;
}

.props-stack-row .prop-label { font-weight: 600; color: var(--tinta); }
.props-stack-row .prop-value { color: var(--grafito); }

/* ============================================================
   TYPOGRAPHY SHOWCASE
============================================================ */

.type-card {
  border: 0.5pt solid var(--gris-borde);
  border-radius: 6pt;
  padding: 14pt 20pt;
  margin: 10pt 0;
  page-break-inside: avoid;
}

.type-meta {
  font-size: 7.5pt;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--grafito);
  margin: 0 0 8pt;
}

.type-meta .type-meta-label {
  color: var(--tinta);
  font-weight: 600;
  margin-right: 14pt;
}

.type-sample-display { font-size: 30pt; font-weight: 600; letter-spacing: -0.035em; line-height: 1.05; }
.type-sample-display .accent { color: var(--verde); }
.type-sample-headline { font-size: 18pt; font-weight: 600; letter-spacing: -0.025em; line-height: 1.2; }
.type-sample-body { font-size: 10pt; font-weight: 400; line-height: 1.55; color: var(--tinta); }
.type-sample-caption { font-size: 8.5pt; font-weight: 400; color: var(--grafito); }
.type-sample-eyebrow { font-size: 7pt; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--verde); }

.weights-list { margin: 8pt 0; }

.weights-list-item {
  font-size: 12pt;
  margin: 6pt 0;
  color: var(--tinta);
}

.weights-list-item .weights-meta { color: var(--grafito); font-size: 9pt; margin-left: 8pt; }
.weights-list-item.w300 { font-weight: 300; }
.weights-list-item.w400 { font-weight: 400; }
.weights-list-item.w500 { font-weight: 500; }
.weights-list-item.w600 { font-weight: 600; }
.weights-list-item.w700 { font-weight: 700; }

/* ============================================================
   CODE BLOCKS
============================================================ */

pre.code-block {
  background: var(--gris-claro);
  color: var(--tinta);
  padding: 10pt 14pt;
  border-radius: 6pt;
  font-size: 8.5pt;
  line-height: 1.5;
  margin: 8pt 0;
  font-family: 'Plus Jakarta Sans', monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
  page-break-inside: avoid;
}

/* ============================================================
   VOICE TABLE
============================================================ */

.voice-table th:first-child { color: var(--rojo); }
.voice-table th:last-child { color: var(--verde); }

.voice-section { margin: 10pt 0; page-break-inside: avoid; }
.voice-section h4 { font-size: 10.5pt; font-weight: 600; margin: 0 0 4pt; }
.voice-section p { font-size: 9pt; color: var(--grafito); margin: 0 0 12pt; }

.status-allowed { color: var(--verde); }
.status-forbidden { color: var(--rojo); }

/* ============================================================
   RESTRICTIONS
============================================================ */

.restrictions { margin: 10pt 0; }

.restriction {
  display: grid;
  grid-template-columns: 16pt 130pt 1fr;
  gap: 12pt;
  padding: 10pt 0;
  border-bottom: 0.5pt solid var(--gris-borde);
  align-items: start;
  page-break-inside: avoid;
}

.restriction:last-child { border-bottom: none; }
.restriction-icon { font-size: 11pt; font-weight: 500; color: var(--rojo); line-height: 1.2; padding-top: 1pt; }
.restriction-title { font-size: 9.5pt; font-weight: 600; color: var(--tinta); line-height: 1.4; }
.restriction-body { font-size: 9pt; color: var(--grafito); line-height: 1.5; }

/* ============================================================
   PRINT
============================================================ */

p, li, blockquote { orphans: 2; widows: 2; }
h1, h2, h3, h4 { page-break-after: avoid; }
`;

const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>agendallena — Brand Guidelines v3.0</title>
<style>${css}</style>
</head>
<body>

<!-- ============ COVER ============ -->
<section class="cover">
  <div class="cover-content">
    <div class="cover-eyebrow">Brand Guidelines · v3.0</div>
    <div class="cover-wordmark">agendallena<span class="dot">.</span>mx</div>
    <div class="cover-caption">Manual de marca</div>
    <div class="cover-tagline">Tu agenda, confirmada.</div>
    <hr class="cover-rule">
    <div class="cover-meta">Mayo 2026 · Documento de identidad visual</div>
  </div>
</section>

<!-- ============ INDEX ============ -->
<section class="page page--index">
  <div class="index-eyebrow">Índice</div>
  <h1 class="index-title">Contenido</h1>
  <p class="index-lead">Este manual define cómo se ve, suena y se aplica la marca agendallena. Cualquier persona que diseñe, escriba o construya bajo esta marca debería poder responder sus dudas aquí.</p>
  <hr>
  <table class="index-table">
    <thead>
      <tr><th>Sección</th><th>Contenido</th><th>Pág.</th></tr>
    </thead>
    <tbody>
      <tr><td>01</td><td><strong>Esencia de marca</strong> — Manifiesto, posicionamiento, personalidad, valores</td><td>03</td></tr>
      <tr><td>02</td><td><strong>Logo y símbolo</strong> — Wordmark, distinción MARCA/DOMINIO, símbolo reducido, clases HTML</td><td>05</td></tr>
      <tr><td>03</td><td><strong>Color</strong> — Paleta, reglas de uso, superficies oscuras, sistema semafórico</td><td>09</td></tr>
      <tr><td>04</td><td><strong>Tipografía</strong> — Plus Jakarta Sans, jerarquía, reglas de uso</td><td>13</td></tr>
      <tr><td>05</td><td><strong>Voz y tono</strong> — Principios de escritura, traducciones de tono</td><td>15</td></tr>
      <tr><td>06</td><td><strong>Usos correctos e incorrectos</strong> — Logotipo, restricciones permanentes</td><td>17</td></tr>
      <tr><td>A</td><td><strong>Tokens de sistema</strong> — Radios, sombras, movimiento, variables CSS</td><td>19</td></tr>
    </tbody>
  </table>
</section>

<!-- ============ 01 ESENCIA ============ -->
<section class="page page--s01">
  <div class="opener">
    <div class="opener-num">01 / 06</div>
    <div class="opener-content">
      <h2 class="opener-title">Esencia de marca</h2>
      <p class="opener-subtitle">Antes del logo, antes del color: lo que somos y por qué existimos.</p>
    </div>
  </div>
  <hr>

  <div class="subsection">
    <div class="subsection-eyebrow">01.1 — Manifiesto</div>
    <h3 class="subsection-title">Por qué existimos</h3>
    <p>Cada cita perdida es dinero que se va. Una libreta no te avisa cuando alguien no va a llegar. WhatsApp se pierde entre cien conversaciones. La memoria falla cuando atiendes todo el día.</p>
    <p><strong>agendallena</strong> existe para que dejes de perseguir confirmaciones. Para que tu calendario te diga la verdad antes de que el día empiece. Para que sepas, de un vistazo, qué cita está en pie y cuál no.</p>
    <p>No somos un calendario más bonito. Somos la diferencia entre esperar y saber.</p>
    <div class="callout">
      <p>"El sistema que confirma tu agenda por ti." — Posicionamiento central</p>
    </div>
  </div>

  <div class="subsection">
    <div class="subsection-eyebrow">01.2 — Posicionamiento</div>
    <h3 class="subsection-title">Lo que somos y lo que no</h3>
    <p><strong>agendallena</strong> no es un calendario, ni un CRM, ni un bot conversacional. Es un sistema de confirmación automática diseñado para negocios que viven de citas: clínicas, estilistas, terapeutas, talleres, consultorios.</p>
    <p>La promesa central no es "agenda mejor". Es <strong>"deja de perder dinero por inasistencias"</strong>.</p>
  </div>

  <div class="subsection">
    <div class="subsection-eyebrow">01.3 — Personalidad</div>
    <h3 class="subsection-title">Quién somos</h3>
    <p>Si agendallena fuera una persona: sería ese asistente silencioso, eficiente y absolutamente confiable que llega 5 minutos antes, tiene todo listo, y nunca te falla.</p>
    <p><strong>No es carismático. Es indispensable.</strong></p>
    <div class="pill-grid">
      <div>
        <div class="pill-group-label">Somos</div>
        <div class="pill-row">
          <span class="pill">Directos</span>
          <span class="pill">Confiables</span>
          <span class="pill">Operativos</span>
          <span class="pill">Sobrios</span>
          <span class="pill">Útiles</span>
          <span class="pill">Precisos</span>
        </div>
      </div>
      <div>
        <div class="pill-group-label">No somos</div>
        <div class="pill-row">
          <span class="pill">Lúdicos</span>
          <span class="pill">Aspiracionales</span>
          <span class="pill">Disruptivos</span>
          <span class="pill">Tech-bro</span>
          <span class="pill">Casuales</span>
          <span class="pill">Infantiles</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="page page--s01">
  <div class="subsection">
    <div class="subsection-eyebrow">01.4 — Valores</div>
    <h3 class="subsection-title">En qué creemos</h3>
    <p>Tres principios que guían cada decisión de producto, marketing y comunicación.</p>

    <h4>01 — Claridad sobre adorno</h4>
    <p>Cada elemento del producto y la marca debe tener una función. Si no comunica algo, no va. El espacio en blanco es un activo, no un desperdicio.</p>
    <hr>
    <h4>02 — Automático, no autómata</h4>
    <p>Automatizamos las tareas repetitivas para que el dueño del negocio pueda enfocarse en lo humano: atender bien a quien sí llega. La tecnología trabaja en silencio.</p>
    <hr>
    <h4>03 — Honestidad operativa</h4>
    <p>No vendemos magia. Vendemos un sistema que funciona. Si una cita está en riesgo, lo decimos. Si está confirmada, también. Los precios se escriben sin asteriscos.</p>
  </div>
</section>

<!-- ============ 02 LOGO ============ -->
<section class="page page--s02">
  <div class="opener">
    <div class="opener-num">02 / 06</div>
    <div class="opener-content">
      <h2 class="opener-title">Logo y símbolo</h2>
      <p class="opener-subtitle">Wordmark como cara principal. Símbolo reducido cuando el formato lo exige.</p>
    </div>
  </div>
  <hr>

  <div class="subsection">
    <div class="subsection-eyebrow">02.1 — Logotipo principal</div>
    <h3 class="subsection-title">El wordmark</h3>

    <div class="callout-decision">
      <p><strong>Distinción oficial · mayo 2026</strong></p>
      <div class="decision-row">
        <div class="decision-label">MARCA</div>
        <div><code>agendallena</code> — Solo el nombre, sin punto, sin .mx. Se usa en el wordmark del header/footer, <code>&lt;title&gt;</code>, meta tags, JSON-LD name, copyright, tablas comparativas, headings estructurales.</div>
      </div>
      <div class="decision-row" style="margin-top:6pt;">
        <div class="decision-label">DOMINIO</div>
        <div><code>agendallena.mx</code> — Con el punto en verde (clase <code>.dot</code>). Solo cuando se refiere al dominio como URL: instrucciones operativas, emails, JSON-LD url, canonical, mockups customer-facing.</div>
      </div>
    </div>

    <p>El logotipo principal es <strong>agendallena</strong> escrito en Plus Jakarta Sans SemiBold (600). Sin punto, sin .mx. La marca es el nombre; el dominio es la URL.</p>

    <div class="logo-row">
      <div class="logo-card">
        <div class="logo-card-display positive">agendallena</div>
        <div class="logo-card-meta"><span class="si">Sí</span>Versión positiva — uso principal</div>
      </div>
      <div class="logo-card">
        <div class="logo-card-display negative">agendallena</div>
        <div class="logo-card-meta"><span class="si">Sí</span>Versión negativa — fondos oscuros</div>
      </div>
    </div>

    <div class="props-card">
      <div class="props-grid">
        <div class="prop-label">Familia</div><div class="prop-value">Plus Jakarta Sans</div>
        <div class="prop-label">Peso</div><div class="prop-value">SemiBold (600)</div>
        <div class="prop-label">Tracking</div><div class="prop-value">-0.03em</div>
        <div class="prop-label">Caso</div><div class="prop-value">Todo en minúsculas, sin espacios</div>
        <div class="prop-label">Mínimo digital</div><div class="prop-value">80px de ancho</div>
        <div class="prop-label">Mínimo impreso</div><div class="prop-value">22mm de ancho</div>
      </div>
    </div>

    <p><strong>Espacio mínimo de protección:</strong> altura de la "x" del wordmark en todos los lados. Ningún elemento invade ese espacio.</p>
  </div>

  <div class="subsection">
    <div class="subsection-eyebrow">02.2 — Símbolo reducido</div>
    <h3 class="subsection-title">El símbolo [.]</h3>
    <p>Cuando el formato es cuadrado o muy pequeño, el wordmark no funciona. Ahí entra el símbolo: dos corchetes geométricos conteniendo el punto verde de marca.</p>
    <p><strong>Uso reservado para:</strong> favicons, app icons (PWA), avatares en redes sociales, notificaciones push. Nunca como sustituto del wordmark en espacios donde éste sea legible.</p>

    <div class="props-stack">
      <div class="props-stack-row"><div class="prop-label">Contenedor</div><div class="prop-value">Rectángulo 88×88, radio 6 (casi cuadrado)</div></div>
      <div class="props-stack-row"><div class="prop-label">Corchetes</div><div class="prop-value">Trazo 6u, terminaciones cuadradas, separación 40u del centro</div></div>
      <div class="props-stack-row"><div class="prop-label">Punto</div><div class="prop-value">Cuadrado 16×16, sin radio, centrado, en #0F7B3F</div></div>
      <div class="props-stack-row"><div class="prop-label">Versión estándar</div><div class="prop-value">Contenedor negro · corchetes blancos · punto verde</div></div>
      <div class="props-stack-row"><div class="prop-label">Versión inversa</div><div class="prop-value">Contenedor blanco · corchetes negros · punto verde</div></div>
    </div>
  </div>
</section>

<section class="page page--s02">
  <div class="subsection">
    <div class="subsection-eyebrow">02.3 — Convenciones HTML</div>
    <h3 class="subsection-title">Clases globales de marca</h3>
    <p>Cualquier implementación HTML de agendallena debe incluir estas clases. Son globales — no se scopean a componentes.</p>

    <h4>.dot</h4>
    <p>Aplica <code>color: var(--verde)</code> al punto del dominio. Se usa <strong>exclusivamente cuando se escribe el dominio</strong> <code>agendallena.mx</code> en contextos URL-oriented. No se usa en el wordmark del header/footer — el wordmark es <code>agendallena</code> plain, sin punto, sin .mx.</p>
    <pre class="code-block">.dot { color: var(--verde); }</pre>
    <pre class="code-block">agendallena&lt;span class="dot"&gt;.&lt;/span&gt;mx  ← solo referencias de dominio</pre>

    <hr>

    <h4>.brand-mention</h4>
    <p>Aplica <code>font-weight: 600; font-style: normal</code> a la marca en texto corrido — mismo peso que el wordmark, sin negritas pesadas.</p>
    <pre class="code-block">.brand-mention { font-weight: 600; font-style: normal; }</pre>

    <h4>.brand-llena — variante editorial en body copy</h4>
    <p>En body copy (subtítulos, párrafos, FAQ, CTAs, contenido de verticales), la marca se escribe como <strong>agenda + llena</strong> (sin .mx), con <strong>llena</strong> pintada en verde de marca. Refuerza el verbo de la marca y crea un momento mnemotécnico.</p>
    <pre class="code-block">.brand-llena { color: var(--verde); }</pre>
    <pre class="code-block">&lt;strong class="brand-mention"&gt;agenda&lt;span class="brand-llena"&gt;llena&lt;/span&gt;&lt;/strong&gt;</pre>
  </div>
</section>

<section class="page page--s02">
  <div class="subsection">
    <h4>Cuándo aplica cada forma</h4>

    <table>
      <thead><tr><th>Contexto</th><th>Forma correcta</th></tr></thead>
      <tbody>
        <tr><td>Wordmark del header/footer</td><td><strong>agendallena</strong> — plain, sin punto, sin .mx</td></tr>
        <tr><td>&lt;title&gt;, meta tags, JSON-LD name, copyright</td><td><strong>agendallena</strong> — plain</td></tr>
        <tr><td>Headers de tablas comparativas</td><td><strong>agendallena</strong> — plain</td></tr>
        <tr><td>Body copy: subtítulos, headings de sección, FAQ, CTAs, verticales</td><td><strong>Editorial:</strong> agenda + llena verde (.brand-mention + .brand-llena)</td></tr>
        <tr><td>Testimonios (citas textuales de clientes)</td><td>agendallena — plain, sin styling (naturalidad del habla)</td></tr>
        <tr><td>Instrucciones operativas ("Entra a agendallena.mx")</td><td>agendallena<strong>.mx</strong> — con .dot en el punto</td></tr>
        <tr><td>Páginas legales (/terminos, /privacidad)</td><td>agendallena<strong>.mx</strong> — con .dot</td></tr>
        <tr><td>Emails, canonical, JSON-LD url</td><td>agendallena.mx — dominio completo</td></tr>
        <tr><td>Mockups customer-facing (call-name, SMS bubble)</td><td>agendallena<strong>.mx</strong> — con .dot</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <p><strong>Regla:</strong> combina siempre .brand-mention con .brand-llena en body copy. Nunca usar .brand-llena sola. Nunca usar la variante editorial fuera de body copy.</p>
    </div>
  </div>
</section>

<!-- ============ 03 COLOR ============ -->
<section class="page page--s03">
  <div class="opener">
    <div class="opener-num">03 / 06</div>
    <div class="opener-content">
      <h2 class="opener-title">Color</h2>
      <p class="opener-subtitle">Una paleta restringida y deliberada. El verde no decora: confirma.</p>
    </div>
  </div>
  <hr>

  <div class="subsection">
    <div class="subsection-eyebrow">03.1 — Paleta cromática</div>
    <h3 class="subsection-title">Sistema de color</h3>
    <p>Tres colores hacen el 98% del trabajo: tinta, hueso y verde de marca. Los grises construyen jerarquía. El verde tenue acompaña sin gritar. Los verdes de sistema (acento, superficie) operan en secciones oscuras.</p>

    <div class="palette-grid">
      <div class="palette-card">
        <div class="palette-color" style="background: #0A0A0B"></div>
        <div class="palette-meta">
          <div class="palette-name">Tinta</div>
          <div class="palette-hex">#0A0A0B</div>
          <div class="palette-desc">Texto principal, fondos oscuros, símbolo</div>
        </div>
      </div>
      <div class="palette-card">
        <div class="palette-color" style="background: #FAFAF7; border-bottom: 0.5pt solid #E8E6DE"></div>
        <div class="palette-meta">
          <div class="palette-name">Hueso</div>
          <div class="palette-hex">#FAFAF7</div>
          <div class="palette-desc">Fondo principal. No es blanco puro.</div>
        </div>
      </div>
      <div class="palette-card">
        <div class="palette-color" style="background: #0F7B3F"></div>
        <div class="palette-meta">
          <div class="palette-name">Verde</div>
          <div class="palette-hex">#0F7B3F</div>
          <div class="palette-desc">Color hero, CTAs, acentos, "confirmado"</div>
        </div>
      </div>
      <div class="palette-card">
        <div class="palette-color" style="background: #0C6633"></div>
        <div class="palette-meta">
          <div class="palette-name">Verde hover</div>
          <div class="palette-hex">#0C6633</div>
          <div class="palette-desc">Hover state de botones y elementos en verde</div>
        </div>
      </div>
      <div class="palette-card">
        <div class="palette-color" style="background: #E8F5EE"></div>
        <div class="palette-meta">
          <div class="palette-name">Verde tenue</div>
          <div class="palette-hex">#E8F5EE</div>
          <div class="palette-desc">Fondos suaves, badges, callouts, stat banner</div>
        </div>
      </div>
      <div class="palette-card">
        <div class="palette-color" style="background: #4ADE80"></div>
        <div class="palette-meta">
          <div class="palette-name">Verde acento</div>
          <div class="palette-hex">#4ADE80</div>
          <div class="palette-desc">Acentos en superficies oscuras únicamente</div>
        </div>
      </div>
      <div class="palette-card">
        <div class="palette-color" style="background: #245C32"></div>
        <div class="palette-meta">
          <div class="palette-name">Verde superficie</div>
          <div class="palette-hex">#245C32</div>
          <div class="palette-desc">Token unificado para secciones oscuras del website</div>
        </div>
      </div>
      <div class="palette-card">
        <div class="palette-color" style="background: #6B6B6B"></div>
        <div class="palette-meta">
          <div class="palette-name">Grafito</div>
          <div class="palette-hex">#6B6B6B</div>
          <div class="palette-desc">Texto secundario, captions, jerarquía media</div>
        </div>
      </div>
      <div class="palette-card">
        <div class="palette-color" style="background: #F1EFE8"></div>
        <div class="palette-meta">
          <div class="palette-name">Gris claro</div>
          <div class="palette-hex">#F1EFE8</div>
          <div class="palette-desc">Surfaces secundarios, fondos de cards</div>
        </div>
      </div>
    </div>

    <p style="font-size: 8.5pt; color: var(--grafito); margin: 8pt 0 6pt;">Colores complementarios y operativos:</p>
    <table class="swatch-table">
      <thead>
        <tr><th class="swatch-cell">Muestra</th><th>Nombre</th><th>Hex</th><th>Uso</th></tr>
      </thead>
      <tbody>
        <tr>
          <td class="swatch-cell"><span class="swatch" style="background: #E8E6DE"></span></td>
          <td>Gris borde</td>
          <td style="font-feature-settings:'tnum'; font-size:8.5pt;">#E8E6DE</td>
          <td>Bordes sutiles, separadores, líneas de tabla</td>
        </tr>
        <tr>
          <td class="swatch-cell"><span class="swatch" style="background: #F59E0B"></span></td>
          <td>Amarillo <span style="color: var(--grafito); font-style: italic; font-size: 8pt;">· solo producto</span></td>
          <td style="font-feature-settings:'tnum'; font-size:8.5pt;">#F59E0B</td>
          <td>Estado "pendiente de confirmar" — solo en la app</td>
        </tr>
        <tr>
          <td class="swatch-cell"><span class="swatch" style="background: #DC2626"></span></td>
          <td>Rojo <span style="color: var(--grafito); font-style: italic; font-size: 8pt;">· solo producto</span></td>
          <td style="font-feature-settings:'tnum'; font-size:8.5pt;">#DC2626</td>
          <td>Estado "cancelado" — solo en la app</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="page page--s03">
  <div class="subsection">
    <div class="subsection-eyebrow">03.2 — Aplicación del color</div>
    <h3 class="subsection-title">Cómo se usan</h3>
    <p>La marca no es multicolor. Es deliberadamente sobria, con el verde como única chispa de vida. Esta restricción es lo que la hace memorable.</p>

    <h4>Regla 90 / 8 / 2</h4>
    <p><strong>90%</strong> del diseño debe ser tinta, hueso y grises. <strong>8%</strong> verde de marca. <strong>2%</strong> verde tenue como acompañante. Si una composición tiene más de 15% de verde, está fuera del sistema.</p>

    <h4>Combinaciones permitidas</h4>
    <table>
      <thead><tr><th>Combinación</th><th>Uso</th></tr></thead>
      <tbody>
        <tr><td>Tinta sobre hueso</td><td>Body, párrafos, jerarquía principal</td></tr>
        <tr><td>Hueso sobre tinta</td><td>Fondos oscuros, headers de sección</td></tr>
        <tr><td>Verde sobre hueso</td><td>CTAs, eyebrows, acentos</td></tr>
        <tr><td>Hueso sobre verde</td><td>Texto en botones CTA</td></tr>
        <tr><td>Verde tenue como fondo</td><td>Con texto en verde o tinta — badges, callouts</td></tr>
        <tr><td>Verde acento sobre verde-superficie</td><td>Step numbers, brand-llena, badges "AUTOMÁTICO", dot de call card</td></tr>
      </tbody>
    </table>

    <h4>Combinaciones prohibidas</h4>
    <ul>
      <li><span class="status-forbidden">×</span> Verde sobre verde tenue como bloques grandes</li>
      <li><span class="status-forbidden">×</span> Verde acento (#4ADE80) sobre fondos claros — solo en superficies oscuras</li>
      <li><span class="status-forbidden">×</span> Gradientes entre los colores de marca</li>
      <li><span class="status-forbidden">×</span> Verde con cualquier color que no esté en esta paleta</li>
    </ul>

    <h4>Por qué esta restricción importa</h4>
    <p>Toda la competencia (Calendly, Fresha, Booksy) usa paletas amplias y vibrantes. Al ir en dirección opuesta — sobria, geométrica, con un solo punto de verde — agendallena se diferencia automáticamente y proyecta seriedad operativa. El verde elegido es deliberadamente más profundo y maduro que un verde brillante: comunica confianza B2B, no startup tech.</p>
  </div>
</section>

<section class="page page--s03">
  <div class="subsection">
    <div class="subsection-eyebrow">03.3 — Superficies oscuras del website</div>
    <h3 class="subsection-title">Token unificado — verde superficie</h3>
    <p>Las secciones oscuras de la landing usan un <strong>token unificado <code>--verde-superficie</code></strong> (<code>#245C32</code>, verde forest ~22% luminosidad), no negro uniforme. El verde crea profundidad temática; el negro rompería el ritmo del sistema.</p>

    <table class="swatch-table">
      <thead>
        <tr><th class="swatch-cell">Muestra</th><th>Sección</th><th>Token</th><th>Nota</th></tr>
      </thead>
      <tbody>
        <tr><td class="swatch-cell"><span class="swatch" style="background: #E8F5EE"></span></td><td>Strip de impacto (stat banner)</td><td><code>--verde-tenue</code></td><td>Excepción luminosa — fondo claro, texto oscuro</td></tr>
        <tr><td class="swatch-cell"><span class="swatch" style="background: #245C32"></span></td><td>Cómo funciona</td><td><code>--verde-superficie</code></td><td>#245C32 · verde forest (~22% L)</td></tr>
        <tr><td class="swatch-cell"><span class="swatch" style="background: #245C32"></span></td><td>Card Calendario (módulo featured)</td><td><code>--verde-superficie</code></td><td>#245C32 · verde forest (~22% L)</td></tr>
        <tr><td class="swatch-cell"><span class="swatch" style="background: #245C32"></span></td><td>CTA final</td><td><code>--verde-superficie</code></td><td>#245C32 · verde forest (~22% L)</td></tr>
      </tbody>
    </table>

    <h4>Acentos de color en superficies oscuras</h4>
    <p>El verde de marca (<code>--verde</code>, #0F7B3F) no tiene contraste suficiente sobre <code>--verde-superficie</code> (~1.5:1). Los acentos dentro de estas secciones usan <code>--verde-acento</code> (#4ADE80):</p>
    <ul>
      <li>Números de paso (<code>.step-num</code>) y badges "AUTOMÁTICO" (<code>.step-tag</code>)</li>
      <li>Números de módulo (<code>.module-num</code>)</li>
      <li><code>.brand-llena</code> dentro del CTA final</li>
      <li>Punto verde del call card (<code>.call-name .dot</code>)</li>
    </ul>

    <div class="callout">
      <p><strong>Anclaje con tinta:</strong> los botones primarios en secciones oscuras se mantienen en <code>--tinta</code> o <code>--hueso</code> con texto tinta. Esto ancla la marca sin saturar de verde. Excepción: el botón del CTA final usa <code>--hueso</code> sobre <code>--verde-superficie</code>.</p>
    </div>

    <h4>Historia de la decisión</h4>
    <p>v2.0 usaba 3 hex distintos (<code>#0A1A0F</code>, <code>#0C2016</code>, <code>#071A10</code>). Se simplificó a token único <code>#1A3F26</code> (~14% L). Tras revisión visual se elevó a <code>#245C32</code> (~22% L) por sentirse demasiado denso. Si en el futuro se quiere diferenciar superficies, hacerlo con textura, gradient o borde — no en luminosidad.</p>
  </div>

  <div class="subsection">
    <div class="subsection-eyebrow">03.4 — Colores operativos del producto</div>
    <h3 class="subsection-title">El sistema semafórico</h3>
    <p>Dentro de la aplicación, las citas usan un sistema de colores que comunica su estado. <strong>Estos colores viven exclusivamente en el producto.</strong> Nunca en marketing, presentaciones ni redes sociales.</p>

    <table class="swatch-table">
      <thead>
        <tr><th class="swatch-cell">Muestra</th><th>Estado</th><th>Significado</th></tr>
      </thead>
      <tbody>
        <tr><td class="swatch-cell"><span class="swatch" style="background: #FFFFFF"></span></td><td>Blanco</td><td>Cita apartada · recordatorio por enviar</td></tr>
        <tr><td class="swatch-cell"><span class="swatch" style="background: #0F7B3F"></span></td><td>Verde</td><td>Cliente confirmó la cita</td></tr>
        <tr><td class="swatch-cell"><span class="swatch" style="background: #F59E0B"></span></td><td>Amarillo</td><td>Recordatorio enviado · sin confirmar</td></tr>
        <tr><td class="swatch-cell"><span class="swatch" style="background: #DC2626"></span></td><td>Rojo</td><td>Cliente solicitó cancelar</td></tr>
        <tr><td class="swatch-cell"><span class="swatch" style="background: repeating-linear-gradient(45deg, #0A0A0B 0 4pt, #F59E0B 4pt 8pt)"></span></td><td>Negro / naranja</td><td>Inasistencia registrada</td></tr>
        <tr><td class="swatch-cell"><span class="swatch" style="background: #B6E5C5"></span></td><td>Verde claro</td><td>Cliente llegó sin cita previa</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============ 04 TIPOGRAFÍA ============ -->
<section class="page page--s04">
  <div class="opener">
    <div class="opener-num">04 / 06</div>
    <div class="opener-content">
      <h2 class="opener-title">Tipografía</h2>
      <p class="opener-subtitle">Una sola familia. Sin excepciones.</p>
    </div>
  </div>
  <hr>

  <div class="subsection">
    <div class="subsection-eyebrow">04.1 — Familia tipográfica</div>
    <h3 class="subsection-title">Plus Jakarta Sans</h3>
    <p>La voz visual de agendallena es <strong>Plus Jakarta Sans</strong>: una sans-serif geométrica con esquinas precisas, presencia premium y excelente legibilidad en pantalla. Open-source, sin restricciones de licencia.</p>
    <p><strong>Single-font policy:</strong> Plus Jakarta Sans es la única familia. No JetBrains Mono, no serif, no display secundario. Si necesitas alinear números, usa <code>font-variant-numeric: tabular-nums</code>. Si necesitas feel técnico, usa uppercase + tracking abierto.</p>

    <div class="type-card">
      <div class="type-meta"><span class="type-meta-label">Display</span>SemiBold 600 · 30pt · tracking -0.035em</div>
      <div class="type-sample-display">Tu agenda, confirmada<span class="accent">.</span></div>
    </div>

    <div class="type-card">
      <div class="type-meta"><span class="type-meta-label">Headline</span>SemiBold 600 · 18pt · tracking -0.025em</div>
      <div class="type-sample-headline">Menos inasistencias. Más certeza.</div>
    </div>

    <div class="type-card">
      <div class="type-meta"><span class="type-meta-label">Body</span>Regular 400 · 10pt · line-height 1.55</div>
      <div class="type-sample-body">Cada cita perdida es dinero que se va. Una libreta no te avisa cuando alguien no va a llegar. WhatsApp se pierde entre cien conversaciones.</div>
    </div>

    <div class="type-card">
      <div class="type-meta"><span class="type-meta-label">Caption</span>Regular 400 · 8.5pt · color grafito</div>
      <div class="type-sample-caption">Plan único · $199 MXN al mes · Sin límites de citas, contactos ni mensajes.</div>
    </div>

    <div class="type-card">
      <div class="type-meta"><span class="type-meta-label">Eyebrow</span>Medium 500 · 7pt · uppercase · tracking +0.1em</div>
      <div class="type-sample-eyebrow">CÓMO FUNCIONA</div>
    </div>
  </div>
</section>

<section class="page page--s04">
  <div class="subsection">
    <div class="subsection-eyebrow">04.2 — Pesos en uso</div>
    <h3 class="subsection-title">Jerarquía tipográfica</h3>
    <p>Una sola familia con cinco pesos. La jerarquía se construye con tamaño y peso, no con cambio de familia.</p>

    <div class="weights-list">
      <div class="weights-list-item w300">Plus Jakarta Sans Light 300 <span class="weights-meta">— uso editorial limitado</span></div>
      <div class="weights-list-item w400">Plus Jakarta Sans Regular 400 <span class="weights-meta">— body, párrafos, captions</span></div>
      <div class="weights-list-item w500">Plus Jakarta Sans Medium 500 <span class="weights-meta">— labels, buttons, énfasis, eyebrows</span></div>
      <div class="weights-list-item w600">Plus Jakarta Sans SemiBold 600 <span class="weights-meta">— wordmark, headlines, h2, step numbers</span></div>
      <div class="weights-list-item w700">Plus Jakarta Sans Bold 700 <span class="weights-meta">— display, h1, momentos clave</span></div>
    </div>
  </div>

  <div class="subsection">
    <div class="subsection-eyebrow">04.3 — Reglas de uso</div>
    <h3 class="subsection-title">Cómo aplicar la tipografía</h3>
    <table>
      <thead><tr><th>Propiedad</th><th>Regla</th></tr></thead>
      <tbody>
        <tr><td>Capitalización</td><td>Sentence case en todo. Nunca Title Case, nunca ALL CAPS — excepto eyebrows con tracking abierto</td></tr>
        <tr><td>Tracking en grandes</td><td>Tamaños grandes llevan tracking negativo (-0.025 a -0.05em)</td></tr>
        <tr><td>Tracking en pequeños</td><td>Neutro o ligeramente positivo (+0.02em captions, 0.05–0.1em para eyebrows uppercase)</td></tr>
        <tr><td>Line-height</td><td>1.5–1.6 para body. 1.0–1.15 para headlines</td></tr>
        <tr><td>Datos numéricos</td><td><code>font-variant-numeric: tabular-nums</code> — no se necesita mono para alinear cifras</td></tr>
        <tr><td>Feel técnico</td><td>Uppercase + tracking abierto sobre Plus Jakarta Sans. No cambiar de familia</td></tr>
        <tr><td>Esquinas de glifos</td><td>Plus Jakarta Sans tiene esquinas geométricas cuadradas. Es deliberado, no se corrige</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ============ 05 VOZ Y TONO ============ -->
<section class="page page--s05">
  <div class="opener">
    <div class="opener-num">05 / 06</div>
    <div class="opener-content">
      <h2 class="opener-title">Voz y tono</h2>
      <p class="opener-subtitle">Hablamos como ese asistente que tiene todo bajo control y nunca alza la voz.</p>
    </div>
  </div>
  <hr>

  <div class="subsection">
    <div class="subsection-eyebrow">05.1 — Principios de voz</div>
    <h3 class="subsection-title">Cómo escribimos</h3>
    <p>La voz de agendallena es directa, sobria y útil. No vendemos sueños: vendemos certeza operativa. Cada palabra carga peso.</p>

    <div class="voice-section">
      <h4>Directos</h4>
      <p>Frases cortas. Verbos activos. "Confirma tu cita" — no "Te invitamos a confirmar tu cita".</p>
    </div>

    <div class="voice-section">
      <h4>Sin jerga técnica</h4>
      <p>Nuestro usuario es un estilista, una doctora, un mecánico. No "engagement", no "workflow", no "pipeline", no "onboarding", no "no-show rate". Hablamos como hablaría un cliente.</p>
    </div>

    <div class="voice-section">
      <h4>Sin emojis decorativos</h4>
      <p>En comunicación de producto: nunca. En marketing: solo si suman información, nunca como adorno.</p>
    </div>

    <div class="voice-section">
      <h4>Honestos con los números</h4>
      <p>"$199 al mes. Sin límites. Sin sorpresas." No usamos asteriscos, no escondemos costos, no inflamos beneficios.</p>
    </div>

    <div class="voice-section">
      <h4>Sentence case siempre</h4>
      <p>Nunca Title Case. Nunca ALL CAPS para énfasis. Solo los eyebrows técnicos (uppercase + tracking abierto) son la excepción — y son funcionales, no decorativos.</p>
    </div>
  </div>
</section>

<section class="page page--s05">
  <div class="subsection">
    <div class="subsection-eyebrow">05.2 — Traducciones de tono</div>
    <h3 class="subsection-title">Lo que decimos y cómo lo decimos</h3>
    <p>Antes de publicar cualquier copy, esta tabla es la prueba de fuego. Si lo que escribiste se parece a la columna izquierda, reescríbelo.</p>

    <table class="voice-table">
      <thead>
        <tr><th>× Cómo NO escribimos</th><th>✓ Cómo SÍ escribimos</th></tr>
      </thead>
      <tbody>
        <tr><td>Optimiza tu workflow de bookings</td><td>Agenda más rápido</td></tr>
        <tr><td>Engagement automatizado con clientes</td><td>Confirmaciones automáticas</td></tr>
        <tr><td>Reduce tu no-show rate</td><td>Menos inasistencias</td></tr>
        <tr><td>Onboarding en menos de 5 minutos</td><td>Listo en 5 minutos</td></tr>
        <tr><td>Plataforma all-in-one para tu negocio</td><td>Todas tus citas en un solo lugar</td></tr>
        <tr><td>Disrupción en la gestión de citas</td><td>Una mejor forma de confirmar</td></tr>
        <tr><td>Empodera a tu equipo</td><td>Tu equipo trabaja mejor</td></tr>
        <tr><td>Solución inteligente con IA conversacional</td><td>El sistema confirma por ti</td></tr>
        <tr><td>Sync instantánea</td><td>Actualización en tiempo real</td></tr>
        <tr><td>Templates por tipo de negocio</td><td>Plantillas por tipo de negocio</td></tr>
        <tr><td>Diseñado para negocios LATAM</td><td>Pensado para México</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <p><strong>Regla de oro:</strong> si el dueño de una barbería en Monterrey tiene que buscar la palabra en Google, no va en el copy.</p>
    </div>
  </div>
</section>

<!-- ============ 06 USOS ============ -->
<section class="page page--s06">
  <div class="opener">
    <div class="opener-num">06 / 06</div>
    <div class="opener-content">
      <h2 class="opener-title">Usos correctos e incorrectos</h2>
      <p class="opener-subtitle">Mantener la integridad visual: lo que sí, lo que no, y por qué.</p>
    </div>
  </div>
  <hr>

  <div class="subsection">
    <div class="subsection-eyebrow">06.1 — Uso del logotipo</div>
    <h3 class="subsection-title">Lo que sí, lo que no</h3>
    <table>
      <thead><tr><th><span class="status-allowed">✓ Sí</span></th><th><span class="status-forbidden">× No</span></th></tr></thead>
      <tbody>
        <tr><td>agendallena en minúsculas, peso correcto, sin .mx</td><td>Mayúsculas, colores no oficiales, añadir .mx al wordmark</td></tr>
        <tr><td>Versión negativa sobre fondos oscuros sólidos</td><td>Gradientes saturados, colores alterados</td></tr>
        <tr><td>Tracking y proporciones originales</td><td>Tracking alterado, nombre abreviado</td></tr>
        <tr><td>.dot solo en referencias de dominio (agendallena.mx)</td><td>.dot en el wordmark del header/footer</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section class="page page--s06">
  <div class="subsection">
    <div class="subsection-eyebrow">06.2 — Restricciones permanentes</div>
    <h3 class="subsection-title">Lo que nunca se hace</h3>
    <p>Reglas que protegen la integridad de la marca a lo largo del tiempo. Sin excepciones.</p>

    <div class="restrictions">
      <div class="restriction">
        <div class="restriction-icon">×</div>
        <div class="restriction-title">Sin .mx en el wordmark.</div>
        <div class="restriction-body">El wordmark es agendallena (plain). La forma agendallena.mx se reserva para referencias de dominio (URLs, emails, instrucciones operativas). Esta distinción es oficial desde mayo 2026.</div>
      </div>
      <div class="restriction">
        <div class="restriction-icon">×</div>
        <div class="restriction-title">Sin efectos visuales en el logotipo.</div>
        <div class="restriction-body">Prohibido: sombras, brillos, contornos, gradientes, biseles, reflejos, glow, neon. El wordmark es plano siempre.</div>
      </div>
      <div class="restriction">
        <div class="restriction-icon">×</div>
        <div class="restriction-title">Sin contenedores alrededor del wordmark.</div>
        <div class="restriction-body">No colocar dentro de cajas, círculos, escudos o marcos adicionales. La única excepción es el símbolo reducido [.], que tiene su contenedor definido.</div>
      </div>
      <div class="restriction">
        <div class="restriction-icon">×</div>
        <div class="restriction-title">Sin alteraciones del nombre — con una excepción editorial documentada.</div>
        <div class="restriction-body">"Agenda Llena", "AgendaLlena", "Agendallena.mx" o cualquier variante con espacios o capitalización distinta no son válidas. La única variante permitida es la editorial en body copy (agenda + llena con llena en verde, sin .mx) — ver sección 02.3.</div>
      </div>
      <div class="restriction">
        <div class="restriction-icon">×</div>
        <div class="restriction-title">Sin verde acento en fondos claros.</div>
        <div class="restriction-body">El verde acento (#4ADE80) existe exclusivamente para acentos dentro de superficies oscuras (--verde-superficie). Sobre hueso o gris claro su contraste es insuficiente y violaría el sistema de color.</div>
      </div>
      <div class="restriction">
        <div class="restriction-icon">×</div>
        <div class="restriction-title">Sin íconos cliché en producto.</div>
        <div class="restriction-body">No usar palomitas verdes con check redondo como ícono principal. Es el cliché del nicho de citas y elimina la diferenciación visual.</div>
      </div>
      <div class="restriction">
        <div class="restriction-icon">×</div>
        <div class="restriction-title">Sin mockups del producto en HTML/CSS.</div>
        <div class="restriction-body">Las vistas internas de la app (calendario, dashboard, módulos) se muestran solo con capturas reales del PWA sobre frame de iPhone. No simularlas con código. Las ilustraciones de mensajes salientes (SMS bubble, call card) sí están permitidas.</div>
      </div>
      <div class="restriction">
        <div class="restriction-icon">×</div>
        <div class="restriction-title">Sin segunda familia tipográfica.</div>
        <div class="restriction-body">No JetBrains Mono, no Inter, no serif. El feel técnico se logra con uppercase + tracking abierto sobre Plus Jakarta Sans.</div>
      </div>
      <div class="restriction">
        <div class="restriction-icon">×</div>
        <div class="restriction-title">Sin paleta multicolor.</div>
        <div class="restriction-body">La marca es verde + neutros. El amarillo y rojo son del producto, no de la identidad de marca. Cualquier otro color de acento es una violación del sistema.</div>
      </div>
      <div class="restriction">
        <div class="restriction-icon">×</div>
        <div class="restriction-title">Sin precio con asteriscos.</div>
        <div class="restriction-body">$199 MXN/mes se escribe siempre completo, sin condiciones ocultas ni letra chica.</div>
      </div>
    </div>
  </div>
</section>

<!-- ============ A TOKENS DE SISTEMA ============ -->
<section class="page page--sA">
  <div class="opener">
    <div class="opener-num">A · Anexo</div>
    <div class="opener-content">
      <h2 class="opener-title">Tokens de sistema</h2>
      <p class="opener-subtitle">Variables canónicas para radios, sombras y movimiento. Úsalas como tokens — no las hardcodees.</p>
    </div>
  </div>
  <hr>

  <div class="subsection">
    <div class="subsection-eyebrow">A.1 — Radios</div>
    <table>
      <thead><tr><th>Token</th><th>Valor</th><th>Uso</th></tr></thead>
      <tbody>
        <tr><td><code>--radius-sm</code></td><td>8px</td><td>Elementos pequeños (badges, chips)</td></tr>
        <tr><td><code>--radius-md</code></td><td>12px</td><td>Default para componentes</td></tr>
        <tr><td><code>--radius-lg</code></td><td>20px</td><td>Cards</td></tr>
        <tr><td><code>--radius-xl</code></td><td>28px</td><td>Secciones grandes, cards destacadas</td></tr>
        <tr><td>Botones globales</td><td><code>border-radius: 999px</code></td><td>Pill — sin excepciones para .btn, .btn-primary-lg, .btn-secondary-lg, .pricing-cta</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <div class="subsection-eyebrow">A.2 — Sombras</div>
    <table>
      <thead><tr><th>Token</th><th>Valor</th><th>Uso</th></tr></thead>
      <tbody>
        <tr><td><code>--shadow-sm</code></td><td><code>0 1px 2px rgba(10,10,11,0.04)</code></td><td>Elementos pequeños, bordes sutiles</td></tr>
        <tr><td><code>--shadow-md</code></td><td><code>0 4px 24px rgba(10,10,11,0.06)</code></td><td>Cards, dropdowns</td></tr>
        <tr><td><code>--shadow-lg</code></td><td><code>0 24px 60px rgba(10,10,11,0.12)</code></td><td>Modales, elementos flotantes</td></tr>
        <tr><td><code>--shadow-tinted</code></td><td><code>0 16px 48px -12px rgba(15,123,63,0.16)</code></td><td>Elementos con acento verde — botones CTA en hover, cards verdes</td></tr>
      </tbody>
    </table>
  </div>

  <div class="subsection">
    <div class="subsection-eyebrow">A.3 — Movimiento</div>
    <table>
      <thead><tr><th>Token</th><th>Valor</th><th>Uso</th></tr></thead>
      <tbody>
        <tr><td><code>--ease-out</code></td><td><code>cubic-bezier(0.22, 1, 0.36, 1)</code></td><td>Curva canónica — hovers, transiciones, reveals. Uso principal.</td></tr>
        <tr><td><code>--ease-spring</code></td><td><code>cubic-bezier(0.34, 1.56, 0.64, 1)</code></td><td>Decoraciones puntuales únicamente. Prohibido en botones — el bounce es discordante con la marca sobria.</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section class="page page--sA">
  <div class="subsection">
    <div class="subsection-eyebrow">A.4 — Variables CSS globales</div>
    <h3 class="subsection-title">:root completo — global.css</h3>
    <pre class="code-block">:root {
  /* Colores de marca */
  --tinta:            #0A0A0B;   /* texto principal, fondos oscuros */
  --hueso:            #FAFAF7;   /* fondo principal — no es blanco puro */
  --verde:            #0F7B3F;   /* color hero, CTAs, acentos */
  --verde-hover:      #0C6633;   /* hover state */
  --verde-tenue:      #E8F5EE;   /* fondos suaves, stat banner */
  --verde-acento:     #4ADE80;   /* acentos en --verde-superficie únicamente */
  --verde-superficie: #245C32;   /* secciones oscuras — how-it-works, featured, cta */
  --grafito:          #6B6B6B;   /* texto secundario, captions */
  --gris-claro:       #F1EFE8;   /* surfaces secundarios */
  --gris-borde:       #E8E6DE;   /* bordes, separadores */
  --amarillo:         #F59E0B;   /* solo producto — pendiente */
  --rojo:             #DC2626;   /* solo producto — cancelado */

  /* Sombras */
  --shadow-sm:     0 1px 2px rgba(10, 10, 11, 0.04);
  --shadow-md:     0 4px 24px rgba(10, 10, 11, 0.06);
  --shadow-lg:     0 24px 60px rgba(10, 10, 11, 0.12);
  --shadow-tinted: 0 16px 48px -12px rgba(15, 123, 63, 0.16);

  /* Radios */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 28px;

  /* Movimiento */
  --ease-out:    cubic-bezier(0.22, 1, 0.36, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}</pre>

    <div class="callout">
      <p><strong>Nota de implementación:</strong> los botones globales usan <code>border-radius: 999px</code> (pill) — no <code>--radius-md</code>. Aplica a <code>.btn</code>, <code>.btn-primary-lg</code>, <code>.btn-secondary-lg</code> y <code>.pricing-cta</code> sin excepciones.</p>
    </div>
  </div>
</section>

</body>
</html>
`;

await writeFile(TMP_HTML_PATH, html, 'utf8');

await new Promise((resolvePromise, rejectPromise) => {
  const proc = spawn(CHROME_PATH, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--no-pdf-header-footer',
    `--print-to-pdf=${PDF_PATH}`,
    `file://${TMP_HTML_PATH}`,
  ], { stdio: 'inherit' });

  proc.on('exit', (code) => {
    if (code === 0) resolvePromise();
    else rejectPromise(new Error(`Chrome exited with code ${code}`));
  });
});

await unlink(TMP_HTML_PATH);

console.log(`PDF generado: ${PDF_PATH}`);
