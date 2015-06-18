// app/experiments/experiments.js
.directive('experiment', function(){
    var linker = function (scope, element, attrs) {
        element.on('click', function(){
            scope.doExperiment();
        })
    };

    var controller =  function($scope){
        $scope.doExperiment = function() {
            $scope.$apply(function(){
                $scope.experiment.completed++;
            });
        };
    };

    return {
        scope: true,
        restrict: 'E',
        template: '&#60;div class="experiment"&#62;' +
        '&#60;h3&#62;{{experiment.name}}&#60;/h3&#62;' +
        '&#60;p&#62;{{experiment.description}}&#60;/p&#62;' +
        '&#60;p&#62;&#60;strong&#62;{{experiment.completed}}&#60;/strong&#62;&#60;/p&#62;' +
        '&#60;/div&#62;',
        link: linker,
        controller: controller
    }
})