(function () {
  'use strict';
angular.module('MenuApp')
.controller('ItemsController',ItemsController);

ItemsController.$inject = ['items'];

function ItemsController(items){
    var categoryItem = this;
    categoryItem.items = items.data.menu_items;
  }
})();
