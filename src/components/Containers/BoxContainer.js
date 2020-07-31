import React from 'react';
import s from './BoxContainer.module.css';

const BoxContainer = ({children}) => {
return <div className={s.box}>{children}</div>
};

export default BoxContainer;