import React, {Component} from 'react';
import {getCastAboutOneFilm} from '../../services/filmsApi';

import Error from '../Error'
import CastList from '../CastList';
import CastItem from '../CastItem';
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
                            <CastList>
                                {cast.map(castItem => (
                                    <CastItem key={castItem.id} castItem={castItem}/>
                                ))}
                            </CastList>
                        </DetailContainer>
                    : <NoInfoBox text="Cast"/>
                }
            </>
        );
    }
}


export default Cast;