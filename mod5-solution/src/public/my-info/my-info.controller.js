(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserInfoService', 'ApiPath'];
function MyInfoController(UserInfoService, ApiPath) {
  var myInfoCtrl = this;
  myInfoCtrl.basePath = ApiPath;
  myInfoCtrl.needSignUp = function(){
    return (UserInfoService.getUserInfo().firstName === undefined);
  }

  myInfoCtrl.userInfo = function(){
    return UserInfoService.getUserInfo();
  }
}

})();
