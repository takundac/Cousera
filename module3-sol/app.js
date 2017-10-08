(function () {
  'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems',FoundItems);

function FoundItems() {
    var ddo = {
      templateUrl: 'Items.html',
      scope: {
        list: '=found',
        onRemove: '&'
      }//,
      // controller: DirectiveController,
      // controllerAs: 'otherController',
      // bindToController:true
  };
  return ddo;
}
// function DirectiveController() {
//   var otherController = this;
// }
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

  var controller = this;
  controller.searchTerm="";

  controller.search = function(searchTerm)
  {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (response) {
      controller.found = response;
    })
  }

  controller.remove = function (itemIndex) {
    controller.found.splice(itemIndex,1);
  }
};

MenuSearchService.$inject = ['$http'];

function MenuSearchService($http){
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    //console.log(searchTerm);
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (result) {
      // process result and only keep items that match
      var foundItems = [];
      var response = result.data;

      for (var i = 0; i < response.menu_items.length; i++) {
        if(response.menu_items[i].name.toLowerCase().includes(searchTerm.toLowerCase())){
          foundItems.push(response.menu_items[i]);
        }
      }
      return foundItems;
      });

    }
  }
})();
