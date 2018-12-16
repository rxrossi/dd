import React from "react"

export default ({ submitting, pristine, form }) => (
  <div className="buttons">
    <button type="submit" disabled={submitting || pristine}>
      Submit
    </button>
    <button
      type="button"
      onClick={form.reset}
      disabled={submitting || pristine}
    >
      Limpar
    </button>
  </div>
)
