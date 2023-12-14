import styled from "styled-components";




const Container = styled.div `
 flex : 1;
 margin : 3px;
 height:70vh;
 position : relative ;
`;
const Image = styled.img `
 width : 100%;
 height : 100%;
 object-fit: cover ; 

`;

const Info = styled.div `
 positin :absolut;
 width: 100%;
 heigth : 100%;
 top : 0;
 left : 0 ;
 display : flex ;
 flex-direction : column ;
 align-items : center ;
 justify-content : center;
`;

const Title = styled.h1 `
  color : ;
  margin-bottom : 20px;
`;

const Button = styled.button`
 border : 2px solid white;
 padding : 15px ;
 background-color : teal ;
 color : white ;
 cursor : pointer ; 
 font-weight : 600;
 transition: all 0.5s ease;
 border-radius : 2px;
 &:hover{
    background-color : white;
    color : teal;
    border : 2px solid teal;
    transform: scale(1.1);

 }
`;


const Categoryitem = ({item}) => {
  return (
    <Container>
        <Image src={item.imgg}/>
        <Info>
            <Title>{item.ttitle}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default Categoryitem