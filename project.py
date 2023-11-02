import csv

class MovieReccomendation:

    def reccomneded_movies(actor):
        """
        This function takes the input of the name of an actor
        It searches the data for movies that the actor is in
        Returns a list of movies the actors is in
        """
        movies = []

        with open('IMDB-Movie-Data.csv', 'r') as file:
            reader = csv.reader(file)
            for row in reader:
                if actor in row[5]:
                    movies.append(row[1])
            return movies
        
class MovieDataBase:

    def fetchActorsFromDataBase():
        """
        Reads the data and returns a list of actors
        """
        actors = []

        with open('IMDB-Movie-Data.csv', 'r') as file:
            reader = csv.reader(file)
            for row in reader:
                if row[5] not in actors:
                    actors.append(row[5])
        return actors

    def fetchMoviesFromDataBase():
        """
        Reads the data and returns a list of movies
        """

        movies = []

        with open('IMDB-Movie-Data.csv', 'r') as file:
            reader = csv.reader(file)
            for row in reader:
                movies.append(row[1])
        return movies

    def searchMovieByTitle(title):
        """
        Searches the data for a specific movie title
        Returns the Title, Actors, and year made
        """

        info = []

        with open('IMDB-Movie-Data.csv', 'r') as file:
            reader = csv.reader(file)
            for row in reader:
                if row[1] == title:
                    info.append(row[1])
                    info.append(row[5])
                    info.append(row[6])

                    return info


    def searchActorsByMovie(movie):

        """"
        This function takes the input of the title of a movie
        It searches the data for the movie title
        Returns the names of the actors in the movie
        """

        with open('IMDB-Movie-Data.csv', 'r') as file:
            reader = csv.reader(file)
            for row in reader:
                if row[1] == movie:
                    return row[5]
                
