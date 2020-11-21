import {
  useState,
  useEffect,
  useContext,
  useReducer,
  useMemo,
  useRef
} from 'react';

import { initialState, favoriteReducer } from '../context/FavoritesReducer';

import ThemeContext from '../context/ThemeContext';
import Card from './Card';

const Characters = () => {
  const { theme } = useContext(ThemeContext);
  const [characters, setCharacters] = useState([]);
  const [state, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const { favorites } = state;

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const isFavorite = (favorite) => {
    return favorites.includes(favorite);
  };

  const deleteFavorite = (index) => {
    const newFavorites = favorites;
    newFavorites.splice(index, 1);
    return newFavorites;
  };

  const findFavoriteIndex = (favorite) => {
    const index = favorites.findIndex((elm) => elm.id === favorite.id);
    if (index > -1) {
      return deleteFavorite(index);
    } else {
      return index;
    }
  };

  const handlerClick = (favorite) => {
    if (isFavorite(favorite)) {
      dispatch({
        type: 'DELETE_FAVORITE',
        payload: findFavoriteIndex(favorite)
      });
    } else {
      dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
    }
  };

  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };

  const filterCharacters = useMemo(
    () =>
      characters.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <>
      <section className='Favorites'>
        <h1>Favorites</h1>
        {state.favorites.length > 0 ? (
          <div className='Favorites-list'>
            {favorites.map((favorite) => (
              <Card
                character={favorite}
                key={`f-${favorite.id}`}
                handlerClick={handlerClick}
                isFavorite={isFavorite(favorite)}
              />
            ))}
          </div>
        ) : (
          <p>There are no favorites yet</p>
        )}
      </section>
      <section className='Characters'>
        <h1>Characters</h1>
        <input
          type='text'
          value={search}
          onChange={handleSearch}
          className={`Characteres-search ${theme ? 'dark' : 'light'}`}
          placeholder='Search character...'
          ref={searchInput}
        />
        {filterCharacters.length > 0 ? (
          <div className='Characters-list'>
            {filterCharacters.map((character) => (
              <Card
                character={character}
                key={character.id}
                handlerClick={handlerClick}
                isFavorite={isFavorite(character)}
              />
            ))}
          </div>
        ) : (
          <p>No search results</p>
        )}
      </section>
    </>
  );
};

export default Characters;
