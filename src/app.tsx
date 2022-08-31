import { Modal } from './components/modal/modal'
import { open } from './store/slice/modalSlice'
import { usePhoneMask } from './components/usePhoneMask/usePhoneMask'
import Func from './components/func'

import s from './app.module.scss'
import { useAppDispatch } from './store/hooks'
import { ModalP } from './components/modal/ModalP'
import { useState } from 'react'

export const App = () => {
  const dispatch = useAppDispatch()
  const { ref, isError, onChange } = usePhoneMask('+79104824163')
  const handleClick = () => {
    dispatch(open())

  }
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  const handleClickClose = () => {
    setIsOpen(false)
  }
  const handleClickOpen = () => {
    setIsOpen(true)
  }
  const handleClickClose1 = () => {
    setIsOpen1(false)
  }
  const handleClickOpen1 = () => {
    setIsOpen1(true)
  }
  return (
    <div className={s.component}>
      <ModalP isOpen={isOpen1} onClose={handleClickClose1} className={s.poper}>1213</ModalP>
      <button type='button' onClick={handleClick}>
        Open window
      </button>
      <button type='button' onClick={handleClickOpen}>
        Open windowP1
      </button>

      <input type='text' ref={ref} onChange={onChange} />
      {isError && <div>{isError}</div>}
      <Modal />
      <ModalP isOpen={isOpen} onClose={handleClickClose}>
        dfsf<button type='button' onClick={handleClickOpen1}>
          Open windowP2
        </button>
      </ModalP>
    </div>
  )
}
