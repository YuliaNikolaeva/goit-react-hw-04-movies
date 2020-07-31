import React from 'react';
import PropTypes from 'prop-types';
import s from './SectionContainer.module.css';

const SectionContainer = ({children, sectionHead}) => {
    return <section className={s.section}>
        <h2>{sectionHead}</h2>
        {children}
        </section>
};


SectionContainer.defaultProps = {
    sectionHead: 'Section head',
};

SectionContainer.propTypes = {
    sectionHead: PropTypes.string,
};


export default SectionContainer;