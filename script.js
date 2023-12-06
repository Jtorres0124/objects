
var favoriteMovies = [
    {
        name: "Inception",
        year: 2010,
        director: "Christopher Nolan",
        picture: "https://play-lh.googleusercontent.com/TGaTckK5V7VKlJ34PFlON5ei_DARWndAHrDqOWTaC6kH5R8V8RlxE6i22VswAx3ENx-3"
    },
    {
        name: "The Shawshank Redemption",
        year: 1994,
        director: "Frank Darabont",
        picture: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
    },
    {
        name: "The Dark Knight",
        year: 2008,
        director: "Christopher Nolan",
        picture: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg"
    }
];


var movieList = document.getElementById("movie-list");


var movieItems = favoriteMovies.map(function(movie) {
    var listItem = document.createElement("li");

   
    var movieInfo = document.createElement("div");
    movieInfo.innerHTML = `<strong>${movie.name}</strong> (${movie.year})<br>Directed by ${movie.director}`;

    
    var posterImage = document.createElement("img");
    posterImage.src = movie.picture;
    posterImage.alt = `${movie.name} Poster`;
    posterImage.style.width = "200px"; 

    
    listItem.appendChild(movieInfo);
    listItem.appendChild(posterImage);

    return listItem;
});


movieItems.forEach(function(item) {
    movieList.appendChild(item);
});
