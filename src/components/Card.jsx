const Card = ({ character, handlerClick, isFavorite }) => {
  return (
    <div className='character'>
      <div className='character__image'>
        <img
          src={character.image}
          alt={character.name}
          loading='lazy'
          width='300px'
          height='300px'
        />
        <button
          type='button'
          aria-label='Save Favorite'
          onClick={() => handlerClick(character)}
          className='save-favorite'>
          {isFavorite ? (
            <i className='fas fa-heart save-favorite--selected' />
          ) : (
            <i className='fas fa-heart save-favorite--unselected' />
          )}
        </button>
      </div>
      <div className='character__information'>
        <div className='character__information--heading'>
          <h2 className='character__title'>{character.name}</h2>
        </div>
        <div className='character__information--row'>
          <h3 className='character__title'>Specie:</h3>
          <small className='character__desciption'>{character.species}</small>
        </div>
        <div className='character__information--row'>
          <h3 className='character__title'>Gender:</h3>
          <small className='character__desciption'>{character.gender}</small>
        </div>
        <div className='character__information--row'>
          <h3 className='character__title'>Origin:</h3>
          <small className='character__desciption'>
            {character.origin.name}
          </small>
        </div>
      </div>
    </div>
  );
};
export default Card;
