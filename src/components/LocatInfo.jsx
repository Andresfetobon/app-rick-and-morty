/* eslint-disable react/prop-types */
import '../styles/LocatInfo.css'

const LocatInfo = ({location}) => {
    return (
        <article className='container__info'>
                <h2 className='title_location'>{location?.name}</h2>
                <ul className='list_location'>
                <li>Type       <span>{location?.type}</span></li>
                <li>Dimension  <span>{location?.dimension}</span></li>
                <li>Population <span>{location?.residents.length}</span></li>
                </ul>     
        </article>
    );
};

export default LocatInfo;