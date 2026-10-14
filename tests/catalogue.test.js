import test from 'node:test'
import assert from 'node:assert/strict'
import { parseCatalogue, productEnquiry } from '../src/lib/catalogue.js'
const garment = { id: 'test-tee', published: true, name: { es: 'Remera', en: 'T-shirt' }, description: { es: 'Descripción', en: 'Description' }, images: ['/images/products/test.webp'], material: { es: 'Algodón', en: 'Cotton' }, price: 100000, currency: 'PYG', sizes: ['M'], colors: ['Natural'], availability: 'available' }
test('empty catalogue and unfinished drafts remain invisible', () => { assert.deepEqual(parseCatalogue({ version: 1, products: [] }), []); assert.deepEqual(parseCatalogue({ version: 1, products: [{ published: false }] }), []) })
test('approved products load without component edits', () => assert.equal(parseCatalogue({ version: 1, products: [garment] })[0].id, 'test-tee'))
test('missing details and invalid prices fail explicitly', () => { for (const change of [{ material: null }, { images: [] }, { price: -1 }, { currency: 'BAD' }, { sizes: [] }]) assert.throws(() => parseCatalogue({ version: 1, products: [{ ...garment, ...change }] })) })
test('unsafe image references and duplicate IDs cannot be published', () => { for (const image of ['javascript:bad', 'https://', 'https://user:secret@example.test/image.webp', '/images/products/../private.webp']) assert.throws(() => parseCatalogue({ version: 1, products: [{ ...garment, images: [image] }] })); assert.throws(() => parseCatalogue({ version: 1, products: [garment, garment] })) })
test('incompatible catalogue versions fail', () => { assert.throws(() => parseCatalogue(null)); assert.throws(() => parseCatalogue({ version: 2, products: [] })) })
test('enquiry subjects identify and encode the product', () => assert.match(productEnquiry('owner@example.com', garment, 'es'), /^mailto:owner@example.com\?subject=Consulta%20P.Mama/))
