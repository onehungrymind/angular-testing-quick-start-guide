// app/experiments/experiments.js
.service('Experiments', function($http) {
    var service = this;

    service.getExperiments = function() {
        return $http.get('data/experiments.json');
    };
})