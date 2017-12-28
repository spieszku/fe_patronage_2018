let moviesCounterAll = moviesData.length;
let moviesCounterSeen = 0;
for (let [index, movieItem] of moviesData.entries()) {
    let movieStatus;
    //count seen movies
    if (movieItem.seen === "T") {
        moviesCounterSeen++;
        movieStatus = "V";
    }
    else {
        movieStatus = "X"
    }

    //create movieList element from moviesData
    let listedMovie = document.createElement("LI");
    listedMovie.innerHTML =
        "<p>" + movieItem.title + "</p>" +
        "<p class='col-3'>Year: " + movieItem.year + "</p>" +
        "<p class='col-3'>Genre: " + movieItem.genre + "</p>" +
        "<p class='col-3 movie-status' id='movie-" + index + "' onclick='updateMovies(" + index + ")'>Seen: " + movieStatus + "</p>" +
        "<p>" + movieItem.summary + "</p>";
    document.querySelector("#moviesList").appendChild(listedMovie);
}

//display number of all movies
document.querySelector("#moviesCounterAll").innerHTML = moviesCounterAll;
//display number of seen movies
document.querySelector("#moviesCounterSeen").innerHTML = moviesCounterSeen;

//update seen movies counter and symbol
function updateMovies(index) {
    let activeMovie = moviesData[index];
    let movieStatus;
    if (activeMovie.seen === "F") {
        activeMovie.seen = "T";
        moviesCounterSeen++;
        movieStatus = "V"
    }
    else if (activeMovie.seen === "T") {
        activeMovie.seen = "F";
        moviesCounterSeen--;
        movieStatus = "X";
    }
    document.querySelector("#moviesCounterSeen").innerHTML = moviesCounterSeen;
    document.querySelector("#movie-" + index).innerHTML = "Seen: " + movieStatus;
}