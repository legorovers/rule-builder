angular.module('legorover.rule-builder.controller', []).controller('mainController', function ($scope) {
    'use strict';
    $scope.options = {
        events: [
            {
                title: 'obstacle',
                drag: true
            },
            {
                title: 'hole',
                drag: true
            },
            {
                title: 'explosion',
                drag: true
            }
        ]
    };
    $scope.m2 = [];
});