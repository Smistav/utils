import { useState } from 'react'
import s from './app.module.scss'
import Modal from './components/modal/modal'

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className={s.component}>
      <button type='button' onClick={() => setOpen(!open)}>
        Open window
      </button>
      <Modal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default App
