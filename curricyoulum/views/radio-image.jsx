import React from 'react';
import {render} from 'react-dom';


class RadioImage extends React.Component {
    constructor(props) {
        super(props);
        this.selectSchool = this.selectSchool.bind(this);
        this.state = {schoolName: this.props.title};
    }

    selectSchool() {
        this.props.onSelectSchool(this.state.schoolName);
    }

    render() {
        return (
            <label>
                <input type = "radio" name = {this.props.name} />
                <img src={this.props.img} onClick={this.selectSchool}/>
                <p>{this.props.title}</p>
            </label>
        );
    }
}

export default RadioImage;