(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$firebaseAuth', '$state', 'authService'];

  function AuthController($firebaseAuth, $state, authService) {
    var vm = this;

    vm.register = register;
    vm.login = login;
    vm.logout = logout;
    vm.isLoggedIn = authService.isLoggedIn;
    
    vm.user = {
      email: '',
      password: ''
    }

    function register(user) {
      return authService.register(user)
        .then(function() {
          vm.login(user);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    function login(user) {
      authService.login(user)
        .then(function(user) {
          $state.go('mutantList');
        })
        .catch(function(error){
          console.log(error);
        });
    }

    function logout() {
      authService.logout();
      $state.go('home');
    }
  }
})();
