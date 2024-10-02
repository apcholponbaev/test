import ChartBar from "./ChartBar";
import Sam from './Chart.module.css'
import styled from "styled-components";




const Chart = ({items}) => {
    const month = [
        {
            lable:'JAN',
            currenPrice: 0
        },
        {
            lable:'FEB',
            currenPrice: 0
        },
        {
            lable:'MAR',
            currenPrice: 0
        },
        {
            lable:'APR',
            currenPrice: 0
        },
        {
            lable:'MAY',
            currenPrice: 0
        },
        {
            lable:'JUN',
            currenPrice: 0
        },
        {
            lable:'JUL',
            currenPrice: 0
        },
        {
            lable:'AUG',
            currenPrice: 0
        },
        {
            lable:'SEP',
            currenPrice: 0
        },
        {
            lable:'OKT',
            currenPrice: 0
        },
        {
            lable:'NOV',
            currenPrice: 0
        },
        {
            lable:'DEC',
            currenPrice: 0
        },
        

    ]
    items.forEach(element => {
      
        
        const date = new Date(element.date)
        const monthNumber = date.getMonth()
        month[ monthNumber].currenPrice += element.price


    });
    const ChartStyled = styled.div`
        padding: 1rem;
    border-radius: 12px;
    background-color: grey;
    text-align: center;
    display: flex;
    justify-content: space-around;
    height: 10rem;
    width: 93%;
    margin: auto;
    margin-top: 5px;
    border: 2px solid white;
    `;

    const maxPrice = 5000
    return(
        <ChartStyled className={Sam.Chart}>
          {month.map((el) => {
return(
        <ChartBar maxPrice={maxPrice} Lable={el.lable} currentPrice={el.currenPrice} />

)
          })}
        </ChartStyled>
    )

}
export default Chart