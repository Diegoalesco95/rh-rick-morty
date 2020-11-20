import { useContext } from 'react';

import ThemeContext from './context/ThemeContext';

import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme ? 'dark' : 'light'}`}>
      <Header />
      <Characters />
    </div>
  );
}

export default App;
