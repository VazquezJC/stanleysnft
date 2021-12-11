import {
  Routes as Switch,
  Route,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';
import Landing from 'Project/Landing';
import Soon from 'Project/Soon';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<Soon />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
