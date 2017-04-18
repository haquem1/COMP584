(function () {
    'use strict';

    angular
        .module('app')
        .controller('Login.IndexController', Controller);

    function Controller($location, AuthenticationService) {
        var vm = this;
        var errorMsg;
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

                    document.getElementById("errorDisplay").innerHTML = vm.error;
                    document.getElementById("errorDisplay").style.display = "block";
                }
            });
        };

        function register() {
          if(vm.confirm === vm.password){
            AuthenticationService.Register(vm.username, vm.password, function (result) {
                if (result === true) {
                    $location.path('/'); // login
                } else {
                    vm.error = 'User already exists';

                    document.getElementById("errorDisplay").innerHTML = vm.error;
                    document.getElementById("errorDisplay").style.display = "block";

                }
            });
          } else {
            vm.error = 'Passwords do not match'

            document.getElementById("errorDisplay").innerHTML = vm.error;
            document.getElementById("errorDisplay").style.display = "block";
          }
        };
    }
})();
