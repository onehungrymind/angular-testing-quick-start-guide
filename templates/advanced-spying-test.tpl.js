// app/experiments/experiments.spec.js
describe('ExperimentsCtrl', function () {
    // Inject and assign services and create the controller.
    beforeEach(inject(function ($controller, _Messages_, _Experiments_, $q) {
        messages = _Messages_;
        experiments = _Experiments_;

        // Here we create a spy just like before,
        // but now it is spying on a method attached to a service.
        spyOn(messages, 'setMessage');
        // Every time Messages.getMessage is called,
        // we want the value 'Hello!' to be returned.
        spyOn(messages, 'getMessage').and.returnValue('Hello!');

        // Every time Messages.getExperiments is called,
        // we execute the function contained within the callFake method.
        spyOn(experiments, 'getExperiments').and.callFake(
            function () {
                // Since we don't want to deal with an $http call
                // in the controller, we mock it out using $q.
                var deferred = $q.defer();
                deferred.resolve({data: []});
                return deferred.promise;
            }
        );

        ctrl = $controller('ExperimentsCtrl', {
            Messages: messages,
            Experiments: experiments
        });
    }));

    // Now we can see if the methods we are spying on actually execute;
    // also, we can test some expectations on the portions of the controller
    // that interact with our spies.
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