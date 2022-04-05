import style from './Button.module.scss'
import cn from 'classnames'
import React from 'react'

type ButtonType = 'button' | 'submit' | 'reset' | undefined

type ButtonProps = {
  children: React.ReactNode
  classes?: string[]
  onClick?: (evt: React.MouseEvent<HTMLElement>) => void
  ref?: React.RefObject<HTMLButtonElement>
  type?: ButtonType
}
export const Button = React.memo(({ children, classes, onClick, type, ref }: ButtonProps) => {
  return (
    <button className={cn(style.component, [classes])} onClick={onClick} type={type} ref={ref}>
      {children}
    </button>
  )
})
