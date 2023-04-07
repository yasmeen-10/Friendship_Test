function checkFriendship() {
    var friendshipScore = Math.random() * 100;
    friendshipScore = Math.floor(friendshipScore) + 1;
    document.getElementById('friendshipvalue').value = friendshipScore;
}