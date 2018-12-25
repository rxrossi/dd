import React from 'react'
import { Field as FinalFormField } from 'react-final-form'
import { Field as ReakitField, Label, Input } from 'reakit'

function Field({ label, ...rest }) {
  return (
    <ReakitField>
      <Label>{label}</Label>
      <FinalFormField {...rest}>
        {({ input }) => {
          return (
            <Input
              {...input}
              as="textarea"
              style={{
                height: 150,
              }}
            />
          )
        }}
      </FinalFormField>
    </ReakitField>
  )
}

export default Field
