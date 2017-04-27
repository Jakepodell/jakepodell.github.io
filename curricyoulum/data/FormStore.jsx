import {ReduceStore} from 'flux/utils';
import FormActionTypes from './FormActionTypes.jsx';
import Dispatcher from './Dispatcher.jsx';

class FormStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {
            school: "",
            season: "spring",
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case FormActionTypes.SELECT_SCHOOL:
                return {school: action.school, season: state.season};
            case FormActionTypes.SUBMIT_FORM:
                return state;
            case FormActionTypes.SELECT_SEASON:
                return {school: state.school, season: action.season};
            default:
                return state;
        }
    }
}

export default new FormStore();