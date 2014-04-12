angular.module('legorover.trigger.service', []).factory('triggerService', function () {
    'use strict';
    function get() {
        return [
            'obstacle',
            'explosion',
            'hole'
        ];
    }
    return {
        get: get
    };
});