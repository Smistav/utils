import { useDispatch } from 'react-redux'
import Modal from 'components/modal/modal'
import { open } from 'store/slice/modalSlice'
import s from 'app.module.scss'

function App() {
  const dispatch = useDispatch()
  return (
    <div className={s.component}>
      <button type='button' onClick={() => dispatch(open())}>
        Open window
      </button>
      <Modal />
    </div>
  )
}

export default App
