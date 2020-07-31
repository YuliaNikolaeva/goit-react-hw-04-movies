import React, {Component} from 'react';

import SectionContainer from '../components/Containers/SectionContainer';
import FormSearch from '../components/FormSearch/FormSearch';

class MoviesPage extends Component {
    render() {
        return (
            <>
            <SectionContainer sectionHead="Search films form">
                <FormSearch />
            </SectionContainer>
        </>
        )
    };
};

export default MoviesPage;