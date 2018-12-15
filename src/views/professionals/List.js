import React from "react"
import setupModel from "../../entities/professionals"
import withCRUD from "../withCRUD"

const List = ({ entities }) => {
  console.log({ entities })

  return (
    <ul>
      {entities.map(({ id, name }) => (
        <li key={id}>{name} </li>
      ))}
    </ul>
  )
}

export default withCRUD({ List, setupModel })
