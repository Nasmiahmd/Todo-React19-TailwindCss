import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
function App() {

  return (
    <div className='relative h-full w-full'>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
