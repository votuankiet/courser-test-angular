(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['data'];//inject from route state resolve
function ItemsController(data) {
  var itemsController = this;
  itemsController.menu_items = data.menu_items;
  itemsController.requestedCategory = data.category.name;
}

})();
