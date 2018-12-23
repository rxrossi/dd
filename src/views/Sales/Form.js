import React from 'react'
import Form from '../../commons/Form'
import EntitySelect from '../../commons/EntitySelect'
import Field from '../../commons/Field'

const SalesForm = props => {
  return (
    <Form {...props}>
      <EntitySelect name="professional" entityName="Professional" />
      <Field type="number" label="Valor" name="value" />
      <Field type="date" label="Data" name="date" />
      <Field type="text" label="Nome do serviço" name="name" />
    </Form>
  )
}

export default SalesForm
