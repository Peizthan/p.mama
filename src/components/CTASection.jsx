import { useLang } from '../context/LanguageContext'
import { site } from '../config/site'
export default function CTASection() {
 const { lang } = useLang()
 const es = lang === 'es'
 return <section id="contact" className="pm-contact" aria-labelledby="contact-title"><div className="pm-container"><p className="pm-eyebrow">{es ? 'Arte, comunidad y vida consciente' : 'Art, community and conscious living'}</p><h2 id="contact-title" className="pm-section-title">{es ? '¿Te sumás a crear algo con propósito?' : 'Want to create something with purpose?'}</h2><p>{es ? 'Si sos creador, confeccionista, proveedor o querés conocer la primera colección, conversemos.' : 'If you are a creator, maker, supplier or interested in our first collection, let’s talk.'}</p><a className="pm-button" href={`mailto:${site.email}?subject=${encodeURIComponent('Conversemos - P.Mama')}`}>{es ? 'Escribir a Iván' : 'Email Iván'} <span aria-hidden="true">↗</span></a><p className="pm-contact-note">{site.email}</p></div></section>
}
