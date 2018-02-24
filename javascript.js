var tvShows = ["Supernatural", "Walking Dead", "Black Mirror", "Game of Thrones", "Sherlock", "Dr. Who", "The Office", "Stranger Things", "Friday Night Lights", "New Girl"];


function showGiph() {
    var show = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=09PsNWcsKZX9YWi8ZN7xijJEOdAEyxVA&q=" + show + "&limit=10&offset=0&rating=PG&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.data);
        var results = response.data

        for (var i = 0; i < results.length; i++) {
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var gifDiv = $("<div class='item'>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating " + rating);

                var tvImage = $("<img>");

                tvImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.append(p);
                gifDiv.append(tvImage);

                $("imageResults").prepend(gifDiv);
            }
        }


    });
}


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


$("#add-show").on("click", function (event) {
    event.preventDefault();

    var show = $("#show-input").val().trim();
    tvShows.push(show);
    renderButtons();
});

$(document).on("click", ".show", showGiph);

renderButtons();


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