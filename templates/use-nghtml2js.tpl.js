describe('UNIT test myTemplates', function() {
    beforeEach(module('myAppTemplates'));
    describe('home template', function() {
        var homeTemplate,
            compile;

        beforeEach(inject(function($templateCache, $compile) {
            homeTemplate = $templateCache.get('app/home/home.tmpl.html');
            compile = $compile;
        }));

        it('should have an h1 with my title', function() {
            var testScope = {
                home: {
                    title: 'blah'
                }
            };

            var element = compile(homeTemplate)(testScope);
            expect(element.find('h1').text()).toBe('blah');
        });
    });
});