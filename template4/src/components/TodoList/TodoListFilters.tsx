import React from 'react'
import { Filter, Option } from './styled'

const TodoListFilters = () => {
  return (
    <>Filter: 
      <Filter >
        <Option value="Show All">All</Option>
        <Option value="Show Completed">Completed</Option>
        <Option value="Show Uncompleted">Uncompleted</Option>
      </Filter>
    </>
  )
}

export default TodoListFilters