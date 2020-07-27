import React, {Component} from 'react';
import {getCastAboutOneFilm} from '../../services/filmsApi';

import s from './Cast.module.css';

import CastItem from './CastItem';
import DetailContainer from '../Containers/DetailContainer';

class Cast extends Component {
    state = {
        cast: [],
    };

    componentDidMount() {
        const {movieId} = this.props.match.params;
        getCastAboutOneFilm(movieId)
        .then(response => this.setState({...response}))
    }

    render() {
        const {cast} = this.state;

        return (
            <DetailContainer head="Cast">
                <ul className={s.castList}>
                    {cast.map(castItem => (
                        <CastItem key={castItem.id} castItem={castItem}/>
                    ))}
                </ul>
            </DetailContainer>
        )
    };
};


export default Cast;