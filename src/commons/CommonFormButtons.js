import React from 'react'
import { styled, Button, Flex as BaseFlex } from 'reakit'
import { theme } from 'styled-tools'

const Flex = styled(BaseFlex)`
  margin: 0 ${theme('spacing.1')};
`

function CommonFormButtons({ submitting, pristine, form, onCancel }) {
  return (
    <Flex>
      <Button type="submit" disabled={submitting || pristine}>
        Salvar
      </Button>
      <Button
        palette="secondary"
        type="Button"
        onClick={form.reset}
        disabled={submitting || pristine}
      >
        Resetar
      </Button>
      {onCancel ? (
        <Button onClick={onCancel} type="Button" palette="danger">
          Cancelar
        </Button>
      ) : null}
    </Flex>
  )
}

export default CommonFormButtons
