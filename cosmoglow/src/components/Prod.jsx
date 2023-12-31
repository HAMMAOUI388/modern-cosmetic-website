import { MdOutlineFavoriteBorder, MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute; // Corrected typo here
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.7s ease;
  cursor: pointer;
`;

const Container = styled.div`
//   flex : 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;


const Image = styled.img`
  height: 75%;
  z-index: 2;

`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #f5fbfd;
    transform: scale(1.1);
  }
`;

const Prod = (props) => { // Use 'props' here
  const { item } = props; // Destructure 'item' from 'props'
  
  return (
    <Container>
      <Image src={item.img} />
      <Info>
         <Icon>
           <MdOutlineShoppingCart />
         </Icon>
         <Icon>
           <MdSearch />
         </Icon>
         <Icon>
           <MdOutlineFavoriteBorder />
         </Icon>
      </Info>
    </Container>
  );
};

export default Prod;
