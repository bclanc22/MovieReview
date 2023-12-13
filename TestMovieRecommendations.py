import unittest
import csv
import MovieRecommendation

class TestMovieRecommendations(unittest.TestCase):

    def setUp(self):
        self.data = MovieRecommendation.read_csv("IMDB-Movie-Data.csv")

    def test_get_movie_details_by_title(self):
        columns = MovieRecommendation.loop_through_column("Title")
        counter = 0
        for movie_title in columns:
            result = MovieRecommendation.get_movie_details_by_title(movie_title, self.data)
            self.assertEqual(result, self.data[counter])
            counter += 1

    def test_get_movies_by_shared_actors(self):
        columns = MovieRecommendation.loop_through_column("Title")
        for movie_title in columns:
            movie = MovieRecommendation.get_movie_details_by_title(movie_title, self.data)
            recommendations = MovieRecommendation.get_movies_by_shared_actors(movie_title, self.data)
            actors = movie['Actors'].split(', ')

            self.assertNotIn(movie_title, recommendations)

            if recommendations:
                for recommended_movie_title in recommendations:
                    recommended_movie = MovieRecommendation.get_movie_details_by_title(recommended_movie_title, self.data)
                    shared_actors = recommended_movie['Actors'].split(', ')
                    for actor in actors:
                        if actor in shared_actors:
                            condition = True
                            self.assertTrue(condition)


    def test_get_movies_by_genre(self):
        columns = MovieRecommendation.loop_through_column("Title")
        for movie_title in columns:
            movie = MovieRecommendation.get_movie_details_by_title(movie_title, self.data)
            recommendations = MovieRecommendation.get_movies_by_genre(movie_title, self.data)
            genres = movie['Genre'].split(', ')

            self.assertNotIn(movie_title, recommendations)

            if recommendations:
                for recommended_movie_title in recommendations:
                    recommended_movie = MovieRecommendation.get_movie_details_by_title(recommended_movie_title, self.data)
                    shared_genres = recommended_movie['Genre'].split(', ')
                    for genre in genres:
                        if genre in shared_genres:
                            condition = True
                            self.assertTrue(condition)

    def test_get_movies_by_director(self):
        columns = MovieRecommendation.loop_through_column("Title")
        for movie_title in columns:
            movie = MovieRecommendation.get_movie_details_by_title(movie_title, self.data)
            recommendations = MovieRecommendation.get_movies_by_director(movie_title, self.data)
            director = movie['Director']

            self.assertNotIn(movie_title, recommendations)

            if recommendations:
                for recommended_movie_title in recommendations:
                    recommended_movie = MovieRecommendation.get_movie_details_by_title(recommended_movie_title, self.data)
                    recommended_movie_director = recommended_movie['Director']
                    self.assertEqual(director,recommended_movie_director)

    if __name__ == '__main__':
        unittest.main()
