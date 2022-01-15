import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';
import Landing from 'Project/Landing/Landing';
import LandingPreview from 'Project/Landing/LandingOld';

const Routes = () => {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Switch>
        <Route path="/preview" element={<LandingPreview />} />
        <Route path="/" element={<Landing />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
