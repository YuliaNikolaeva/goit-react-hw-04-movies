import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './InnerNavigation.module.css';

const InnerNavigation = ({baseUrl, nameUrl, toGo}) => {
    return (
        <ul className={s.navLinkList}>
            <li className={s.navLinkItem}>
                <NavLink 
                    exact to={`${baseUrl}/${toGo}`}
					className={s.navItemLink}
					activeClassName={s.navItemLinkActive}
                 >{nameUrl}
                 </NavLink>
            </li>
        </ul>
    );
};


InnerNavigation.propTypes = {
    baseUrl: PropTypes.string.isRequired, 
    nameUrl: PropTypes.string.isRequired, 
    toGo: PropTypes.string.isRequired,
};

export default InnerNavigation;