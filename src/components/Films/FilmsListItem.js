import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

import s from './FilmsListItem.module.css';

const FilmsListItem = ({film, location}) => {
    return <li className={s.item}>
    <Link 
        to={{
            pathname: `/movies/${film.id}`,
            state: {
                from: location,
            },
        }}
        >
        {film.title || film.name}
    </Link>
</li>
};


FilmsListItem.defaultProps = {
    film: {},
    location: {},
};

FilmsListItem.propTypes = {
    film: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        name: PropTypes.string,
    }),

    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};


export default withRouter(FilmsListItem);