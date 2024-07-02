import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import changeNumber from '@/store/modules/counter'
import useAPPSelector from '@/store'

interface MainProps {
  children?: ReactNode
  name: string
  age: number
}

export const Main: React.FC<MainProps> = memo((props) => {
  // const { counter } = useAPPSelector((state) => state)

  const dispatch = useDispatch()
  const handleChange = () => {
    // dispatch(changeNumber(10))
  }

  return (
    <div>
      <h1>Main</h1>
      <h1>{props.age}</h1>
      <h1>{props.name}</h1>
      {props.children}
      <button onClick={handleChange}>按钮</button>
    </div>
  )
})
