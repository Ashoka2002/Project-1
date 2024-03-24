import styled from "styled-components";
import PremimumCardComponent from "./PremiumCard";
import Nav from "./Nav";
import Logout from "./Logout";

function Sidebar() {
  return (
    <Container>
      <Navigation>
        <Logo>
          <img src="/data/logo.png" alt="Logo" />
          <span>BabyCode</span>
        </Logo>
        <Nav />
      </Navigation>
      <Bottom>
        <PremimumCardComponent />
        <Logout />
      </Bottom>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: linear-gradient(to bottom, var(--color-primary), var(--color-secondary));
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Navigation = styled.div`
  margin-bottom: 1rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--color-grey-0);
  font-weight: 300;
  gap: 0.8rem;
  margin: 1rem 2.5rem 3.5rem 0;

  & img {
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 1rem 3rem 1rem;

  & > a {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    color: var(--color-grey-0);

    & > img {
      width: 1.8rem;
      height: 1.8rem;
      margin-right: 1rem;
    }
  }
`;
