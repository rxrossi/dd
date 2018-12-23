import React from 'react'
import Field from '../../commons/Field'
import Form from '../../commons/Form'

function ProfessionalsForm({ onSubmit, entity, onCancel }) {
  return (
    <Form onSubmit={onSubmit} entity={entity} onCancel={onCancel}>
      <Field name="name" type="text" label="Nome" />
      <Field name="percentage" type="number" label="Porcentagem de comissão" />
    </Form>
  )
}

export default ProfessionalsForm
