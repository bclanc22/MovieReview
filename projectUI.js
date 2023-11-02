const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const movieList = document.getElementById('movieList');
const recommendations = document.getElementById('recommendations');

let movieData = [
    { title: 'Movie 1', id: '1' },
    { title: 'Movie 2', id: '2' },
    { title: 'Movie 3', id: '3' },
    { title: 'Movie 4', id: '4' },
    { title: 'Movie 5', id: '5' },
    { title: 'Movie 6', id: '6' },
    { title: 'Movie 7', id: '7' },
    { title: 'Movie 8', id: '8' },
    { title: 'Movie 9', id: '9' },
    { title: 'Movie 10', id: '10' }
    // Add more movie data as needed
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
        movieItem.addEventListener('click', () => showRecommendations(movie.id));
        movieList.appendChild(movieItem);
    });
}

function showRecommendations(movieId) {
    // Simulated recommendations from the backend
    const recommendedMovies = [
        { title: 'Recommended Movie 1' },
        { title: 'Recommended Movie 2' },
        // Add more recommended movies as needed
    ];

    recommendations.innerHTML = '<h2>Recommended Movies with Similar Actors:</h2>';
    recommendedMovies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('recommended-movie');
        movieItem.innerHTML = `<h3>${movie.title}</h3>`;
        recommendations.appendChild(movieItem);
    });
}