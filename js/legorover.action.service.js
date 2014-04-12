angular.module('legorover.action.service', []).factory('actionService', function () {
    'use strict';
    function get() {
        return [
            {
                title: 'left'
            },
            {
                title: 'right'
            },
            {
                title: 'forward'
            },
            {
                title: 'back'
            }
        ];
    }
    return {
        get: get
    };
});