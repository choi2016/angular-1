(function() {
    function SetUserNameCtrl($uibModalInstance, $cookies) {
        //function that sets username when username.html runs
        this.create = function() {
        	//sets newUsername for cookie key(blocChatCurrentUser)
            $cookies.put('blocChatCurrentUser', this.newUsername);
            console.log(blocChatCurrentUser);
            $uibModalInstance.close();
        }
    }
    
    angular
        .module('blocChatProject')
        .controller('SetUserNameCtrl', ['$uibModalInstance', '$cookies', SetUserNameCtrl]);
})();