System.register([], function(exports_1) {
    function ReadDirective() {
        return {
            restrict: 'E',
            require: '^readWrite',
            transclude: true,
            templateUrl: 'src/components/read-write/views/read.html',
            link: function (scope, element, attrs, ReadWriteController) { }
        };
    }
    exports_1("default", ReadDirective);
    return {
        setters:[],
        execute: function() {
        }
    }
});
