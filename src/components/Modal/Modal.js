import CloseIcon from './image/closeIcon'
import Checkbox from '../checkbox/checkbox'

import './Modal.scss'

const Modal = ({ open, onClose }) => {
  return (
    <div className={`modal__wrapper ${open && `modal__wrapper__open`}`}>
      <div className={`modal ${open && `modal__open`}`}>
        <button className='modal__close' onClick={onClose}>
          <CloseIcon />
        </button>
        <Checkbox />
      </div>
    </div>
  )
}
export default Modal
