import React from 'react';
import {render} from 'react-dom';
import Input from './input.jsx';
import RadioImage from './radio-component.jsx';
import Constants from '../constants/constants.jsx';
import WebApiUtils from '../utils/WebApiUtils.jsx';

/**
 * A list of inputs, created from elements of the fields prop
 */
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {school: "", year: ""}
    }

    onSelectSchool(school) {
        this.setState({school: school})
        this.props.onSelectSchool(school);
    }

    onSelectSemester(semester) {
        this.setState({year: semester});
    };

    onSelectSeason(season) {
        this.props.onSelectSeason(season)
    }

    componentDidMount() {
        WebApiUtils.getClasses();
    }

    renderSchools() {
        return Constants.schools.map((school) => {
            return <RadioImage key = {school.title} clickable = {<img src={school.img} onClick={this.onSelectSchool.bind(this, school.title)}/>} id = {school.title} title = {school.title} name = "schools" selected = {this.state.school} />
        });
    }

    renderSemesters() {
        return Constants.semesterYears.map((year) => {
            return <RadioImage key = {year} clickable = {this.renderSemester(this.props.season, year)}  id = {year} title = "" name = "semesters" selected = {this.state.year} />;
        });
    }

    renderSemester(season, year) {
        return(
          <div id = "semester" onClick = {this.onSelectSemester.bind(this, year)}>
              <div id = "season" className = {season}>
                  {season.toUpperCase()}
              </div>
              <div id = "year" className = {season}>
                  {"'"+year}
              </div>
          </div>
        );
    }

    render() {
        return (
            <form autoComplete="off" id = "form">
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
                    <Input field = "Desired Classes:" example = "CS 4700" suggestions = {Constants.classesDesired} />
                    <hr/>
                    <Input field = "Required Classes:" example = "CS 4700" suggestions = {Constants.classesDesired} />
                    <hr/>
                    <div id = "radio-container">
                        <p id = "form_title">Graduating Semester:</p>
                        <div id = "semester-chooser">
                            <RadioImage key = "spring" clickable = {<img src = "../img/icons/spring.png" onClick={this.onSelectSeason.bind(this, "spring")}/>} id = "spring" title = "spring" name = "seasons" selected = {this.props.season} />
                            <RadioImage key = "fall" clickable = {<img src = "../img/icons/fall.png" onClick={this.onSelectSeason.bind(this, "fall")}/>} id = "fall" title = "fall" name = "seasons" selected = {this.props.season} />
                            {this.renderSemesters()}
                        </div>
                    </div>
                </div>
                <input id = "submit" type="submit" value = "Submit"/>
            </form>
        );
    }
}

export default Form;