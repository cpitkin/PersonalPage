// Create Tech DB in Mongo
Tech = new Meteor.Collection('tech');

// Create schema object
Schema = {};

// TODO Add contact schema to Contact Collection (to be created) for form validation
//Schema.contact = new SimpleSchema({
//    name: {
//        type: String,
//        label: "Name"
//    },
//    email: {
//        type: String,
//        regEx: SimpleSchema.RegEx.Email,
//        label: "Email"
//    },
//    message: {
//        type: String,
//        label: "Message",
//        optional: true,
//        max: 1000
//    }
//});