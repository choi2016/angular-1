(function() {
    function SetUserNameCtrl($uibModalInstance, $cookies) {
        //function that sets username when username.html runs
        this.create = function() {
        	//sets modal.username for cookie key(blocChatCurrentUser)
            $cookies.put('blocChatCurrentUser', modal.username);
            $uibModalInstance.close();
        }
    }
    
    angular
        .module('blocChatProject')
        .controller('SetUserNameCtrl', ['$uibModalInstance', '$cookies', SetUserNameCtrl]);
})();