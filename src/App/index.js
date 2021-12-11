import './App.css';
import { Fragment } from 'react';
import Routes from 'App/Routes';
import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import './fontStyles.css';

function App() {
  return (
    <Fragment>
      <NormalizeStyles />
      <BaseStyles />
      <Routes />
    </Fragment>
  );
}

export default App;
