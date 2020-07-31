
import React, {Component} from 'react';
import {getReviewsAboutOneFilm} from '../../services/filmsApi';

import s from './Reviews.module.css';

import Error from '../Error';
import DetailContainer from '../Containers/DetailContainer';
import ReviewsItem from './ReviewsItem';
import NoInfoBox from '../NoInfoBox';

class Reviews extends Component {

    state = {
        reviews: [],
        errorMessage: null,
    };


    componentDidMount() {
        const {movieId} = this.props.match.params;

        getReviewsAboutOneFilm(movieId)
        .then(response => this.setState({reviews: [...response]}))
        .catch(error =>
            this.setState({
              errorMessage: error.response.data.status_message,
            })
        )
    };

    render() {
        const {reviews, errorMessage} = this.state;
        return (
            <>
                {errorMessage && <Error />}
                {reviews.length > 0 
                    ? <DetailContainer head="Reviews">
                        <ul className={s.list}>
                            {reviews.map(review => (
                                <ReviewsItem key={review.id} review={review} />
                            ))}
                        </ul>
                    </DetailContainer>
                    : <NoInfoBox text="Reviews"/>
                }
            </>
        )
    };
};


export default Reviews;