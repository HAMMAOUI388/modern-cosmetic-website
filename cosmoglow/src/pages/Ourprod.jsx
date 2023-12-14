import styled from "styled-components";
import Products from "../components/Products";


const Container = styled.div`

`;

const Title = styled.h1`
  margin-top : 60px ; 
  align-items:center;
  text-align:center;
  margin-bottom: 70px;
  font-weight: 500;
`;

const FilterContainer = styled.div`
  display : flex ; 
  justify-content : space-between ;
  margin: 0px 200px;

`;

const Filter = styled.div`
    margin : 24px ;
`;

const FilterText = styled.span`
   font-size : 20px;
   font-weigth : 600 ; 
   margin-right : 20px ; 
`;

const Select = styled.select`
  padding : 10px;
  margin-right : 20px ; 

`;
const Option = styled.option`
  

`;


const Ourprod = () => {
  return (
    <Container>


        <Title>DISCOVER ALL OUR PRODUCTS</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products :</FilterText>
                <Select>
                    <Option disabled selected>For</Option>
                    <Option>Men</Option>
                    <Option>Women</Option>
                    <Option>Kids</Option>
                    <Option>General</Option>
                </Select>
                <Select>
                    <Option disabled selected>Category</Option>
                    <Option>Skin</Option>
                    <Option>Hair</Option>
                    <Option>Body</Option>
                    <Option>Parfume</Option>
                    <Option>MakeUp</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products :</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>

    </Container>
  )
}

export default Ourprod