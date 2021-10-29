import styled from 'styled-components'

type ButtonWrapperProps = {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline'
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing[3]};

  max-height: 42px;
  padding: ${({ theme, size }) =>
    theme.spacing[size === 'sm' ? 5 : size === 'md' ? 6 : 8]};
  border-radius: ${props => props.theme.borderRadius.xs};

  border: ${props => props.theme.borderWidths.mid} solid
    ${props => props.theme.primaryColor.dark};
  background-color: ${({ theme, variant }) =>
    variant === 'solid' ? theme.primaryColor.dark : 'transparent'};
  color: ${({ theme, variant }) =>
    variant === 'solid' ? theme.neutralColor[100] : theme.primaryColor.dark};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-transform: uppercase;

  &:focus {
    border-color: ${props => props.theme.neutralColor[100]};
  }

  &:disabled {
    opacity: 0.5;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`
