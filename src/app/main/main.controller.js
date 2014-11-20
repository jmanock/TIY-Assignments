// 'use strict';
//
// angular.module('twitter')
// .controller('MainCtrl', function($http, $interpolate, $cookies){
//   var apiUrl = 'https://api.github.com/gists/163e0b7e800037f7f4f4/comments',
//   apiKeyTpl = $interpolate('?access_token={{key}}');
//
//   var self = this;
//
//   this.apiKey = $cookies.apiKey;
//
//   $http.get(apiUrl)
//   .success(function(data){
//     self.comments = data;
//   });
//
//   this.addComment = function(text, apiKey){
//     var url = apiUrl + apiKeyTpl({ key: apiKey });
//
//     $cookies.apiKey = apiKey;
//
//     $http.post(url, { body: text })
//     .success(function(data){
//       self.comments.push(data);
//     });
//   };
// });


(function(){
  'use strict';
  var app = angular.module('twitter', [ ]);

  app.controller('MainCtrl', function($http, $interpolate){
    var apiUrl = 'https://api.github.com/repos/TheIronYard--Orlando/FEE--2014--FALL/issues/421/comments',
    apiKeyTpl = $interpolate('?access_token={{key}}');

    var self = this;

    $http.get(apiUrl).success(function(data){
      self.comments = data;
    });
    this.newComment = function(text, apiKey){
      var self = this;
      var url = apiUrl + apiKeyTpl({key:apiKey});

      $http.post(url, {body:text}).success(function(data){
        self.comments.push(data);
      });
    };
  });
})();
