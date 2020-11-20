import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
  const { theme, handlerClick } = useContext(ThemeContext);

  return (
    <div className='App-header'>
      <h1>Rick and Morty Characters</h1>
      <button
        type='button'
        onClick={handlerClick}
        className={`button-mode ${!theme ? 'dark' : 'light'}`}>
        {theme ? `Light Mode` : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Header;
