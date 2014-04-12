angular.module('legorover.plan.service', []).factory('planService', function () {
    'use strict';
    var plans = [];
    function get(id) {
        var i, len;
        if (id) {
            for (i = 0, len = plans.length; i < len; i += 1) {
                if (plans[i].id === parseInt(id)) {
                    return plans[i];
                }
            }
            return;
        }
        return plans;
    }
    function create() {
        var id = 1,
            newPlan = {
                title: 'New plan',
                trigger: '',
                actions: []
            };
        do {
            id += 1;
        } while (get(id));
        newPlan.id = id;
        plans.push(newPlan);
        return plans[plans.length - 1];
    }
    return {
        get: get,
        create: create
    };
});