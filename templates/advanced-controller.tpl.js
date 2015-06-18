// src/app/about/about.spec.js
describe('Unit: About', function () {

    // Define global references for injections.
    var ctrl, messages;

    beforeEach(module('myApp.about'));
    beforeEach(module('myApp.models.messages'));
    beforeEach(module('ui.router'));

    beforeEach(inject(function ($controller, _Messages_) {
        messages = _Messages_;

        spyOn(messages, 'setMessage');
        spyOn(messages, 'getMessage').and.returnValue('Hello!');

        // Instantiate the controller with an object of the dependencies
        ctrl = $controller('AboutCtrl', {
            Messages: messages
        });
    }));

    describe('AboutCtrl', function () {
        // Test some basic expectations about the controller
        it('should have title defined', function () {
            expect(ctrl.title).toBeDefined();
        });

        it('should have body defined', function () {
            expect(ctrl.body).toBeDefined();
        });

        it('should call Messages.getMessage', function () {
            expect(messages.getMessage).toHaveBeenCalled();

            expect(ctrl.message).toEqual('Hello!');
        });

        it('should call updateMessage on message', function () {
            var message = 'Hello Message';

            ctrl.updateMessage(message);

            expect(messages.setMessage).toHaveBeenCalledWith(message);
        });
    });
});