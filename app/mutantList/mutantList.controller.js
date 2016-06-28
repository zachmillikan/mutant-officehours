(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject=['mutantService', 'textMessageService', 'user', 'emailService'];

  function MutantListController(mutantService, textMessageService, user, emailService) {
    var vm = this;

    vm.addMutant = addMutant;
    vm.mutants = mutantService.mutantsByUser(user.uid);
    vm.newMutant = mutantService.Mutant();
    vm.deleteMutant = deleteMutant;
    vm.toggleComplete = toggleComplete;
    vm.sendText = sendText;
    vm.sendEmail = sendEmail;

    function addMutant() {
      vm.mutants.$add(vm.newMutant);
      vm.newMutant = mutantService.Mutant();
    }

    function deleteMutant(mutant) {
      vm.mutants.$remove(mutant);
    }

    function toggleComplete(mutant) {
      vm.mutants.$save(mutant);
    }

    function sendText(mutant) {
      textMessageService.sendText(mutant, vm.mutants);
    }

    function sendEmail(mutant) {
      emailService.sendEmail(mutant, mutant.email);
    }
  }
})();
