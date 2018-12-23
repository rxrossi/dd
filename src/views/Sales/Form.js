import React from 'react'
import { Block, Heading } from 'reakit'
import Form from '../../commons/Form'
import EntitySelect from '../../commons/EntitySelect'
import Field from '../../commons/Field'
import theme from '../../theme'

const SalesForm = props => {
  return (
    <Form {...props}>
      <Block margin={theme.spacing[3]}>
        <Heading>Nova venda</Heading>
      </Block>
      <EntitySelect name="professional" entityName="Professional" />
      <Field type="number" label="Valor" name="value" />
      <Field type="date" label="Data" name="date" />
      <Field type="text" label="Nome do serviço" name="name" />
    </Form>
  )
}

export default SalesForm
