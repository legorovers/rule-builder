angular.module('legorover.action.service', []).factory('actionService', function () {
    'use strict';
    function get() {
        return [
            'right',
            'left',
            'forward',
            'back',
            'stop'
        ];
    }
    return {
        get: get
    };
});