import styled from "styled-components";
import {popularProds} from "../data";
import Prod from "./Prod";

const Container= styled.div`
  padding : 20px ;
  display : flex ; 
  flex-wrap : wrap;
   justify-content : space-between ; 
   margin : 0px 200px;
  
`
 
const Products = () => {
  return (
    <Container>
        {popularProds.map(item=>(
           <Prod item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products