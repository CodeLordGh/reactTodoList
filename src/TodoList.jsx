import { TodoItems } from "./TodoItems"
import propTypes from 'prop-types'

export function TodoList ({ toggleTodo, deleteTodo, todos}) {
    return <ul className="list">
        { todos.length === 0 && 'No todos' }
        { todos.map(todo => {
        return <TodoItems { ...todo } key={ todo.id } toggleTodo={toggleTodo} deleteTodo={deleteTodo}  />
        }) 
    }
    
  </ul>
}

TodoList.propTypes = {
  todos: propTypes.arrayOf(propTypes.object),
  toggleTodo: propTypes.func.isRequired,
  deleteTodo: propTypes.func.isRequired
}