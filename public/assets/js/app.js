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

balneario.controller('compartilheController', function($scope,$http){
    $scope.pageClass = 'page-compartilhe';

    $scope.submitUrl = function(data) {
        var data = { 
          'nome': $scope.nome, 
          'email': $scope.email, 
          'ideia': $scope.ideia 
        }; 

        console.log(data);

        $http({
            method: 'POST',
            url: '/api/ideia/',
            headers: { 'Content-Type' : 'application/x-www-form-urlencoded'},
            data:jQuery.param(data)
        });
        
        alert('Obrigado');

    };
});
