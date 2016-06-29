(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$state', 'authService', ];

  function AuthController($state, authService) {
    var vm = this;

  }
})();
