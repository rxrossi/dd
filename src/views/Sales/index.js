import React from "react"
import db from "../../models"
import createCrud from "../createCrud"
import Form from "./Form"

const List = ({ entities }) => {
  return (
    <div>
      List
      <ul>
        {entities.map(({ id, value, professional }) => (
          <li key={id}>
            {professional && professional.name} {value}
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
