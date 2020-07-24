import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {getAllFilms}  from '../services/filmsApi';



class HomePage extends Component {
    state = {
        films: [],
        errorMessage: null,
    };

    componentDidMount() {
        getAllFilms()
        .then(films => this.setState({ films: [...films] }))
        .catch(error =>
          this.setState({
            errorMessage: error.response.data.status_message,
          })
        )
    };

    render() {
        // console.log(this.props.match.url)
        return <>
                <h2>Это домашняя страница!!!</h2>
                <ul>
                    {this.state.films.map(film => (
                        <li key={film.id}>
                            <Link to={`/movies/${film.id}`}>{film.title || film.name}</Link>
                        </li>
                    ))}
                </ul>
        </>
    }
}


export default HomePage;