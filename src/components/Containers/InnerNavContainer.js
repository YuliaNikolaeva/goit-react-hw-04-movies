import React from 'react';
import s from './InnerNavContainer.module.css';

const InnerNavContainer = ({children}) => {
    return (<div className={s.innerNavContainer}>{children}</div>)
};

export default InnerNavContainer; 