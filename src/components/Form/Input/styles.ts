import styled, { css } from 'styled-components'

type InputContainerProps = {
  leftIcon?: boolean
  isValid?: boolean
  isFilled?: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  label {
    display: inline-block;
    margin-bottom: ${props => props.theme.spacing[2]};
  }

  div {
    position: relative;

    &:focus-within {
      svg {
        color: ${props => props.theme.primaryColor.light};
      }
    }

    svg {
      width: 24px;
      height: 24px;

      color: ${props => props.theme.neutralColor[300]};
      position: absolute;
      top: 50%;
      left: ${props => props.theme.spacing[3]};
      transform: translateY(-50%);
      transition: color 0.3s;

      ${props =>
        props.isFilled &&
        css`
          color: ${props => props.theme.primaryColor.light};
        `}
    }

    input {
      width: 100%;
      padding: ${props => props.theme.spacing[3]};
      font-size: ${props => props.theme.fontSizes.md};
      border-radius: ${props => props.theme.borderRadius.xs};
      border: ${props => props.theme.borderWidths.mid} solid
        ${props => props.theme.neutralColor[100]};
      background-color: ${props => props.theme.neutralColor[100]};
      outline: none;
      color: ${props => props.theme.neutralColor[700]};
      padding-left: ${props =>
        props.leftIcon
          ? `calc(${props.theme.spacing[3]} * 2 + 24px)`
          : props.theme.spacing[3]};
      transition: border-color 0.3s;

      ${props =>
        props.isValid &&
        css`
          border-color: ${props.theme.semanticColor.negative};
        `}

      &:focus {
        border: ${props => props.theme.borderWidths.mid} solid
          ${props => props.theme.primaryColor.light};
      }

      &::placeholder {
        color: ${props => props.theme.neutralColor[300]};
        line-height: ${props => props.theme.lineHeights.short};
      }
    }
  }

  span {
    display: inline-flex;
    align-items: center;
    margin-top: ${props => props.theme.spacing[2]};
    line-height: ${props => props.theme.lineHeights.short};
    color: ${props => props.theme.semanticColor.negative};

    svg {
      width: 20px;
      height: 20px;
      margin-right: ${props => props.theme.spacing[1]};
    }
  }
`
