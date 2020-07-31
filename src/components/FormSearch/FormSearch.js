
import React, {Component} from 'react';
import s from './FormSearch.module.css'

import {getFilmByRequest} from '../../services/filmsApi';


import Error from '../Error';
import FilmsList from '../Films/FilmsList';
import FilmsListItem from '../Films/FilmsListItem';


class FormSearch  extends Component {
    state = {
        query: '',
        films: [],
        errorMessage: null,
    };

    componentDidMount() {
        const queryFromLocalStorage = localStorage.getItem('queryInLocalStorage');

        if(queryFromLocalStorage ) {
            return getFilmByRequest(queryFromLocalStorage)
            .then(response => this.setState({films: response}))
            .catch(error =>
                this.setState({
                  errorMessage: error.response.data.status_message,
                })
            )
        };
    };

    handleChange = e => {
        this.setState({query: e.currentTarget.value});
    };

    handleSubmit = e => {
        const {query} = this.state;
        e.preventDefault();

        if(query.length > 0) {
            localStorage.setItem('queryInLocalStorage', query);
            getFilmByRequest(query)
            .then(response => this.setState({films: response}))
            .catch(error =>
                this.setState({
                  errorMessage: error.response.data.status_message,
                })
            )
        };
    };

    render() {
        const {films, query, errorMessage} = this.state;
        return (
            <>
                <form className={s.formSearch} onSubmit={this.handleSubmit}>
                    <input 
                        className={s.inputFormSearch} 
                        type="text"
                        autoComplete="off"
                        placeholder="What film are you looking for?"
                        autoFocus
                        onChange={this.handleChange}
                        value={query}
                    >
                    </input>
                    <button className={s.btnFormSearch} type="submit">Find!</button>
                </form>

                {errorMessage && <Error text={errorMessage} />}

                {films.length > 0 && 
                <FilmsList>
                    {films.map((film) => <FilmsListItem key={film.id} film={film}/>)}
                </FilmsList>
                }
            </>
        );
    };
};


export default FormSearch;