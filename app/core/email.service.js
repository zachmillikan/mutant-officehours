(function() {
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('emailService', emailService);

  emailService.$inject = ['firebaseDataService'];

  function emailService (firebaseDataService){
    var service = {
      sendEmail: sendEmail,
    };

    return service;

    //////////////////

    function sendEmail(mutant, mutantEmail) {
      var message = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: mutant.email,
        subject: 'Hello',
        text: 'Testing some Mailgun awesomness!'
      };
      firebaseDataService.email.push(mutantEmail);
      mutants.$save(mutant);
    }
  }
})();
