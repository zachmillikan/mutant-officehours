(function() {
  'use strict';

  angular.module('mutantApp', [
    // Angular modules
    'ui.router',

    // Third-party modules
    'firebase',

    // Custom modules
    'mutantApp.home',
    'mutantApp.mutantList',
    'mutantApp.auth',
    'mutantApp.core'
  ]);
})();
