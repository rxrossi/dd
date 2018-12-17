import React from "react"
import db from "../../models"
import createCrud from "../createCrud"
import Form from "./Form"
import { RouterConsumer } from "../../Router"

const List = ({ entities, onDeleteClick, onUpdateClick }) => {
  return (
    <ul>
      {entities.map(({ id, name }) => (
        <li key={id}>
          {name}{" "}
          <RouterConsumer>
            {({ setView, VIEW_TYPES }) => (
              <button
                onClick={() =>
                  setView(VIEW_TYPES.PROFESSIONAL_SALES, {
                    professionalId: id
                  })
                }
              >
                Ver vendas
              </button>
            )}
          </RouterConsumer>
          <button onClick={() => onUpdateClick({ id, name })}>Editar</button>
          <button onClick={() => onDeleteClick({ id, name })}>Excluir</button>
        </li>
      ))}
    </ul>
  )
}

const Create = ({ add }) => {
  return <Form onSubmit={add} />
}

const Update = ({ update, entity, onCancel }) => {
  return <Form onSubmit={update} entity={entity} onCancel={onCancel} />
}

export default createCrud({ List, Create, Update, model: db.Professional })
