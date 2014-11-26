angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http, Interceptor) {
  $scope.data = {};
  Interceptor.start();
  Links.getLinks().then(function(results){
    $scope.data.links = results;
    Interceptor.end();
    console.log(results);
  });
});

  // $scope.data = {};

  // $scope.getLinks = function(){

  //   $http.get('/api/links').
  //     success(function(data, status, headers, config) {
  //       $scope.data.links = data;
  //     }).error(function(data, status, headers, config) {

  //   });
  // };

  // $scope.getLinks();
