System.register([], function(exports_1) {
    function WriteDirective() {
        return {
            restrict: 'E',
            require: '^readWrite',
            transclude: true,
            templateUrl: 'src/components/read-write/views/write.html',
            link: function (scope, element, attrs, ReadWriteController) {
                ReadWriteController.enableWriteMode();
                scope.$on('$destroy', ReadWriteController.disableWriteMode);
            }
        };
    }
    exports_1("default", WriteDirective);
    return {
        setters:[],
        execute: function() {
        }
    }
});
