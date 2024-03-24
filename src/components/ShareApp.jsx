import styled from "styled-components";
import Button from "../style-components/Button";
import Heading from "../style-components/Heading";
import Paragraph from "../style-components/Paragraph";

function ShareAppComponent() {
  return (
    <ShareApp>
      <img src="/data/Frame 427319170.png" alt="Share app" />
      <div>
        <Heading as="h4" color="tertiary">
          One Share can save many Lives
        </Heading>
        <Paragraph type="secondary">Your one share can unlock a world of education of unprivileged.</Paragraph>
        <Button type="primary">Share App</Button>
      </div>
    </ShareApp>
  );
}

export default ShareAppComponent;

const ShareApp = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  box-shadow: var(--shadow-md);

  & > div {
    width: 80%;
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top center;
    z-index: -1;
  }
  color: var(--color-grey-0);

  @media only screen and (max-width: 52.5em) {
    grid-column: 1/-1;
    height: 30rem;
    justify-self: center;
  }
`;
