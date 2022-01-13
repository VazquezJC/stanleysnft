import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';
import Landing from 'Project/Landing/Landing';

const Routes = () => {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Switch>
        <Route path="/" element={<Landing />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
