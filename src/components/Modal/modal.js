import ClassNames from 'classnames'
import { useRef } from 'react'
import PropTypes from 'prop-types'
import CloseIcon from './image/closeIcon'
import Checkbox from '../checkbox/checkbox'
import s from './modal.module.scss'

function Modal({ open, onClose }) {
  const modal = useRef(null)
  const onClickClose = (evt) => {
    if (modal.current === evt.target) {
      onClose()
    }
  }
  const wrapperClassName = ClassNames(s.wrapper, open && s.wrapper__open)
  const modalClassName = ClassNames(s.modal, open && s.modal__open)

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
        <button type='button' className={s.modal__close} onClick={onClose}>
          <CloseIcon />
        </button>
        <Checkbox />
      </div>
    </div>
  )
}
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
export default Modal
