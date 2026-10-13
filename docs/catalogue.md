# Adding approved garments

The website reads `public/catalog/products.json`. Keep `{ "version": 1, "products": [] }` until a product is ready. Adding garments requires no component edits.

1. Approve the physical sample, fit, finishing, documented composition, costs and supply plan.
2. Put actual product photos in `public/images/products/` as optimized WebP/JPEG/PNG. Compose at 4:5; the current card shows the first image.
3. Add a draft record with the fields below. Complete Spanish and English names, descriptions and composition; sizes and colours must match actual availability. One product-level price is supported, in PYG or USD.
4. Confirm `src/config/site.js`, delivery/returns information, size chart and product copy before selling.
5. Set `published` to `true` after approval. Incomplete published records cause an explicit catalogue error; drafts remain hidden.
6. Run `npm test`, `npm run lint` and `npm run build`, review mobile/desktop, then follow the normal repository review/deployment process.

```json
{
  "id": "replace-with-a-stable-id",
  "published": false,
  "name": { "es": "", "en": "" },
  "description": { "es": "", "en": "" },
  "material": { "es": "", "en": "" },
  "images": ["/images/products/approved-photo.webp"],
  "sizes": [],
  "colors": [],
  "price": null,
  "currency": "PYG",
  "availability": "coming-soon"
}
```

Availability values: `available`, `preorder`, `sold-out`, `coming-soon`. The UI translates these labels. Enquiries identify the garment in an email draft; the visitor sends it through their own email app. This iteration does not process payments, reserve inventory or store orders. Extend the model before publishing variants with different prices.

The interim destination is the owner's professional email. Change it centrally when an approved brand mailbox is available. The JSON and images are public after deployment, including hidden draft data: keep private quotes and customer information out of them.

[Production and design plan](https://docs.google.com/document/d/1w08RbGGIE9YJxpCN2wzk_07ow-IDpOkuyei9W9Asigc/edit). Supplier choices and launch quantities remain pending samples and comparable quotes.
