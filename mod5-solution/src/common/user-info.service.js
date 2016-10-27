(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);


UserInfoService.$inject = ['$http', 'ApiPath'];
function UserInfoService($http, ApiPath) {
  var service = this;
  var userInfo = {};

  service.saveUserInfo = function(firstName, lastName, email, phone, menuNumber, menuData){
    userInfo = {
      'firstName': firstName,
      'lastName': lastName,
      'email': email,
      'phone': phone,
      'menuNumber': menuNumber,
      'menuData': menuData
    };


  }

  service.getUserInfo = function(){
    return userInfo;
  }

  service.getFavoriteMenu = function (shortName) {

    return $http.get(ApiPath + '/menu_items/' + shortName + '.json').then(function (response) {
      return response.data;
    });
  };
}



})();
