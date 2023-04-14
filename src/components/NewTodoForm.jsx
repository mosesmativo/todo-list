import PropTypes from 'prop-types'

import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          id="item"
          onChange={e => setNewItem(e.target.value)}
          type="text"
          value={newItem}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}

NewTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
