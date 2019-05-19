var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        
        var userData = req.body;
     
        var bestMatch = {
            name: "",
            photo: "",
            difference: Infinity
        }

        for(var i = 0; i < friends.length; i++){
            var totDiff = 0;
            for(var j = 0; j < friends[i].scores.length; j++){
                totDiff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userData.scores[j]))
            }
            if(totDiff < bestMatch.difference){
                bestMatch.name = friends[i].name
                bestMatch.photo = friends[i].photo
                bestMatch.difference = totDiff
            }
        }

        friends.push(userData)
        res.json(bestMatch)
           
    });

}