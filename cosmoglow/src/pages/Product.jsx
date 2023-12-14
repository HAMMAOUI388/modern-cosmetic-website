// every single products has his page so this is the code 


import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import { MdAdd, MdRemove } from "react-icons/md";


const Container = styled.div`

`;

const Wrraper = styled.div`
    paddinf : 50px;
    display : flex ;
`;

const ImgContainer = styled.div`
    flex : 1;
`;

const Img = styled.img`
   width : 100%;
   height : 90vh;
   object-fit : cover ;
`;

const InfoContainer = styled.div`
   flex : 1;
   padding :0px 50px ;
`;

const Title= styled.h1`
    font-weight : 200;
`;

const Desc = styled.p`
   margin : 20px  0px ;
`;

const Price = styled.span`
    font-weight : 100 ;
    font-size : 40px; 
`;


const AddContainer = styled.div`
  width : 50%;
  display : flex ;
  align-items : center;
  justify-content : space-between ;
`;

const AmountContainer = styled.div`
    display : flex ;
    align-items : center ;
    font-weight : 700;

`;

const Amount= styled.span`
    width : 30px ;
    heigth : 30px ;
    border-radius : 10 px ; 
    border : 1px solid teal ;
    display : flex ;
    align-items : center ;
    justify-content : center;
    margin : 5px ;
`;

const Button = styled.button`
     padding : 15px ; 
     border : 1px solid teal;
     background-color : white;
     cursor : pointer ;
     font-weight : 500;
      &: hover {
        background-color : gray;
      }
`;


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Annoucement/>
        <Wrraper>
            <ImgContainer>
                 <Img  src="url of the img "/>
            </ImgContainer>
            <InfoContainer>
                <Title>title of the prods </Title>
                <Desc>wertzuiqb some description</Desc>
                <Price>MAD2345</Price>
                <AddContainer>
                    <AmountContainer>
                        <MdRemove/>
                        <Amount>1</Amount>
                        <MdAdd/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrraper>
        <Footer/>
    </Container>
  )
}

export default Product