import csv
import random

def read_csv(file_path):
    """
    Reads the CSV file and returns a list of dictionaries where each dictionary
    represents a row in the CSV file.
    """
    with open(file_path, 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        data = [row for row in reader]
    return data

def get_movie_details_by_title(movie_title, data):
    """
    Takes a movie title as input and returns its details if found in the data.
    """
    return next((movie for movie in data if movie['Title'] == movie_title), None)

def get_movies_by_shared_actors(movie_title, data):
    """
    Takes a movie title as input and returns a list of ten random movies that share
    any actors with the input movie.
    """
    selected_movie = get_movie_details_by_title(movie_title, data)
    if not selected_movie:
        return None

    shared_actors = selected_movie['Actors'].split(', ')
    related_movies = [movie['Title'] for movie in data if any(actor in movie['Actors'] for actor in shared_actors)]
    random_movies = random.sample(related_movies, min(10, len(related_movies)))

    return random_movies

def get_movies_by_genre(movie_title, data):
    """
    Takes a movie title as input and returns a list of ten random movies that share
    at least one genre with the input movie.
    """
    selected_movie = get_movie_details_by_title(movie_title, data)
    if not selected_movie:
        return None

    genres = selected_movie['Genre'].split(', ')
    related_movies = [movie['Title'] for movie in data if any(genre.lower() in movie['Genre'].lower() for genre in genres)]
    random_movies = random.sample(related_movies, min(10, len(related_movies)))

    return random_movies

def get_movies_by_director(movie_title, data):
    """
    Takes a movie title as input and returns a list of ten random movies that share
    the same director as the input movie.
    """
    selected_movie = get_movie_details_by_title(movie_title, data)
    if not selected_movie:
        return None

    director = selected_movie['Director']
    related_movies = [movie['Title'] for movie in data if director.lower() in movie['Director'].lower()]
    random_movies = random.sample(related_movies, min(10, len(related_movies)))

    return random_movies

# Example usage:
file_path = 'IMDB-Movie-Data.csv'
data = read_csv(file_path)

# Example 1: Get movies by shared actors
movie_title_input = 'Inception'
result_shared_actors = get_movies_by_shared_actors(movie_title_input, data)
print(f"Movies with shared actors for '{movie_title_input}': {result_shared_actors}")

# Example 2: Get movies by genre
result_genre = get_movies_by_genre(movie_title_input, data)
print(f"Movies with at least one shared genre as '{movie_title_input}': {result_genre}")

# Example 3: Get movies by director
result_director = get_movies_by_director(movie_title_input, data)
print(f"Movies by director '{movie_title_input}': {result_director}")