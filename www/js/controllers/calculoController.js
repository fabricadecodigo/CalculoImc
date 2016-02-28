angular.module('calculoImcApp')
.controller('calculoController', function($scope, $rootScope, $ionicPopup, $location, calculoImc) {
  $scope.dados = { };

  //ng-submit="createTask(task)"


  $scope.calcular = function (dados) {
    if (!dados.peso) {
      $ionicPopup.alert({ title: 'Erro', template: 'O peso é obrigatório' });
    } else if (!dados.altura) {
      $ionicPopup.alert({ title: 'Erro', template: 'A altura é obrigatória' });
    } else {
      var imc = calculoImc.calcular(dados.peso, dados.altura);
      var faixa = calculoImc.getFaixa(imc);

      $rootScope.imc = imc;
      $rootScope.faixa = faixa;
      $location.path('/resultado');
    }
  }
});
