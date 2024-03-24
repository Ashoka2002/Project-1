import styled, { css } from "styled-components";
import Heading from "../style-components/Heading";

export function NavbarDesktop() {
  return (
    <Navbar type="primary">
      <img src="/data/Frame 48096367.png" alt="User" />
    </Navbar>
  );
}

export function NavbarMobile() {
  return (
    <Navbar type="secondary">
      <div className="nav1">
        <img src="/data/Frame 48096367.png" alt="User" />

        <Heading as="h3" color="tertiary">
          Home
        </Heading>
        <img src="/data/Frame 196.png" alt="User" />
      </div>
      <SubNav>
        <ul>
          <li className="active">IELTS</li>
          <li>PTE</li>
          <li>TOEFL</li>
        </ul>
      </SubNav>
    </Navbar>
  );
}

const Navbar = styled.header`
  ${(props) =>
    props.type === "primary" &&
    css`
      min-height: 3rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background-color: var(--color-grey-0);
      padding: 1rem 0;

      & img {
        width: 2.4rem;
        height: 2.4rem;
        margin-right: 2rem;
        cursor: pointer;
      }
    `}

  ${(props) =>
    props.type === "secondary" &&
    css`
      min-height: 6rem;
      background: linear-gradient(to bottom right, var(--color-primary), var(--color-secondary));
      padding: 1rem 0;

      & div.nav1 {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & h3 {
          font-size: 2rem;
          font-weight: 500;
          letter-spacing: 1px;
        }

        & img {
          width: 4.2rem;
          height: 4.2rem;
          margin: 0.5rem 2rem;
          cursor: pointer;
        }
      }
    `}
`;

const SubNav = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  & ul {
    background-color: var(--color-primary);
    border-radius: 50px;
    padding: 1rem;

    & li {
      display: inline-block;
      padding: 1rem 1.5rem;
      font-weight: 500;
      box-shadow: var(--shadow-lg);
      border-radius: 50px;

      color: var(--color-grey-0);
      position: relative;
      z-index: 1;
      cursor: pointer;
      transition: all 0.3s;

      &:nth-child(2)::after,
      &:nth-child(2)::before {
        content: "";
        position: absolute;
        top: 30%;
        right: -5px;
        height: 1.8rem;
        width: 2px;
        background-color: var(--color-grey-0);
        z-index: -1;
      }
      &:nth-child(2)::before {
        left: -5px;
      }
    }

    & li:hover,
    .active {
      background-color: var(--color-grey-0);
      color: var(--color-primary);
    }
  }
`;
