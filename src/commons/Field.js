import React from 'react'
import { Field as FinalFormField } from 'react-final-form'

function Field({ label, ...rest }) {
  return (
    <div>
      <label>{label}</label>
      <FinalFormField component="input" {...rest} />
    </div>
  )
}

export default Field
