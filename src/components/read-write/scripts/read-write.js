System.register(['./read-write-controller'], function(exports_1) {
    var read_write_controller_1;
    function ReadWriteDirective() {
        return {
            restrict: 'E',
            scope: true,
            controller: read_write_controller_1["default"],
            controllerAs: 'ReadWrite'
        };
    }
    exports_1("default", ReadWriteDirective);
    return {
        setters:[
            function (read_write_controller_1_1) {
                read_write_controller_1 = read_write_controller_1_1;
            }],
        execute: function() {
        }
    }
});
