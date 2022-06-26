import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SigninPage from './pages/SigninPage'

function App() {
  return (
    <>
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<SigninPage/>} />
      </Routes>
    </>
  )
}

export default App
