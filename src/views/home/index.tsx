import React from 'react'
import { Main } from '@/views/main'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Main name="zhangsan" age={10}>
        <h1>123</h1>
      </Main>
    </div>
  )
}

export default Home
