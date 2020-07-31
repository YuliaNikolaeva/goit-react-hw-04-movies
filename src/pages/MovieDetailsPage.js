import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import s from './MovieDetailsPage.module.css';

import routes from '../routes';

import {getDetailsAboutOneFilm, imageBaseUrl} from '../services/filmsApi';


import SectionContainer from '../components/Containers/SectionContainer';
import BoxContainer from '../components/Containers/BoxContainer';
import InnerNavContainer from '../components/Containers/InnerNavContainer';
import ButtonBackContainer from '../components/Containers/ButtonBackContainer';


import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import FilmDetails from '../components/FilmDetails/FilmDetails';
import Genres from '../components/Genres/Genres';
import InnerNavigation from '../components/InnerNavigation/InnerNavigation';
import ButtonBack from '../components/ButtonBack/ButtonBack';
import Error from '../components/Error';


class MovieDetailsPage extends Component {
    state ={
        genres: [],
        id: null,
        overview: null,
        poster_path: null,
        title: null,
        vote_average: null,
        errorMessage: null,
    };

    componentDidMount() {
        const {movieId} = this.props.match.params
       getDetailsAboutOneFilm(movieId)
       .then(response =>  this.setState({...response}))
       .catch(error => this.setState({errorMessage: error.response.data.status_message,}))
    };

    handleGoBack = () => {
        const {location} = this.props;
        this.props.history.push(location?.state?.from || routes.home);
    };

    render() {
        const {
            genres,
            overview,
            poster_path,
            title, 
            vote_average,
            errorMessage,
        } = this.state;

        const {match} = this.props;
        const voteAverage = vote_average * 10;

        return <>
        {errorMessage && <Error text={errorMessage}/>}
        <ButtonBackContainer>
            <ButtonBack goBack={this.handleGoBack} />
        </ButtonBackContainer>
        <SectionContainer sectionHead={title}>
            <div className={s.cardBox}>
                <div className={s.imgBox}>
                    <img 
                        src={`${imageBaseUrl}${poster_path}`} 
                        alt={title}
                        className={s.image}
                    ></img>
                    <InnerNavContainer>
                        <InnerNavigation 
                            baseUrl={match.url}
                            nameUrl="Cast"
                            toGo="cast"
                        />
                        <InnerNavigation 
                            baseUrl = {match.url}
                            nameUrl = "Reviews"
                            toGo="reviews"
                        />
                    </InnerNavContainer>
                </div>
                <div>
                    <BoxContainer>
                        <FilmDetails 
                            filmDetailName={"User Score"}
                            filmDetailValue={`${voteAverage}%`} 
                        />
                    </BoxContainer>

                    <BoxContainer>
                        <FilmDetails 
                            filmDetailName={"Overview"}
                            filmDetailValue={overview} 
                        />
                    </BoxContainer>

                    <BoxContainer>
                        <Genres head={"Genres"} genres={genres}/>
                    </BoxContainer>
                </div>
            </div>
            <Route exact path={`${match.path}/cast`} component={Cast} />
            <Route exact path={`${match.path}/reviews`} component={Reviews} />
        </SectionContainer>

        </>
    };
};

export default MovieDetailsPage;