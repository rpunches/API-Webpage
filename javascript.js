var tvShows = ["Supernatural", "Walking Dead", "Black Mirror", "Game of Thrones", "Sherlock", "Dr. Who", "The Office", "Stranger Things", "Friday Night Lights", "New Girl"];


function showGiph() {
    var show = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=09PsNWcsKZX9YWi8ZN7xijJEOdAEyxVA&q=" + show + "&limit=10&offset=0&rating=PG&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.data);
       
        var imgURL = response.data[0].images.downsized("url");
        var imageOne = $("#imageResults").attr("src", imgURL);
        var tvDiv = $(".show");
        tvDiv.append(imageOne);
        $("#show-view").prepend(tvDiv);
        // $("#shows-view").text(JSON.stringify(response));
        // renderButtons();
        // // var imgURL = response.data[17];
        // // var image = $("<img>").attr("src", imgURL);
        // // tvDiv.append(image);
        // // $("#shows-view").prepend(tvDiv);
    });
}

// Function for displaying movie data
function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < tvShows.length; i++) {

        var a = $("<button>");
        a.addClass("show");
        a.attr("data-name", tvShows[i]);
        a.text(tvShows[i]);
        $("#buttons-view").append(a);
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