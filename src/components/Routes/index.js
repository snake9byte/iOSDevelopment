import { Route } from 'react-router-dom';
import { menu } from '../../constant/menu';

export const Routes = () => (
  <>
    {menu.reduce((acc, cur) => {
      acc = [...acc, ...cur.childs.map(item => (
        <Route key={item.path} exact path={item.path} component={item.component} />
      ))];
      return acc;
    }, [])}
  </>
)