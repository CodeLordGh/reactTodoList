import propTypes from "prop-types"

export function TodoItems({ completed, id, title, deleteTodo, toggleTodo }) {
    return <li>
    <label>
      <input type="checkbox" checked={ completed } onChange={ e => toggleTodo(id, e.target.checked) } />
       { title }
    </label>
    <button
      onClick={ () => deleteTodo(id) }
      className="btn btn-danger"
      >
        Delete
    </button>
  </li>
}

TodoItems.propTypes = {
  completed: propTypes.bool.isRequired,
  id: propTypes.string,
  title: propTypes.string,
  deleteTodo: propTypes.func.isRequired,
  toggleTodo: propTypes.func.isRequired
}