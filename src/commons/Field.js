import React from "react"
import { Field } from "react-final-form"

export default ({ label, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <Field component="input" {...rest} />
    </div>
  )
}
