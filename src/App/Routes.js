import { Routes as Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Landing from 'Project/Landing/Landing';
import LandingPreview from 'Project/Landing/LandingPreview';
import Soon from 'Project/Soon';
import Navigation from 'Project/Navigation';

const Routes = () => {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Switch>
        <Route path="/" element={<Landing />} />
        <Route exact path="/preview" element={<LandingPreview />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
