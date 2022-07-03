import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div>
        <Link to="/charcount" >Character Count</Link>
      </div>
      <div>
        <Link to="/todoList" >Todo List</Link>
      </div>
    </>
  )
}

export default Home