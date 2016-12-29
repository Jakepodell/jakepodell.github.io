import React from 'react';
import {render} from 'react-dom';
import Form from './form.jsx';
import Banner from './banner.jsx';

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

render(<App/>, document.getElementById('app'));