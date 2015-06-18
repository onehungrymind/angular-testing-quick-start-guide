// app/experiments/experiments.js
.controller('ExperimentsCtrl', function (Messages, Experiments) {
    var experiments = this;
    experiments.title = 'Experiments Page';
    experiments.body = 'This is the about experiments body';

    experiments.message = Messages.getMessage();

    Experiments.getExperiments()
        .then(function(result){
            experiments.experiments = result.data;
        });

    experiments.updateMessage = function (m) {
        Messages.setMessage(m);
    };
})