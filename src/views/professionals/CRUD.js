import React from 'react'
import db from '../../models'
import createCrud from '../createCrud'
import Form from './Form'
import List from './List'

const Create = ({ add, onCancel }) => {
  return <Form onSubmit={add} onCancel={onCancel} />
}

const Update = ({ update, entity, onCancel }) => {
  return <Form onSubmit={update} entity={entity} onCancel={onCancel} />
}

export default createCrud({ List, Create, Update, model: db.Professional })
