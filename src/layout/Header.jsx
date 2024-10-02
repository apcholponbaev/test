import React from 'react'
import './Header.css'
import Button from '../components/UI/Button'
import styled from 'styled-components'

// const HeaderStyled = styled.header`
//   width: 100%;
//     height: 100px;
//     background-color: grey;
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
//     position: fixed;
//     top: 0;
// `;

// const Title = styled.h1`
//   color: white;

// `;


const Header = (props) => {
  return (
    <header>
      <h1>Logo</h1>
<button onClick={props.openForm}>ADD EXPENSES</button>
      
    </header>
  )
}

export default Header
