'use strict';

var app = angular.module('app', ['fsCordova']).

run(['$window', function($window){
  // init Fastclick
  FastClick.attach(angular.element($window.document.body)[0]);
}]).

controller('AppCtrl', ['$scope', 'CordovaService', 
  function($scope, CordovaService){

    $scope.ready = false;

    // when cordova is ready
    CordovaService.ready.then(
      function resolved(resp) {
         $scope.ready = true;  
      },
      function rejected(resp){
        throw new Error(resp);
      }
    );
  }
]);