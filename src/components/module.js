System.register(['./form-element/module'], function(exports_1) {
    var module_1;
    return {
        setters:[
            function (module_1_1) {
                module_1 = module_1_1;
            }],
        execute: function() {
            angular.module('ui', [module_1["default"].name]);
            exports_1("default",{
                name: 'ui'
            });
        }
    }
});
