import React from 'react'
import './Input.css'
import { type } from '@testing-library/user-event/dist/type'

const Input = ({type , placeholder , value , onChange }) => {
  return (
    <input onChange={onChange} value={value} type={type} placeholder={placeholder} />
  )
}

export default Input
