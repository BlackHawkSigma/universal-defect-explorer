import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Controller,
  Submit,
} from '@redwoodjs/forms'

import ImageUpload from 'src/components/ImageUpload/ImageUpload'

const GeometrieForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.geometrie?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error} config={{ mode: 'onBlur' }}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        {/* Row */}
        <Label
          name="Bezeichnung"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bezeichnung
        </Label>
        <TextField
          name="Bezeichnung"
          defaultValue={props.geometrie?.Bezeichnung}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: 'Bitte eine Bezeichung eintragen' }}
        />
        <FieldError name="Bezeichnung" className="rw-field-error" />

        {/* Row */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label
              name="rows"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Zeilen
            </Label>
            <NumberField
              name="rows"
              defaultValue={props.geometrie?.rows}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              validation={{ required: true, min: 1 }}
              min={1}
            />
            <FieldError name="rows" className="rw-field-error" />
          </div>

          <div>
            <Label
              name="columns"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Spalten
            </Label>
            <NumberField
              name="columns"
              defaultValue={props.geometrie?.columns}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              validation={{ required: true, min: 1 }}
              min={1}
            />
            <FieldError name="columns" className="rw-field-error" />
          </div>

          <div>
            <Label
              name="pixels"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Pixel
            </Label>
            <NumberField
              name="pixels"
              defaultValue={props.geometrie?.pixels}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              validation={{ required: true, min: 1 }}
              min={1}
            />
            <FieldError name="pixels" className="rw-field-error" />
          </div>
        </div>

        {/* Row */}
        <div>
          <Label
            name="partsPerSide"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Teile pro Skid Seite
          </Label>
          <NumberField
            name="partsPerSide"
            defaultValue={props.geometrie?.partsPerSide}
            emptyAs="undefined"
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            min={1}
          />
          <FieldError name="partsPerSide" className="rw-field-error" />
        </div>

        {/* Row */}
        <Label
          name="image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Grafik
        </Label>
        <Controller
          name="image"
          defaultValue={props.geometrie?.image}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => {
            return <ImageUpload value={value} onChange={onChange} />
          }}
        />

        <FieldError name="image" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Speichern
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default GeometrieForm
