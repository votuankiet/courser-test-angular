(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuyCtrl = this;

  toBuyCtrl.getToBuysItems = function(){
    return ShoppingListCheckOffService.getToBuysItems();
  }

  toBuyCtrl.buy = function(index){
    ShoppingListCheckOffService.buy(index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBoughtCtrl = this;

  alreadyBoughtCtrl.getBoughtItems = function(){
      return ShoppingListCheckOffService.getBoughtItems();
  }
}

function ShoppingListCheckOffService(){
  var service = this;
  var toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "potato chips", quantity: 10 },
    { name: "pens", quantity: 2 },
    { name: "apple", quantity: 1},
    { name: "pineapple", quantity: 1 },


  ];
  var boughtItems = [];

  service.getToBuysItems = function(){
      return toBuyItems;
  };

  service.getBoughtItems = function(){
    return boughtItems;
  };

  service.buy = function(index){
    var item = toBuyItems[index];
    toBuyItems.splice(index, 1);
    boughtItems.push(item);
  };

}
})();
