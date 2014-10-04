'use strict';

console.log('loaded ember-easyform-cli');

module.exports = {
  name: 'ember-easyform-cli',
  included: function(app) {
    this._super.included(app);

    console.log('including ember-easyform-cli into app');
    
    // this.app.import('ember-easyform-cli/distributions/ember-easyform-cli.es6.js');
    this.app.import(app.bowerDirectory + '/ember-easyform-cli/distributions/ember-easyform-cli.js');

    console.log('app', app.legacyFilesToAppend);
  }
};

