import styled, { css } from "styled-components";

const type = {
  primary: css`
    background-color: var(--color-grey-0);
    color: var(--color-grey-900);
    min-width: 80%;
  `,
  secondary: css`
    background-color: var(--color-primary);
  `,
  tertiary: css`
    background-color: var(--color-1);
    color: var(--color-2);
  `,
};

const Button = styled.button`
  border: none;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  color: var(--color-grey-0);

  ${(prop) => type[prop.type]}
`;

export default Button;
