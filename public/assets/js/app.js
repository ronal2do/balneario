var balneario = angular.module('balneario', ['ngAnimate', 'ngRoute']);

balneario.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeController'
      }).
       when('/eixos', {
        templateUrl: 'partials/eixos.html',
        controller: 'eixosController'
      }).
     	when('/compromisso', {
        templateUrl: 'partials/compromisso.html',
        controller: 'compromissoController'
      }).
      when('/compartilhe', {
        templateUrl: 'partials/compartilhe.html',
        controller: 'compartilheController'
      }).
      
      otherwise({
        redirectTo: '/'
      });
  }]);


// CONTROLLERS ============================================
// home page controller
balneario.controller('homeController', function($scope) {
    $scope.pageClass = 'page-home';
});

// about page controller
balneario.controller('eixosController', function($scope) {
    $scope.pageClass = 'page-eixos';
});

// contact page controller
balneario.controller('compromissoController', function($scope) {
    $scope.pageClass = 'page-compromisso';
});

// contact page controller
balneario.controller('compartilheController', function($scope) {
    $scope.pageClass = 'page-compartilhe';
});