import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Content>
        <NavLinks>
          <h2>Quick Reach</h2>
          <Links>
            <ul>
              <li>
                <a href="#">Create Recipe</a>
                <a href="#">All Recipes</a>
              </li>
            </ul>
          </Links>
        </NavLinks>
        <SocialLinks>
          <h2>Follow Us</h2>
          <Box>
            <li>
              <a href="#">
                <i className="bx bxl-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxl-linkedin-square"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxl-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxl-instagram-alt"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxl-youtube"></i>
              </a>
            </li>
          </Box>
          <Copy>
            <p>
              Copyright &copy; 2024 by Devanshi Jodhani | All Rights Reserved.
            </p>
          </Copy>
        </SocialLinks>
        <Logo>
          <a href="/">
            Recipe<span>Hub</span>
          </a>
        </Logo>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #000;
  border-top: 1px solid #aaaaaa6a;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 150px;

  @media screen and (max-width: 990px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 20px;
  }

  @media screen and (max-width: 700px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
 
`;
const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 30px;
    margin-bottom: 40px;
    color: #bbb;
  }
  @media screen and (max-width: 700px){
    margin-bottom: 50px;
  }
 
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      a {
        margin-bottom: 25px;
        font-size: 18px;
        color: #fff;
        text-decoration: none;
        transition: 0.5s ease;

        &:hover{
          color: #ff0000;
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 30px;
    color: #bbb;
    margin-bottom: 40px;
  }

`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    list-style: none;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      padding: 12px;
      font-size: 25px;
      border: 1px solid #aaaaaa6a;
      color: #fff;
      margin-left: 12px;
      border-radius: 10px;
      transition: 0.5s ease;

      &:hover {
        background: #fff;
        color: #ff0000;
      }
    }
  }
`;

const Copy = styled.div`
  margin-top: 50px;
  p {
    padding: 10px;
    font-size: 22px;
    color: #aaa;
    text-align: center;
  }

  @media screen and (max-width: 900px){
    p{
      font-size: 18px;
    }
  } 

  @media screen and (max-width: 400px){
    p{
      font-size: 16px;
    }
  } 
`;

const Logo = styled.div`
  a {
    text-align: center;
    font-size: 40px;
    text-decoration: none;
    color: #ff0000;
    font-weight: 900;
    letter-spacing: 1px;

    span {
      font-size: 35px;
      color: #ff4040;
    }
  }


  @media screen and (max-width: 990px) {
    display: none;

  }
`;

export default Footer;
