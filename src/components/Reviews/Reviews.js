
import React, {Component} from 'react';
import {getReviewsAboutOneFilm} from '../../services/filmsApi';

import s from './Reviews.module.css';

import DetailContainer from '../Containers/DetailContainer';
import ReviewsItem from './ReviewsItem';

class Reviews extends Component {

    state = {
        reviews: [],
    }


    componentDidMount() {
        const {movieId} = this.props.match.params;

        getReviewsAboutOneFilm(movieId)
        .then(response => this.setState({reviews: [...response]}))
    }

    render() {
        const {reviews} = this.state;
            return (
                <DetailContainer head="Reviews">
                    <ul className={s.list}>
                        {reviews.map(review => (
                            <ReviewsItem key={review.id} review={review} />
                        ))}
                    </ul>
                </DetailContainer>
           )
    }
}


export default Reviews;


// DetailContainer head="Cast"