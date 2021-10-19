import type { ArtikelFormProps } from './ArtikelForm'

export const standart = (): ArtikelFormProps => ({
  artikel: { id: 42, artikelbezeichnung: 'Foo', artikelcode: '12345678' },
  geometries: [
    { id: 1, Bezeichnung: 'Foo' },
    { id: 2, Bezeichnung: 'Bar' },
  ],
  loading: false,
  onSave() {},
})
