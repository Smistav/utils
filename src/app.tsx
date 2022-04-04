import { Modal } from './components/modal/modal'
import { open } from './store/slice/modalSlice'
import { usePhoneMask } from './components/usePhoneMask/usePhoneMask'
import Func from './components/func'

import s from './app.module.scss'
import { useAppDispatch } from './store/hooks'

export const App = () => {
  const dispatch = useAppDispatch()
  const { ref, isError, onChange } = usePhoneMask('+79104824163')
  const handleClick = () => {
    dispatch(open())
  }
  return (
    <div className={s.component}>
      <button type='button' onClick={handleClick}>
        Open window
      </button>
      <input type='text' ref={ref} onChange={onChange} />
      {isError && <div>{isError}</div>}
      <Modal />
    </div>
  )
}
