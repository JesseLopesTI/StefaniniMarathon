(function () {
  "use strict";

  angular.module('checkListApp', []);

  angular.module('checkListApp')
    .controller('checkListController', checkListController);

    checkListController.$inject = ['$scope'];

    function checkListController($scope) {
      $scope.tasks = [
        { text: 'Study AngularJS', done: true },
        { text: 'Study English and Spanish', done: false }
      ];
    }

    // function checkListController() {
    //   var vm = this;
    // }

    // vm.tasks = [
    //   { text: 'Study AngularJS', done: true },
    //   { text: 'Do an application in AngularJS', done: false }
    // ];

    // vm.completedTasks = completedTasks;
    // vm.addTasks = addTasks;
    // vm.clearList = clearList;

    // function completedTasks() {
    //   var count = 0;

    //   angular.forEach(vm.tasks, function (task) {
    //     if (!task.done) count++;
    //   });
    //   return count;
    // }

    // function addTasks() {
    //   vm.tasks.push({ text: $scope.taskText, done: false });
    //   vm.taskText = '';
    // }

    // function clearList() {
    //   vm.tasks = vm.tasks.filter(function (task) {
    //     return !task.done;
    //   });
    // }
})();