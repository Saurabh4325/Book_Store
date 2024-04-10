const mongoose = require('mongoose');

// Define the schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
    // unique: true
  },
  publish: {
    type: Number,
    // required: true
  },
  author: {
    type: String,
    // required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Define the model
const Book = mongoose.model('book', bookSchema);

// MongoDB connection URI xbn5XMkoOVN0txxj
const uri = "mongodb+srv://bookStore:2z1z5YybpTs0XtxJ@cluster0.e8qt4es.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

module.exports = Book;


// const mongoose = require('mongoose');

// // Define the schema
// const bookSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     // required: true,
//     // unique: true
//   },
//   publish: {
//     type: String,
//     // required: true
//   },
//   author: {
//     type: String,
//     // required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// // Define the model
// const Book = mongoose.model('Book', bookSchema); // Changed model name to 'Book'

// // MongoDB connection URI with the database name included
// const uri = "mongodb+srv://bookStore:2z1z5YybpTs0XtxJ@cluster0.e8qt4es.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0";

// // Connect to MongoDB
// mongoose.connect(uri, {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
//   // useCreateIndex: true,
//   // useFindAndModify: false
// })
// .then(() => {
//   console.log('Connected to MongoDB');
// })
// .catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });

// module.exports = Book;
