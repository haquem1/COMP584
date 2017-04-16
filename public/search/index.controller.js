(function () {
    'use strict';

    angular
        .module('app')
        .controller('Search.IndexController', Controller);

    function Controller($location, $scope, AuthenticationService) {
      // you can put your objects in here and do <div ng-repeat="(key, value) in myObj"> ... </div>
      // example here http://codepen.io/anon/pen/bdQJxy
      $scope.list = [
        {}
    ]
    }
})();
