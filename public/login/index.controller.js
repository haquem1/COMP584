(function () {
    'use strict';

    angular
        .module('app')
        .controller('Login.IndexController', Controller);

    function Controller($location, AuthenticationService) {
        var vm = this;

        vm.login = login;
        vm.register = register;

        initController();

        function initController() {
            // reset login status
            AuthenticationService.Logout();
        };

        function login() {
            AuthenticationService.Login(vm.username, vm.password, function (result) {
                if (result === true) {
                    $location.path('/'); // login
                } else {
                    vm.error = 'Username or password is incorrect';
                }
            });
        };

        function register() {
          if(vm.confirm === vm.password){
            AuthenticationService.Register(vm.username, vm.password, function (result) {
                if (result === true) {
                    $location.path('/'); // login
                } else {
                    vm.error = 'Username or password is incorrect';
                }
            });
          } else {
            vm.error = 'Passwords do not match'
          }
        };
    }
})();
