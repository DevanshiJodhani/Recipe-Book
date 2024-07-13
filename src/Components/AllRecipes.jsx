import styled from 'styled-components';

const AllRecipes = () => {
  return (
    <Container>
      <Content>
        <Box>
          <ImgBx>
            <img src="./images/Salad/VegetableSalad.jpeg" alt="" />
          </ImgBx>
          <Info>
            <h3>Vegetable Salad</h3>
            <a href="/recipe">View</a>
          </Info>
        </Box>
        <Box>
          <ImgBx>
            <img src="./images/Salad/VegetableSalad.jpeg" alt="" />
          </ImgBx>
          <Info>
            <h3>Vegetable Salad</h3>
            <a href="/recipe">View</a>
          </Info>
        </Box>
        <Box>
          <ImgBx>
            <img src="./images/Salad/VegetableSalad.jpeg" alt="" />
          </ImgBx>
          <Info>
            <h3>Vegetable Salad</h3>
            <a href="/recipe">View</a>
          </Info>
        </Box>
        <Box>
          <ImgBx>
            <img src="./images/Salad/VegetableSalad.jpeg" alt="" />
          </ImgBx>
          <Info>
            <h3>Vegetable Salad</h3>
            <a href="/recipe">View</a>
          </Info>
        </Box>
        <Box>
          <ImgBx>
            <img src="./images/Salad/VegetableSalad.jpeg" alt="" />
          </ImgBx>
          <Info>
            <h3>Vegetable Salad</h3>
            <a href="/recipe">View</a>
          </Info>
        </Box>
        <Box>
          <ImgBx>
            <img src="./images/Salad/VegetableSalad.jpeg" alt="" />
          </ImgBx>
          <Info>
            <h3>Vegetable Salad</h3>
            <a href="/recipe">View</a>
          </Info>
        </Box>
        <Box>
          <ImgBx>
            <img src="./images/Salad/VegetableSalad.jpeg" alt="" />
          </ImgBx>
          <Info>
            <h3>Vegetable Salad</h3>
            <a href="/recipe">View</a>
          </Info>
        </Box>
        <Box>
          <ImgBx>
            <img src="./images/Salad/VegetableSalad.jpeg" alt="" />
          </ImgBx>
          <Info>
            <h3>Vegetable Salad</h3>
            <a href="/recipe">View</a>
          </Info>
        </Box>  
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 120px 20px;


  @media screen and (max-width: 650px){
    padding: 100px 10px;
  }
 
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
  gap: 50px;
  padding: 25px;
  width: 100%;
  height: auto;

 

  @media screen and (max-width: 1300px){
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (max-width: 950px){
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 650px){
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

`;

const Box = styled.div`
max-width: 400px;
  width: 100%;
  height: 300px;
  border: 1px solid #fff;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s ease;
  background: #fff;
  cursor: pointer;
  margin: 0 auto;
  &:hover {
    img {
      scale: 1.2;
      opacity: 0.6;
    }
  }

`;

const ImgBx = styled.div`
  width: 400px;
  height: 250px;
  overflow: hidden;
  border-bottom: 1px solid #aaa;
  background: #000;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: 0.5s ease;
  }
`;

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: #000;
    letter-spacing: 0.8px;

    a{
        text-decoration: none;
        font-size: 18px;
        color: #333;

        &:hover{
            color: #1500ff;
            text-decoration: underline;
        }
    }
`;

export default AllRecipes;
