import './App.css';
import Routes from 'App/Routes';
import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import './fontStyles.css';

const App = () => {
  return (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <Routes />
    </>
  );
};

export default App;
