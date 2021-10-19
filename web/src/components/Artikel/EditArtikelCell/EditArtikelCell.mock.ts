import type { EditArtikelById } from 'types/graphql'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */): EditArtikelById => ({
  artikel: {
    id: 42,
    artikelcode: '12345',
    artikelbezeichnung: 'Test',
  },
  geometries: [
    { id: 1, Bezeichnung: 'Foo' },
    { id: 2, Bezeichnung: 'Bar' },
  ],
})
