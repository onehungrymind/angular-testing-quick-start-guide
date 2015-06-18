it('should do something', function(done) {
    someAsyncOperation
        .then(function() {
            done();
        })
        .catch(function(err) {
            done(err);
        });
});