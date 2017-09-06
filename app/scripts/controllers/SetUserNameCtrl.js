(function() {
    function UserModalInstanceCtrl($scope, $uibModalInstance, $cookies) {
        $scope.setUsername = function() {
            $cookies.currentUser = $scope.modal.username;
            
            $uibModalInstance.close();
        };
    }
    
    angular
        .module('blocChatProject')
        .controller('UserModalInstanceCtrl', ['$scope', '$uibModalInstance', '$cookies', UserModalInstanceCtrl]);
})();