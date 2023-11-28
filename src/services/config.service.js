angular.module('app').factory('ConfigService', [
  function () {
    var service = {};

    service.apiBase = 'quiz-api-test1.eu-north-1.elasticbeanstalk.com';

    return service;
  },
]);
