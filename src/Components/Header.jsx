import { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from '../axios.js';

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get('/api/v1/users/logout');
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const getFirstName = (fullName) => {
    return fullName ? fullName.split(' ')[0] : '';
  };

  return (
    <Container>
      <Content>
        <Logo>
          <a href="/">
            Recipe<span>Hub</span>
          </a>
        </Logo>
        <NavLinks>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="menu-btn">
            <i className="bx bx-menu"></i>
            <i className="bx bx-x"></i>
          </label>
          <ul>
            <li>
              {!user ? (
                <>
                  <a href="/login">Login</a>
                  <a href="/signup">Sign Up</a>
                </>
              ) : (
                <>
                  <a href="" onClick={handleLogout}>
                    Log Out
                  </a>
                  <a href="/allRecipes">All Recipes</a>
                  {/* {user.role === 'admin' && <a href="#">Create Recipe</a>} */}
                  <a href="/me">{getFirstName(user.name)}</a>
                </>
              )}
            </li>
          </ul>
        </NavLinks>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: transparent;
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
  z-index: 1000;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;

  @media screen and (max-width: 990px) {
    padding: 0 40px;
  }
`;

const Logo = styled.div`
  a {
    text-align: center;
    font-size: 28px;
    text-decoration: none;
    color: #ff0000;
    font-weight: 900;
    letter-spacing: 1px;

    span {
      font-size: 22px;
      color: #ff4040;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        text-decoration: none;
        padding: 5px 20px;
        margin-left: 20px;
        font-size: 18px;
        color: #fff;
        transition: 0.5s ease;

        &:hover {
          color: #ff0000;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      position: fixed;
      top: 80px;
      left: -100%;
      background: #000;
      backdrop-filter: blur(80px);
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: right;
      padding: 20px;
      transition: all 0.4s ease;

      li {
        flex-direction: column;
        text-align: right;
        margin: 20px 0;
        text-align: right;

        a {
          color: #fff;
          padding: 20px;
          font-size: 22px;
          display: block;
        }
      }
    }
  }
`;

export default Header;
