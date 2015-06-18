var foo, bar = null;

beforeEach(function() {
    // Here we create a simple object foo with a method setBar, which takes one argument.
    foo = {
        setBar: function(value) {
            bar = value;
        }
    }
};

// Now whenever foo.setBar is called in this spec or in the source code,
// we can perform assertions on it.
spyOn(foo, 'setBar');

foo.setBar(123);

it("tracks that the spy was called", function() {
    expect(foo.setBar).toHaveBeenCalled();
});

it("tracks the arguments of its calls", function() {
    expect(foo.setBar).toHaveBeenCalledWith(123);
});