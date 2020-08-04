import React, {Component} from 'react';

import {getAllFilms}  from '../services/filmsApi';

import MainContainer from '../components/Containers/MainContainer';
import Error from '../components/Error';
import SectionContainer from '../components/Containers/SectionContainer';
import FilmsList from '../components/Films/FilmsList';
import FilmsListItem from '../components/Films/FilmsListItem';



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
        const {films, errorMessage} = this.state;

        return <>
            <MainContainer>
                {errorMessage && <Error />}
                {films.length > 0 && 
                    <SectionContainer sectionHead="Films">
                        <FilmsList>
                            {this.state.films.map(film => (
                                <FilmsListItem 
                                    film={film} 
                                    key={film.id}
                                />
                            ))}
                        </FilmsList >
                    </SectionContainer>
                }
            </MainContainer>
        </>
    }
}


export default HomePage;