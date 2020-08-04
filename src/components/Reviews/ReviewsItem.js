import React from 'react';
import PropTypes from 'prop-types';
import s from './ReviewsItem.module.css';

const ReviewsItem = ({review}) => {
    return <li className={s.listItem}>
        <p className={s.name}>{review.author}:</p>
        <p className={s.content}>{review.content}</p>
    </li>;
};

ReviewsItem.defaultProps = {
    name: '',
    content: '',
};

ReviewsItem.propTypes = {
    review: PropTypes.shape({
        name: PropTypes.string,
        content: PropTypes.string,
    })
};


export default ReviewsItem;