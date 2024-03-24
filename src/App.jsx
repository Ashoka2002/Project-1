import styled from "styled-components";
import GlobalStyles from "./styles/GlobleStyles";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import useMediaQuery from "./hooks/useMediaQuery";
import { NavUl } from "./components/Nav";
import NavList from "./style-components/NavList";
import Notification from "./components/Notification";

function App() {
  const isMinWidth840px = useMediaQuery("(min-width: 52.6em)");

  return (
    <>
      <GlobalStyles />
      {isMinWidth840px && <Notification />}
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
