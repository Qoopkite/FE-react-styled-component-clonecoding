import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const BannerWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  padding: 15px;
  text-align: center;
`;

const Title = styled.div`
  color: #343a40;
  font-weight: 300;
  font-size: 45px;
  margin-bottom: 10px;
`;

const Content = styled.div`
  color: #6c757d;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const Button = styled.button`
  padding: 12px 16px;
  border: none; 
  border-radius: 7px;
  background-color: #2563eb;
  color: white;
  font-size: 20px;

  &:nth-child(1) {
    background-color: #007bff;
    margin-right:10px;
  }

  &:nth-child(2) {
    background-color: #6c757d;
  }
`;

const banner = () => {
  return (
    <Container>
      <BannerWrapper>
        <Title>Album example</Title>
        <Content>
          Something short and leading about the collection below—its contents, <br/>
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t <br/>simply skip over it entirely.
        </Content>
        <ButtonContainer>
          <Button>Main call to action</Button>
          <Button>Secondary action</Button>
        </ButtonContainer>
      </BannerWrapper>
    </Container>
  );
};

export default banner ;