import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';

import s from './MovieDetailsPage.module.css'

import {getDetailsAboutOneFilm, imageBaseUrl} from '../services/filmsApi';

import SectionContainer from '../components/Containers/SectionContainer';
import BoxContainer from '../components/Containers/BoxContainer';


import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews'
import FilmDetails from '../components/FilmDetails/FilmDetails';
import Genres from '../components/Genres/Genres';


class MovieDetailsPage extends Component {
    state ={
        genres: [],
        id: null,
        overview: null,
        poster_path: null,
        title: null,
        vote_average: null,

    };

    componentDidMount() {
        const {movieId} = this.props.match.params

       getDetailsAboutOneFilm(movieId)
       
       .then(response =>  this.setState({...response}))
    }

    render() {
        const {
            genres,
            overview,
            poster_path,
            title, 
            vote_average,
        } = this.state;

        const {match} = this.props;
        const voteAverage = vote_average * 10;

        return <>
            <SectionContainer sectionHead={title}>
                <div className={s.cardBox}>
                    <div className={s.imgBox}>
                        <img 
                            src={`${imageBaseUrl}${poster_path}`} 
                            alt={title}
                            className={s.image}
                            ></img>
                        <ul className={s.navLinkList}>
                            <li className={s.navLinkItem}>
                                <NavLink 
                                    exact to={`${match.url}/cast`}
                                    className={s.navItemLink}
                                    activeClassName={s.navItemLinkActive}
                                >Cast</NavLink>
                            </li>
                            <li className={s.navLinkItem}>
                                <NavLink 
                                    exact to={`${match.url}/reviews`}
                                    className={s.navItemLink}
                                    activeClassName={s.navItemLinkActive}
                                >Reviews</NavLink>
                            </li>
                        </ul>

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