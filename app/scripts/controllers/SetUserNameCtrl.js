(function() {
    function SetUsernameCtrl($uibModalInstance, $cookies) {
        //function that stores username when username.html runs
        this.setUsername = function() {
        	//sets this.username for given cookie key(currentUser)
            $cookies.put('currentUser', modal.username);
            console.log(modal.username);
            $uibModalInstance.close();
        };
    }
    
    angular
        .module('blocChatProject')
        .controller('SetUsernameCtrl', ['$uibModalInstance', '$cookies', SetUsernameCtrl]);
})();