// Adding loading and notFound templates to all routes
Router.configure({
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

// Map routes in Iron Router
Router.map(function(){

    // Home route loading the Home template
    this.route('home', {
        path: '/',
        template: 'Home',
        // Load certain templates into specific regions of the Home template
        yieldRegions: {
            'Navigation': {to: 'nav'},
            'HomeHeader': {to: 'header'},
            'Projects': {to: 'projects'},
            'Systems': {to: 'systems'},
            'Footer': {to: 'footer'}
        },
        // Wait for the data to be subscribed to and moved to the client
        waitOn: function(){
            return Meteor.subscribe('Tech');
        }
    });

});