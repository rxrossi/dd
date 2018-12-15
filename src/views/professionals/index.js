import React from "react"
import db from "../../models"
import createCrud from "../createCrud"
import Form from "./Form"

const List = ({ entities }) => {
  return (
    <div>
      List
      <ul>
        {entities.map(({ id, name }) => (
          <li key={id}>{name} </li>
        ))}
      </ul>
    </div>
  )
}

const Create = ({ add }) => {
  return <Form onSubmit={add} />
}

export default createCrud({ List, Create, model: db.Professional })
