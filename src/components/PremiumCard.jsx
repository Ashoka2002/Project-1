import styled from "styled-components";
import Heading from "../style-components/Heading";

const PremimumCardComponent = () => {
  return (
    <PremimumCard>
      <img src="/data/Frame 427319170 (1).png" alt="card" />
      <Heading as="h3" color="primary">
        Explore premium features with ease!
      </Heading>
      <ul>
        <li>
          <img src="/data/checked.png" alt="checked" />
          <span>Unlimited Speaking Test Access</span>
        </li>
        <li>
          <img src="/data/checked.png" alt="checked" />
          <span>Unlimited Writing Test Access</span>
        </li>
        <li>
          <img src="/data/checked.png" alt="checked" />
          <span>Analyze Your Answer</span>
        </li>
        <li>
          <img src="/data/checked.png" alt="checked" />
          <span>Check Band Score</span>
        </li>
      </ul>

      <div>
        <p>Only @ ₹299</p>
        <a href="#">
          Buy Now <img src="/data/ArrowCircleRight (1).png" alt="right arrow" />
        </a>
      </div>
    </PremimumCard>
  );
};

export default PremimumCardComponent;

const PremimumCard = styled.div`
  position: relative;
  z-index: 1;
  padding: 1.2rem;
  height: auto;

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  & ul {
    margin-top: 0.8rem;
  }

  & ul li {
    font-size: 1.2rem;
    padding: 0.5rem 0;
    color: var(--color-grey-600);
    line-height: 1.5;

    & img {
      width: 14px;
      height: 14px;
      margin-right: 0.5rem;
      opacity: 0.6;
    }
  }

  & > div {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;

    & p {
      font-size: 1.4rem;
      font-weight: 500;
      text-align: center;
    }

    & a {
      display: flex;
      align-items: center;
      padding: 0.6rem 1rem;
      position: absolute;
      bottom: 0.5rem;
      right: 0;
      background-color: var(--color-primary);
      color: var(--color-grey-0);
      z-index: 1;
      border-radius: 50px 0 0 50px;
      font-size: 1.6rem;

      & img {
        width: 2.4rem;
        height: 2.4rem;
        margin-left: 0.5rem;
      }
    }
  }

  @media only screen and (max-width: 71.25em) {
    & div {
      & > a {
        font-size: 1.4rem;
        transition: font-size 0.3s;
      }
    }

    & ul li {
      font-size: 1.3rem;
      padding: 0.5rem 0;
      color: var(--color-grey-800);
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 41.25em) {
    padding-top: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--shadow-lg);
    margin-top: 3rem;

    ${Heading} {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 0 1rem;
    }

    & > div {
      justify-content: center;
      align-items: end;
      flex-direction: column;
      gap: 1rem;

      & > a {
        position: relative;
        box-shadow: var(--shadow-lg);
      }
    }
  }
`;
