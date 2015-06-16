Template.Subscribe.events({
    'submit form' : function(event) {

        var email = event.target.email.value;
        var organization = event.target.organization.value;
        var  comment = event.target.comment.value;

        function noEmail(){
            Materialize.toast('An email address is required', 8000);
        }

        //if (Match.test(email, '')) {
        //    Materialize.toast('An email address is required', 8000);
        //}
        //else {
            var doc = {
                email: email,
                organization: organization,
                comment: comment,
                timestamp: moment().unix()
            }
        console.log(check(doc, Emails.simpleSchema([{name : email, type: 'required', value: 'needs to be something'}])));

            Meteor.call("insertEmail", doc, function(error, result) {

                //if(error){
                //    Materialize.toast('An error occurred adding your email, please try again.', 8000);
                //}
                //else{
                    console.log(error, result);
                analytics.trackForm(event.target, "subscribed");
                //}
                //else if(result === 'DB'){
                //    Materialize.toast('An error occurred adding your email, please try again.', 8000);
                //}
                //else if (!result) {
                //    Materialize.toast('We already have your email.', 8000);
                //}
                //else{
                //    Session.set('FormSubmitted', true);
                //    event.target.email.value = "";
                //    event.target.organization.value = "";
                //    event.target.comment.value = "";
                //    Materialize.toast('Thank you for signing up. Stay tuned!', 8000);
                //
                //
                //}
            });
        //}

        return false
    }
});

Template.Subscribe.helpers({

    submitted: function(){
        return Session.get('FormSubmitted');
    }

});
