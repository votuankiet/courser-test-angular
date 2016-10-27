(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserInfoService'];
function SignUpController(UserInfoService) {
  var signUpCtrl = this;

  signUpCtrl.submit = function(){
    signUpCtrl.menuNumberMessage= "Validate menu number";
    signUpCtrl.submitMessage = "";
    var promise = UserInfoService.getFavoriteMenu(signUpCtrl.user.menuNumber);
    promise.then(
      function(menuData){
        var userInfo = signUpCtrl.user;
        UserInfoService.saveUserInfo(userInfo.firstName, userInfo.lastName,
                        userInfo.email, userInfo.phone, userInfo.menuNumber, menuData);
        signUpCtrl.menuNumberMessage= "";
        signUpCtrl.submitMessage = "Your information has been saved";

        console.log(UserInfoService.getUserInfo());
      },
      function(){
        signUpCtrl.menuNumberMessage= "No such menu number exists";
      }
    )
  }
}

})();
