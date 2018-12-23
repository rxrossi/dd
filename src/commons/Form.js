import React from 'react'
import { theme } from 'styled-tools'
import { Form as FinalForm } from 'react-final-form'
import { styled, Block as BaseBlock } from 'reakit'
import CommonButtons from './CommonFormButtons'

const Block = styled(BaseBlock)`
  padding: ${theme('spacing', 1)};
  margin: ${theme('spacing', 1)};
  width: 100%;
`

function Form({
  onSubmit,
  entity,
  onCancel,
  children,
  parseInput = f => f,
  parseOutput = f => f,
}) {
  return (
    <Block>
      <FinalForm
        onSubmit={values => {
          onSubmit(parseOutput(values))
        }}
        initialValues={parseInput(entity)}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            {children}
            <CommonButtons
              onCancel={onCancel}
              submitting={submitting}
              pristine={pristine}
              form={form}
            />
          </form>
        )}
      />
    </Block>
  )
}

export default Form
