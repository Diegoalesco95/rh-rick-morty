const Header = ({ handlerClick, isDark }) => {
  return (
    <div className='App-header'>
      <h1>Rick and Morty Characters</h1>
      <button
        type='button'
        onClick={handlerClick}
        className={`button-mode ${!isDark ? 'dark' : 'light'}`}>
        {isDark ? `Light Mode` : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Header;
