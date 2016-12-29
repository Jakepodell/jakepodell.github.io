import React from 'react';
import {render} from 'react-dom';
import Input from './input.jsx';
import RadioImage from './radio-image.jsx';

/**
 * A list of inputs, created from elements of the fields prop
 */
class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var schools = [
            {title: "Engineering", img: "http://www.kiawahisland.org/Data/Sites/1/media/biweekly-email-/007-512.png"},
            {title: "Arts", img: "http://squad.se/wp-content/uploads/2016/08/Hard-Money-Icon-3.png"},
            {title: "Human Ecology", img: "http://www.morethanprinting.co/images/educationIcon.png"},
            {title: "Hotel", img: "http://www.hotel-r.net/im/hotel/gb/icon-hotel-18.png"},
            {title: "CALS", img: "http://www.cals.nl/wp-content/themes/calscollegelocatie/assets/img/logo.svg"}
        ]
        return (
            <div>
                <div id = "input-container">
                    <div id = "input">
                        <RadioImage schools = {schools} name = "schools"/>
                    </div>
                    <div id = "input">
                        <Input field = "Major" example = "Computer Science"/>
                    </div>
                    <div id = "input">
                        <Input field = "Minor(s)" example = "Cognitive Science"/>
                    </div>
                    <div id = "input">
                        <Input field = "Classes Taken" example = "AEM 2940"/>
                    </div>
                    <div id = "input">
                        <Input field = "Graduating Semester" example = "Spring 2019"/>
                    </div>
                    <div id = "input">
                        <Input field = "Desired Classes" example = "CS 4700"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;