# MovieReview
CIS350 Group Project
This app will allow users to get movie recommendations based on different actors and actresses that they like. The user can check out a movie that they like and get recommendations for new movies based on who is in the movie that they pick. 

1 | Abstract 

Finding a new movie to watch can be a long process and take up all the time you even have to watch a movie in the first place. Our website is aimed to cut down on that issue and give users recommendations for new movies based on their favorite actors, genres, and directors. A user can open the site and pick out a movie, let's say they like Forest Gump, they can now see other movies with the actors in that movie. They can also see other movies in the same genre and movies made by the same director. They can pick out a Tom Hanks movie from a list of movies that he has been in. This will allow a user to choose a new movie much faster and save lots of time on movie nights. You can see all the best movies from our curated list. This allows each user to pick the perfect movie for them each night. You can discover new actors, directors, and genres of movies to discover what you like the best. Picking a new movie shouldn't be a problem anymore with the help of our Movie Discovery website. 

2 | Introduction 

This app is designed using Python and javascript as a web app. We designed this app for desktops to assist users in finding a new movie quickly. The app will show users movie recommendations based on their favorite actors and actresses. Pick a movie you want and see the cast from that movie, now you can pick an actor or actress from that cast and see a list of popular movies that they are in. 

3 | Architectural Design 
<body>
    <div style="width: 640px; height: 480px; margin: 10px; position: relative;">
        <img src="Architectural Diagram.jpg" alt="ArchUML">
    </div>
</body>

3.1 | Use Case Diagram 

<body>
    <div style="width: 640px; height: 480px; margin: 10px; position: relative;">
        <img src="UseCase.jpg" alt="UseCase">
    </div>
</body>

3.2 | Sequence Diagram 

<body>
    <div style="width: 640px; height: 480px; margin: 10px; position: relative;">
        <img src="Sequence Diagram.jpeg" alt="SequenceDiagram">
    </div>
</body>

3.3 | Class Diagram

<body>
    <div style="width: 640px; height: 480px; margin: 10px; position: relative;">
        <img src="ClassDiagram.png" alt="ClassDiagram">
    </div>
</body>

4 | UI 

<body>
    <div style="width: 640px; height: 480px; margin: 10px; position: relative;">
        <img src="Movie Review.jpg" alt="MovieReview"> <img src="MovieListEx1.jpg" alt="MovieList1">
    </div>
</body>


5 | Functions

read_csv(file_path)
Reads the CSV file containing movie data and returns a list of dictionaries representing movie details.

get_movie_details_by_title(movie_title, data)
Returns details of a movie if found in the dataset.

get_movies_by_shared_actors(movie_title, data)
Returns a list of recommended movies that share any actors with the provided movie.

get_movies_by_genre(movie_title, data)
Returns a list of recommended movies that share at least one genre with the provided movie.

get_movies_by_director(movie_title, data)
Returns a list of recommended movies that share the same director as the provided movie.


6 | Endpoints

GET /recommendations
Description
This endpoint retrieves movie recommendations based on the provided movie title. It returns a JSON object containing recommended movies based on shared actors, genres, and directors.

Parameters
movieTitle (string): The title of the movie to get recommendations for.

Response

    
    "shared_actors": ["Recommended Movie 1", "Recommended Movie 2", ...],
    
    "genre": ["Recommended Movie 3", "Recommended Movie 4", ...],
    
    "director": ["Recommended Movie 5", "Recommended Movie 6", ...]



7 | Risk analysis and Retrospective

Many of the problems were associated with the integration of the backend with the front end. The front end and back end worked properly on their own, but the issues started to arise when using the front end to search for the movies. It was not finding the proper functions to be used. To fix this the address for the csv file was incorrect. Flask Cors also needed to be installed to prevent errors. 
Another issue was with error handling. When a movie name not in the database was entered, it would not display the message "Movie Title Not Found". Instead, it would display the recommended movies for shared actors, genres, and directors. Except these would be empty. To fix this an if else statement was needed in the front end and the backend to display the proper message. 

An application was built that allows a user to search for a movie title and find other similar titles that have shared actors, genres, and directors.
The final UI did not turn out to look the way that it was originally displayed. Some more time and experimentation with the front end would have made it look better. For the search of a movie title, added functionality would be an improvement. For instance, if the name of a movie typed is not spelled correctly, it could ask the user if they meant something else. Or as the user types the name of a movie, a list of movies will show up so that they can select it from the list instead of typing the entire name. 


8 | Walkthrough Video 

https://github.com/bclanc22/MovieReview/blob/main/Movie%20Recommender.pptx
