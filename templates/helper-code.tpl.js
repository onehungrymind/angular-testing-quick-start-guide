describe('home page', function () {
    // Define global references for injections.
    var element, render, ctrl, scope;

    beforeEach(inject(function ($injector) {
        // Call the helper function that "creates" a page.
        // This just creates references to the attributes
        // on the returned object for use in this suite.
        var routeDetails = compileRouteTemplateWithController($injector, 'home');
        ctrl = routeDetails.controller;
        scope = routeDetails.scope;

        render = function () {
            element = routeDetails.render();
        };
    }));

    // Test your expectations. You can use ordinary jQuery methods
    it('should render the page title', function () {
        scope.home.title = 'Hello';
        render();
        expect(element.find('h1').text()).toBe('Hello');
    });

    it('should have body defined', function () {
        scope.home.body = 'body...';
        render();
        expect(element.find('p').text()).toBe('body...');
    });

    it('should call Messages.getMessage', function () {
        render();
        expect(Messages.getMessage).toHaveBeenCalled();

        ctrl.updateMessage('yo!');
        expect(Messages.setMessage).toHaveBeenCalled();
    });

    it('should call Messages.setMessage when submit is clicked', function () {
        render();
        element.find('input').val('Lukas');
        element.find('input').triggerHandler('input');
        scope.$digest();

        element.find('button').triggerHandler('click');
        scope.$digest();

        expect(Messages.getMessage).toHaveBeenCalled();
        expect(scope.home.message).toEqual('Lukas');
    });

    it('should call updateMessage on message', function () {
        var message = 'Hello Message';

        ctrl.updateMessage(message);

        expect(Messages.setMessage).toHaveBeenCalledWith(message);
    });
});