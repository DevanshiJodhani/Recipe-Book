import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FastFood = () => {
  const settings = {
    dots: false ,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <h1>Junck Food Recipes</h1>
      <StyledSlider {...settings}>
      <Box>
          <Wrap>
            <img src="./images/fastFood/WhiteSosPasta.jpeg" alt="Dish image" />
            <div>
              <h1>White Sos Pasta</h1>
            </div>
          </Wrap>
          <Btn>
            <a>
              <i className="bx bx-heart"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <img src="./images/fastFood/pizza.jpeg" alt="Dish image" />
            <div>
              <h1>Pizza</h1>
            </div>
          </Wrap>
          <Btn>
            <a>
              <i className="bx bx-heart"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <img src="./images/fastFood/burger.jpeg" alt="Dish image" />
            <div>
              <h1>Burger</h1>
            </div>
          </Wrap>
          <Btn>
            <a>
              <i className="bx bx-heart"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <img src="./images/fastFood/pasta.jpeg" alt="Dish image" />
            <div>
              <h1>Pasta</h1>
            </div>
          </Wrap>
          <Btn>
            <a>
              <i className="bx bx-heart"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <img src="./images/fastFood/nudels.jpeg" alt="Dish image" />
            <div>
              <h1>Nudels</h1>
            </div>
          </Wrap>
          <Btn>
            <a>
              <i className="bx bx-heart"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
        <Box>
          <Wrap>
            <img src="./images/fastFood/HotDog.jpeg" alt="Dish image" />
            <div>
              <h1>Hot Dog</h1>
            </div>
          </Wrap>
          <Btn>
            <a>
              <i className="bx bx-heart"></i>
            </a>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </Btn>
        </Box>
      </StyledSlider>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 80px 50px;

  @media screen and (max-width: 550px) {
    padding: 50px 30px;

    h1 {
      font-size: 25px;
    }
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-next,
  .slick-prev {
    &::before {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 550px) {
    .slick-next,
    .slick-prev {
      &::before {
        font-size: 20px;
      }
    }
  }
`;

const Box = styled.div`
  margin-top: 50px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    margin-top: 30px;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #c2c2c2;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
    transition: 0.5s ease;
  }
  div{
    position: absolute;
    color: #fff;
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    height: 300px;
    bottom: 300px;
    cursor: pointer;
    transition: 0.5s ease;
    h1{
      text-transform: uppercase;
    }
  }
  &:hover {
    img {
      transform: scale(1.2);
    }
    div {
      bottom: 0%;
    }
  }
`;

const Btn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    margin-left: 10px;
    border-radius: 12px;
    background: transparent;
    font-size: 30px;
    color: #fff;
    z-index: 1;
    overflow: hidden;
    text-decoration: none;
    transition: 0.5s;
  }

  @media (max-width: 550px) {
    bottom: 30px;
    a {
      width: 40px;
      height: 40px;
    }
  }
`;

export default FastFood;
