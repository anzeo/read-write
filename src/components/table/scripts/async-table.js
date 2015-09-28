angular.module('ui.table').directive('asyncTable', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            items: '=',
            itemsPerPage: '@'
        },
        templateUrl: 'src/components/table/views/async-table.html',
        controller: 'AsyncTableController',
        controllerAs: 'Table',
        bindToController: true
    };
});