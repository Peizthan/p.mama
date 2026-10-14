import { useEffect, useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { parseCatalogue, productEnquiry } from '../lib/catalogue'
import { site } from '../config/site'
const copy = {
  es: { label: 'Nuestra primera colección', title: 'Prendas con identidad. Hechas para durar.', loading: 'Cargando colección…', empty: 'Estamos preparando la primera cápsula P.Mama.', detail: 'Estamos eligiendo materiales, probando muestras y definiendo cada prenda. Acá vas a encontrar la colección cuando esté lista.', contact: 'Quiero conocer la colección', error: 'No pudimos cargar la colección.', retry: 'Volver a intentar', sizes: 'Talles', colors: 'Colores', material: 'Composición', enquire: 'Consultar por esta prenda', available: 'Disponible', preorder: 'Por encargo', 'sold-out': 'Agotado', 'coming-soon': 'Próximamente' },
  en: { label: 'Our first collection', title: 'Clothing with identity. Made to last.', loading: 'Loading collection…', empty: 'We are developing the first P.Mama capsule.', detail: 'We are selecting materials, testing samples and refining each garment. The collection will appear here when it is ready.', contact: 'Keep me in the loop', error: 'We could not load the collection.', retry: 'Try again', sizes: 'Sizes', colors: 'Colors', material: 'Composition', enquire: 'Ask about this garment', available: 'Available', preorder: 'Made to order', 'sold-out': 'Sold out', 'coming-soon': 'Coming soon' },
}
export default function CatalogueSection() {
  const { lang } = useLang()
  const t = copy[lang]
  const [products, setProducts] = useState([])
  const [state, setState] = useState('loading')
  const [attempt, setAttempt] = useState(0)
  useEffect(() => {
    const controller = new AbortController()
    fetch(site.catalogueUrl, { signal: controller.signal, cache: 'no-cache' })
      .then((response) => { if (!response.ok) throw new Error('Catalogue unavailable'); return response.json() })
      .then((data) => { setProducts(parseCatalogue(data)); setState('ready') })
      .catch((error) => { if (error.name !== 'AbortError') setState('error') })
    return () => controller.abort()
  }, [attempt])
  return <section id="collection" className="pm-collection" aria-labelledby="collection-title"><div className="pm-container">
    <p className="pm-eyebrow">{t.label}</p><h2 id="collection-title" className="pm-section-title">{t.title}</h2>
    {state === 'loading' && <p role="status">{t.loading}</p>}
    {state === 'error' && <div role="alert" className="pm-empty"><p>{t.error}</p><button className="pm-button" onClick={() => { setState('loading'); setAttempt((value) => value + 1) }}>{t.retry}</button></div>}
    {state === 'ready' && !products.length && <div className="pm-empty"><h3>{t.empty}</h3><p>{t.detail}</p><a className="pm-button" href={`mailto:${site.email}?subject=${encodeURIComponent('Primera colección P.Mama')}`}>{t.contact} <span aria-hidden="true">↗</span></a></div>}
    {state === 'ready' && products.length > 0 && <div className="pm-products">{products.map((product) => <article key={product.id} className="pm-product">
      <img src={product.images[0]} alt={product.name[lang]} width="640" height="800" loading="lazy" decoding="async" />
      <div className="pm-product-content"><p className="pm-status">{t[product.availability]}</p><h3>{product.name[lang]}</h3><p>{product.description[lang]}</p>
        <p className="pm-price">{new Intl.NumberFormat(lang === 'es' ? 'es-PY' : 'en-US', { style: 'currency', currency: product.currency }).format(product.price)}</p>
        <dl><dt>{t.material}</dt><dd>{product.material[lang]}</dd><dt>{t.sizes}</dt><dd>{product.sizes.join(' · ')}</dd><dt>{t.colors}</dt><dd>{product.colors.join(' · ')}</dd></dl>
        <a className="pm-button" href={productEnquiry(site.email, product, lang)}>{t.enquire}</a>
      </div></article>)}</div>}
  </div></section>
}
