(function(){
  'use strict';

  angular.module('MenuApp')
  .component('categoryList',{
    templateUrl: 'src/templates/menuCategories.template.html',
    controller: 'MenuCategoriesController as menuCategories',
    bindings: {
      items:'<'
    }
  })
})();
