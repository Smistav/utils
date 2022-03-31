import { useRef, useState, useEffect, useCallback } from 'react'

export const usePhoneMask = (initialValues: string) => {
  const [isError, setError] = useState('')
  let ref = useRef<HTMLInputElement>(null)
  const errorLength = 'остановитесь'
  const errorNumber = 'нужна цифра'
  const onChange = useCallback(() => {
    if (ref.current) {
      if (ref.current.value.length > 18) {
        setError(errorLength)
      } else if (ref.current.value.match(/[^+()-\s0-9]/g)) {
        setError(errorNumber)
      } else {
        setError('')
      }
      const phoneValue = ref.current.value
        .replace(/^8/g, '+7')
        .replace(/[^+0-9]/g, '')
        .match(/(\+{0,1})(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/) || ['']
      if (phoneValue[2] && !phoneValue[1]) {
        phoneValue[1] = '+'
        const foo = phoneValue[2]
        phoneValue[2] = '7'
        phoneValue[3] = foo
      }
      ref.current.value = !phoneValue[2]
        ? `${phoneValue[1]}`
        : `${phoneValue[1]}${phoneValue[2]}${`${phoneValue[3] ? ` (${phoneValue[3]}` : ''}`}${`${
            phoneValue[4] ? `) ${phoneValue[4]}` : ''
          }`}${`${phoneValue[5] ? `-${phoneValue[5]}` : ''}`}${`${
            phoneValue[6] ? `-${phoneValue[6]}` : ''
          }`}`
    }
  }, [])
  useEffect(() => {
    if (ref.current) {
      ref.current.value = initialValues
      onChange()
    }
  }, [initialValues, onChange])
  return {
    onChange,
    isError,
    ref,
  }
}
