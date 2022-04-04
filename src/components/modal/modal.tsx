import React, { useRef } from 'react'
import { close } from '../../store/slice/modalSlice'
import { Checkbox } from '../checkbox/checkbox'
import CloseIcon from './image/closeIcon'
import { Button } from '../button/Button'

import cn from 'classnames'

import s from './modal.module.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
const classButton = [s.primary, s.fontH3Button]

export const Modal = () => {
  const nameButtonPrimary = 'Button'
  const nameButtonPrimary2 = 'Button2'
  const modal = useRef(null)
  const { isOpen } = useAppSelector((state) => state.modal)
  const dispatch = useAppDispatch()
  const onClickClose = (evt: React.MouseEvent<HTMLElement>) => {
    if (modal.current === evt.target) {
      dispatch(close())
    }
  }
  const handleClick = () => {
    dispatch(close())
  }
  const wrapperClassName = cn(s.wrapper, isOpen && s.wrapper__open)
  const modalClassName = cn(s.modal, isOpen && s.modal__open)
  return (
    <div className={wrapperClassName} onClick={onClickClose} ref={modal}>
      <div className={modalClassName}>
        <Button type='button' classes={[s.modal__close]} onClick={handleClick}>
          <CloseIcon />
        </Button>
        <Checkbox />
        <div className={s.blockButton}>
          <Button classes={classButton}>{nameButtonPrimary}</Button>
          <Button>{nameButtonPrimary2}</Button>
          <Button>{nameButtonPrimary2}</Button>
        </div>
      </div>
    </div>
  )
}
