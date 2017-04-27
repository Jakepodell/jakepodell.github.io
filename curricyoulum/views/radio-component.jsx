import React from 'react';
import {render} from 'react-dom';


class RadioComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {schoolName: this.props.title};
    }


    render() {
        return (
            <label className = {this.props.selected !== "" ? (this.props.selected === this.props.id ? "selected" : "faded") : ""}>
                <input type = "radio" name = {this.props.name} />
                <div id = "radio-clickable" >
                    {this.props.clickable}
                </div>
                <p>{this.props.title}</p>
            </label>
        );
    }
}

export default RadioComponent;