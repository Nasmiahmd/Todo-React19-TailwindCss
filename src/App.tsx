import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import EditPage from './pages/EditPage'
function App() {

  return (
    <div className='relative h-full w-full'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/edit' element={<EditPage />} />
      </Routes>
    </div>
  )
}

export default App
