import React from 'react'
import Field from '../../commons/Field'
import Form from '../../commons/Form'

function ServicesForm({ onSubmit, entity, onCancel }) {
  return (
    <Form onSubmit={onSubmit} entity={entity} onCancel={onCancel}>
      <Field name="name" type="text" label="Nome" />
      <Field name="value" type="number" label="Valor padrão" />
    </Form>
  )
}

export default ServicesForm
