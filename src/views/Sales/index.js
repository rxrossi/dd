import React from "react"
import db from "../../models"
import createCrud from "../createCrud"
import Form from "./Form"

const List = ({ entities, onDeleteClick }) => {
  return (
    <div>
      List
      <ul>
        {entities.map(({ id, value, name = "", professional }) => (
          <li key={id}>
            {name} {professional && professional.name} {value}{" "}
            <button
              onClick={() => onDeleteClick({ id, name: `${name} ${value}` })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function parseOutput({ professional, ...rest }) {
  return {
    ...rest,
    professionalId: Number(professional)
  }
}

const Create = ({ add }) => {
  return <Form onSubmit={add} parseOutput={parseOutput} />
}

export default createCrud({
  List,
  Create,
  model: db.Sale,
  includes: {
    include: db.Professional
  }
})
