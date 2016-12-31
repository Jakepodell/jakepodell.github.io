import React from 'react';
import {render} from 'react-dom';
import Input from './input.jsx';
import RadioImage from './radio-image.jsx';
import Constants from '../constants/constants.jsx';

/**
 * A list of inputs, created from elements of the fields prop
 */
class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    renderSchools() {
        return Constants.schools.map((school) => {
            return <RadioImage key = {school.title} img ={school.img} title = {school.title} name = "schools" onSelectSchool = {this.props.onSelectSchool} />
        });
    }

    render() {
        return (
            <form autoComplete="off">
                <div id = "form-container">
                    <div id = "radio-container">
                        <p id = "form_title">School:</p>
                        {this.renderSchools()}
                    </div>
                    <hr/>
                    <Input field = "Major:" example = "Computer Science" suggestions = {Constants.majors} internalBubbles = {true} />
                    <Input field = "Minor(s):" example = "Cognitive Science" suggestions = {Constants.minors} internalBubbles = {true} align = "right"/>
                    <hr/>
                    <Input field = "Classes Taken:" example = "AEM 2940" suggestions = {Constants.classesTaken} />
                    <hr/>
                    <Input field = "Graduating Semester:" example = "Spring 2019" suggestions = {Constants.graduatingSemester} />
                    <hr/>
                    <Input field = "Desired Classes:" example = "CS 4700" suggestions = {Constants.classesDesired} />
                </div>
            </form>
        );
    }
}

export default Form;