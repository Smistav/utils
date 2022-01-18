import ClassNames from 'classnames'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { close } from 'store/slice/modalSlice'
import Checkbox from 'components/checkbox/checkbox'
import CloseIcon from './image/closeIcon'
import s from './modal.module.scss'

function Modal() {
  const modal = useRef(null)
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()
  const onClickClose = (evt) => {
    if (modal.current === evt.target) {
      dispatch(close())
    }
  }
  const wrapperClassName = ClassNames(s.wrapper, isOpen && s.wrapper__open)
  const modalClassName = ClassNames(s.modal, isOpen && s.modal__open)

  return (
    <div
      className={wrapperClassName}
      role='button'
      tabIndex='0'
      onClick={onClickClose}
      onKeyDown={onClickClose}
      ref={modal}
    >
      <div className={modalClassName}>
        <button type='button' className={s.modal__close} onClick={() => dispatch(close())}>
          <CloseIcon />
        </button>
        <Checkbox />
      </div>
    </div>
  )
}

export default Modal
