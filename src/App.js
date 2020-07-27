import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';

import s from './App.module.css';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import PageNotFound from './pages/PageNotFound';

import MenuContainer from './components/Containers/MenuContainer';



const App = () => 
    <>
	<MenuContainer>
		<ul className={s.navList}>
			<li className={s.navItem}>
				<NavLink 
					exact
					to="/" 
					className={s.navItemLink}
					activeClassName={s.navItemLinkActive}
					>Главная страница
				</NavLink>
			</li>
			<li className={s.navItem}>
				<NavLink to="/movies" 
					className={s.navItemLink}
					activeClassName={s.navItemLinkActive}
					>Поиск фильмов
				</NavLink>
			</li>
		</ul>
	</MenuContainer>

        <Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/movies/:movieId" component={MovieDetailsPage} />
			<Route path="/movies" component={MoviesPage} />
			<Route component={PageNotFound} />
        </Switch>
    </>

export default App;