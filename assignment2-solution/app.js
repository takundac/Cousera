(function(){
  'use strict';

  angular.module('ShoppingListApp', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){

    var buy = this;
    buy.items = ShoppingListCheckOffService.getToBuyItems();

    buy.buyItem = function(itemIndex){
      ShoppingListCheckOffService.addToBoughtList(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){

    var bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();

  }

  function ShoppingListCheckOffService(){
    var service = this;

    var toBuyItems = [
      {name:"cookies", quantity:"5"},
      {name:"milk", quantity:"10"},
      {name:"donuts", quantity:"5"},
      {name:"oreos", quantity:"15"},
      {name:"sweets", quantity:"5"},
    ];

    var boughtItems = [];

    service.addToBoughtList = function(itemIndex){
        boughtItems.push(toBuyItems[itemIndex]);
        toBuyItems.splice(itemIndex,1);
    }

    service.getToBuyItems = function(){
      return toBuyItems;
    };

    service.getBoughtItems = function(){
      return boughtItems;
    };
  }
})();
