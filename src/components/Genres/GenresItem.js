import React from 'react';
import s from './GenresItem.module.css'

const GenresItem = ({genre}) => {
    return <li className={s.listItem} key={genre.id}>{genre.name}</li>
}

export default GenresItem;