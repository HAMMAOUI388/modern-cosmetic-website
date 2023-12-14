import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color:white ; 
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => (props.direction === 'left' ? '30px' : '')};
  right: ${props => (props.direction === 'right' ? '30px' : '')};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: 1.2s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire container */
  opacity: 0.8;
`;
const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: ${props => (props.place === 'right' ? '1000px' : '250px')};
  right: ${props => (props.place === 'left' ? '1000px' : '250px')};
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  text-align: center;

`;

const Title = styled.h1`
  font-size: 20px;
  color: white;
`;

const Desc = styled.p`
  text-align : center;
  margin: 20px ;
  marign-left :200px;
  font-size: 20px;
  color: white;
  font-weight: 500;
  letter-spacing: 2px;
  flex-direction: row-reverse;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border: 2px solid teal;
  color: white;
  cursor: pointer;
  border-radius : 3px;
  transition: all 0.5s ease;
  &:hover{
    background-color: #f5fbfd;
    transform: scale(1.1);
    color: teal;
    border: 2px solid white;
  }
`;

const Banner = () => {
  const [slideIndex, setslideIndex] = useState(0);

  const handleClick = direction => {
    if (direction === 'left') {
      setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <BsArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <Slide key={item.id}>
            <ImgContainer>
              <Img src={item.img} />
            </ImgContainer>
            <InfoContainer place={item.bg}>
              <Title>{item.title}</Title>
              <Desc >{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <BsArrowRight />
      </Arrow>
    </Container>
  );
};

export default Banner;
