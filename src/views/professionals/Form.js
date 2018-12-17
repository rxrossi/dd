import React from "react"
import { Form } from "react-final-form"
import Field from "../../commons/Field"
import CommonButtons from "../../commons/CommonFormButtons"

export default ({ onSubmit, entity }) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={entity}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Field name="name" type="text" label="Nome" />
          <CommonButtons
            submitting={submitting}
            pristine={pristine}
            form={form}
          />
        </form>
      )}
    />
  )
}
