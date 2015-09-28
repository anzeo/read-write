import ReadWriteController from './read-write-controller';

export default function WriteDirective(): angular.IDirective {

    return {
        restrict: 'E',
        require: '^readWrite',
        transclude: true,
        templateUrl: 'src/components/read-write/views/write.html',
        link: (scope: angular.IScope, element: angular.IAugmentedJQuery, attrs: angular.IAttributes, ReadWriteController: ReadWriteController) => {
            ReadWriteController.enableWriteMode();

            scope.$on('$destroy', ReadWriteController.disableWriteMode);
        }
    };
}
