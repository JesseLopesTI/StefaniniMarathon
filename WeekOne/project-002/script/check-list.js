(function () {
  "use strict";

  angular.module('checkListApp', []);

  angular.module('checkListApp')
    .controller('checkListController', checkListController);

    checkListController.$inject = ['$scope'];

    function checkListController($scope) {
      var vm = this;

      vm.tasks = [
        { text: 'Study AngularJS', done: true },
        { text: 'Study English and Spanish', done: false }
      ];

      vm.left = left;
      vm.addTask = addTask;
      vm.archive = archive;

      function addTask() {
        vm.tasks.push({ text: vm.taskText, done: false });
        vm.taskText = '';
      }

      function left() {
        var count = 0;
        angular.forEach(vm.tasks, function (task) {
          if (!task.done) count++;
        });
        return count;
      }

      function archive() {
        vm.tasks = vm.tasks.filter(function (task) {
          return !task.done
        });
      }
    }
})();