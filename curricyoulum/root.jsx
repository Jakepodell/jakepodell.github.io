import React from 'react';
import {render} from 'react-dom';
import Form from './views/form.jsx';
import Banner from './views/banner.jsx';
import AppContainer from './containers/AppContainer.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <Banner />
                <Form />
            </div>
        );
    }
}

render(<AppContainer />, document.getElementById('app'));
