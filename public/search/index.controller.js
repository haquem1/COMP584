(function () {
    'use strict';

    angular
        .module('app')
        .controller('Search.IndexController', Controller);

    function Controller(SearchService) {
        var vm = this;
        vm.test = test;

        initController();

        function initController() {

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

    }
})();
