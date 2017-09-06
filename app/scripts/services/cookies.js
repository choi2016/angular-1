(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentlyUser = $cookies.get('currentUser');
    //if there's no current username or current username is empty
    if (!currentlyUser || currentlyUser === '') {
    	//opens create function in modalctrl
		$uibModal.open({
			controller: 'setUserNameCtrl as setUserName',
			//template for create username box
			templateUrl: '/templates/username.html'	,
			size: 'sm',
			backdrop: false,
			keyboard: false
		});
    }
  }

  angular
    .module('blocChatProject')
    .run(['$cookies', '$uibModal',BlocChatCookies]);
})();