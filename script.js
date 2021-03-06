const symbolTrue = "&#x2611";
const symbolFalse = "&#x2612";
let moviesCounterAll = moviesData.length;
let moviesCounterSeen = 0;

// display number of all movies
document.querySelector("#moviesCounterAll").innerHTML = moviesCounterAll;

// update displayed value of movies counter seen and movie status
function updateSeenCounter(index, moviesCounterSeen, movieStatus) {
    // display number of seen movies
    document.querySelector("#moviesCounterSeen").innerHTML = moviesCounterSeen;
    document.querySelector("#movie-" + index).innerHTML = "Seen: " + movieStatus;
}

for (let [index, movieItem] of moviesData.entries()) {
    let movieStatus;
    // count seen movies
    if (movieItem.seen === "T") {
        moviesCounterSeen++;
        movieStatus = symbolTrue;
    }
    else {
        movieStatus = symbolFalse;
    }

    // create movieList element from moviesData
    let listedMovie = document.createElement("LI");
    listedMovie.innerHTML =
        "<p>" + movieItem.title + "</p>" +
        "<p class='col-3'>Year: " + movieItem.year + "</p>" +
        "<p class='col-3'>Genre: " + movieItem.genre + "</p>" +
        "<p class='col-3 movie-status' id='movie-" + index + "' onclick='updateMovies(" + index + ")'></p>" +
        "<p>" + movieItem.summary + "</p>";
    document.querySelector("#moviesList").appendChild(listedMovie);
    updateSeenCounter(index, moviesCounterSeen, movieStatus);
}

// update seen movies counter and symbol
function updateMovies(index) {
    let activeMovie = moviesData[index];
    let movieStatus;
    if (activeMovie.seen === "F") {
        activeMovie.seen = "T";
        moviesCounterSeen++;
        movieStatus = symbolTrue;
    }
    else {
        activeMovie.seen = "F";
        moviesCounterSeen--;
        movieStatus = symbolFalse;
    }
    updateSeenCounter(index, moviesCounterSeen, movieStatus);
}