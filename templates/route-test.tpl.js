// app/about/about.spec.js
describe('About Route', function () {
    // Define global references for injections
    var $state,
        $rootScope,
        state = 'about';

    // Inject and assign the $state and $rootScope services.
    // Put the template in template cache.
    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
        $state = _$state_;
        $rootScope = _$rootScope_;

        $templateCache.put('app/about/about.tmpl.html', '');
    }));

    // Test whether the url is correct
    it('should respond to URL', function() {
        expect($state.href(state)).toEqual('/about');
    });

    // Test whether our state activates correctly
    it('should activate the state', function() {
        $state.go(state);
        $rootScope.$digest();
        expect($state.current.name).toBe(state);
    });
});