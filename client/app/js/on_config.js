function OnConfig($routeProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode(false);

  $routeProvider
    .when('/', {
        controller: 'ExampleCtrl as home',
        templateUrl: 'home.html'
      })
    .when('/people', {
        controller: 'PeopleCtrl as people',
        templateUrl: 'people.html'
      })
    .otherwise('/');

}

export default OnConfig;
