import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactElement,
  useEffect,
  useRef,
  useState
} from 'react'
import { IoAlertCircleOutline } from 'react-icons/io5'

import { useField } from '@unform/core'

import { InputContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: string
  leftIcon?: ReactElement
}

export function Input({
  name,
  label,
  leftIcon,
  ...rest
}: InputProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, registerField, defaultValue, error, clearError } =
    useField(name)
  const [isFilled, setIsFilled] = useState(false)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.value.length === 0) {
      setIsFilled(false)
    } else {
      setIsFilled(true)
    }
  }

  return (
    <InputContainer isValid={!!error} isFilled={isFilled} leftIcon={!!leftIcon}>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <div>
        {leftIcon}
        <input
          id={fieldName}
          ref={inputRef}
          onChange={handleChange}
          onFocus={clearError}
          defaultValue={defaultValue}
          {...(error ? { 'aria-invalid': 'true' } : {})}
          {...rest}
        />
      </div>
      {error && (
        <span>
          <IoAlertCircleOutline aria-label="Error icon" />
          {error}
        </span>
      )}
    </InputContainer>
  )
}
