Template.Navigation.rendered = function(){

    // Initialize navigation on mobile
    $('.button-collapse').sideNav({
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );

    // Initialize wow for animations
    new WOW().init();

    // Initialize modal trigger for Contact Me
    $('.modal-trigger').leanModal({
        ready: function () {
            analytics.track("Contact Opened", {
                eventName: "Contact Open"
            });

        }
    });
}