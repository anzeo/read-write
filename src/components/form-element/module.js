System.register(['../read-write/module', './scripts/form-element'], function(exports_1) {
    var module_1, form_element_1;
    return {
        setters:[
            function (module_1_1) {
                module_1 = module_1_1;
            },
            function (form_element_1_1) {
                form_element_1 = form_element_1_1;
            }],
        execute: function() {
            exports_1("default",{
                name: 'ui.form-element'
            });
            angular.module('ui.form-element', ['ngMessages', module_1["default"].name])
                .directive('formElement', form_element_1["default"]);
        }
    }
});
