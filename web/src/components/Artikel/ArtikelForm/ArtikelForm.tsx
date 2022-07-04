import { useTranslation } from 'react-i18next'

import {
  Form,
  FormError,
  Label,
  TextField,
  SelectField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'

type Geometrie = {
  id: number
  Bezeichnung: string
}

type Artikel = {
  id: number
  artikelcode: string
  artikelbezeichnung: string
  GeometieId?: number
}

type Data = {
  artikelId: number
  geoId: number
}

export type ArtikelFormProps = {
  artikel: Artikel
  geometries: Geometrie[]
  loading: boolean
  error?: any
  onSave: (data: Data) => void
}

const ArtikelForm = ({
  artikel,
  loading,
  error,
  geometries,
  onSave,
}: ArtikelFormProps) => {
  const { t } = useTranslation()

  const onSubmit = ({ geometrie }) => {
    onSave({ artikelId: artikel.id, geoId: geometrie })
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit}>
        <FormError error={error} />
        <Label name="artikelcode" className="rw-label">
          {t('Arikelcode')}
        </Label>
        <TextField
          name="artikelcode"
          className="rw-input"
          defaultValue={artikel.artikelcode}
          disabled={true}
        />

        <Label name="bezeichnung" className="rw-label">
          {t('Bezeichnung')}
        </Label>
        <TextField
          name="bezeichnung"
          className="rw-input"
          defaultValue={artikel.artikelbezeichnung}
          disabled={true}
        />

        <Label
          name="geometrie"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          neue Geometrie (aktuell:{' '}
          {geometries.find((d) => d.id === artikel.GeometieId)?.Bezeichnung})
        </Label>
        <SelectField
          name="geometrie"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{
            valueAsNumber: true,
            required: t('bitte Geometrie auswählen'),
          }}
          defaultValue={artikel.GeometieId}
        >
          {geometries.map(({ id, Bezeichnung }) => (
            <option key={id} value={id}>
              {Bezeichnung}
            </option>
          ))}
        </SelectField>
        <FieldError name="geometrie" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={loading} className="rw-button rw-button-green">
            {t('Speichern')}
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ArtikelForm
