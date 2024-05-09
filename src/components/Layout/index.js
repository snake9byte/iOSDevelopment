import { useThemeContext, Container } from "../../ZUI";
import { MainLayout, MainUI } from "./styles";
import { Header } from "../Header";
import { useState } from "react";
import { Aside } from "../Aside";


export const Layout = ({ children }) => {
  const { theme } = useThemeContext();
  const [ menuStatus, setMenuStatus ] = useState(false);
  const handleChangeMenuStatus = () => {
    setMenuStatus(!menuStatus);
  }

  return (
    <MainLayout theme={theme}>
      <Header menuStatus={menuStatus} handleClick={handleChangeMenuStatus} />
      <Aside menuStatus={true}/>
      <MainUI menuStatus={menuStatus}>
        <Container flex direction="column" gap={4}>
          {children}
        </Container>
      </MainUI>
      <footer>footer</footer>
    </MainLayout>
  )
};