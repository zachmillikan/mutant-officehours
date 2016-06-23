(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

  MutantListController.$inject=['$firebaseArray', 'mutantService'];

  function MutantListController($firebaseArray, mutantService) {
    var vm = this;
    var mutantsRef = firebase.database().ref().child('mutants');
    var textsRef = firebase.database().ref().child('text');

    vm.addMutant = addMutant;
    vm.mutants = $firebaseArray(mutantsRef);
    vm.newMutant = mutantService.Mutant();
    vm.deleteMutant = deleteMutant;
    vm.toggleComplete = toggleComplete;
    vm.sendText = sendText;

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
      var newText = {
        name: mutant.name,
        topic: mutant.topic,
        phoneNumber: mutant.phone
      };
      textsRef.push(newText);
      mutant.notified = true;
      vm.mutants.$save(mutant);
    }
  }
})();
