import React from 'react'
import db from '../../models'
import createCrud from '../createCrud'
import Form from './Form'
import List from './List'

function parseOutput({ professional, ...rest }) {
  return {
    ...rest,
    professionalId: Number(professional),
  }
}

function parseInput({ professionalId, ...rest }) {
  return {
    ...rest,
    professional: professionalId,
  }
}

const Create = ({ add, onCancel }) => {
  return <Form onSubmit={add} parseOutput={parseOutput} onCancel={onCancel} />
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
  model: db.Sale,
  include: db.Professional,
})
