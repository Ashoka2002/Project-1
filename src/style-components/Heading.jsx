import styled, { css } from "styled-components";

const color = {
  primary: css`
    background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
    background-clip: text;
    color: transparent;
    font-weight: 600;
    letter-spacing: 1px;
  `,
  secondary: css`
    color: var(--color-grey-800);
    font-weight: 600;
  `,
  tertiary: css`
    font-weight: 400;
    color: var(--color-grey-0);
  `,
};

const Heading = styled.div`
  font-size: 1.8rem;
  /* padding: 1rem 0.5rem; */
  ${(props) => color[props.color]}
`;

export default Heading;
