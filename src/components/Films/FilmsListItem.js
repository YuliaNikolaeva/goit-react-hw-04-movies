import React from 'react';
import {Link} from 'react-router-dom'

import s from './FilmsListItem.module.css'

const FilmsListItem = ({film}) => {
    return <li className={s.item}>
    <Link to={`/movies/${film.id}`}>{film.title || film.name}</Link>
</li>
}

export default FilmsListItem;