export default function(): angular.IDirective {

    return {
        restrict: 'E',
        scope: {
            type: '@',
            value: '=',
            isRequired: '=required',
            label: '@',
            isReadOnly: '=readonly'
        },
        controller: function(){},
        controllerAs: 'FormElement',
        bindToController: true,
        templateUrl: 'src/components/form-element/views/form-element'
    }
}