import { ButtonHTMLAttributes, ReactNode } from 'react'

import { TabWrapper } from './styles'

type TabProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  leftIcon?: ReactNode
  isActive?: boolean
  children: ReactNode
}

export function Tab({
  isActive,
  leftIcon,
  children,
  ...rest
}: TabProps): JSX.Element {
  return (
    <TabWrapper isActive={isActive} {...rest}>
      {leftIcon}
      {children}
    </TabWrapper>
  )
}
