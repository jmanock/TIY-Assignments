'use strict';

angular.module('angularizeGitHub')
// .constant('API', {
//   base: 'https://api.github.com'
// })
// .run(function(Restangular, API){
//   Restangular
//   .setBaseUrl(API.base);
// })
// .factory('Users', function(Restangular){
//   return Restangular.service('users');
// })
// .controller('MainCtrl', function(Users){
//   var User = Users.one('jmanock');
//
//   this.user = User.get().$object;
//
//   this.user.repos = User.all('repos')
//   .getList().$object;
// });
.controller('MainCtrl',['$http', function($http){
  var profileInfo = this;
  profileInfo.data = [];

  $http.get('https://api.github.com/users/jmanock')
  .success(function(data){
    profileInfo.data = data;
  });
}]);
