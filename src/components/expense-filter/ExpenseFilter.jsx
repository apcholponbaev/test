import React from 'react'
import text from './ExpenseFilter.module.css'
import styled from 'styled-components'


const ExpenseFilter = (props) => {

const onFiltered = (e) => {
    props.onFilteredYear (e.target.value)
}

const ContainerStyled = styled.div`
  width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 10px;
`;
const SelectStyled = styled.select`
  width: 130px;
padding: 10px;
font-size: 17px;
outline: none;
`;

  return (
    <ContainerStyled className={text.container}>
      <h1>Filtered by Years</h1>

<SelectStyled className={text.number} onChange={onFiltered} value={props.value} name="" id="">
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
</SelectStyled>

    </ContainerStyled>
  )
}

export default ExpenseFilter
