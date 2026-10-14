import { useLang } from '../context/LanguageContext'
const content = {
 es: { label: 'Cómo queremos producir', title: 'Cada decisión también es parte del diseño.', body: 'Nuestra primera cápsula empieza con muestras y decisiones concretas. Compartiremos la composición y el proceso de cada producto cuando estén definidos.', steps: [['Elegir con criterio', 'Comparar materiales, procedencia, calidad y posibilidades reales de producción.'], ['Probar antes de producir', 'Revisar calce, costuras, impresión y comportamiento después del lavado.'], ['Crear con identidad', 'Trabajar con el arte original P.Mama y talento local, en series que podamos cuidar.'], ['Hacer durar', 'Comunicar composición y cuidados con claridad; favorecer el uso y la reparación.']] },
 en: { label: 'How we aim to produce', title: 'Every decision is part of the design.', body: 'Our first capsule begins with samples and concrete choices. We will share each product’s composition and process once they are defined.', steps: [['Choose thoughtfully', 'Compare materials, origin, quality and realistic production options.'], ['Test before making', 'Review fit, stitching, printing and how the garment performs after washing.'], ['Create with identity', 'Work with original P.Mama art and local talent, in batches we can look after.'], ['Make it last', 'Communicate composition and care clearly; encourage continued use and repair.']] },
}
export default function ProcessSection() {
 const { lang } = useLang()
 const t = content[lang]
 return <section id="process" className="pm-process" aria-labelledby="process-title"><div className="pm-container"><p className="pm-eyebrow">{t.label}</p><h2 id="process-title" className="pm-section-title">{t.title}</h2><p className="pm-intro">{t.body}</p><ol className="pm-steps">{t.steps.map(([title, body], index) => <li key={title}><span className="pm-step-number" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol></div></section>
}
