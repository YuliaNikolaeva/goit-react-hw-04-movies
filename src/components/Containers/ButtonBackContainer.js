import React from 'react';
import s from './ButtonBackContainer.module.css';

const ButtonBackContainer = ({children}) => {
    return <div className={s.btnBackContainer}>{children}</div>
};

export default ButtonBackContainer;