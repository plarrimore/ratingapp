/*jslint node: true */
/*jslint nomen: true */
/*global angular, _ */
"use strict";
/*app.controller('MyController', function ($scope) {
            //This will hide the DIV by default.
            $scope.IsHidden = true;
            $scope.ShowHide = function () {
                //If DIV is hidden it will be visible and vice versa.
                $scope.IsHidden = $scope.IsHidden ? false : true;
            }
        });*/
angular.module("myApp.controllers", []).controller("songCtrl", function($scope, Song,$timeout) {
  
  $scope.songs = Song.query();
  $scope.newSong = { };
  
  $scope.addSong = function(/** String */ artist, /** String */ url, /** String */ title) {
    var song = new Song();
    song.artist = artist;
    song.url = url;
    song.title = title;
    song.score = 0;
    song.$save(function(response) {
      $scope.songs.push(response);
    });

    $scope.newSong.title = "";
    $scope.newSong.url = "";
    $scope.newSong.artist = "";
  };
  
  $scope.updateSong = function(song) {
    song.$update();
  };
  
  $scope.deleteSong = function(/** Song */ song) {
    var idx = $scope.songs.indexOf(song);
    if (idx >= 0) {
      $scope.songs.splice(idx, 1);
    }
    song.$remove();
  };
  
  $scope.isEmpty = function(/** String */ str) {
    return _.isBlank(str);
  };
            $scope.IsHidden = true;
            $scope.ShowHide = function () {
                //If DIV is hidden it will be visible and vice versa.
                $scope.IsHidden = $scope.IsHidden ? false : true;
            }

 $scope.display = function() {
  
        $scope.alertDisplayed = true;
      $timeout(function() {
        $scope.alertDisplayed = false;
      }, 5000)
    };
    
    $scope.alertDisplayed = false;



});

 /*angular.module("myApp.controllers", []).
  controller('testController', function($scope, $timeout) {
    
   
  })*/

