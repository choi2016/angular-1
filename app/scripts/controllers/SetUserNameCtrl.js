(function() {
    function SetUserNameCtrl($uibModalInstance, $cookies) {
        //function that sets username when username.html runs
        this.create = function() {
        	//sets modal.username for cookie key(blocChatCurrentUser)
            $cookies.put('blocChatCurrentUser', newUsername);
            $uibModalInstance.close();
        }
    }
    
    angular
        .module('blocChatProject')
        .controller('SetUserNameCtrl', ['$uibModalInstance', '$cookies', SetUserNameCtrl]);
})();