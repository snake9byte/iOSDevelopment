import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider, Styles } from "../ZUI";
import { Routes } from './Routes';
import { userTheme } from '../styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={userTheme}>
      <Styles />
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
};