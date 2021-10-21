import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const GeometrieForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.geometrie?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

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
          validation={{ required: true }}
        />
        <FieldError name="Bezeichnung" className="rw-field-error" />

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
