# tuagenda.mx

Landing principal de [tuagenda.mx](https://tuagenda.mx) — el sistema que confirma tu agenda por ti.

## Stack

- Astro 6 — framework principal, HTML estático sin JS innecesario
- CSS3 vanilla en `src/styles/global.css`
- Plus Jakarta Sans vía Google Fonts
- Hosted en Vercel

## Estructura

```
.
├── src/
│   ├── pages/
│   │   ├── index.astro          Landing principal
│   │   └── [vertical].astro     Páginas dinámicas por vertical
│   ├── components/              11 secciones como componentes .astro
│   ├── content/verticals/       Copy por vertical (.ts)
│   └── styles/global.css        Variables y estilos globales
├── public/assets/               Imágenes servidas estáticamente
├── CLAUDE.md                    Contexto completo del proyecto (leer antes de editar)
└── README.md
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Build

```bash
npm run build
```

Genera `dist/` con HTML estático.

## Deploy

Cada push a `main` deploya automáticamente en Vercel.

## Antes de hacer cambios

Lee [`CLAUDE.md`](./CLAUDE.md). Contiene el sistema visual, voz de marca, decisiones de diseño cerradas, y lo que no se debe modificar.
