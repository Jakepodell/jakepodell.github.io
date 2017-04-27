import Form from '../views/form.jsx';
import Banner from '../views/Banner.jsx';
import React from 'react';
import {render} from 'react-dom';
import {Container} from 'flux/utils';
import Store from '../data/FormStore.jsx';
import FormActions from '../data/FormActions.jsx';

class AppContainer extends React.Component {
    static getStores() {
        return [Store];
    }

    static calculateState(prevState) {
        return {
            school: Store.getState().school,
            season: Store.getState().season,
            onSelectSchool: FormActions.selectSchool,
            onSelectSeason: FormActions.selectSeason,
            onSubmit: FormActions.submimtForm,
        };
    }

    render() {
        return (
            <div>
                <Banner />
                <Form onSelectSchool = {this.state.onSelectSchool}
                      onSelectSeason = {this.state.onSelectSeason}
                      school = {this.state.school}
                      season = {this.state.season}
                      onSubmit = {this.state.onSubmit} />
            </div>
        );
    }
}

export default Container.create(AppContainer);