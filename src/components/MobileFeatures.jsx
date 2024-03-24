import styled from "styled-components";
import { CTABoxComponent, GuideContainer } from "./CTA";
import PremiumCard from "./PremiumCard";
import ShareAppComponent from "./ShareApp";
import Heading from "../style-components/Heading";

function MobileFeatures() {
  return (
    <Container>
      <div>
        <CTABoxComponent />
        <PremiumCard />
      </div>
      <div className="quick_action">
        <Heading as="h4" type="secondary">
          Quick Actions
        </Heading>
        <GuideContainer text="App Guide Video" imgSrc="/data/youtube (8) 1.png" />
        <GuideContainer text="App Guide Video" imgSrc="/data/whatsapp (9) 1.png" />
        <ShareAppComponent />
      </div>
    </Container>
  );
}

export default MobileFeatures;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;

  & > div.quick_action {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    & > ${Heading} {
      grid-column: 1/-1;
      color: var(--color-grey-500);
      font-weight: 500;
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 41.25em) {
    grid-template-columns: 1fr;
  }
`;
