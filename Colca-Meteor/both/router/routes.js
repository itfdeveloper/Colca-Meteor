/**
 * Created by carlosvacamorales on 7/14/14.
 */
Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound',
    templateNameConverter: 'none',
    routeControllerNameConverter: 'upperCamelCase',
    yieldTemplates: {
        'header': { to: 'header' },
        'footer': { to: 'footer' }
    }
});

Router.map(function () {
    /*
     Example:
     this.route('home', {path: '/'});
     */
    this.route ('home', {path: '/', template:'home'});
    this.route ('games', {path: '/games', template:'games'});
    this.route ('games', {path: '/players', template:'players'});

    //this.route ('dashboard', {path: '/dashboard',template:'Dashboard', loginRequired: true});
});
