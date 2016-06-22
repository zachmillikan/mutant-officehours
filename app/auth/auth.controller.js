(function() {
  'use strict';

  angular
    .module('mutantApp.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$firebaseAuth'];

  function AuthController($firebaseAuth) {
    var vm = this;
    var auth = $firebaseAuth();

    vm.register = register;

    vm.user = {
      email: '',
      password: ''
    }

    function register(user) {
      return auth.$createUserWithEmailAndPassword(user.email, user.password)
        .then(function(user) {
          console.log(user);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
})();
