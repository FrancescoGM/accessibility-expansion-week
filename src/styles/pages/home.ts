import { Form } from '@unform/web'
import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const HomeContent = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: ${props => props.theme.borderRadius.sm};
  background: ${props => props.theme.neutralColor[200]};
  margin: ${props => props.theme.spacing['5']};
  padding: ${props => props.theme.spacing[10]};
`

export const HomeTabs = styled.section`
  margin-bottom: ${props => props.theme.spacing['3']};

  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const HomeForm = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${props => props.theme.spacing['3']};
`
