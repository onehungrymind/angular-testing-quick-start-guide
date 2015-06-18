var routeDetails = compileRouteTemplateWithController($injector, 'home');
ctrl = routeDetails.controller;
scope = routeDetails.scope;

render = function () {
    element = routeDetails.render();
};