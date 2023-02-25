import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import './Calculadora.css'


export default function Calculadora() {
  // aplicação

  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    var inputN = e.target.value;
    if (num === 0) {
      setNum(inputN)
    } else {
      setNum(num + inputN)
    }
  }

  function inputOperator(e) {
    var operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }

  function clearAll() {
    setNum(0)
  }

  function percent() {
    setNum(num / 100)
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num)
    } else {
      setNum(Math.abs(num))
    }
  }

  function operation() {

  }

  function result() {

    if(operator === '/'){
    setNum(parseFloat(oldNum)/parseFloat(num))
    } else if (operator === 'X'){
      setNum(parseFloat(oldNum)*parseFloat(num))
    }else if (operator === '-'){
      setNum(parseFloat(oldNum)-parseFloat(num))
    } else if(operator === "+"){
      setNum(parseFloat(oldNum)+parseFloat(num))
    }

    console.log(num)
    console.log(operator)
    console.log(oldNum)
  }

  // design

  return (
    <div className='maindiv'>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className='wrapper'>
          <Box m={10} />
          <h1 className='resultado'>{num}</h1>
          <button className='gray' onClick={clearAll}>AC</button>
          <button className='gray' onClick={changeSign}>+/-</button>
          <button className='gray' value="%" onClick={percent} >%</button>
          <button className='orange' value="/" onClick={inputOperator}>/</button>
          <button className='dark-gray' value="7" onClick={inputNum}>7</button>
          <button className='dark-gray' value="8" onClick={inputNum}>8</button>
          <button className='dark-gray' value="9" onClick={inputNum}>9</button>
          <button className='orange' value="X" onClick={inputOperator}>X</button>
          <button className='dark-gray' value="4" onClick={inputNum}>4</button>
          <button className='dark-gray' value="5" onClick={inputNum}>5</button>
          <button className='dark-gray' value="6" onClick={inputNum}>6</button>
          <button className='orange' value="-" onClick={inputOperator}>-</button>
          <button className='dark-gray' value="1" onClick={inputNum}>1</button>
          <button className='dark-gray' value="2" onClick={inputNum}>2</button>
          <button className='dark-gray' value="3" onClick={inputNum}>3</button>
          <button className='orange' value="+" onClick={inputOperator}>+</button>
          <button className='dark-gray' value="0" onClick={inputNum}>0</button>
          <button className='dark-gray' style={{ visibility: "hidden" }}>,</button>
          <button className='dark-gray' value="." onClick={inputNum}>,</button>
          <button className='orange' value="=" onClick={result}>=</button>
        </div>
      </Container>
    </div>
  )
}
