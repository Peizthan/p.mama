# P.Mama

**Eco-conscious · Art · Life**

P.Mama connects creative expression, local art and conscious living. Its first clothing capsule is in development. This bilingual website preserves the original artwork and provides a catalogue foundation for approved products.

## Development

React 19, Vite 8, Tailwind CSS 4 and Framer Motion.

```bash
npm ci
npm run dev
npm test
npm run lint
npm run build
```

The page includes the brand story, manifesto, collection, production approach and contact. Spanish is the default; language selection persists. Reduced motion and keyboard navigation are supported.

## Products and brand

- [Catalogue publication guide](docs/catalogue.md)
- [Design system](docs/design-system.md)
- `public/catalog/products.json`: empty until approved products exist; drafts remain hidden.
- `src/config/site.js`: catalogue path and interim owner contact.
- Original assets remain in `public/`; lighter logo exports are in `public/images/brand/`.

Enquiries open an email draft. Payments, stock reservations and order storage are outside this iteration. Confirm supplier evidence, costs and physical samples before listing products.

## Deployment

The existing Vercel configuration builds `dist/`. Review a branch and responsive behaviour before merging through the normal workflow.
