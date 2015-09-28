System.register([], function(exports_1) {
    function default_1() {
        return {
            restrict: 'E',
            scope: {
                type: '@',
                value: '=',
                isRequired: '=required',
                label: '@',
                isReadOnly: '=readonly'
            },
            controller: function () { },
            controllerAs: 'FormElement',
            bindToController: true,
            templateUrl: 'src/components/form-element/views/form-element'
        };
    }
    exports_1("default", default_1);
    return {
        setters:[],
        execute: function() {
        }
    }
});
