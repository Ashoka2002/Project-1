import styled from "styled-components";
import GlobalStyles from "./styles/GlobleStyles";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import useMediaQuery from "./hooks/useMediaQuery";
import { NavUl } from "./components/Nav";
import NavList from "./style-components/NavList";
import { useEffect } from "react";

function App() {
  const isMinWidth840px = useMediaQuery("(min-width: 52.6em)");

  useEffect(() => {
    const div = document.createElement("div");
    div.innerHTML = "Get 50% dicount on BabyCode membership";
    div.classList.add("notification");
    document.querySelector("body").insertAdjacentElement("afterbegin", div);
    setTimeout(() => {
      console.log("hello");
      div.remove();
    }, 5000);
    console.log("as");
  });

  return (
    <>
      <GlobalStyles />
      <AppLayout>
        {isMinWidth840px && <Sidebar />}

        <Feed />

        {!isMinWidth840px && (
          <NavList mode="mobile">
            <NavUl />
          </NavList>
        )}
      </AppLayout>
    </>
  );
}

export default App;

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  position: relative;
  z-index: 5;

  @media only screen and (max-width: 71.25em) {
    grid-template-columns: 24rem 1fr;
    transition: grid-template-columns 0.3s;
  }

  @media only screen and (max-width: 52.5em) {
    grid-template-columns: 1fr;
  }
`;
