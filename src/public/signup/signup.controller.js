(function() {
    'use strict';
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['MenuService', 'UserService'];
    function SignUpController(MenuService, UserService) {
      var $ctrl = this;
      $ctrl.user = {};
      $ctrl.showMessage = false;
      $ctrl.menuItemNotFound = false;
    
      $ctrl.validateMenuItem = function() {
        if ($ctrl.user.favoriteItem) {
          MenuService.getMenuItem($ctrl.user.favoriteItem)
            .then(function(response) {
              $ctrl.menuItemNotFound = !response;
              if (response) {
                $ctrl.user.favoriteItemDetails = response;
              }
            });
        }
      };
    
      $ctrl.submit = function() {
        MenuService.getMenuItem($ctrl.user.favoriteItem)
          .then(function(response) {
            if (response) {
              $ctrl.user.favoriteItemDetails = response;
              UserService.saveUser($ctrl.user);
              $ctrl.showMessage = true;
              $ctrl.menuItemNotFound = false;
            } else {
              $ctrl.menuItemNotFound = true;
            }
          });
      };
    }
    })();