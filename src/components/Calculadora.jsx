import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './Calculadora.css'

export default function Calculadora() {
  return (
    <div>
      <Box m={5}/>
      <Container maxWidth="xs">
      <div className='wrapper'>
      <Box m={10}/>
        <h1 className='resultado'>0</h1>
        <button className='gray'>AC</button>
        <button className='gray'>+/-</button>
        <button className='gray'>%</button>
        <button className='orange'>/</button>
        <button className='dark-gray'>7</button>
        <button className='dark-gray'>8</button>
        <button className='dark-gray'>9</button>
        <button className='orange'>X</button>
        <button className='dark-gray'>4</button>
        <button className='dark-gray'>5</button>
        <button className='dark-gray'>6</button>
        <button className='orange'>-</button>
        <button className='dark-gray'>1</button>
        <button className='dark-gray'>2</button>
        <button className='dark-gray'>3</button>
        <button className='orange'>+</button>
        <button className='dark-gray'>0</button>
        <button className='dark-gray' style={{visibility: "hidden"}}>,</button>
        <button className='dark-gray'>,</button>
        <button className='orange'>=</button>
      </div>
      </Container>
    </div>
  )
}
