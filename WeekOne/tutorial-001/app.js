(function () {
  "use strict";

  angular
    .module('app', [])
    .controller('control', function ($scope) {
      $scope.name = 'Jessé Lopes';
      $scope.counter = 0;
    });

})();