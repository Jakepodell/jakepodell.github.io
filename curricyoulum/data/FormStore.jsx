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
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case FormActionTypes.SELECT_SCHOOL:
                state.school = action.school;
                return state;
            case FormActionTypes.SUBMIT_FORM:
                return state;
            default:
                return state;
        }
    }
}

export default new FormStore();