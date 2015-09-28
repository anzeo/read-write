angular.module('ui.table').directive('asyncTableCol', function () {
    return {
        restrict: 'E',
        transsclude: 'element',
        scope: {
            field: '@'
        },
        require: ['^asyncTable', 'asyncTableCol'],
        templateUrl: 'src/components/table/views/async-table-col.html',
        controller: 'AsyncTableColController',
        controllerAs: 'Column',
        bindToController: true,
        link: function (scope, element, attrs, controllers) {
            var AsyncTableController = controllers[0];
            var AsyncTableColController = controllers[1];

            AsyncTableController.registerColumn(AsyncTableColController.field);
        }
    }
});