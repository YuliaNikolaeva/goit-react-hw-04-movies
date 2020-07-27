import React from 'react';
import s from './ReviewsItem.module.css'

const ReviewsItem = ({review}) => {
    return <li className={s.listItem}>
        <p className={s.name}>{review.author}:</p>
        <p className={s.content}>{review.content}</p>
    </li>
}

export default ReviewsItem;