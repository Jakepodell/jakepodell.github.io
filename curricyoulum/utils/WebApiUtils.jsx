import request from 'superagent';

const WebApiUtils = {

    submit: function (school, major) {
        console.log("dummy for submitting a web api post");
        // request.post(APIEndpoints.REGISTRATION)
        //     .send({
        //         user: {
        //             email: email,
        //             username: username,
        //             password: password,
        //             password_confirmation: passwordConfirmation
        //         }
        //     })
        //     .set('Accept', 'application/json')
        //     .end(function (error, res) {
        //         if (res) {
        //             if (res.error) {
        //                 var errorMsgs = _getErrors(res);
        //                 ServerActionCreators.receiveLogin(null, errorMsgs);
        //             } else {
        //                 json = JSON.parse(res.text);
        //                 ServerActionCreators.receiveLogin(json, null);
        //             }
        //         }
        //     });
    }
}

export default WebApiUtils;