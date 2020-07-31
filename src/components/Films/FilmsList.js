import React from 'react';
import s from './FilmsList.module.css';

const FilmsList = ({children}) => {
    return <ul className={s.list}>{children}</ul>
};

export default FilmsList;