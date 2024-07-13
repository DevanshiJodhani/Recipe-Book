import styled from 'styled-components';

const MainPost = () => {
  return (
    <Container>
      <h1>Main Post Page</h1>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 120px 20px;

  @media screen and (max-width: 650px) {
    padding: 100px 10px;
  }
`;

export default MainPost;
