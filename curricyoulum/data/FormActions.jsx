import FormActionTypes from './FormActionTypes.jsx';
import Dispatcher from './Dispatcher.jsx';
import WebApiUtils from '../utils/WebApiUtils.jsx';

const FormActions = {
    selectSchool(id) {
        Dispatcher.dispatch({
            type: FormActionTypes.SELECT_SCHOOL,
            school: id,
        });
        WebApiUtils.submit(id, "computer science");
    },

    selectSeason(season) {
        Dispatcher.dispatch({
            type: FormActionTypes.SELECT_SEASON,
            season: season,
        });
    },

    submitForm(id) {
        Dispatcher.dispatch({
            type: FormActionTypes.SUBMIT_FORM,
            id,
        });
    },
};

export default FormActions;