(function () {
  "use strict";

  angular
    .module('app', [])
    .controller('control', function ($scope) {
      $scope.counterOne = 0;
      $scope.counterTwo = 0;
      $scope.homeTeam = "home";
      $scope.awayTeam = "away";
    });

})();