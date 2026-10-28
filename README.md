# Mukta Choudhury's portfolio

Personal portfolio for AI security, application security and security automation, built with React and Vite.

The October 2026 refresh uses a field-notes layout, a guided project trail, a searchable project collection, expandable case studies and a career timeline. It distinguishes internal work, public personal projects, mock-system experiments, coursework and work in progress.

## Develop

```sh
npm ci
npm run dev
```

Vite uses port 3000 by default. The root application is `src/App.jsx`; the nested `portfolio-react` directory is a legacy starter and is not the deployed application.

## Build and preview

```sh
npm run build
npm run preview
```

The production output is `dist/`. GitHub Pages deployment is defined in `.github/workflows/deploy.yml` and runs after a push to `main` or a manual workflow dispatch.

## Maintain the content

Read [the content audit](docs/content-audit.md) before updating qualifications, employment, project status or public links. The CV updated on 28 October 2026 is the primary source for this refresh. Preserve the distinction between training and passed certification exams.

Public repository links should point to actual projects. Internal tools and local experiments should have clear scope descriptions instead of placeholder demos. Avoid publishing private employer findings or infrastructure details.

The download at `public/cv/Mukta_Choudhury_CV.pdf` should match the latest approved CV. The site uses email and professional profile links for contact.

## Verification

Run a production build and inspect the page at desktop and mobile widths. Check project search and filters, empty results, expandable case studies, trail navigation, theme persistence, keyboard focus, reduced motion and the CV download. A successful build alone does not establish that the live GitHub Pages site has been updated.
