angular.module('legorover.plan.controller', []).controller('planController', function ($scope, $location, $routeParams, planService, triggerService, actionService) {
    'use strict';
    console.log(planService.get());
    if ($routeParams.planID) {
        $scope.plan = planService.get($routeParams.planID);
        if (!$scope.plan) {
            //return $location.path('/');
        }
    } else {
        $scope.plan = planService.create();
    }
    console.log($scope.plan);
    $scope.options = {
        triggers: triggerService.get(),
        actions: actionService.get()
    };
    if (!$scope.plan.trigger) {
        $scope.plan.trigger = $scope.options.triggers[0];
    }
    $scope.done = function () {
        return $location.path('/');
    };
});