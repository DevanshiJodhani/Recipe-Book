import styled from 'styled-components';
import FastFood from '../Pages/FastFood';
import IndianFood from '../Pages/IndianFood';
import Salad from '../Pages/Salad';

const Home = () => {
  return (
    <Container>
      <Content>
        <Info>
          <h1>Discover, Cook, Enjoy – One Recipe at a Time</h1>
          <h3>
            Welcome to Recipe Hub, your go-to destination for delicious and
            diverse recipes. Whether you're a seasoned chef or a home cook, our
            extensive collection of recipes, tips, and culinary inspiration will
            help you create mouth-watering dishes with ease. Join our community
            to explore, cook, and share your favorite recipes, and make every
            meal a memorable experience.
          </h3>
          <a href='/allRecipes'>
            All Recipes
              <i className="bx bx-right-arrow-alt"></i>
          </a>
        </Info>
      </Content>
      <FastFood />
      <IndianFood />
      <Salad />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
    url('./images/Home_bg.jpg');
  background-position: center;
  background-size: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  color: #fff;
  padding: 120px 20px;

  h1 {
    font-size: 38px;
    margin-bottom: 30px;
    color: #15ff00;
  }

  h3 {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 40px;
    color: #e0e0e0;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 30px;
    background: none;
    outline: none;
    border: 1px solid #fff;
    color: #fff;
    font-size: 18px;
    border-radius: 5px;
    font-weight: 900;
    transition: 0.5s ease;
    cursor: pointer;
    letter-spacing: 1px;
    text-decoration: none;
    i {
      margin-top: 5px;
      font-size: 28px;
      margin-left: 10px;
      transition: 0.5s ease;
    }

    &:hover {
      background-color: #000;
      border: 1px solid #000;

      a {
        transform: translateX(10px);
      }
    }
  }

  @media screen and (max-width: 550px){
    margin-top: 40px;
    h1{
      font-size: 25px;
      text-align: center;
    }
    h3{
      font-size: 16px;
      line-height: 1.2;
      text-align: center;
    }
  }
`;

export default Home;
