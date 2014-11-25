angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  Links.getLinks().then(function(results){
    console.log(results);
  });

});



  // $scope.link = {};

  // $scope.addLink = function(){
  //   $http.post('/api/links', JSON.stringify($scope.link)).
  //     success(function(data, status, headers, config) {
  //       $scope.link.url = '';
  //     }).error(function(data, status, headers, config) {

  //   });
  // };
