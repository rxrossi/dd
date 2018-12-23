import React from 'react'
import { DateTime } from 'luxon'
import { Field as FinalFormField } from 'react-final-form'
import { Field as ReakitField, Label, Input } from 'reakit'

function Field({ label, type, ...rest }) {
  return (
    <ReakitField>
      <Label>{label}</Label>
      <FinalFormField
        {...rest}
        format={value => {
          if (type === 'date') {
            return new DateTime.fromJSDate(new Date(value)).toFormat(
              'yyyy-MM-dd'
            )
          }
          return value
        }}
      >
        {({ input }) => {
          return <Input {...input} type={type} />
        }}
      </FinalFormField>
    </ReakitField>
  )
}

export default Field
