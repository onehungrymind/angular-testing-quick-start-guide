// app/experiments/experiments.spec.js
describe('Experiments Directive', function () {
    // Define global references for injections
    var element, experiment;

    beforeEach(inject(function ($rootScope, $compile) {
        // Mock out an experiment
        $rootScope.experiment = {
            "name": "Experiment 1",
            "description": "This is an experiment",
            "completed": 0
        };
        // Create an html element with the directive
        element = angular.element('&#60;experiment&#62;&#60;/experiement&#62;');
        // Compile the element and $rootScope,
        // which essentially instantiates the directive as it would be on a web page.
        $compile(element)($rootScope);
    }));

    it('should increment experiment completed count', function () {
        // Get the directive's scope
        var localScope = element.scope();

        // Test some expectations about the directive.
        expect(localScope.experiment.completed).toBe(0);

        localScope.doExperiment();

        expect(localScope.experiment.completed).toBe(1);
    });
})