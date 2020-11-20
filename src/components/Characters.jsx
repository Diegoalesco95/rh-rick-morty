import { useState, useEffect, useReducer } from 'react';

import { initialState, favoriteReducer } from '../context/FavoritesReducer';

import Card from './Card';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [state, dispatch] = useReducer(favoriteReducer, initialState);
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
        <div className='Characters-list'>
          {characters.map((character) => (
            <Card
              character={character}
              key={character.id}
              handlerClick={handlerClick}
              isFavorite={isFavorite(character)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Characters;
