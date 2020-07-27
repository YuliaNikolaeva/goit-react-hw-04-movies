import React from 'react';

import s from './Genres.module.css'

import GenresItem from './GenresItem';


const Genres = ({head, genres}) => {
    return (<>
        <div>
            <h4 className={s.head}>{head}</h4>
            <ul className={s.list}>{genres.map(genre => 
                <GenresItem 
                    key={genre.id}
                    genre={genre}
                />)}
            </ul>
        </div>
    </>)
};


export default Genres;