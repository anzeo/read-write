System.register(['../components/module'], function(exports_1) {
    var module_1;
    return {
        setters:[
            function (module_1_1) {
                module_1 = module_1_1;
            }],
        execute: function() {
            angular.module('demo', [module_1["default"].name]).controller('DemoCtrl', function () {
                this.greeting = "Hello";
                this.items = [
                    { firstName: 'Laurent', lastName: 'Renard', age: 21, balance: 102, email: 'whatever@gmail.com' },
                    { firstName: 'Blandine', lastName: 'Faivre', age: 25, balance: -2323.22, email: 'oufblandou@gmail.com' },
                    { firstName: 'Francoise', lastName: 'Frere', age: 27, balance: 42343, email: 'raymondef@gmail.com' },
                    { firstName: 'Laurent2', lastName: 'Renard', age: 21, balance: 102, email: 'whatever@gmail.com' },
                    { firstName: 'Blandine2', lastName: 'Faivre', age: 25, balance: -2323.22, email: 'oufblandou@gmail.com' },
                    { firstName: 'Francoise2', lastName: 'Frere', age: 27, balance: 42343, email: 'raymondef@gmail.com' },
                    { firstName: 'Laurent3', lastName: 'Renard', age: 21, balance: 102, email: 'whatever@gmail.com' },
                    { firstName: 'Blandine3', lastName: 'Faivre', age: 25, balance: -2323.22, email: 'oufblandou@gmail.com' },
                    { firstName: 'Francoise3', lastName: 'Frere', age: 27, balance: 42343, email: 'raymondef@gmail.com' }
                ];
            });
            angular.element(document).ready(function () {
                angular.bootstrap(document, ['demo']);
            });
        }
    }
});
