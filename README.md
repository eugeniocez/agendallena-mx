# citas.bot

Landing principal de [citas.bot](https://citas.bot) — el sistema que confirma tus citas por ti.

## Stack

- HTML5 + CSS3 + JavaScript vanilla
- Sin build step, sin frameworks, sin dependencias
- Plus Jakarta Sans vía Google Fonts
- Hosted en Vercel

## Estructura

```
.
├── index.html      Landing principal
├── assets/         Imágenes y brand guidelines
├── CLAUDE.md       Contexto completo del proyecto (leer antes de editar)
└── README.md
```

## Desarrollo local

No hay build step. Abre `index.html` directo en el navegador, o sirve el directorio:

```bash
python3 -m http.server 8000
```

Y abre `http://localhost:8000`.

## Deploy

Cada push a `main` deploya automáticamente en Vercel.

## Antes de hacer cambios

Lee [`CLAUDE.md`](./CLAUDE.md). Contiene el sistema visual, voz de marca, decisiones de diseño cerradas, y lo que no se debe modificar.
