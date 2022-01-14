import type { EditArtikelById } from 'types/graphql'

export const standard = (): EditArtikelById => {
  return {
    artikel: {
      id: 42,
      artikelcode: '12345',
      artikelbezeichnung: 'Test',
    },

    geometries: [
      { id: 1, Bezeichnung: 'Foo' },
      { id: 2, Bezeichnung: 'Bar' },
    ],
  }
}
