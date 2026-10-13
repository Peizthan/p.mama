import { useLang } from '../context/LanguageContext'
export default function Footer() {
 const { lang, t } = useLang()
 const links = lang === 'es' ? [['Inicio', '#home'], ['Nosotros', '#about'], ['Colección', '#collection'], ['Proceso', '#process'], ['Contacto', '#contact']] : [['Home', '#home'], ['About', '#about'], ['Collection', '#collection'], ['Process', '#process'], ['Contact', '#contact']]
 return <footer className="pm-footer"><div className="pm-container pm-footer-top"><a href="#home" aria-label="P.Mama"><img src="/images/brand/logo-160.webp" alt="P.Mama" width="100" height="100" loading="lazy" /></a><p>{t.footer.tagline}</p><nav aria-label={lang === 'es' ? 'Navegación del pie' : 'Footer navigation'}>{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav></div><div className="pm-container pm-footer-bottom">© {new Date().getFullYear()} P.Mama. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</div></footer>
}
