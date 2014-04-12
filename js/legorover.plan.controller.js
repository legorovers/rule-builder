angular.module('legorover.plan.controller', []).controller('planController', function ($scope, $location, $routeParams, planService, triggerService, actionService) {
    'use strict';
    $scope.options = {
        triggers: triggerService.get(),
        actions: actionService.get()
    };
    $scope.done = function () {
        $location.path('/');
    };
});