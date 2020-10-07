(function () {
  "use strict";

  angular.module('listaTarefasApp', []);

  angular.module('listaTarefasApp')
    .controller('listaTerefasController', listaTarefasController);

    listaTarefasController.$inject = ['$scope'];

    function listaTarefasController($scope) {
      $scope.tarefas = [
        { text: 'Estudar AngularJS', feito: true },
        { text: 'Fazer uma aplicação em AngularJS', feito: false }
      ];

      // $scope.restam = restam;

      // function restam(params) {
        // var count = 0;
        // angular.forEach($scope.tarefas, function (trf) {
          // if (!trf.feito) count++;
        // });

        // return count;
      // }
    }

})();