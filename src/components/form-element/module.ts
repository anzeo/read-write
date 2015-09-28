import ReadWrite from '../read-write/module';
import FormElement from './scripts/form-element';

export default {
    name: 'ui.form-element'
};

angular.module('ui.form-element', ['ngMessages', ReadWrite.name])
    .directive('formElement', FormElement);
