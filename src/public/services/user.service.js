(function() {
    'use strict';
    
    angular.module('public')
    .service('UserService', UserService);
    
    function UserService() {
      var service = this;
      var userData = null;
    
      service.saveUser = function(user) {
        userData = user;
      };
    
      service.getUser = function() {
        return userData;
      };
    }
    })();