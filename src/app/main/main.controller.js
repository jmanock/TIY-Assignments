'use strict';

angular.module('tiyAssignments', ['firebase'])
.controller('MainCtrl', function ($firebase, $firebaseAuth, $scope) {
  var ref = new Firebase('https://github-comments.firebaseio.com/');
  var sync = $firebase(ref);
  var auth = $firebaseAuth(ref);
  var syncObject = sync.$asObject();
  var self = this;

  syncObject.$bindTo($scope, "data");
  $scope.messages = sync.$asArray();

  var obj = $firebase(ref).$asObject();

  $scope.logIn = function(){
    console.log(auth)
    auth.$authWithOAuthPopup("facebook").then(function(authData) {
      console.log("Logged in as:", authData.facebook.displayName);
      self.displayName = authData.facebook.displayName;
      self.avatar = authData.facebook.cachedUserProfile.picture.data.url;
    }).catch(function(error) {
      console.error("Authentication failed: ", error);
    });
  }

  $scope.loggedIn = function() {
    if(auth.$getAuth() != null) {
      return true;
    }
  }

  $scope.test = function(){
    console.log(auth.$getAuth())
  }

  $scope.logOut = function(){
    auth.$unauth()
    window.location.reload()
  }

  this.date = new Date();
  this.timeStamp = new Date();

  // this.editComment = function(event){
  //   //clicking the edit button will change the comment to a text input
  //   $('#editBtn').html('Did it work?')


  this.commentLimit = 140;

  // this.timeElapsed = function(timeNow, timeStamp){
  //   timeNow = Date.parse(this.date);
  //   timeStamp = Date.parse(this.comments.created_at);

  //   if(timeNow < timeStamp){
  //     return true;
  //   }
  // }

  $scope.addMessage = function(messageText, messageAuthor){
    if(auth.$getAuth() != null) {
      $scope.messages.$add({
        'text': messageText,
        'author': self.displayName,
        'avatar': self.avatar,
        'date': self.timeStamp.toJSON()
      });
      $scope.messageText = '';
      console.log($scope.messages);
    } else {
      alert("Please log in before commenting");
    }
  };

  $scope.authorized = function(message) {
    if(self.displayName === this.message.author){
      return true;
    }
  }


});
