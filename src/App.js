import s from './app.module.scss'
import { useState } from 'react'
import Modal from './components/modal/modal'

const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={s.component}>
      <button onClick={() => setOpen(!open)}>Open window</button>
      <Modal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default App
