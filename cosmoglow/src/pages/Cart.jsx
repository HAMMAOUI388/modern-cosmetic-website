
import { MdAdd, MdRemove } from 'react-icons/md';
import styled from 'styled-components';



const Container = styled.div`

 margin : 0px 200px ; 
`;
const Wrraper = styled.div`

   padding : 20px ;
`;

const Title = styled.h1`

     font-weight: 300 ;
     text-align : center ;

`;

const Top = styled.div`

  display: flex ;
  align-items : center ;
  justify-content : space-between;
  padding : 20px;
  margin-bottom : 50px ; 

`;

const TopButton = styled.button`
   padding : 10px ;
   font-weight : 600 ;
   cursor : pointer ;
   border : ${props => props.type === "filled" ? "1px solid teal" : "1px solid teal"};
   border-radius :  ${props => props.type === "filled" ? "2px" : "2px"};
   background-color : ${props => props.type === "filled" ? "black" : "teal"};
   color : ${props => props.type === "filled" && "white"};

`;

const TopTexts =styled.div`
   

`;
const TopText =styled.span`
   
  text-decoration : underline ;
  cursor : pointer;
  marign : 0px 10px ;
`;

const Bottum = styled.div`

 display : flex ;
 justify-content: space-between ;
`;

const Info = styled.div`
 flex : 3 ; // tree units of the div info 
 margin-right: 100px;

`;
const Product =styled.div`

 display : flex ;
 justify-content : space-between ;
`;
const ProductDetailes =styled.div`
 flex : 2 ;
 display : flex ;

`;
const Detailes =styled.div`
   padding :20px ; 
   display : flex ; 
   flex-direction : column ;
   justify-content : space-between // or space-around

`;
const Image =styled.img`
   width : 200px ;
   height : 200px ;
   object-fit : cover;


`;
const ProductName =styled.span`
   

`;
const ProductId =styled.span`


`;
const ProductInfo =styled.span`


`;
const Pricedetailes =styled.span`

   flex : 1;
   display : flex;
   align-items : center ;
   justify-content :center;
   flex-direction : column;
`;

const ProductAmountContainer = styled.div `
  display : flex ; 
  align-items : center ;
  margin-bottom :20px;
`;
const ProductAmount = styled.div `
   font-size : 24px ;
   margin : 5px ;
`;
const ProductPrice = styled.div `
   font-size : 30px ;
   font-weight : 200;

`;

const Hr = styled.hr `
background-color : #eeeeee;
border : none ;
height : 1px ; 

`;


const Summary = styled.div`

 flex : 1 ; // for the summary just one unit
 border : 0.5px  solid lightgary;
 border_radius : 10px ;
 padding 20px ;
 height : 50vh ;

`;

const SummaryTitel= styled.h1`
   font-weight: 200;

`;
const SummaryItem= styled.div`
   margin : 30px 0px ;
   display : flex ; 
   justify-content: space-between ;
   font-size : ${props =>props.type === "total" && "24px"}
   font-weigth : ${props =>props.type === "total" && "500"}
`;
const SummaryItemText= styled.span`

`;
const SummaryItemPrice= styled.span`

`;
const Button= styled.button`
   weight : 100%;
   padding : 10px ; 
   background-color : black ;
   border: 1px solid teal;
   border-radius: 2px ; 
   color : white ;
   font-weight : 600 ;
   cursor : pointer; 

`;





const Cart = () => {
  return (
    <Container>

         <Wrraper>
            <Title>
                YOUR BAG
            </Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (4)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHEKOUT NOW</TopButton>
            </Top>
            <Bottum>
                <Info>
                    <Product>
                        <ProductDetailes>
                            <Image src="../../Public/imgs/f5.jpeg"/>
                            <Detailes>
                                <ProductName><b>Product:</b> qwertzuiopfxv</ProductName>
                                <ProductId><b>ID:</b> 23456789</ProductId>
                                <ProductInfo>paragraph of the some descreptin of the prod</ProductInfo>
                            </Detailes>
                        </ProductDetailes>
                        <Pricedetailes>
                            <ProductAmountContainer>
                                <MdAdd/>
                                <ProductAmount>2</ProductAmount>
                                <MdRemove/>
                            </ProductAmountContainer>
                            <ProductPrice>30MAD</ProductPrice>
                        </Pricedetailes>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetailes>
                            <Image src="../../Public/imgs/f1.jpeg"/>
                            <Detailes>
                                <ProductName><b>Product:</b> qwertzuiopfxv</ProductName>
                                <ProductId><b>ID:</b> 23456789</ProductId>
                                <ProductInfo>paragraph of the some descreptin of the prod</ProductInfo>
                            </Detailes>
                        </ProductDetailes>
                        <Pricedetailes>
                            <ProductAmountContainer>
                                <MdAdd/>
                                <ProductAmount>2</ProductAmount>
                                <MdRemove/>
                            </ProductAmountContainer>
                            <ProductPrice>30MAD</ProductPrice>
                        </Pricedetailes>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitel>ORDER SUMMARY</SummaryTitel>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>60MAD</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated shipping</SummaryItemText>
                        <SummaryItemPrice>5.9 MAD</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>-5.9 MAD</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type ="total" >
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>60MAD</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottum>
         </Wrraper>

    </Container>
  )
}

export default Cart