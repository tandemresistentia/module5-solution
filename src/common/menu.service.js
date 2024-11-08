(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };

}
service.getMenuItem = function(shortName) {
  return $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json')
    .then(function(response) {
      // Look through all categories
      for (var category in response.data) {
        var menuItems = response.data[category].menu_items;
        // Look for matching short_name
        for (var i = 0; i < menuItems.length; i++) {
          if (menuItems[i].short_name === shortName) {
            return menuItems[i];
          }
        }
      }
      return null;
    });
};

})();
