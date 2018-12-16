import React from "react"
import db from "../../models"
import createCrud from "../createCrud"
import Form from "./Form"

const List = ({ entities, onDeleteClick }) => {
  return (
    <div>
      List
      <ul>
        {entities.map(({ id, name }) => (
          <li key={id}>
            {name}{" "}
            <button onClick={() => onDeleteClick({ id, name })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Create = ({ add }) => {
  return <Form onSubmit={add} />
}

export default createCrud({ List, Create, model: db.Professional })
