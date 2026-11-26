# Martín Adorno — sitio web

Sitio de Martín Adorno (personal trainer, Mercedes, Buenos Aires). Astro estático + Tailwind CSS 4 + TypeScript estricto.

## Páginas

- `/` — portada con planes en ARS, proceso, FAQ y contacto.
- `/online` — plan online (Starter, USD 75/mes para el exterior). Destino previsto para la pauta.
  - `?c=<campaña>` agrega `[ref: <campaña>]` al mensaje precargado de WhatsApp para identificar el origen (ej. `/online?c=meta1`).

## Comandos

```bash
npm install
npm run dev        # servidor local
npm run typecheck  # astro check
npm run lint       # astro check
npm run build      # genera dist/
npm run preview    # sirve dist/ localmente
```

## Estructura

- `src/data/site.ts` — planes, textos y datos de contacto.
- `src/lib/whatsapp.ts` — armado de enlaces de WhatsApp.
- `src/components/` — Header, Footer, PlanCard, WhatsAppButton.
- `src/pages/` — rutas.
- `src/assets/` — imágenes optimizadas con `astro:assets`.

## Notas

- Sin GA4, GTM, Pixel ni Clarity instalados. Cualquier medición se decide aparte.
- No se pide edad, peso ni altura en el primer contacto por WhatsApp.
- Los datos de oferta (precios, qué incluye, cobro) están en `src/data/site.ts`; no inventar cifras ni testimonios.
- Vercel: el framework del proyecto debe ser **Astro** (no Vite) y el directorio de salida `dist`.
