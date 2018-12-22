import React from 'react'

function CommonFormButtons({ submitting, pristine, form, onCancel }) {
  return (
    <div className="buttons">
      <button type="submit" disabled={submitting || pristine}>
        Salvar
      </button>
      <button
        type="button"
        onClick={form.reset}
        disabled={submitting || pristine}
      >
        Resetar
      </button>
      {onCancel ? (
        <button onClick={onCancel} type="button">
          Cancelar
        </button>
      ) : null}
    </div>
  )
}

export default CommonFormButtons
