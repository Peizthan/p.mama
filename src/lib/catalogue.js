export const AVAILABILITY = ['available', 'preorder', 'sold-out', 'coming-soon']
const text = (value, max = 1000) => typeof value === 'string' && value.trim().length > 0 && value.length <= max
const localized = (value) => value && text(value.es) && text(value.en)
const imagePath = (value) => {
  if (typeof value !== 'string') return false
  if (/^\/images\/products\/[\w./-]+\.(webp|png|jpe?g)$/i.test(value)) return !value.split('/').includes('..')
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password } catch { return false }
}
export function parseCatalogue(data) {
  if (!data || data.version !== 1 || !Array.isArray(data.products)) throw new Error('Invalid catalogue document')
  const ids = new Set()
  return data.products.filter((item) => item?.published === true).map((item) => {
    if (!text(item.id, 80) || ids.has(item.id) || !localized(item.name) || !localized(item.description) ||
      !Array.isArray(item.images) || !item.images.length || !item.images.every(imagePath) ||
      !Array.isArray(item.sizes) || !item.sizes.length || !item.sizes.every((size) => text(size, 20)) ||
      !Array.isArray(item.colors) || !item.colors.length || !item.colors.every((color) => text(color, 60)) ||
      !localized(item.material) || !Number.isFinite(item.price) || item.price <= 0 ||
      !['PYG', 'USD'].includes(item.currency) || !AVAILABILITY.includes(item.availability)) throw new Error('Invalid published product')
    ids.add(item.id)
    return item
  })
}
export function productEnquiry(email, item, language) {
  const subject = `${language === 'es' ? 'Consulta' : 'Enquiry'} P.Mama - ${item.name[language]} (${item.id})`
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`
}
