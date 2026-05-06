# agendallena

Landing principal de [agendallena.mx](https://agendallena.mx) — el sistema que confirma tu agenda por ti.

## Stack

- Astro 6 — framework principal, HTML estático sin JS innecesario
- CSS3 vanilla en `src/styles/global.css`
- Plus Jakarta Sans vía Google Fonts
- Hosted en Vercel

## Prerequisitos

- Node.js ≥ 18

## Estructura

```
.
├── src/
│   ├── pages/
│   │   ├── index.astro            Landing principal
│   │   ├── [vertical].astro       Páginas dinámicas por vertical
│   │   ├── soporte.astro          Centro de ayuda
│   │   ├── landing-b.astro        Variante B (A/B test, excluida del sitemap)
│   │   └── landing-c.astro        Variante C (A/B test, excluida del sitemap)
│   ├── components/                11 secciones como componentes .astro
│   ├── content/verticals/         Copy por vertical (.ts)
│   └── styles/global.css          Variables y estilos globales
├── docs/
│   └── brand-guidelines.md        Brand guidelines v3.0 (fuente de verdad visual)
├── public/assets/                 Imágenes servidas estáticamente
├── CLAUDE.md                      Contexto completo del proyecto (leer antes de editar)
└── README.md
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo en `http://localhost:4321` |
| `npm run build` | Genera `dist/` con HTML estático |
| `npm run preview` | Vista previa del build antes de deploy |
| `npm run build:brand-pdf` | Genera PDF de brand guidelines en `docs/` |

## Páginas

| Ruta | Descripción |
|---|---|
| `/` | Landing principal multi-vertical |
| `/dentistas` | Vertical clínicas dentales |
| `/consultorios-medicos` | Vertical consultorios médicos |
| `/psicologos` | Vertical psicólogos y terapeutas |
| `/salones-de-belleza` | Vertical salones de belleza |
| `/barberias` | Vertical barberías |
| `/soporte` | Centro de ayuda |
| `/terminos` | Términos de servicio (en construcción) |
| `/privacidad` | Política de privacidad (en construcción) |

## Deploy

Cada push a `main` deploya automáticamente en Vercel.

## Antes de hacer cambios

Lee [`CLAUDE.md`](./CLAUDE.md). Contiene el sistema visual, voz de marca, decisiones de diseño cerradas, y lo que no se debe modificar.

Las brand guidelines visuales detalladas están en [`docs/brand-guidelines.md`](./docs/brand-guidelines.md).
