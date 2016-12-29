import React from 'react';
import {render} from 'react-dom';

//----------------------INPUT--------------------------------------------

/**
 * A single input field, derives its heading, search text, and suggestion items from the field prop.
 * Includes a dropdown of selectable suggestions.
 */
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showsSuggestions: false, inputValue: ""};
        this.handleInputTextChange = this.handleInputTextChange.bind(this);
        this.handleSelectSuggestion = this.handleSelectSuggestion.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleWindowClick = this.handleWindowClick.bind(this);
    }

    componentWillMount() {
        document.addEventListener('keydown', this.handleKeyPress);
        window.addEventListener('click', this.handleWindowClick);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
        window.removeEventListener('click', this.handleWindowClick);
    }

    handleInputFocus(event) {
        this.setState({showsSuggestions: event.target.value.length > 0});
    }

    handleInputTextChange(event) {
        this.setState({showsSuggestions: event.target.value.length > 0,
                        inputValue: event.target.value});
    }

    handleSelectSuggestion(value) {
        this.setState({inputValue: value.target.innerHTML});
        this.setState({showsSuggestions: false});
    }

    handleKeyPress(event) {
        if(event.keyCode == 27) //escape key
            this.setState({showsSuggestions: false});
    }

    handleWindowClick(event) {
        if(event.target.id != this.props.field)
            this.setState({showsSuggestions: false});
    }

    renderItems() {
        let inputValue = this.state.inputValue;
        return this.props.items.filter(function(item) {
          return item.toLowerCase().includes(inputValue.toLowerCase()); //see if there is a better way to do this using a regex
        }).map(function(item) {
            return(
                <tr id = "suggestion" key = {item} >
                    <td onClick={this.handleSelectSuggestion} key="fdf">
                        {item}
                    </td>
                </tr>
            );
        }.bind(this));
    }

    render() {
        return (
            <div>
                <form>
                    {this.props.field}
                    <br/>
                    <input tabIndex = "0"
                        onFocus = {this.handleInputFocus}
                        type="text"
                        id={this.props.field}
                        placeholder= {"e.g. "+this.props.example}
                        value={this.state.inputValue}
                        onChange={this.handleInputTextChange}
                    />
                </form>

                <table id = "suggestions" className={this.state.showsSuggestions ? "visible" : "hidden"}>
                    <tbody>
                        {this.renderItems()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Input;