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
    {
        title: 'Movie 9',
        id: '9',
        actors: ['Actor A', 'Actor T', 'Actor U']
    },
    {
        title: 'Movie 10',
        id: '10',
        actors: ['Actor B', 'Actor V', 'Actor W']
    },
    {
        title: 'Movie 11',
        id: '11',
        actors: ['Actor C', 'Actor X', 'Actor Y']
    },
    {
        title: 'Movie 12',
        id: '12',
        actors: ['Actor H', 'Actor Z', 'Actor I']
    },
    {
        title: 'Movie 13',
        id: '13',
        actors: ['Actor A', 'Actor D', 'Actor B']
    },
    {
        title: 'Movie 14',
        id: '14',
        actors: ['Actor E', 'Actor Y', 'Actor Z']
    },
    {
        title: 'Movie 15',
        id: '15',
        actors: ['Actor L', 'Actor X', 'Actor N']
    },
    {
        title: 'Movie 16',
        id: '16',
        actors: ['Actor M', 'Actor S', 'Actor Q']
    },
    {
        title: 'Movie 17',
        id: '17',
        actors: ['Actor P', 'Actor T', 'Actor J']
    },
    {
        title: 'Movie 18',
        id: '18',
        actors: ['Actor C', 'Actor R', 'Actor W']
    },
    {
        title: 'Movie 19',
        id: '19',
        actors: ['Actor G', 'Actor V', 'Actor U']
    },
    {
        title: 'Movie 20',
        id: '20',
        actors: ['Actor K', 'Actor I', 'Actor F']
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
    const top5Movies = filteredMovies.slice(0, 5); // Limit to the top 5 results

    displayMovies(top5Movies);
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
