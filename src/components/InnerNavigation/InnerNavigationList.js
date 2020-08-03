import React from 'react';
import s from './InnerNavigationList.module.css';

const InnerNavigationList = ({children}) => {
    return <ul className={s.navLinkList}>{children}</ul>
};

export default InnerNavigationList;