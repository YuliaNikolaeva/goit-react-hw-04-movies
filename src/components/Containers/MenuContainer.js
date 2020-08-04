import React from 'react';
import s from './MenuContainer.module.css';

const MenuContainer = ({children}) => {
    return <div className={s.menuContainer}>{children}</div>;
};

export default MenuContainer;