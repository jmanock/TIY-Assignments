'use strict';

angular.module('twitterComments')
  .controller('MainCtrl', function($http, $interpolate, $cookies) {
    var apiUrl = 'https://api.github.com/gists/something/comments',
    apiKeyTpl = $interpolate('?access_token={{key}}');

    var self = this;

    this.apiKey = $cookies.apiKey;

    $http.get(apiUrl).success(function(data){
      self.comments = data;
    });

    this.addComment = function(text, apiKey){
      var url = apiUrl + apiKeyTpl({key: apiKey});
      $cookies.apiKey = apiKey;
      $http.post(url,{body:text}).success(function(data){
        self.comments.push(data);
      });
    };
  });
