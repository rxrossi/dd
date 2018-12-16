import React from "react"
import { Form } from "react-final-form"
import EntitySelect from "../../commons/EntitySelect"
import Field from "../../commons/Field"
import CommonButtons from "../../commons/CommonFormButtons"

export default ({ onSubmit, parseOutput }) => (
  <Form
    onSubmit={(values, form) => {
      onSubmit(parseOutput(values))
      form.reset()
    }}
    initialValues={{}}
    render={({ handleSubmit, form, submitting, pristine }) => (
      <form onSubmit={handleSubmit}>
        <EntitySelect name="professional" entityName="Professional" />
        <Field type="number" label="Valor" name="value" />
        <CommonButtons
          form={form}
          submitting={submitting}
          pristine={pristine}
        />
      </form>
    )}
  />
)
