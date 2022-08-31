import React from 'react'
import Portal from './Portal'
import s from './modalP.module.scss'
import cn from 'classnames'

interface IModalProps {
  onClose: () => void
  isOpen: boolean
  children: React.ReactNode
  className?: string
}

export const ModalP = ({ onClose, isOpen, children, className }: IModalProps) => {
  return <>
    {isOpen && <Portal>
      <div className={s.wrapper} >
        <div className={s.overlay} onClick={onClose} />
        <div className={cn(s.container, className)}>{children}</div>
      </div>
    </Portal>}
  </>
}
