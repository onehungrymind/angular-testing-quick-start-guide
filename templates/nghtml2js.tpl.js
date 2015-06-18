// karma.conf.js
ngHtml2JsPreprocessor: {
    stripPrefix: 'src/',
        // stripSufix: '.ext',

        // setting this option will create only a single module that contains templates
        // from all the files, so you can load them all with module('foo')
        moduleName: 'myAppTemplates'
}