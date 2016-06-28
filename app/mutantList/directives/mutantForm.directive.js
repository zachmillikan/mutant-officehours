(function () {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .directive('xtMutantForm', xtMutantForm);

  function xtMutantForm () {
    return {
      templateURL: 'app/mutantList/directives/mutantForm.html',
      restrict: 'E',
    };
  }
})();
