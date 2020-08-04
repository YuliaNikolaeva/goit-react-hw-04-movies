import React, {Component} from 'react';
import {getCastAboutOneFilm} from '../../services/filmsApi';

import s from './Cast.module.css';

import Error from '../Error'
import CastItem from './CastItem';
import DetailContainer from '../Containers/DetailContainer';
import NoInfoBox from '../NoInfoBox';

class Cast extends Component {
    state = {
        cast: [],
        errorMessage: null,
    };

    componentDidMount() {
        const {movieId} = this.props.match.params;
        getCastAboutOneFilm(movieId)
        .then(response => this.setState({...response}))
        .catch(error =>
            this.setState({errorMessage: error.response.data.status_message,})
        );
    };

    render() {
        const {cast, errorMessage} = this.state;

        return (
            <>
                {errorMessage && <Error /> }
                {cast.length > 0 
                    ? <DetailContainer head="Cast">
                            <ul className={s.castList}>
                                {cast.map(castItem => (
                                    <CastItem key={castItem.id} castItem={castItem}/>
                                ))}
                            </ul>
                        </DetailContainer>
                    : <NoInfoBox text="Cast"/>
                }
            </>
        );
    }
}


export default Cast;