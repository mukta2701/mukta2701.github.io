# Refresh verification

28 October 2026.

- The production Vite build passes.
- `node scripts/verify-portfolio.mjs` confirms that built assets resolve, the favicon exists, the CV has a PDF header, and production output does not reference development entry points or Google Fonts.
- The current CV download matches the supplied PDF byte for byte.
- The project inventory has 12 unique entries and nine verified public GitHub destinations. Grouped entries cover the older academic and programming archives.
- Safari checks confirmed category filtering, combined search with zero results, and a project-trail link clearing active filters to reveal its target.
- Chrome checks confirmed case-study expansion, next-project navigation, and dark theme persistence after reload.
- Desktop layout was inspected visually. Responsive CSS includes a single-column layout and collapsible navigation; native browser responsive emulation was attempted but did not provide a reliable complete phone-width visual review.
- A contrast review found and corrected theme-dependent colours on fixed dark panels. A source review corrected invalid arithmetic in the project-stop position.

Existing dependencies were retained. Installation reported dependency advisories; this refresh does not claim to remediate those inherited issues.
