import React from 'react'
import Sam from './ChartBar.module.css'
import styled from 'styled-components'

const ChartBarStyled = styled.div`
   height: 100%;
    display: flex;
    align-items: center;
  flex-direction: column;
`;
const ChatBarInnerStyled = styled.div`
   width: 100%;
    height: 100%;
    border: 2px solid white;
    border-radius: 12px ;
    background-color: grey;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;
const ChartBarFillStyled = styled.div`
  background-color: blueviolet;
    width: 100%;
    transition: all 0,3s ease-out;
`;
   const ChartBarLableStyled = styled.p`
     font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
   `;


const ChartBar = ({maxPrice , currentPrice , Lable}) => {
    const fillHeight = (100 * currentPrice) / maxPrice
  return (

    <ChartBarStyled className={Sam.ChartBar}>
        <ChatBarInnerStyled className={Sam.ChartBarInner}>
            <ChartBarFillStyled  style={{height:`${fillHeight}%`}} className={Sam.ChartBarFill}> </ChartBarFillStyled >
       </ChatBarInnerStyled>
      <ChartBarLableStyled className={Sam.ChartBarLable}>{Lable}</ChartBarLableStyled>
    </ChartBarStyled>
  )
}

export default ChartBar
