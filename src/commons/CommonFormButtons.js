import React from "react"

export default ({ submitting, pristine, form, onCancel }) => (
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
