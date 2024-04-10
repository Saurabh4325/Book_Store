// Import Axios library
// import axios from 'axios';
const axios = require('axios');

// Define the function to create a new book
const createBook = async (bookData) => {
  try {
    // Make a POST request to your backend endpoint
    const response = await axios.post('/books', bookData);
    
    // Return the created book data received from the backend
    console.log("done")
    return response.data;

  } catch (error) {
    // Handle errors
    console.error('Error creating book:', error);
    throw new Error('Failed to create book');
  }
};

// Usage example
const newBookData = {
  title: 'Your Book Title',
  publish: 'Publish Date',
  author: 'Author Name'
};

createBook(newBookData)
  .then(createdBook => {
    console.log('New book created:', createdBook);
    // Do something with the created book data
  })
  .catch(error => {
    console.error('Error:', error.message);
    // Handle the error
  });
