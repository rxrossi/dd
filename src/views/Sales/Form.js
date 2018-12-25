import React from 'react'
import Form from '../../commons/Form'
import EntitySelect from '../../commons/EntitySelect'
import Field from '../../commons/Field'
import Textarea from '../../commons/Textarea'

const SalesForm = props => {
  return (
    <Form {...props}>
      <EntitySelect
        label="Profissional"
        name="professional"
        entityName="Professional"
      />
      <EntitySelect label="Cliente" name="client" entityName="Client" />
      <Field type="date" label="Data" name="date" />
      <Field type="text" label="Nome do serviço" name="name" />
      <Field type="number" label="Valor" name="value" />
      <Textarea label="Observações" name="notes" />
    </Form>
  )
}

export default SalesForm
