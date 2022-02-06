import { Routes as Switch, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Landing from 'Project/Landing/Landing';
import Mint from 'Project/Mint';

const Routes = () => {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Switch>
        <Route exact path="/" element={<Landing />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/preview" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
