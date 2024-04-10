axios.get('/books')
  .then(response => {
    // Handle successful response
    const data = response.data;
    // Update UI with fetched data
    document.querySelector('container2 tr td').innerText = JSON.stringify(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });