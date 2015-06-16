Router.map(function(){

    this.route('home', {
        path: '/',
        template: 'Home',
        yieldRegions: {
            'Navigation': {to: 'nav'},
            'HomeHeader': {to: 'header'},
            'Projects': {to: 'projects'},
            'Pilots': {to: 'pilots'},
            'Footer': {to: 'footer'}
        }
    });

});