import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
function App() {

  return (
    <div className='relative h-full w-full bg-violet-100'>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
