import styled from "styled-components";
import Button from "../style-components/Button";
import Heading from "../style-components/Heading";
import Paragraph from "../style-components/Paragraph";

export function GuideContainer({ imgSrc, text }) {
  return (
    <Guide>
      <img src={imgSrc} alt="---" />
      {text}
    </Guide>
  );
}

export function CTABoxComponent({ isMinWidth840px }) {
  return (
    <CTABox>
      {!isMinWidth840px && <img src="/data/checklist_2936769 1.png" alt="notes" />}
      <div>
        <Heading as="h3" color="secondary">
          Practice Mock Test
        </Heading>
        <Paragraph>Get the authentic IELTS exam experience with all four module covered!</Paragraph>
      </div>
      {isMinWidth840px ? <Button type="secondary">Start</Button> : <img src="/data/ArrowCircleRight.png" alt="next" />}
    </CTABox>
  );
}

function CTAContainer({ isMinWidth840px }) {
  return (
    <CTA>
      <GuideContainer text="App Guide Video" imgSrc="/data/youtube (8) 1.png" />
      <CTABoxComponent isMinWidth840px={isMinWidth840px} />
    </CTA>
  );
}

export default CTAContainer;

const CTA = styled.div``;

const Guide = styled.div`
  padding: 1rem 2rem;
  border-radius: 10px;
  background-color: var(--color-grey-0);
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);

  & > img {
    height: 2.8rem;
    margin-right: 1rem;
  }

  @media only screen and (max-width: 52.6em) {
    width: 22rem;
  }
  @media only screen and (max-width: 41.25em) {
    width: 100%;
  }
`;

export const CTABox = styled.div`
  background-color: var(--color-grey-0);
  padding: 3rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: var(--shadow-md);

  @media only screen and (max-width: 52.6em) {
    padding: 1.5rem;
    flex-direction: row;
    gap: 1rem;
    height: max-content;
    margin-bottom: 1rem;

    & > img {
      width: 3.5rem;
      height: 3.5rem;
      cursor: pointer;
      align-self: center;
    }
  }
`;
