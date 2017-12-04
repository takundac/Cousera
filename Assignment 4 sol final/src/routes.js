(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/MenuApp/templates/home.template.html',
    //controller: 'HomeController as home'
  })

  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/MenuApp/templates/menuCategories.template.html',
    controller: 'MenuCategoriesController as menuCategories',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemsList', {
    url: '/items-list/{categoryShortName}',
    templateUrl: 'src/MenuApp/templates/items.template.html',
    controller: 'ItemsController as categoryItem',
    resolve: {
      items: ['$stateParams','MenuDataService',
        function ($stateParams, MenuDataService) {  // remember minification protection for $stateParams
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  })
  // .state('itemsList', {
  //   url: '/items-list/{itemId}',
  //   templateUrl: 'src/menuApp/templates/items.template.html',
  //   controller: 'ItemsController as items',
  //   resolve: {
  //     items: ['MenuDataService', function ($stateParams, MenuDataService) {
  //       return MenuDataService.getItemsForCategory($stateParams.itemId); // returns a promise
  //     }]
  //   }
  //})
  }
})();
