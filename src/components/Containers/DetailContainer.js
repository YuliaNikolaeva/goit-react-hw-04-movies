import React from 'react';
import s from './DetailContainer.module.css'

const DetailContainer = ({head, children}) => {
    return <div className={s.detailContainer}>
        <h2>{head}</h2>
        {children}
    </div>
};

export default DetailContainer;