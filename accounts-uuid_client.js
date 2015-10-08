Meteor.loginWithUuid = function (userId, callback) {
    if(Meteor.isCordova){
        console.log("DELETEME: device is null??", device.uuid);
        Accounts.callLoginMethod({
            methodArguments: [{uuid: device.uuid, userId: userId}],
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
