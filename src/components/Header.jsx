import { useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handlerClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='App-header'>
      <h1>React Hooks</h1>
      <button type='button' onClick={handlerClick}>
        {darkMode ? `Dark Mode` : 'Light Mode'}
      </button>
    </div>
  );
};

export default Header;
