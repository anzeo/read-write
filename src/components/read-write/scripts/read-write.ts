import ReadWriteController from './read-write-controller';

export default function ReadWriteDirective(): angular.IDirective {
    return {
        restrict: 'E',
        scope: true,
        controller: ReadWriteController,
        controllerAs: 'ReadWrite'
    };
}