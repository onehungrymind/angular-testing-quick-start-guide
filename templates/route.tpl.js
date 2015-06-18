// app/about/about.js
.config(function ($stateProvider) {
    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'app/about/about.tmpl.html',
            controller: 'AboutCtrl as about'
        })
    ;
})