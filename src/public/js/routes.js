(function() {
    'use strict';

    angular.module('public')
    .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];
    function routeConfig ($stateProvider) {
        // Default routes here...

        // Add new routes
        $stateProvider
            .state('public.signup', {
                url: '/sign-up',
                templateUrl: 'src/public/templates/sign-up.template.html',
                controller: 'SignUpController',
                controllerAs: 'signUpCtrl'
            })
            .state('public.myinfo', {
                url: '/my-info',
                templateUrl: 'src/public/templates/my-info.template.html',
                controller: 'MyInfoController',
                controllerAs: 'myInfoCtrl'
            });
    }
})();
