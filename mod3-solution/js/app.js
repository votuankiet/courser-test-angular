(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemDirective);;

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var ctrl = this;
  ctrl.foundItems = undefined;

  ctrl.narrowItDown = function(){
      if (!ctrl.searchTerm){
        ctrl.foundItems = [];
        return;
      }

      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
      promise.then(function(foundItems){

        ctrl.foundItems = foundItems;


      }).catch(function(error){
        console.error(error);
      });
  }

  ctrl.removeItem = function (itemIndex) {
    ctrl.foundItems.splice(itemIndex, 1);
  };
};

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    // .then() return a promise, in this code, it return a pormise of foundItems
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
        // process result and only keep items that match
        var responseData = result.data;
        var foundItems = [];
        responseData.menu_items.forEach(function(item){
          if (item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
            foundItems.push(item);
          }
        });

        // return processed items
        return foundItems;
    });

    return promise;
  };
}


function FoundItemDirective() {
  var ddo = {
    templateUrl: 'foundItem.html',
    restrict: "E",
    scope: {
      foundItems: '<',
      onRemove: "&"
    }
  };

  return ddo;
}


})();
