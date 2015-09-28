angular.module('ui.table').controller('AsyncTableController', function () {
    var controller = this;
    //controller.pipe = pipe;
    controller.registerColumn = registerColumn;

    controller.cols = [];

    function registerColumn(field) {
        controller.cols.push(field);
    }

    function pipe() {

        scope.isLoading = true;

        var tableState = StTableController.tableState();

        var pagination = tableState.pagination;
        var number = pagination.number || 10;  // Number of entries showed per page.
        var start = pagination.start || 0; // This is NOT the page number, but the index of item in the list that you want to use to display the table.

        $http.get("/items/" + start + "/" + number).then(function (result) {
            scope.items = result.data.data;
            tableState.pagination.totalItemCount = result.data.total; //set the number of pages so the pagination can update
            tableState.pagination.numberOfPages = result.data.nrOfPages; //set the number of pages so the pagination can update
            scope.isLoading = false;
        });

    }
});