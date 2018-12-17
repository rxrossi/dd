import React from "react"
import db from "../../models"
import createCrud from "../createCrud"
import Form from "./Form"

const List = ({ entities, onDeleteClick, onUpdateClick }) => {
  return (
    <ul>
      {entities.map(({ id, value, name = "", professional }) => (
        <li key={id}>
          {name} {professional && professional.name} {value}{" "}
          <button onClick={() => onUpdateClick({ id, name })}>Editar</button>
          <button
            onClick={() => onDeleteClick({ id, name: `${name} ${value}` })}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  )
}

function parseOutput({ professional, ...rest }) {
  return {
    ...rest,
    professionalId: Number(professional)
  }
}
function parseInput({ professionalId, ...rest }) {
  return {
    ...rest,
    professional: professionalId
  }
}

const Create = ({ add }) => {
  return <Form onSubmit={add} parseOutput={parseOutput} />
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
  includes: {
    include: db.Professional
  }
})
