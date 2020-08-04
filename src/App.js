import React, {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';

import routes from './routes';
import Navigation from './components/Navigation/Navigation';

import MenuContainer from './components/Containers/MenuContainer';

const HomePage = lazy(() =>
	import('./pages/HomePage' /*webpackChunkName: "home-page" */)
);

const MoviesPage = lazy(() =>
	import('./pages/MoviesPage' /*webpackChunkName:  "movies-page"*/)
);

const MovieDetailsPage = lazy(() =>
import('./pages/MovieDetailsPage' /*webpackChunkName: "movie-details-page" */)
);


const App = () => 
    <>
	<MenuContainer>
		<Navigation />
	</MenuContainer>
	<Suspense fallback={<div>Loading...</div>}>
		<Switch>
			<Route exact path={routes.home} component={HomePage} />
			<Route path={routes.filmsPageDetails} component={MovieDetailsPage} />
			<Route path={routes.films} component={MoviesPage} />
			<Route component={HomePage} />
		</Switch>
	</Suspense>
    </>;

export default App;