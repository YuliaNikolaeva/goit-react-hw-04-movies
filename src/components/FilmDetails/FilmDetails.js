import React  from 'react';
import s from './FilmDetails.module.css';

const FilmDetails = ({filmDetailName, filmDetailValue}) => {
    return <div className={s.stat}>
    <h4 >{filmDetailName}</h4>
    <p>{filmDetailValue}</p>
</div>
}

export default FilmDetails;