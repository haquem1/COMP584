(function () {
    'use strict';

    angular
        .module('app')
        .controller('Search.IndexController', Controller);

    function Controller($location, SearchService) {
        var vm = this;

        initController();

        function initController() {

        };
    }
})();
