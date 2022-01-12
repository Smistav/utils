import CloseIcon from './image/closeIcon'
import Checkbox from '../checkbox/checkbox'
import ClassNames from 'classnames'
import s from './modal.module.scss'
import { useRef } from 'react'

const Modal = ({ open, onClose }) => {
  const modal = useRef(null)
  const onClickClose = (evt) => {
    if (modal.current === evt.target) {
      onClose()
    }
  }
  const wrapperClassName = ClassNames(s.wrapper, open && s.wrapper__open)
  const modalClassName = ClassNames(s.modal, open && s.modal__open)

  return (
    <div className={wrapperClassName} onClick={onClickClose} ref={modal}>
      <div className={modalClassName}>
        <button className={s.modal__close} onClick={onClose}>
          <CloseIcon />
        </button>
        <Checkbox />
      </div>
    </div>
  )
}
export default Modal
