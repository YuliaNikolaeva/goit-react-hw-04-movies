import React from 'react';
import PropTypes from 'prop-types';
import s from './Genres.module.css';

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


Genres.defaultProps = {
    head: 'Head name', 
    genres: [],
};

Genres.propTypes = {
    head: PropTypes.string, 
    genres: PropTypes.array,
};


export default Genres;