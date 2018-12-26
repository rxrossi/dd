import React from 'react'
import db from '../../models'
import createCrud from '../createCrud'
import Form from './Form'
import List from './List'
import { VIEW_TYPES } from '../../constants'

function parseOutput({ professional, client, service, ...rest }) {
  return {
    ...rest,
    professionalId: Number(professional),
    clientId: Number(client),
    serviceId: Number(service),
  }
}

function parseInput({ professionalId, clientId, serviceId, ...rest }) {
  return {
    ...rest,
    professional: professionalId,
    client: clientId,
    service: serviceId,
  }
}

const Create = ({ add, onCancel }) => {
  return (
    <Form
      onSubmit={add}
      entity={{
        date: new Date(),
      }}
      parseOutput={parseOutput}
      onCancel={onCancel}
    />
  )
}

const Update = ({ update, entity, onCancel }) => {
  return (
    <Form
      onSubmit={update}
      entity={entity}
      parseInput={parseInput}
      onCancel={onCancel}
    />
  )
}

export default createCrud({
  List,
  Create,
  Update,
  defaultView: VIEW_TYPES.CREATE,
  model: db.Sale,
  include: [db.Professional, db.Client, db.Service],
})
