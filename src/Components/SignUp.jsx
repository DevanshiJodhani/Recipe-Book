import { useContext, useState } from 'react';
import styled from 'styled-components';
import Alert from './Alert.jsx';
import axios from '../axios.js';
import { UserContext } from '../Context/UserContext.jsx';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const [alert, setAlert] = useState({
    message: '',
    isOpen: false,
    redirectTo: null,
  });

  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        setAlert({ message: 'Passwords do not match', isOpen: true });
        return;
      }

      // Set default role if not provided
      const formDataWithRole = {
        ...formData,
        role: formData.role || 'user',
      };

      const response = await axios.post(
        '/api/v1/users/signup',
        formDataWithRole
      );

      setUser(response.data.data.user);
      setAlert({
        message: 'Signup successful!',
        isOpen: true,
        redirectTo: '/',
      });
    } catch (error) {
      setAlert({
        message: `Signup failed. ${
          error.response ? error.response.data.message : 'Please try again.'
        }`,
        isOpen: true,
      });
      console.error('Signup failed:', error);
    }
  };

  return (
    <Container>
      <h1>Sign Up </h1>
      {alert.isOpen && (
        <Alert
          message={alert.message}
          onClose={() => setAlert({ ...alert, isOpen: false })}
          redirectTo={alert.redirectTo}
        />
      )}
      <Content>
        <Logo>
          <a href="/">
            Recipe<span>Hub</span>
          </a>
        </Logo>
        <p>
          If You already have an account? <a href="#">Login</a>
        </p>
        <Form onSubmit={handleSubmit}>
          <input
            type="name"
            placeholder="John Lio"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="abc@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password: ********"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password: ********"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="role: i.g: user or admin"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />

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

  @media screen and (max-width: 550px) {
    padding: 120px 20px;
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

  @media screen and (max-width: 550px) {
    padding: 18px;
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

  @media screen and (max-width: 550px) {
    padding: 0;
  }
`;
export default SignUp;
