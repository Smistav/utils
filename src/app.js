import { useDispatch } from 'react-redux'
// import Modal from 'components/modal/modal'
import { open } from 'store/slice/modalSlice'
import s from 'app.module.scss'
import { usePhoneMask } from 'components/usePhoneMask'
// import Func from './components/func'

function App() {
  const dispatch = useDispatch()
  const phoneMask = usePhoneMask()
  return (
    <div className={s.component}>
      <button type='button' onClick={() => dispatch(open())}>
        Open window
      </button>
      <input type='text' ref={phoneMask.inputPhone} onChange={phoneMask.handleChange} />
      {phoneMask.isError && <div>{phoneMask.isError}</div>}
    </div>
  )
}

export default App
