(function() {
    function SetUserNameCtrl($uibModalInstance, $cookies) {
        //function that creates cookie
        this.create = function() {
            //if statement runs only when username is not undefined
            if(this.newUsername !== undefined && /^\s*$/.test(this.newUsername) !== true) {

                //sets newUsername for cookie key(blocChatCurrentUser)
                $cookies.put('blocChatCurrentUser', this.newUsername);
                $uibModalInstance.close();
                console.log(this.newUsername);
            }
        }
    }
    
    angular
        .module('blocChatProject')
        .controller('SetUserNameCtrl', ['$uibModalInstance', '$cookies', SetUserNameCtrl]);
})();