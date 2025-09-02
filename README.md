# M.CODE Live Preview — Astro + Tailwind (Free, Cloudflare Pages)
Быстрый «живой» превью-шаблон: Home + Work + 2 кейса (UIMA/DOLMO).

## Запуск без терминала
1) GitHub → New repository → Create.
2) Upload files → перетащи сюда все файлы → Commit changes.
3) Cloudflare → Pages → Create a project → Connect to Git → выбери репо.
4) Build command: `npm run build` ; Output directory: `dist` → Save and Deploy.
5) Готово: сайт на `*.pages.dev`.

## Где править
- Цвета: `src/styles/globals.css` → `--mcode-bg`, `--mcode-fg`, `--mcode-accent`.
- Сетка/воздух: `tailwind.config.cjs` (spacing/fontSize) + классы в разметке.
- Картинки-обложки: `public/work/*/cover.jpg`.
- Тексты: страницы в `src/pages/...`.
