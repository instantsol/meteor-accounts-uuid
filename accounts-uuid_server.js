// Write your package code here!
// Handler to login with a phone number and code.
var createUser = function (options) {
    check(options, Match.ObjectIncluding({
        uuid: String,
        userId: Match.Optional(String),
    }));

    var uuid = options.uuid;

    var user = {services: {}};
    user.services.uuid = { uuid: uuid };
    user.uuid = uuid;
    var userId = Accounts.insertUserDoc(options, user);
    return userId;
};

Accounts.registerLoginHandler('uuid', function (options) {
    console.log("DELETEME: options", options);
    check(options, Match.ObjectIncluding({
        uuid: String,
        userId: Match.Optional(String),
    }));
    var user;
    if (options.userId) {
        user = Meteor.users.findOne({"_id":options.userId});
    } else {
        user = Meteor.users.findOne({"uuid":options.uuid});
    }
    if (user) {
        if (!user.uuid) {
            user.services.uuid = { uuid: options.uuid };
            user.uuid = options.uuid;
            Meteor.users.update(user._id, user);
        }
        userId = user._id;
    } else {
        userId = createUser(options);
    }
    return {userId: userId};
});
