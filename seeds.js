var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Mt Sunset",
        image: "https://pixabay.com/get/e83cb10f2df11c22d2524518b7444795ea76e5d004b014459cf5c270a7eab2_340.jpg",
        description: "Just a nice view from the top with sunset and the clouds"
    },
    {
        name: "Mt Snowed",
        image: "https://pixabay.com/get/eb34b50929fc003ed1584d05fb1d4e97e07ee3d21cac104491f9c47aaeedb2bf_340.jpg",
        description: "Suspendisse fermentum mi eu velit sollicitudin, dictum bibendum leo accumsan. Integer aliquam magna eget egestas convallis. Vestibulum urna eros, ultricies vitae lorem id, viverra viverra sem. Quisque luctus magna eu tempus condimentum. Aliquam eget eros mattis, mollis ipsum vitae, dictum orci. Cras vel lorem lacus. Donec blandit nunc lorem, ornare sodales lectus malesuada a. Maecenas erat eros, convallis sit amet turpis vel, fringilla cursus ante. Nunc placerat ligula velit, a tempor orci ultrices ut. Aenean posuere, felis vel fermentum tincidunt, est nulla auctor ante, a lobortis nunc elit sodales diam. Mauris convallis, lacus nec lacinia feugiat, quam turpis bibendum sapien, sed porta ipsum nulla vel urna. Quisque vitae imperdiet felis. Quisque vel auctor nulla."
    },
    {
        name: "Mt Manstand",
        image: "https://pixabay.com/get/ea3cb4062af4053ed1584d05fb1d4e97e07ee3d21cac104491f9c47aaeedb2bf_340.jpg",
        description: "Man standing on a cliff with his hands up in the air pretening to be on top of the world"
    }
];

function seedDB(){
    Campground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("remove campgrounds!");
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added campground: ");
                    Comment.create(
                        {
                            text: "This place is greate, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment: ");
                            }
                        });
                }
            });
        });
    });
}

module.exports = seedDB;