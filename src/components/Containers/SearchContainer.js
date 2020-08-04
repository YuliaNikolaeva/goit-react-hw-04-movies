import React from 'react';
import s from './SearchContainer.module.css';

const SearchContainer = ({children}) => {
    return <div className={s.searchContainer}>{children}</div>;
};

export default SearchContainer;