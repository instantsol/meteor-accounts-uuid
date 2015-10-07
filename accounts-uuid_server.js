// Write your package code here!
// Handler to login with a phone number and code.
var createUser = function (options) {
    check(options, Match.ObjectIncluding({
        uuid: Match.Optional(String),
    }));

    var uuid = options.uuid;
    if (!uuid) {
        throw new Meteor.Error(400, "Need to set a uuid");
    }

    var user = {services: {}};
    user.services.uuid = { uuid: uuid };
    user.uuid = uuid;
    var userId = Accounts.insertUserDoc(options, user);
    return userId;
};

Accounts.registerLoginHandler('uuid', function (options) {
    console.log("DELETEME: uuid stuff??" );
    check(options, {
        uuid: String,
    });
    if (!Meteor.isCordova) return;
    console.log("DELETEME: uuid stuff", options.uuid);
    return ;
});
