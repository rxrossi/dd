import React from 'react'
import { Field as FinalFormField } from 'react-final-form'
import { Field as ReakitField, Label, Input } from 'reakit'

function Field({ label, type, ...rest }) {
  return (
    <ReakitField>
      <Label>{label}</Label>
      <FinalFormField {...rest}>
        {({ input }) => {
          return <Input {...input} type={type} />
        }}
      </FinalFormField>
    </ReakitField>
  )
}

export default Field
