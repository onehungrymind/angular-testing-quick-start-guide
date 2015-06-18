beforeEach(module("app", function($provide) {
    $provide.value("SimpleService", {
        someFn: function() {}
    });
}));