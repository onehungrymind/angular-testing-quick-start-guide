// app/experiments/experiments.spec.js
describe('Experiments Model', function () {
    // After every spec, do the following:
    afterEach(inject(function ($httpBackend) {
        // Make sure we have flushed all of our requests.
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }));

    it('Should get experiments', inject(function (Experiments, $httpBackend, $rootScope) {
        var mockResponse = [];
        // Every time we hit the specified url,
        // respond with mockResponse( in this case an empty array).
        $httpBackend.when('GET', 'data/experiments.json').respond(mockResponse);

        // The promise reference now holds the $http call returned
        var promise = Experiments.getExperiments();
        // Flush the backend
        $httpBackend.flush();

        // Use .then() like you would normally.
        promise.then(function (result) {
            expect(result.data).toEqual(mockResponse);
        });

        // Manually trigger a $digest cycle
        $rootScope.$digest();
    }));
});