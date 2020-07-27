import React from 'react';
import s from './SectionContainer.module.css';

const SectionContainer = ({children, sectionHead}) => {
    return <section className={s.section}>
        <h2>{sectionHead}</h2>
        {children}
        </section>
};

export default SectionContainer;