import React from "react"
import setupModel from "../../entities/professionals"
import createCrud from "../createCrud"

const List = ({ entities }) => {
  return (
    <ul>
      {entities.map(({ id, name }) => (
        <li key={id}>{name} </li>
      ))}
    </ul>
  )
}

const Create = ({ add }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        add({ name: "Bruna" })
      }}
    >
      <button type="submit">Add</button>
    </form>
  )
}

export default createCrud({ List, Create, setupModel })
