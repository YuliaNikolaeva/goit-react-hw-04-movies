import React from 'react';
import s from './CastList.module.css'

const CastList = ({children}) => {
    return <ul className={s.castList}>{children}</ul>;
};

export default CastList;