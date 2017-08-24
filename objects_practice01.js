var friends = new Object();

friends.bill = {};
friends.steve = {};

friends.bill.firstName = "Bill";
friends.bill.lastName = "Brady";
friends.bill.number = 4367723444;
friends.bill.address = ["Lerchenfelderstraße", 11, 1080, "Wien"];

friends.steve["firstName"] = "Steve";
friends.steve["lastName"] = "Crabbles";
friends.steve["number"] = 43622763546;
friends.steve["address"] = ["Mariahilferstraße", 53, 1150, "Wien"];

var list = function(object){
    for (var key in object){
        console.log(key);
    }
}

list(friends);

var search = function(name){
    for (var friend in friends){
            if (friends[friend].firstName === name) {
                console.log(friends[friend]);
                return friends[friend];
            }
        }
    }

