import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'

import { ButtonWrapper } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline'
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  children?: ReactNode
}

export function Button({
  size = 'sm',
  variant = 'solid',
  leftIcon,
  rightIcon,
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <ButtonWrapper size={size} variant={variant} {...rest}>
      {leftIcon}
      {children}
      {rightIcon}
    </ButtonWrapper>
  )
}
