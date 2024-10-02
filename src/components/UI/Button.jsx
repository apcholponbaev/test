
import './Button.css'
 
import React from 'react'

// const ButtonStyled = styled.button`
//    padding: 10px 20px;
//   border-radius: 15px;
//   background-color: red;
//   color: white;
//   border: none;
//   font-size: 1rem;
//   font-weight: bold;
//   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
// `;

const Button = (props) => {
  return (
    <button>{props.children}</button>
      
   
  )
}

export default Button
