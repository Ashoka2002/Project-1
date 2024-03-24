import styled, { css } from "styled-components";

const type = {
  primary: css``,
  secondary: css`
    color: var(--color-grey-300);
    font-weight: 300;
  `,
};

const Paragraph = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 0.6rem;
  margin-bottom: 0.8rem;

  ${(prop) => type[prop.type]}
`;

export default Paragraph;
