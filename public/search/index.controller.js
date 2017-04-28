(function () {
    'use strict';

    angular
    .module('app')
    .controller('Search.IndexController', Controller);

    function Controller(SearchService) {
        var vm = this;
        vm.test = test;
        // register the function with the controller
        vm.searchFood = searchFood;
        vm.addFavorites = addFavorites;
        vm.removeFavorite = removeFavorite;

        initController();

        function initController() {
            vm.searched_food = "discover foods";
            vm.searched_location = "in new places";

            vm.categories = [
              { name:'bakeries' },
              { name:'bistros' },
              { name:'cafes' },
              { name:'diners' },
              { name:'gastropubs' },
              { name:'gourmet' },
              { name:'tapas' },
              { name:'vegan' },
              { name:'vegetarian' }
            ];

            vm.search_results = [];
            vm.search_results.businesses=[];
            vm.businesses_results = [];
            vm.favorites_results = [];
        };

        /* Linked to the Check out that chicken, boi right now */
        function test() {
            SearchService.Search('food', '90210', 'cafes', '1,2,3', function(result){
              console.log(result);
          });
            SearchService.Business('yuko-kitchen-los-angeles', function(result){
              console.log(result);
          });
        };

        /* Let's search some food for the peeps */
        function searchFood(){
            //update the user search field (Yellow bar)
            vm.searched_food = vm.food_name;
            vm.searched_location = vm.food_location;
            vm.price = '1,2,3,4';
            vm.category_filter = 'restaurants';

            if (vm.price1) vm.price = '1';
            if (vm.price2) {
              if (vm.price1) vm.price = vm.price + ',2';
              else vm.price = '2';
            }
            if (vm.price3) {
              if (vm.price1 || vm.price2) vm.price = vm.price + ',3';
              else vm.price = '3';
            }
            if (vm.price4) {
              if (vm.price1 || vm.price2 || vm.price3) vm.price = vm.price + ',4';
              else vm.price = '4';
            }

            if (vm.selected_category) vm.category_filter = vm.selected_category;
            // let's bother a server some place on earth
            SearchService.Search(vm.searched_food, vm.searched_location, vm.category_filter, vm.price, function(result) {

            vm.search_results.businesses = result.businesses;

          });
            hide_views();
            $('.swish-list-area').fadeIn();
        };

        // add favorites to columns
        function addFavorites(item){
          SearchService.Business(item.id, function(result){
            vm.favorites_results.push(result);
          });
        }

        // remove favorites from columns
        function removeFavorite(item){
          vm.favorites_results.splice(vm.favorites_results.indexOf(item), 1);
        }

    }
})();
