/* eslint-disable react/prop-types */
import UseFetch from '../hooks/UseFetch';
import '../styles/CardResident.css'
import { useEffect } from 'react';

const CardResident = ({ url}) => {
  
  const [ character, getCharacter ] = UseFetch(url);
  useEffect(() => {
    getCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // function for character
  
  return (
    <article className='card__residents'> 
      <header>
          <div className='character__status'>
          {
            character?.status === 'Alive' ? (
              <div className='text__status'>
                <div className='circle' style={{background: "green"}}></div>
                <p>{character?.status}</p> 
                </div>
              ) : (
                character?.status === 'Dead' ? (
                  <div className='text__status'>
                    <div className='circle' style={{background: "red"}}></div>
                    <p>{character?.status}</p>
                    </div>
                  ) : (
                    <div className='text__status'>
                      <div className='circle' style={{background: "gray"}}></div>
                      <p>{character?.status}</p>
                      </div>
                    )
                    )
                  }
        </div>
            <img src={character?.image} alt="rick and morty" />
      </header>
      <section className='info__character'>
          <h3 className='title__character' >{character?.name}</h3>
          <hr />
        <ul className='list__character'>
          <li className='character__species'><span>Specie</span> {character?.species}</li>
          <li className='character__origin'><span>Origin</span> {character?.origin.name}</li>
          <li className='character__eppiso'><span>Eppisodes where appear</span> {character?.episode.length}</li>
        </ul>
      </section> 
    </article>

    )
    
};

export default CardResident;
