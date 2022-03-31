import { useDispatch } from 'react-redux'
import { Modal } from './components/modal/modal'
import { open } from './store/slice/modalSlice'
import { usePhoneMask } from './components/modal/usePhoneMask/usePhoneMask'
import Func from './components/func'

import s from './app.module.scss'

export const App = () => {
  const dispatch = useDispatch()
  const { ref, isError, onChange } = usePhoneMask('+79104824163')
  return (
    <div className={s.component}>
      <button type='button' onClick={() => dispatch(open())}>
        Open window
      </button>
      <input type='text' ref={ref} onChange={onChange} />
      {isError && <div>{isError}</div>}
      <Modal />
    </div>
  )
}
