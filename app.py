
from flask import Flask, jsonify, request
from flask_cors import CORS
import csv
import random

app = Flask(__name__)
CORS(app)

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
    related_movies.remove(movie_title)
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
    related_movies.remove(movie_title)
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
    related_movies.remove(movie_title)
    random_movies = random.sample(related_movies, min(10, len(related_movies)))

    return random_movies

@app.route('/recommendations', methods=['GET'])
def get_recommendations():
    movie_title = request.args.get('movieTitle')
    data = read_csv('venv\IMDB-Movie-Data.csv')

    selected_movie = get_movie_details_by_title(movie_title, data)
    if not selected_movie:
        return jsonify({'error': 'Movie title not found'})
        
    recommendations = {
        'shared_actors': get_movies_by_shared_actors(movie_title, data),
        'genre': get_movies_by_genre(movie_title, data),
        'director': get_movies_by_director(movie_title, data),
    }

    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)
