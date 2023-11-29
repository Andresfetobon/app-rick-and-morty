import './App.css'
import CardResident from './components/CardResident'
import InputValue from './components/InputSearch'
import LocatInfo from './components/LocatInfo'
import UseFetch from './hooks/UseFetch'
import getRandomNumber from './utils/getRandomNumber'
import img from '../public/img/image 3.png'
import { useEffect, useState } from 'react'

function App() {
  
  const randomLocation = getRandomNumber(126)
  const [ search, setSearch ] = useState(randomLocation)
  // state for input
  
  
  
  const url = `https://rickandmortyapi.com/api/location/${search ? search: randomLocation}`
  const [ location, getApiLocation, hassErrorr ] = UseFetch(url)
  useEffect(() => {
    getApiLocation()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])
  // function for location

  return (
      <div className="card">
        <div className='container__img'>
          <img src={img} alt="banner__rick-and-morty" />
        </div>
        <InputValue setSearch={setSearch}  />

        {
          hassErrorr 
          ? <h2 className='message__error'>❌ Hey! you must provide an id from 1 to 126 😒</h2>
          : ( 
            <> 
            <LocatInfo
              location={location}
            />
          <div className='resident-container'>
            {
              location?.residents.map(url => (
                <CardResident 
                  key={url}
                  url={url}
                />
                
              ))
            }
          </div>
          </>

          )
        }            
      </div> 
  )
}

export default App
