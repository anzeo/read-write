import Read from './scripts/read';
import Write from './scripts/write';
import ReadWrite from './scripts/read-write';

// You can export extra members from this module here
export default {
    name: 'ui.rw'
};

// angular wiring, TODO define where we want to put this exactly? Currently here's OK as we're going to use directives underlying anyway
angular.module('ui.rw', [])
    .directive('readWrite', ReadWrite)
    .directive('read', Read)
    .directive('write', Write);