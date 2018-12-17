import React from "react"
import db from "../../models"
import createCrud from "../createCrud"
import Form from "./Form"

const List = ({ entities, onDeleteClick, onUpdateClick }) => {
  return (
    <div>
      List
      <ul>
        {entities.map(({ id, name }) => (
          <li key={id}>
            {name}{" "}
            <button onClick={() => onUpdateClick({ id, name })}>Editar</button>
            <button onClick={() => onDeleteClick({ id, name })}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Create = ({ add }) => {
  return <Form onSubmit={add} />
}

const Update = ({ update, entity, onCancel }) => {
  return <Form onSubmit={update} entity={entity} onCancel={onCancel} />
}

export default createCrud({ List, Create, Update, model: db.Professional })
