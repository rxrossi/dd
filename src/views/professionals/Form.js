import React from "react"
import { Form } from "react-final-form"
import Field from "../../commons/Field"
import CommonButtons from "../../commons/CommonFormButtons"

export default ({ onSubmit }) => (
  <Form
    onSubmit={(values, form) => {
      onSubmit(values)
      form.reset()
    }}
    initialValues={{}}
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
