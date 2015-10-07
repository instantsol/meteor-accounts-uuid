Meteor.loginWithUuid = function (callback) {
    if(Meteor.isCordova){
        Accounts.callLoginMethod({
            methodArguments: [{uuid: device.uuid}],
            userCallback: function (error, result) {
                if (error) {
                    callback && callback(error);
                } else {
                    callback && callback();
                }
            }
        });
    } else {
        callback && callback("Not mobile app.");
    }
};
