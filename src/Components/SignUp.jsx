import styled from 'styled-components';

const SignUp = () => {
  return(
    <Container>
      <h1>Sign Up </h1>
      <Content>
        <Logo>
          <a href="/">
            Recipe<span>Hub</span>
          </a>
        </Logo>
          <p>
            If You already have an account? <a href="#">Login</a>
          </p>
        <Form>
          <input type="name" placeholder="John Lio"/>
          <input type="email" placeholder="abc@example.com" />
          <input type="password" placeholder="Password: ********" />
          <input type="password" placeholder="Confirm Password: ********" />
          <input type="text" placeholder="role: i.g: user or admin" />
          
          <button type="submit">Sign Up</button>
        </Form>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 120px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background: #fff;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;

  p {
    font-weight: 600;
    margin-bottom: 10px;
    text-align: center;
    color: #aaa;
    a {
      color: #333;
      text-decoration: none;
    }
  }
`;

const Logo = styled.div`
  margin-bottom: 20px;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;

  input {
    margin-bottom: 20px;
    width: 100%;
    height: 50px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #aaa;
    font-size: 16px;
  }

  div {
    padding: 8px;
    width: 100%;

    a {
      color: #333;
      text-decoration: none;

      &:hover {
        color: #ff0000;
        text-decoration: underline;
      }
    }
  }



  button {
    padding: 16px 30px;
    margin-top: 15px;
    border-radius: 10px;
    outline: none;
    border: none;
    font-size: 18px;
    background: #007bff;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: #0056b3;
    }
  }
`;
export default SignUp;
