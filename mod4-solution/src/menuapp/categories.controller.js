(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categories'];//inject from route state resolve
function CategoriesController(categories) {
  var categoriesCtrl = this;
  categoriesCtrl.categories = categories;
}

})();
