import Head from 'next/head'
import { HomeContainer } from '../styles/pages/home'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | Study</title>
      </Head>
      <HomeContainer>
        <h1>Study</h1>
      </HomeContainer>
    </>
  )
}
