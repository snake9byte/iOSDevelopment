import { img } from "../../constant";
import { LogoSize, MenuContent, HeaderUI } from "./styles";
import { useThemeContext, lightTheme, Grid, Button, Icon } from "../../ZUI";
import { userTheme } from "../../styles/theme";

export const Header = ({ menuStatus, handleClick }) => {
  const { theme, setNewTheme } = useThemeContext();
  const { name } = theme;
  return (
    <HeaderUI theme={theme}>
      <Grid justify="space-between" style={{ padding: "0 1rem" }}>
        <Grid.Item size="auto">
          <MenuContent menuStatus={menuStatus}>
            <Button
              className={
                menuStatus ? "responsive-button active" : "responsive-button"
              }
              auto
              variant="text"
              color="gray"
              onClick={handleClick}
            >
              <Icon name="chevron-up" size="lg" />
            </Button>
            <LogoSize id="logo">
              <img src={img.logo} alt="ZUI UI" />
              <figcaption>ZUI UI</figcaption>
            </LogoSize>
          </MenuContent>
        </Grid.Item>
        <Grid.Item space-left="auto">
          <Button
            onClick={() => {
              setNewTheme(name === "userTheme" ? lightTheme : userTheme);
            }}
          >
            Theme: {name}
          </Button>
        </Grid.Item>
      </Grid>
      {/* <Menu menuStatus={menuStatus} /> */}
    </HeaderUI>
  );
};
