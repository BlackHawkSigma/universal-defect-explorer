import { Form, Label, TextField, SelectField, Submit } from '@redwoodjs/forms'

type Geometrie = {
  id: number
  Bezeichnung: string
}

type Artikel = {
  id: number
  artikelcode: string
  artikelbezeichnung: string
}

type Data = {
  artikelId: number
  geoId: number
}

export type ArtikelFormProps = {
  artikel: Artikel
  geometries: Geometrie[]
  loading: boolean
  onSave: (data: Data) => void
}

const ArtikelForm = ({
  artikel,
  loading,
  geometries,
  onSave,
}: ArtikelFormProps) => {
  const onSubmit = ({ geometrie }) => {
    onSave({ artikelId: artikel.id, geoId: geometrie })
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit}>
        <Label name="artikelcode" className="rw-label">
          Arikelcode
        </Label>
        <TextField
          name="artikelcode"
          className="rw-input"
          defaultValue={artikel.artikelcode}
          disabled={true}
        />

        <Label name="bezeichnung" className="rw-label">
          Bezeichnung
        </Label>
        <TextField
          name="bezeichnung"
          className="rw-input"
          defaultValue={artikel.artikelbezeichnung}
          disabled={true}
        />

        <Label name="geometrie" className="rw-label">
          Geometrie
        </Label>
        <SelectField name="geometrie" className="rw-input">
          {geometries.map(({ id, Bezeichnung }) => (
            <option key={id} value={id}>
              {Bezeichnung}
            </option>
          ))}
        </SelectField>

        <div className="rw-button-group">
          <Submit disabled={loading} className="rw-button rw-button-green">
            Speichern
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ArtikelForm
