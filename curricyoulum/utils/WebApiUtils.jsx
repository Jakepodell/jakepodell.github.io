import request from 'superagent';

const WebApiUtils = {

    submit: function (school, major) {
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
    },

    getClasses: function () {
        request.get("https://localhost:3000/classes", function(err, res){
            if (err) throw err;
            console.log(JSON.parse(res.text));
        });
    }
}

export default WebApiUtils;