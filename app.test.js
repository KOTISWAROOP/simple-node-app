// app.test.js
const request = require('supertest');
const app = require('./app'); // Import your app logic

// Describe a "test suite" for our application
describe('GET /', () => {

  // Define a specific test case
  it('should respond with a 200 status code and "Hello World!!! welcome infoblox TO CI/CD PIPELINE"', async () => {
    // 'request(app)' uses supertest to make a request to our app object
    const response = await request(app).get('/');

    // Assertions: Check if the response is what we expect
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!!! welcome infoblox TO CI/CD PIPELINE');
  });

});