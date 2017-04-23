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
        vm.getBusiness = getBusiness;


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



            vm.search_results;
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

            // let's bother a server some place on earth
            SearchService.Search(vm.searched_food, vm.searched_location, 'cafes', '1,2,3', function(result){
                vm.search_results = result;
                for (var i = 0; i < vm.search_results.businesses.length; i++) {
                  getBusiness(vm.search_results.businesses[i].id);
                }
            });

            hide_views();
            $('.swish-list-area').fadeIn();
        };


        // get the images for the current business
        function getBusiness(place_id){
            SearchService.Business(place_id, function(result){
                vm.businesses_results.push(result);
            });
        };

        


    }
})();
