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
        

        initController();

        function initController() {
            vm.searched_food = "discover foods";
            vm.searched_location = "in new places";

            vm.categories = [
            { name:'testing1' },
            { name:'testing2' },
            { name:'testing3' },
            { name:'testing4' }
            ];
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

            // let's bother a server some place on earth
            console.log("Food: " + vm.food_name);
            console.log("Location: " + vm.food_location);
            console.log("Price: " + price_selected);
            console.log("category: " + vm.food_category);
        };

    }
})();
