import React from 'react';
import {render} from 'react-dom';
import Constants from '../constants/constants.jsx';

//----------------------INPUT--------------------------------------------

/**
 * A single input field, derives its heading, search text, and suggestion items from the field prop.
 * Includes a dropdown of selectable suggestions.
 * selectable suggestions are displayed as bubbles, either in the same div as the tying or an external div
 *  this is determined from props
 *  in order to get the ability to place bubble in the input, the input is actually hidden within an
 *  external div that is masked to look like the input.
 */
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showsSuggestions: false, inputValue: "", selectedItems: [], highlightedIndex: -1, highlightedItemText: "", filteredSuggestions: []};
        this.handleInputTextChange = this.handleInputTextChange.bind(this);
        this.handleSelectSuggestion = this.handleSelectSuggestion.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleWindowClick = this.handleWindowClick.bind(this);
        this.calculateHighlightedItemText = this.calculateHighlightedItemText.bind(this);
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
                        inputValue: event.target.value}, this.filterSuggestions);
    }

    handleSelectSuggestion(value) {
        this.selectSuggestion(value.target.innerHTML);
    }

    selectSuggestion(value) {
        this.setState({selectedItems: this.state.selectedItems.concat(value)});
    }

    handleKeyPress(event) {
        if(event.keyCode == Constants.keyCodes.ENTER)event.preventDefault();
        if(!this.state.showsSuggestions)return;
        switch(event.keyCode) {
            case Constants.keyCodes.ESC:
                this.hideSuggestions();
                break;
            case Constants.keyCodes.UP:
                if(this.state.highlightedIndex >= -1)
                    this.setState({highlightedIndex: this.state.highlightedIndex - 1});
                event.preventDefault();
                break;
            case Constants.keyCodes.DOWN:
                if(this.state.highlightedIndex < this.state.filteredSuggestions.length - 1)
                    this.setState({highlightedIndex: this.state.highlightedIndex + 1});
                event.preventDefault();
                break;
            case Constants.keyCodes.ENTER:
                if(this.state.highlightedItem !== "")
                    this.selectSuggestion(this.state.highlightedItemText);
                break;
            case Constants.keyCodes.TAB:
                this.hideSuggestions();
                break;
            default:
                break;
        }
    }

    handleWindowClick(event) {
        if(event.target.id != this.props.field && event.target.id !== "suggestion-td")
            this.hideSuggestions();
    }

    hideSuggestions() {
        this.setState({showsSuggestions: false, inputValue: "", highlightedIndex: -1, highlightedItemText: ""});
    }

    filterSuggestions() {
        let inputValue = this.state.inputValue;
        this.setState({filteredSuggestions:
            this.props.suggestions.filter(function(item) {
                return item.toLowerCase().includes(inputValue.toLowerCase());
            })
        });
    }

    calculateHighlightedItemText(input, item, index) {
        if(this.state.highlightedIndex == index && this.state.showsSuggestions && this.state.highlightedItemText !== item) {
            this.setState({highlightedItemText: item});
        }
    }

    deleteBubble(item) {
        const newItems = this.state.selectedItems;
        if(newItems.indexOf(item) > -1) {
            newItems.splice(newItems.indexOf(item), 1);
            this.setState({selectedItems: newItems});
        }
    }

    renderSuggestions() {
        return this.state.filteredSuggestions.map(function(item, index) {
            return(
                <tr id = "suggestion" key = {index} className={this.state.highlightedIndex == index ? "focused" : "unfocused"}
                    ref={(input) => {this.calculateHighlightedItemText(input, item, index)}}>
                    <td onClick={this.handleSelectSuggestion} onMouseMove={(e) => this.setState({highlightedIndex: index})} key={index} id = {"suggestion-td"}>
                        {item}
                    </td>
                </tr>
            );
        }.bind(this));
    }

    renderBubbles() {
        return this.state.selectedItems.map((item, index) => {
            return (
                <div id="bubble" key = {index}>
                    <img src = "https://cdn3.iconfinder.com/data/icons/meanicons-4/512/meanicons_24-512.png" id = "bubble-delete" onClick={this.deleteBubble.bind(this, item)} />
                    {item}
                </div>
            );
        });
    }

    renderInternalBubbles() {
        if(this.props.internalBubbles) {
            return this.renderBubbles();
        }
    }

    renderExternalBubbles() {
        if(!this.props.internalBubbles) {
            return (
                <div id = "external-bubble-container">
                    {this.renderBubbles()}
                </div>
            );
        };
    }

    render() {
        return (
            <div className={(this.props.internalBubbles ? "internal-bubbles" : "external-bubbles") + " " + (this.props.align === "right" ? "right-align" : "")} >
                <div id = "input-component">
                    <div id = "input-label">
                        {this.props.field}
                    </div>
                    <div id = "input-container">
                        {this.renderInternalBubbles()}
                        <div id = "input-sizer">
                            <input tabIndex = "0"
                                   onFocus = {this.handleInputFocus}
                                   type="text"
                                   id={this.props.field}
                                   value={this.state.inputValue}
                                   onChange={this.handleInputTextChange}
                            />
                        </div>
                    </div>
                    <table id = "suggestions" className={this.state.showsSuggestions ? "visible" : "hidden"}>
                        <tbody>
                            {this.renderSuggestions()}
                        </tbody>
                    </table>
                </div>
                {this.renderExternalBubbles()}
            </div>
        );
    }
}

export default Input;