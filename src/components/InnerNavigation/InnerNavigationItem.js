import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './InnerNavigationItem.module.css';

const InnerNavigationItem = ({baseUrl, nameUrl, toGo}) => {
    return (
        <>
            <li className={s.navLinkItem}>
                <NavLink 
                    exact to={`${baseUrl}/${toGo}`}
					className={s.navItemLink}
					activeClassName={s.navItemLinkActive}
                 >{nameUrl}
                 </NavLink>
            </li>
        </>
    );
};


InnerNavigationItem.propTypes = {
    baseUrl: PropTypes.string.isRequired, 
    nameUrl: PropTypes.string.isRequired, 
    toGo: PropTypes.string.isRequired,
};

export default InnerNavigationItem;