(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser1 = $cookies.get('currentUser');
    //if there's no current username or current username is an empty string
    if (!currentUser1 || currentUser1 === '') {
  		$uibModal.open({
        //modal configuration object properties
  			controller: 'SetUsernameCtrl as setUsername',
  			templateUrl: '/templates/username.html'	,
  			size: 'sm',
  			backdrop: false,
  			keyboard: false
  		});
    }
  }

  angular
    .module('blocChatProject')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();