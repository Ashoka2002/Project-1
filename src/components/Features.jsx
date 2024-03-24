import styled from "styled-components";
import Heading from "../style-components/Heading";
import CTAContainer from "./CTA";
import MobileFeatures from "./MobileFeatures";

function FeaturesComponent({ isMinWidth840px }) {
  return (
    <Features>
      {isMinWidth840px && (
        <HeadingFeature as="h3" color="secondary">
          Prepare with ease
        </HeadingFeature>
      )}
      <Cards>
        <div>
          <img src="/data/Frame 427318922.png" alt="card 1" />
          <p>Speaking</p>
        </div>
        <div>
          <img src="/data/Frame 427318923.png" alt="card 1" />
          <p>Listening</p>
        </div>
        <div>
          <img src="/data/Frame 427319153.png" alt="card 1" />
          <p>Reading</p>
        </div>
        <div>
          <img src="/data/Frame 48097381.png" alt="card 1" />
          <p>Writing</p>
        </div>
        <div>
          <img src="/data/Frame 427319150.png" alt="card 1" />
          <p>Vocabulary</p>
        </div>
        <div>
          <img src="/data/Frame 427319151.png" alt="card 1" />
          <p>Classes</p>
        </div>
        <div>
          <img src="/data/Frame 427319154.png" alt="card 1" />
          <p>Book IELTS Exam</p>
        </div>
        <div>
          <img src="/data/Frame 427319114.png" alt="card 1" />
          <p>Student News</p>
        </div>
        {!isMinWidth840px && (
          <div>
            <img src="/data/Frame 48097381.png" alt="card 1" />
            <p>Consultancy</p>
          </div>
        )}
      </Cards>
      {isMinWidth840px ? <CTAContainer isMinWidth840px={isMinWidth840px} /> : <MobileFeatures />}
    </Features>
  );
}

export default FeaturesComponent;

const Features = styled.div`
  margin-top: 2rem;
  display: grid;
  column-gap: 5rem;
  grid-template-columns: minmax(6rem, 50vw) minmax(20rem, 30rem);

  @media only screen and (max-width: 71.25em) {
    column-gap: 2rem;
    grid-template-columns: minmax(6rem, 1fr) minmax(20rem, 25rem);
  }

  @media only screen and (max-width: 52.5em) {
    grid-template-columns: 1fr;
  }
`;

const HeadingFeature = styled(Heading)`
  grid-column: 1/-1;
  margin-bottom: 1rem;
`;
const Cards = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, minmax(10rem, 1fr));
  justify-content: center;

  & div {
    img {
      width: 100%;
    }

    & p {
      text-align: center;
      font-size: 1.5rem;
      color: var(--color-grey-900);
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 52.5em) {
    grid-template-columns: repeat(3, minmax(10rem, 1fr));
    margin-bottom: 5rem;
  }
`;
