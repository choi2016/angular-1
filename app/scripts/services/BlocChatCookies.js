(function() {
  function BlocChatCookies($cookies, $uibModal) {
    //$cookies.get gets the value of blocChatCurrentUser
    var currentUser = $cookies.get('blocChatCurrentUser');
    //if there's no current username or current username is an empty string
    //if statement should run when app is initialized due to .run() block
    if (!currentUser || currentUser === '') {
  		$uibModal.open({
        //modal configuration object properties
  			controller: 'SetUserNameCtrl as setUserName',
  			templateUrl: '/templates/username.html'	,
  			size: 'sm',
  			backdrop: false,
  			keyboard: false
  		});
    }
  }

  angular
    .module('blocChatProject')
    //.run() block makes sure to set username when app is initialized
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();