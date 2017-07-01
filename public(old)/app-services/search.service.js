(function () {
  'use strict';

  angular
  .module('app')
  .factory('SearchService', Service);

  function Service($http, $localStorage) {
    var service = {};

    service.Search = Search;
    service.Business = Business;

    return service;

    function Search(term, location, categories, price, callback) {
      $http.get('/search/' + location + '/' + term + '?categories=' + categories + '&price=' + price)
      .success(function (response) {
        if (response.msg) callback(response.msg);
      });
    }

    function Business(business, callback) {
      $http.get('/business/' + business)
      .success(function (response) {
        if(response.msg) callback(response.msg);
      });
    }

  }
})();
