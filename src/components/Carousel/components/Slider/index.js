import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const settings = {
      className: "center",
      variableWidth: true,
      adaptiveHeight: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  .slick-next::before, .slick-prev::before {
    font-size: 30px;
    line-height: 1;
    opacity: .75;
    color: #111;
}
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{...settings}}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 