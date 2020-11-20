import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handlerClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header handlerClick={handlerClick} isDark={darkMode} />
      <Characters />
    </div>
  );
}

export default App;
