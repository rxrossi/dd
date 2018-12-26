import React from 'react'
import { FormSpy } from 'react-final-form'
import Form from '../../commons/Form'
import EntitySelect from '../../commons/EntitySelect'
import Field from '../../commons/Field'
import Textarea from '../../commons/Textarea'

const SalesForm = props => {
  return (
    <Form
      {...props}
      entity={{
        date: new Date(),
      }}
    >
      <EntitySelect
        label="Profissional"
        name="professional"
        entityName="Professional"
      />
      <EntitySelect label="Cliente" name="client" entityName="Client" />
      <Field type="date" label="Data" name="date" />
      <FormSpy subscription="service">
        {({ form }) => {
          return (
            <EntitySelect
              label="Serviço"
              name="service"
              entityName="Service"
              onChange={entity => {
                if (entity) {
                  form.change('value', Number(entity.value))
                } else {
                  form.change('value', null)
                }
              }}
            />
          )
        }}
      </FormSpy>
      <Field type="number" label="Valor" name="value" />
      <Textarea label="Observações" name="notes" />
    </Form>
  )
}

export default SalesForm
