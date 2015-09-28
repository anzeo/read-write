angular.module('ui.table', ['smart-table']).config(function(stConfig){
    stConfig.sort.skipNatural = true;
   // stConfig.pagination.template = "table/async-table-pagination.html";
});