const { searchMovie, displayRecommendations } = require('C:\Users\coolj\OneDrive\Documents\CIS350\Project\frontend.html');
// Mock XMLHttpRequest
class MockXMLHttpRequest {
  open(method, url) {
    this.method = method;
    this.url = url;
  }

  send() {
    // Simulate sending the request
    if (this.onreadystatechange) {
      this.onreadystatechange();
    }
  }
}

// Set up a mock XMLHttpRequest
global.XMLHttpRequest = jest.fn(() => new MockXMLHttpRequest());

test('searchMovie function sends request with correct URL', () => {
  searchMovie();

  // Check if XMLHttpRequest was called with the correct URL
  expect(global.XMLHttpRequest.mock.calls.length).toBe(1);
  expect(global.XMLHttpRequest.mock.calls[0][0]).toEqual('GET');
  expect(global.XMLHttpRequest.mock.calls[0][1]).toEqual('http://127.0.0.1:5000/recommendations?movieTitle=');
});

test('displayRecommendations function displays data correctly', () => {
  // Create a mock DOM structure
  document.body.innerHTML = `
    <div id="recommendationList"></div>
  `;

  // Mock data to be displayed
  const mockData = {
    shared_actors: ['Movie 1', 'Movie 2'],
    genre: ['Movie 3', 'Movie 4'],
    director: ['Movie 5', 'Movie 6'],
  };

  // Call displayRecommendations function with the mock data
  displayRecommendations(mockData);

  // Get the updated DOM structure after function execution
  const recommendationList = document.getElementById('recommendationList');

  // Check if the recommendations are correctly displayed on the DOM
  expect(recommendationList.children.length).toBe(3); // Expect 3 headings (for 'shared_actors', 'genre', 'director')
  expect(recommendationList.children[0].tagName).toBe('H3'); // Expect the first child to be an H3 (heading)

});
