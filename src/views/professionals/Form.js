import React from "react"
import { Form, Field } from "react-final-form"

export default ({ onSubmit }) => (
  <Form
    onSubmit={(values, form) => {
      onSubmit(values)
      form.reset()
    }}
    initialValues={{}}
    render={({ handleSubmit, form, submitting, pristine }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <Field name="name" component="input" type="text" placeholder="Nome" />
        </div>
        <div className="buttons">
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
