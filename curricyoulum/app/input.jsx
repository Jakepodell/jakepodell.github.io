import React from 'react';
import {render} from 'react-dom';

//----------------------INPUT--------------------------------------------

/**
 * A single input field, derives its heading and search text from the field prop
 */
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        //TODO
    }

    render() {
        return (
            <div>
                <form>
                    {this.props.field}
                    <br/>
                    <input
                        type="text"
                        placeholder= {"e.g. "+this.props.example}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}

export default Input;