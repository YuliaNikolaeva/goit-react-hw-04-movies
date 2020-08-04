import React from 'react';
import {NavLink} from 'react-router-dom';

import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
    return <ul className={s.navList}>
		<li className={s.navItem}>
			<NavLink 
				exact
				to={routes.home} 
				className={s.navItemLink}
				activeClassName={s.navItemLinkActive}
				>Главная страница
			</NavLink>
		</li>
		<li className={s.navItem}>
			<NavLink to={routes.films}
				className={s.navItemLink}
				activeClassName={s.navItemLinkActive}
				>Поиск фильмов
			</NavLink>
		</li>
	</ul>;
};

export default Navigation;


