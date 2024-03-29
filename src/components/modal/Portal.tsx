import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
interface IPortalProps {
  children: React.ReactNode
}

const Portal = ({ children }: IPortalProps) => {
  const [container] = useState(() => document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)

    }
  }, [container])

  return ReactDOM.createPortal(children, container)
}
export default Portal