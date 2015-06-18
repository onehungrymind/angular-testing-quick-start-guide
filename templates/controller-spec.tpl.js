// src/app/about/about.js
.controller('AboutCtrl', function (Messages) {
    var about = this;
    about.title = 'About Page';
    about.body = 'This is the about page body';

    about.message = Messages.getMessage();

    about.updateMessage = function (m) {
        Messages.setMessage(m);
    };
})