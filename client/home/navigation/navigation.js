Template.Navigation.rendered = function(){

    $('.button-collapse').sideNav({
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );

    new WOW().init();

    $('.modal-trigger').leanModal();

}