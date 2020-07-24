import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';

import {getDetailsAboutOneFilm} from '../services/filmsApi';

import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews'



class MovieDetailsPage extends Component {
    state ={
        id: null,
        overview: null,
        title: null,
        vote_average: null,
        vote_count: null,
        belongs_to_collection: null,
    };

    componentDidMount() {
        const {movieId} = this.props.match.params

       getDetailsAboutOneFilm(movieId)
       .then(response => this.setState({...response}))
    }

    render() {
        const {
            title, 
            overview, 
            vote_count, 
            vote_average,
        } = this.state;


        const {match} = this.props;

        console.log('Матч-паз', match.path)
        console.log('Матч-урл', match.url)
        console.log('Парамз', match.params.movieId)

        return <>
            <div>
                <h2>{title}</h2>
                <div>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                </div>

                <div>
                    <h3>Vote count</h3>
                    <p>{vote_count}</p>
                </div>

                <div>
                    <h3>Vote average</h3>
                    <p>{vote_average}</p>
                </div>
            </div>
            <ul>
                <li>
                    <NavLink to={`${match.url}/cast`}>Cast</NavLink>
                </li>
                <li>
                    <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
                </li>
            </ul>
            <Route to={`${match.path}/cast`} component={Cast}/>
            <Route to={`${match.path}/reviews`} component={Reviews}/>

            {console.log('cast в Нав-Линк:', `${match.url}/cast`)}
            {console.log('reviews в Нав-Линк:', `${match.url}/reviews`)}

            {console.log('cast в рауте:', `${match.path}/cast`)}
            {console.log('reviews в рауте:', `${match.path}/reviews`)}
        </>
    }


}

export default MovieDetailsPage;