import React from 'react';
import {render} from 'react-dom';


class RadioImage extends React.Component {
    constructor(props) {
        super(props);
    }


    renderItems() {
        let name = this.props.name;
        return this.props.schools.map(function(item) {
            return(
                <label key = {item.title}>
                    <input type = "radio" name = {name} />
                    <img src={item.img}/>
                    <p>{item.title}</p>
                </label>
            );
        });
    }

    render() {
        return (
            <div id = "radio-container">
                <p id = "form_title">School:</p>
                {this.renderItems()}
            </div>
        );
    }
}

export default RadioImage;