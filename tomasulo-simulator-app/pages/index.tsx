import Head from 'next/head'
import Input from '../src/components/Input'
import Main from '../src/components/styled/Main'

export default function Home() {
  return (
   <div>
      <Head>Tomasulo Algorithm Simulator</Head>
      <Main className='container'>
        <Input/>
      </Main>
   </div>
  )
}
