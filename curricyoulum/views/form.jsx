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
        let schools = [
            {title: "Engineering", img: "http://www.kiawahisland.org/Data/Sites/1/media/biweekly-email-/007-512.png"},
            {title: "Arts", img: "http://squad.se/wp-content/uploads/2016/08/Hard-Money-Icon-3.png"},
            {title: "Human Ecology", img: "http://www.morethanprinting.co/images/educationIcon.png"},
            {title: "Hotel", img: "http://www.hotel-r.net/im/hotel/gb/icon-hotel-18.png"},
            {title: "CALS", img: "http://www.cals.nl/wp-content/themes/calscollegelocatie/assets/img/logo.svg"}
        ];

        let majors = ["Computer Science", "Hotel Things", "Economics", "Accounting", "Applied and Engineering Physics", "Art History", "Basket Weaving"];
        let minors = majors;
        let classesTaken = ["AEM 2540", "CS 4780", "ECE 3210", "MATH 2930"];
        let graduatingSemester = ["Spring 2017", "Fall 2017", "Spring 2018", "Fall 2018", "Spring 2019"]
        let desiredClasses = classesTaken;

        return (
            <div>
                <div id = "input-container">
                    <div id = "input">
                        <div id = "radio-container">
                            <p id = "form_title">School:</p>
                            {/*TODO: move school data to external constants and loop through it*/}
                            <RadioImage img ={schools[0].img} title = {schools[0].title} name = "schools" onSelectSchool = {this.props.onSelectSchool} />
                            <RadioImage img ={schools[1].img} title = {schools[1].title} name = "schools" onSelectSchool = {this.props.onSelectSchool} />
                            <RadioImage img ={schools[2].img} title = {schools[2].title} name = "schools" onSelectSchool = {this.props.onSelectSchool} />
                            <RadioImage img ={schools[3].img} title = {schools[3].title} name = "schools" onSelectSchool = {this.props.onSelectSchool} />
                            <RadioImage img ={schools[4].img} title = {schools[4].title} name = "schools" onSelectSchool = {this.props.onSelectSchool} />
                        </div>
                    </div>
                    <div id = "input">
                        <Input field = "Major" example = "Computer Science" items = {majors} />
                    </div>
                    <div id = "input">
                        <Input field = "Minor(s)" example = "Cognitive Science" items = {minors} />
                    </div>
                    <div id = "input">
                        <Input field = "Classes Taken" example = "AEM 2940" items = {classesTaken} />
                    </div>
                    <div id = "input">
                        <Input field = "Graduating Semester" example = "Spring 2019" items = {graduatingSemester} />
                    </div>
                    <div id = "input">
                        <Input field = "Desired Classes" example = "CS 4700" items = {desiredClasses} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;