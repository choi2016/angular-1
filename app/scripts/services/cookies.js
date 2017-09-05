(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentlyUser = $cookies.get('currentUser');
    if (!currentlyUser || currentlyUser === '') {
		$uibModal.open({
			controller: 'ModalCtrl as modal',
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