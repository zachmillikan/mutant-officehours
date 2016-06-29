(function () {
  'use strict';

  angular
   .module('mutantApp.auth')
   .directive('xtAuthForm', xtAuthForm);

  function xtAuthForm() {
    return {
      templateUrl: 'app/auth/directives/auth.html',
      restrict: 'E',
    };
  }

AuthFormController = ['$state', 'authService']

function AuthFormController ($state, authService) {
  var vm = this;

  vm.register = register;
  vm.login = login;
  vm.error = null;

  vm.user = {
    email: '',
    password: ''
  }

  function register(user) {
    return authService.register(user)
      .then(function() {
        vm.login(user);
      })
      .then(function() {
        return authService.sendWelcomeEmail(user.email);
      })
      .catch(function(error) {
        vm.error = error;
      });
  }

  function login(user) {
    authService.login(user)
      .then(function(user) {
        $state.go('mutantList');
      })
      .catch(function(error){
        vm.error = error;
      });
  }

}
})();
