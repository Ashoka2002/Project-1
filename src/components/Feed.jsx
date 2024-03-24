import styled from "styled-components";
import Heading from "../style-components/Heading";
import Chart from "./Chart";
import ShareAppComponent from "./ShareApp";
import FeaturesComponent from "./Features";
import useMediaQuery from "../hooks/useMediaQuery";
import { NavbarDesktop, NavbarMobile } from "./Navbar";
import Button from "../style-components/Button";

function Feed() {
  const isMinWidth840px = useMediaQuery("(min-width: 52.6rem)");

  return (
    <Container>
      {isMinWidth840px && <NavbarDesktop />}
      {!isMinWidth840px && <NavbarMobile />}
      <Dashboard>
        {!isMinWidth840px && (
          <HelpedBox>
            <div>
              <Heading as="h3" color="secondary">
                How many students we helped?
              </Heading>
              <Button type="tertiary">Check</Button>
            </div>
          </HelpedBox>
        )}

        <Summary>
          <Heading as="h3" color="secondary">
            Your Progress Summary
          </Heading>
          <Chart />
          {isMinWidth840px && <ShareAppComponent />}
        </Summary>
        <FeaturesComponent isMinWidth840px={isMinWidth840px} />
      </Dashboard>
    </Container>
  );
}

export default Feed;

const Container = styled.div`
  min-height: 100vh;
  background-color: var(--background-primary);
  padding-bottom: 2rem;

  @media only screen and (max-width: 71.25em) {
    padding-bottom: 10rem;
  }
`;

const Dashboard = styled.div`
  padding: 2rem 4rem;
  min-height: calc(100vh - 3rem);
  max-width: 1440px;
  margin: 0 auto;

  @media only screen and (max-width: 71.25em) {
    padding: 2rem 2.5rem;
  }
`;

const Summary = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr) minmax(25rem, 32rem);
  gap: 2rem;
  margin-top: 1rem;
  position: relative;
  z-index: 1;

  & > ${Heading} {
    grid-column: 1/-1;

    @media only screen and (max-width: 52.5em) {
      position: absolute;
      top: 1rem;
      left: 2.5rem;
    }
  }

  & > span {
    background-color: red;
  }

  @media only screen and (max-width: 52.5em) {
    grid-template-columns: 1fr;
  }
`;

const HelpedBox = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: var(--color-grey-0);
    position: relative;
    z-index: 5;
    border-radius: 10px;
  }

  box-shadow: var(--shadow-md);
  background: linear-gradient(to right, var(--color-primary), var(--color-2));
  border-radius: 10px;
  padding: 2px;
  margin-bottom: 2rem;
`;
