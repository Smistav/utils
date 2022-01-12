import './App.scss'
import { useState } from 'react'
import Modal from './components/Modal/Modal'

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className='App'>
      <button onClick={() => setOpen(!open)}>Open window</button>
      <Modal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default App
