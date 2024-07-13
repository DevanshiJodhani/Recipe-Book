import styled from 'styled-components';

const MyAccount = () => {
  return (
    <Container>
      <Content>
        <LeftSide>
          <Logo>
            <a href="/">
              Recipe<span>Hub</span>
            </a>
          </Logo>
          <NavLinks>
            <User>
              <ul>
                <li>
                  <a href="#">
                    <i className="bx bxs-cog"></i>
                    <span>settings</span>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                    <span>Favrioute Recipes</span>
                  </a>
                  <a href="#">
                    <i className="bx bxs-heart"></i>
                    <span>Liked Recipes</span>
                  </a>
                  <a href="#">
                    <i className="bx bxs-edit"></i>
                    <span>Reviews</span>
                  </a>
                </li>
              </ul>
            </User>
            <Admin>
              <ul>
                <li>
                  <a href="#">
                    <i className="bx bxs-pencil"></i>
                    <span>Create Recipes</span>
                  </a>
                  <a href="#">
                    <i className="bx bxs-book"></i>
                    <span>My Recipes</span>
                  </a>
                </li>
              </ul>
            </Admin>
          </NavLinks>
        </LeftSide>
        <RightSide>
          <UserInfo>
            <h2>Your Information</h2>
            <h3>
              Name: <span>User Name</span>
            </h3>
            <h3>
              Email: <span>abc@example.io</span>
            </h3>
            <h3>
              Role: <span>Admin</span>
            </h3>
          </UserInfo>
          <UpdateEmail>
            <h2>Update Email and Name</h2>
            <label htmlFor="#">Name: </label>
            <input type="text" placeholder="John Lio" />
            <label htmlFor="#">Email: </label>
            <input type="email" placeholder="abc@example.io" />
            <button type="submit">Update</button>
          </UpdateEmail>
          <UpdatePassword>
            <h2>Update Password</h2>
            <label htmlFor="#">
              Current Password:
              <input type="password" placeholder="Password: ********" />
            </label>
            <label htmlFor="#">
              Update Password:
              <input type="password" placeholder="Password: ********" />
            </label>
            <label htmlFor="#">
              Confirm Password:
              <input type="password" placeholder="Password: ********" />
            </label>
            <button type="submit">Update</button>
          </UpdatePassword>
          <Delete>
            <h3>🗑️ Delete Your Account</h3>
            <button type="submit">
              Delete <i className="bx bxs-trash"></i>
            </button>
          </Delete>
        </RightSide>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 150px 20px;

  @media screen and (max-width: 650px) {
    padding: 100px 10px;
  }
`;

const Content = styled.div`
  max-width: 900px;
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 25px 0;
  color: #000;
`;

const LeftSide = styled.div`
  max-width: 30%;
  width: 100%;
  border-right: 1px solid #aaa;

  @media screen and (max-width: 768px) {
    max-width: 20%;
    width: 100%;
  }
`;

const Logo = styled.div`
  a {
    text-align: center;
    font-size: 28px;
    text-decoration: none;
    color: #ff0000;
    font-weight: 900;
    padding: 30px;
    letter-spacing: 1px;

    span {
      font-size: 22px;
      color: #ff4040;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
  width: 100%;
`;

const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        text-decoration: none;
        padding: 12px 30px;
        font-size: 18px;
        color: #000;

        &:hover {
          border-left: 3px solid #000;
        }
        i {
          margin-right: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      li {
        a {
          span {
            display: none;
          }
          i {
            font-size: 30px;
          }
          &:hover {
            border-left: none;
          }
        }
      }
    }
  }
`;

const Admin = styled(User)`
  margin-top: 25px;
  border-top: 1px solid #aaa;
  width: 100%;

  ul {
    margin-top: 20px;
  }
`;

const RightSide = styled.div`
  max-width: 60%;
  width: 100%;
  margin-left: 25px;

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;

const UserInfo = styled.div`
  padding: 15px;
  border-bottom: 1px solid #aaa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    margin-bottom: 25px;
    color: #aaa;
  }
  h3 {
    padding: 8px;
    margin-bottom: 20px;
    border-left: 2px solid #ddd;

    span {
      color: #444;
    }
  }

  @media screen and (max-width: 400px) {
    padding: 8px;
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 16px;
      display: flex;
      flex-direction: column;

      span {
        margin-top: 5px;
      }
    }
  }
`;

const UpdateEmail = styled.div`
  border-bottom: 1px solid #aaa;
  padding: 15px;
  h2 {
    margin-bottom: 25px;
    color: #aaa;
  }
  display: flex;
  flex-direction: column;
  label {
    padding: 5px;
  }
  input {
    max-width: 350px;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    font-size: 16px;
    outline: none;
    border: 1px solid #aaa;
    color: #333;
  }

  button {
    text-align: center;
    margin-top: 12px;
    width: 100px;
    padding: 12px 20px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-weight: 900;
    font-size: 16px;
    background: #007bff;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: #0056b3;
    }
  }

  @media screen and (max-width: 400px) {
    padding: 8px;
    h2 {
      font-size: 20px;
    }
  }
`;

const UpdatePassword = styled.div`
  border-bottom: 1px solid #aaa;
  padding: 15px;
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 25px;
    color: #aaa;
  }
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
  }
  input {
    margin-left: 10px;
    max-width: 350px;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    font-weight: 900;
    font-size: 16px;
    outline: none;
    border: 1px solid #aaa;
    color: #333;
  }
  button {
    text-align: center;
    margin-top: 12px;
    width: 100px;
    padding: 12px 20px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-weight: 900;
    font-size: 16px;
    background: #007bff;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: #0056b3;
    }
  }
  @media screen and (max-width: 768px) {
    label {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      input {
        margin-top: 8px;
        margin-left: 0;
      }
    }
  }

  @media screen and (max-width: 400px) {
    padding: 8px;
    h2 {
      font-size: 20px;
    }
  }
`;

const Delete = styled.div`
  padding: 30px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 20px;
  }
  button {
    padding: 16px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 16px;
    border: none;
    outline: none;
    color: #fff;
    background: #ff0000;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background: #be0000;
    }
    i {
      margin-left: 6px;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 30px 0;

    h3 {
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 400px) {
    h3 {
      text-align: center;
      font-size: 16px;
    }

    button {
      padding: 12px 30px;
    }
  }
`;

export default MyAccount;
