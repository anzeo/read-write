System.register(['./scripts/read', './scripts/write', './scripts/read-write'], function(exports_1) {
    var read_1, write_1, read_write_1;
    return {
        setters:[
            function (read_1_1) {
                read_1 = read_1_1;
            },
            function (write_1_1) {
                write_1 = write_1_1;
            },
            function (read_write_1_1) {
                read_write_1 = read_write_1_1;
            }],
        execute: function() {
            exports_1("default",{
                name: 'ui.rw'
            });
            // angular wiring, TODO define where we want to put this exactly? Currently here's OK as we're going to use directives underlying anyway
            angular.module('ui.rw', [])
                .directive('readWrite', read_write_1["default"])
                .directive('read', read_1["default"])
                .directive('write', write_1["default"]);
        }
    }
});
