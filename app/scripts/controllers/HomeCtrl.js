(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
    }
    
    angular
        .module('blocChatProject')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();