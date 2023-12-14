import React from 'react'
import styled from "styled-components";

const Container =styled.div`
height : 30px;
background-color : teal;
color : white ;
display : flex ;
align-items : center ; // cneter items verticaly 
justify-content :  center ; // center items horizontaly 
font-size : 14 px ;
font-weight : 500;
`

const Annoucement = () => {
  return (
    <Container>
        Supper Deal ! Free Shipping on Orders Over 500MAD
    </Container>
  )
}

export default Annoucement