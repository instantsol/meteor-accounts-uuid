// Write your package code here!
// Handler to login with a phone number and code.
var createUser = function (options) {
    check(options, {
        uuid: String,
    });

    var uuid = options.uuid;

    var user = {services: {}};
    user.services.uuid = { uuid: uuid };
    user.uuid = uuid;
    var userId = Accounts.insertUserDoc(options, user);
    return userId;
};

Accounts.registerLoginHandler('uuid', function (options) {
    check(options, {
        uuid: String,
    });
    var user = Meteor.users.findOne({"uuid":options.uuid});
    var userId ;
    if (user) {
        userId = user._id;
    } else {
        userId = createUser(options);
    }
    return {userId: userId};
});
