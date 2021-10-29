import styled, { css } from 'styled-components'

type TabWrapperProps = {
  isActive?: boolean
}

export const TabWrapper = styled.button<TabWrapperProps>`
  border: none;
  background: transparent;

  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  padding: ${props => props.theme.spacing[1]} ${props => props.theme.spacing[2]};
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.neutralColor['700']};

  &hover {
    color: ${props => props.theme.neutralColor['900']};
  }
  border: ${props => props.theme.borderWidths.mid} solid transparent;

  &:focus {
    border-radius: ${props => props.theme.borderRadius.sm};
    border: ${props => props.theme.borderWidths.mid} solid
      ${props => props.theme.primaryColor.light};
  }

  ${props =>
    props.isActive &&
    css`
      border-bottom: ${props => props.theme.borderWidths.mid} solid
        ${props => props.theme.primaryColor.light};
      font-weight: ${props => props.theme.fontWeights.bold};

      svg {
        color: ${props => props.theme.primaryColor.light};
      }
    `}

  svg {
    width: 24px;
    height: 24px;
  }
`
