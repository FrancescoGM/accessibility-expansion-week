import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactElement,
  useEffect,
  useRef,
  useState
} from 'react'
import {
  IoAlertCircleOutline,
  IoEyeOffOutline,
  IoEyeOutline
} from 'react-icons/io5'

import { useField } from '@unform/core'

import { InputContainer } from './styles'

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: string
  leftIcon?: ReactElement
}

export function PasswordInput({
  name,
  label,
  leftIcon,
  disabled,
  ...rest
}: PasswordInputProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, registerField, defaultValue, error, clearError } =
    useField(name)
  const [isFilled, setIsFilled] = useState(false)
  const [isHiding, setIsHiding] = useState(false)

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
          type={isHiding ? 'password' : 'text'}
          onChange={handleChange}
          onFocus={clearError}
          defaultValue={defaultValue}
          disabled={disabled}
          {...rest}
        />
        <button
          type="button"
          onClick={() => setIsHiding(!isHiding)}
          disabled={disabled}
          aria-label={isHiding ? 'Show password' : 'Hide password'}
        >
          {isHiding ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </button>
      </div>
      {error && (
        <span>
          <IoAlertCircleOutline />
          {error}
        </span>
      )}
    </InputContainer>
  )
}
