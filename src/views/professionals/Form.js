import React from 'react'
import { Form } from 'react-final-form'
import Field from '../../commons/Field'
import CommonButtons from '../../commons/CommonFormButtons'

function ProfessionalsForm({ onSubmit, entity, onCancel }) {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={entity}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Field name="name" type="text" label="Nome" />
          <Field
            name="percentage"
            type="number"
            label="Porcentagem de comissão"
          />
          <CommonButtons
            onCancel={onCancel}
            submitting={submitting}
            pristine={pristine}
            form={form}
          />
        </form>
      )}
    />
  )
}

export default ProfessionalsForm
