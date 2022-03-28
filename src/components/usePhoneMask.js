import { useState, useEffect, useRef } from 'react'

// eslint-disable-next-line import/prefer-default-export
export function usePhoneMask() {
  const [phone, setPhone] = useState()
  const [isError, setError] = useState('')
  const inputPhone = useRef(null)
  const errorLength = 'остановитесь'
  const errorNumber = 'нужна цифра'
  const handleChange = () => {
    if (inputPhone.current.value.length > 18) {
      setError(errorLength)
    } else if (inputPhone.current.value.match(/[^+()-\s0-9]/g)) {
      setError(errorNumber)
    } else {
      setError([])
    }
    const phoneValue = inputPhone.current.value
      .replace(/^8/g, '+7')
      .replace(/[^+0-9]/g, '')
      .match(/(\+{0,1})(7{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
    if (phoneValue[2] !== '' && phoneValue[1] === '') {
      phoneValue[1] = '+'
      const foo = phoneValue[2]
      phoneValue[2] = '7'
      phoneValue[3] = foo
    }
    inputPhone.current.value = !phoneValue[2]
      ? `${phoneValue[1]}`
      : `${phoneValue[1]}${phoneValue[2]}${`${phoneValue[3] ? ` (${phoneValue[3]}` : ''}`}${`${
          phoneValue[4] ? `) ${phoneValue[4]}` : ''
        }`}${`${phoneValue[5] ? `-${phoneValue[5]}` : ''}`}${`${
          phoneValue[6] ? `-${phoneValue[6]}` : ''
        }`}`
    setPhone(inputPhone.current.value)
  }
  useEffect(() => {
    handleChange()
  }, [phone])

  return {
    handleChange,
    isError,
    inputPhone,
  }
}
