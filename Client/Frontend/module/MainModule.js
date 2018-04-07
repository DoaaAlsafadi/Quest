(function () {

    var app = angular.module("MainModule", ['ui.router']);

    app.config(function ($stateProvider,$urlRouterProvider) {
        // $logProvider.debugEnabled(true);
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'Frontend/templates/main.html',
                controller: 'mainController',
                controllerAs: 'main'
            })
            .state('view', {
                url: '/view',
                templateUrl: 'Frontend/templates/view.html',
                controller: 'viewController',
                controllerAs:"view"
            })
            $urlRouterProvider.otherwise('/');
    });

}())