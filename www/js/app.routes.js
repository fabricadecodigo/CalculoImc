angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('calculo', {
      url: '/',
      templateUrl: 'templates/calculo.html',
      controller: 'calculoController'
    })
    .state('resultado', {
      url: '/resultado',
      templateUrl: 'templates/resultado.html',
      controller: 'resultadoController'
    })
    $urlRouterProvider.otherwise('/')
});
