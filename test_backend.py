# test_backend.py

import unittest
from app import app

class TestBackend(unittest.TestCase):

    def setUp(self):
        app.testing = True
        self.app = app.test_client()

    def test_recommendations_endpoint(self):
        # Test the recommendations endpoint
        response = self.app.get('/recommendations?movieTitle=Forest Gump')
        self.assertEqual(response.status_code, 200)  # Check if the endpoint returns 200 OK
        data = response.get_json()  # Get JSON response
        self.assertIn('shared_actors', data)  # Check if expected keys are present in the response
        self.assertIn('genre', data)
        self.assertIn('director', data)

    def test_invalid_movie_title(self):
        # Test an invalid movie title
        response = self.app.get('/recommendations?movieTitle=InvalidMovieTitle')
        self.assertEqual(response.status_code, 200)  # Check if the endpoint returns 200 OK
        data = response.get_json()
        self.assertIn('error', data)  # Check if the error message is present in the response

if __name__ == '__main__':
    unittest.main()
