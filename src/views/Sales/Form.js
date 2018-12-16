import React from "react"
import { Form, Field } from "react-final-form"
import EntitySelect from "../../commons/EntitySelect"

export default ({ onSubmit, parseOutput }) => (
  <Form
    onSubmit={(values, form) => {
      const parsed = parseOutput(values)
      onSubmit(parsed)
      form.reset()
    }}
    initialValues={{}}
    render={({ handleSubmit, form, submitting, pristine }) => (
      <form onSubmit={handleSubmit}>
        <EntitySelect name="professional" entityName="Professional" />
        <div
          style={{
            margin: "20px 0px"
          }}
        >
          <label>Value</label>
          <Field
            name="value"
            component="input"
            type="number"
            placeholder="Valor"
          />
        </div>

        <div
          style={{
            margin: "20px 0px"
          }}
        >
          <button type="submit" disabled={submitting || pristine}>
            Submit
          </button>
          <button
            type="button"
            onClick={form.reset}
            disabled={submitting || pristine}
          >
            Limpar formulário
          </button>
        </div>
      </form>
    )}
  />
)
