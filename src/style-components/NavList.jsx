import styled, { css } from "styled-components";

const mode = {
  desktop: css`
    & li {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 0.5rem;
      color: var(--color-grey-0);
      font-size: 1.2rem;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      transition: background-color 250ms;
      cursor: pointer;

      & img {
        width: 2.4rem;
        height: 2.4rem;
      }

      &:first-child img {
        filter: invert();
      }
    }
    & li:hover,
    .active {
      background-color: var(--color-tertiary);
    }
  `,
  mobile: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    background-color: var(--color-grey-0);
    border-top: 1px solid var(--color-grey-200);

    & li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: stretch;
      gap: 1rem;
      font-size: 1.6rem;
      padding: 1.5rem;
      cursor: pointer;
      flex: 1;
      position: relative;

      & img {
        width: 3.4rem;
        height: 3.4rem;
      }

      &:not(:first-child) img {
        filter: invert();
      }

      &::before,
      li.active::before {
        content: "";
        background-color: var(--color-grey-700);
        position: absolute;
        top: -1px;
        left: 0;
        width: 100%;
        height: 3px;
        transform: scale(0);
        transition: transform 0.3s;
      }
    }

    & li:hover::before,
    li.active::before {
      font-weight: 600;
      color: var(--color-grey-700);
      transform-origin: center;
      transform: scale(1);
    }

    @media only screen and (max-width: 41.25em) {
      & li {
        padding: 1rem;
        font-size: 1.5rem;
        font-weight: 600;

        & img {
          width: 3rem;
          height: 3rem;
        }
      }
    }

    @media only screen and (max-width: 41.25em) {
      & li {
        padding: 0.5rem;
        font-size: 1.4rem;
        font-weight: 600;
        padding-top: 1rem;

        & img {
          width: 2.8rem;
          height: 2.8rem;
        }
      }
    }
  `,
};

const NavList = styled.ul`
  padding: 0 2rem;

  ${(props) => mode[props.mode]}
`;

export default NavList;
