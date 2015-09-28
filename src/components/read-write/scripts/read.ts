export default function ReadDirective() : angular.IDirective {
    return {
        restrict: 'E',
        require: '^readWrite',
        transclude: true,
        templateUrl: 'src/components/read-write/views/read.html',
        link: function(scope, element, attrs, ReadWriteController){}
    };
}