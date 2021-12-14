import {
  Routes as Switch,
  Route,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';
import Landing from 'Project/Landing';
import Soon from 'Project/Soon';
import Navigation from 'Project/Navigation';

const Routes = () => {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Switch>
        <Route path="/preview" element={<Landing />} />
        <Route path="/" element={<Landing />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
