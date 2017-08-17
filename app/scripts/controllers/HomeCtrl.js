(function() {
    function HomeCtrl(Room) {
        this.chatRooms = Room.all;
    }
    
    angular
        .module('blocChatProject')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();