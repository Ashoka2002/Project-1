import NavList from "../style-components/NavList";

export function NavUl() {
  return (
    <>
      {" "}
      <li className="active">
        <img src="/data/icons8-home.svg" alt="home--v1" />
        {/* <svg>
          <use xlinkHref="/data/icons8-home.svg"></use>
        </svg> */}
        <span>Home</span>
      </li>
      <li>
        <img src="/data/Users.png" alt="community" />
        <span>Community</span>
      </li>
      <li>
        <img src="/data/Frame 48097125.png" alt="home logo" />
        <span>Stories</span>
      </li>
      <li>
        <img src="/data/Storefront.png" alt="home logo" />
        <span>Shop</span>
      </li>
      <li>
        <img src="/data/message-square.png" alt="home logo" />
        <span>Feedback</span>
      </li>
    </>
  );
}

function NavComponent() {
  return (
    <NavList mode="desktop">
      <NavUl />
    </NavList>
  );
}

export default NavComponent;
