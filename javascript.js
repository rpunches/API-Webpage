var tvShows = ["Supernatural", "Walking Dead", "Black Mirror", "Game of Thrones", "Sherlock", "Dr. Who", "The Office", "Stranger Things", "Friday Night Lights", "New Girl"];

$("#add-show").on("click", function (event) {
    event.preventDefault();

    var show = $("#show-input").val().trim();
    tvShows.push(show);
    renderButtons();
});

function renderButtons() {

    $("#show-view").empty();

    for (var i = 0; i < tvShows.length; i++) {

        var a = $("<button>");
        a.addClass("show");
        a.attr("data-name", tvShows[i]);
        a.text(tvShows[i]);
        $("#show-view").append(a);
    }
}

$(document).on("click", ".show", showGiph);

renderButtons();

function showGiph() {
    $("button").click("click", function () {
        var showName = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=09PsNWcsKZX9YWi8ZN7xijJEOdAEyxVA&q=" + showName + "&limit=10&offset=0&rating=PG&lang=en";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL);
            console.log(response);
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var tvDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var tvImage = $("<img>");
                tvImage.attr("src", results[i].images.fixed_height.url);

                tvDiv.append(tvImage);
                tvDiv.append(p);
                $("#imageResults").prepend(tvDiv);
            }

            //     document.getElementById("div").addEventListener("click", pauseGif);

            //     function state() {
            //         for (var i = 0; i < results.length; i++) {
            //             if (tvImage.attr("src", results[i].images.fixed_height.url));
            //             (tvImage.attr("src", results[i].images.fixed_height_still.url);
            //         } else {}

            //             {

            //             }
            //         }  
            //     }

            //     function pauseGif() {
            //         document.getElementById("imageResults").innerHTML = state();
            //     }




            //     }

            // });
        });
    });

}



// $(document).on("click", ".pause", pausePlay);

// function pausePlay() {
//     $(".pause").on("click", function () {

//         var state = $(this).attr("data-state");

//         if (state === "still") {
//             $(this).attr("src", $(this).attr("data-animate"));
//             $(this).attr("data-state", "animate");
//         } else {
//             $(this).attr("src", $(this).attr("data-still"));
//             $(this).attr("data-state", "still");
//         }
//     });
// }

// function showGiph() {
//     
//     var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=09PsNWcsKZX9YWi8ZN7xijJEOdAEyxVA&q=" + showName + "&limit=10&offset=0&rating=PG&lang=en";

//     {
//         
//         console.log(response.data);
//         var rating = results.rating;
//         var gifDiv = $("<div class='item'>");
//         var p = $("<p>").text("Rating " + rating);
//         
//         
//             if (rating !== "r" && rating !== "pg-13") {
//                 tvImage.attr("src", results[i].images.fixed_height.url);
//                 gifDiv.append(p);
//                 gifDiv.append(tvImage);
//                 $("imageResults").prepend(gifDiv);
//             }
//         }


//     });
// }





// Unused Code
        // var imgURL = response.data.image_original_url;

        // tvImage.attr("src", imgURL);
        // tvImage.attr("alt", "TV Image");
        // // var tvDiv = $(".show");
        // // tvDiv.append(imageOne);
        // $("#show-view").prepend(tvImage);
        // $("#shows-view").text(JSON.stringify(response));
        // renderButtons();
        // // var imgURL = response.data[17];
        // // var image = $("<img>").attr("src", imgURL);
        // // tvDiv.append(image);
        // // $("#shows-view").prepend(tvDiv);