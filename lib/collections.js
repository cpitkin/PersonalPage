Tech = new Meteor.Collection('tech');

Schema = {};

Schema.contact = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "Email"
    },
    message: {
        type: String,
        label: "Message",
        optional: true,
        max: 1000
    }
});