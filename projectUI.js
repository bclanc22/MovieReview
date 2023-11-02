const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const movieList = document.getElementById('movieList');
const recommendations = document.getElementById('recommendations');

let movieData = [
    {
        title: 'Movie 1',
        id: '1',
        actors: ['Actor A', 'Actor B', 'Actor C']
    },
    {
        title: 'Movie 2',
        id: '2',
        actors: ['Actor B', 'Actor D', 'Actor E']
    },
    {
        title: 'Movie 3',
        id: '3',
        actors: ['Actor C', 'Actor F', 'Actor G']
    },
    {
        title: 'Movie 4',
        id: '4',
        actors: ['Actor H', 'Actor I', 'Actor J']
    },
    {
        title: 'Movie 5',
        id: '5',
        actors: ['Actor A', 'Actor B', 'Actor K']
    },
    {
        title: 'Movie 6',
        id: '6',
        actors: ['Actor L', 'Actor M', 'Actor N']
    },
    {
        title: 'Movie 7',
        id: '7',
        actors: ['Actor O', 'Actor P', 'Actor Q']
    },
    {
        title: 'Movie 8',
        id: '8',
        actors: ['Actor D', 'Actor R', 'Actor S']
    },
];

searchBtn.addEventListener('click', searchMovies);

function searchMovies() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === '') {
        displayMovies(movieData);
        return;
    }

    const filteredMovies = movieData.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    displayMovies(filteredMovies);
}

function displayMovies(movies) {
    // Clear previous search results and recommendations
    movieList.innerHTML = '';
    recommendations.innerHTML = '';

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `<h2>${movie.title}</h2>`;
        movieItem.addEventListener('click', () => showRecommendations(movie));
        movieList.appendChild(movieItem);
    });
}

function showRecommendations(selectedMovie) {
    // Filter movies that share at least one actor with the selected movie
    const sharedActorMovies = movieData.filter(movie => {
        const sharedActors = selectedMovie.actors.filter(actor => movie.actors.includes(actor));
        return sharedActors.length > 0 && movie.id !== selectedMovie.id;
    });

    recommendations.innerHTML = '<h2>Recommended Movies with Similar Actors:</h2>';
    sharedActorMovies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('recommended-movie');
        movieItem.innerHTML = `<h3>${movie.title}</h3>`;
        recommendations.appendChild(movieItem);
    });
}
