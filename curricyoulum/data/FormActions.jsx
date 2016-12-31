import FormActionTypes from './FormActionTypes.jsx';
import Dispatcher from './Dispatcher.jsx';
import WebApiUtils from '../utils/WebApiUtils.jsx';

const FormActions = {
    selectSchool(id) {
        Dispatcher.dispatch({
            type: FormActionTypes.SELECT_SCHOOL,
            id,
        });
        WebApiUtils.submit("engineering", "computer science");
    },

    submitForm(id) {
        Dispatcher.dispatch({
            type: FormActionTypes.SUBMIT_FORM,
            id,
        });
        WebApiUtils.submit("engineering", "computer science");
    },
};

export default FormActions;