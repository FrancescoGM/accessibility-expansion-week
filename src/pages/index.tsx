import Head from 'next/head'
import { useRef, useState, KeyboardEvent } from 'react'
import {
  IoArrowForwardOutline,
  IoLockClosedOutline,
  IoLogInOutline,
  IoMailOutline,
  IoPersonAddOutline
} from 'react-icons/io5'

import { FormHandles, SubmitHandler } from '@unform/core'

import { Button } from '../components/Button'
import { Input } from '../components/Form/Input'
import { PasswordInput } from '../components/Form/PasswordInput'
import { Tab } from '../components/Tab'
import {
  HomeContainer,
  HomeForm,
  HomeContent,
  HomeTabs
} from '../styles/pages/home'

type FormData = {
  email: string
  password: string
}

export default function Home(): JSX.Element {
  const formRef = useRef<FormHandles>(null)
  const [selectedTab, setSelectedTab] = useState<string | undefined>('tab-1')

  const handleSubmitSignIn: SubmitHandler<FormData> = async data => {
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>): void {
    const { key } = event
    const activeTab = document.querySelector(`#${selectedTab}`)

    if (key === 'ArrowLeft') {
      let nextTab = activeTab?.previousElementSibling as HTMLElement

      if (!nextTab) {
        nextTab = activeTab?.parentElement?.firstElementChild as HTMLElement
      }
      setSelectedTab(nextTab?.id)
      nextTab?.focus()
    }
    if (key === 'ArrowRight') {
      let nextTab = activeTab?.nextElementSibling as HTMLElement

      if (!nextTab) {
        nextTab = activeTab?.parentElement?.lastElementChild as HTMLElement
      }
      setSelectedTab(nextTab?.id)
      nextTab?.focus()
    }
    if (key === 'Home') {
      const nextTab = activeTab?.parentElement?.firstElementChild as HTMLElement
      setSelectedTab(nextTab?.id)
      nextTab?.focus()
    }
    if (key === 'End') {
      const nextTab = activeTab?.parentElement?.lastElementChild as HTMLElement
      setSelectedTab(nextTab?.id)
      nextTab?.focus()
    }
  }

  return (
    <>
      <Head>
        <title>Home | Study</title>
      </Head>
      <HomeContainer>
        <HomeContent>
          <HomeTabs onKeyDown={handleKeyDown} aria-label="Tag panel">
            <Tab
              id="tab-1"
              isActive={selectedTab === 'tab-1'}
              onClick={() => setSelectedTab('tab-1')}
              leftIcon={<IoLogInOutline />}
            >
              Entrar
            </Tab>
            <Tab
              id="tab-2"
              isActive={selectedTab === 'tab-2'}
              onClick={() => setSelectedTab('tab-2')}
              leftIcon={<IoPersonAddOutline />}
            >
              Cadastrar
            </Tab>
          </HomeTabs>
          {selectedTab === 'tab-1' && (
            <HomeForm
              ref={formRef}
              onSubmit={handleSubmitSignIn}
              aria-label="SignIn form"
            >
              <Input
                name="email"
                type="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                leftIcon={<IoMailOutline />}
              />
              <PasswordInput
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                leftIcon={<IoLockClosedOutline />}
              />
              <Button type="submit" rightIcon={<IoArrowForwardOutline />}>
                CADASTRAR
              </Button>
            </HomeForm>
          )}
        </HomeContent>
      </HomeContainer>
    </>
  )
}
