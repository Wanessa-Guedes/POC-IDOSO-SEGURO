import { MockCamera } from "../../Components/MockCamera";
import { NavBar } from "../../Components/NavBar";
import { CameraPage } from "../../Components/QrScanner";
import { Main, NavBarStyle } from "./style";

export const CamerasComponents = () => {
  return (
    <>
      <Main>
        <NavBarStyle>
          <NavBar />
        </NavBarStyle>
        <MockCamera />
        <CameraPage />
      </Main>
    </>
  );
};
