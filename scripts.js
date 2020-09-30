$(document).ready(function () {
    var friends = ["Biki", "Mizu", "Hana", "Ruth", "Dani"];
    var locations = ["store", "restaurant", "park", "playground", "home", "gym", "beach", "carwash", "coffeshop", "library"];
    var weapons = ["glove", "spoon", "branch", "toy", "broom", "rope", "towel", "sponge", "cup", "book", "pen", "pencile", "tape", "chair", "fork", "dish", "stick", "frame", "lamp", "glass"];

    for (var i = 1; i <= 100; i++) {
        var $h3 = $("<h3>Accusation" + i + "</h3>");
        $($h3).appendTo("main");
        $($h3).click(getAlert(i));
    }

    function getAlert(i) {
        var friend = friends[i % 5];
        var location = locations[i % 10];
        var weapon = weapons[i % 20];
        function accuAlert() {
            alert(" Accusation " + i + " I accuse " + friend + " with the " + weapon + " in " + location + " ! ");
        }
        return accuAlert;
    }

});