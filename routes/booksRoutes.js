const express = require('express')
const Book = require('../model/Users.js')
// const server = require('../server.js')

const router = express.Router();

router.post('/', async (req, res) => {
  console.log("Creating a new book...");
  try {
    const book = await Book.create({

      title: req.body.title,
      publish: req.body.publish,
      author: req.body.author
    });
    res.status(201).json(book);
    console.log("created")
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.username === 1) {
      res.status(400).json({ error: "Username already exists" });
    } else {
      console.error("Error creating book:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});


router.get('/:id', async function (req, res) {
  try {
    console.log('finding....')
    const id = req.params.id;
    const book1 = await Book.findOne({ id })
    // console.log(book1)
    res.json(book1)
  } catch (error) {
    console.log("Error creating book:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
})



router.get('/edit/:id', async function (req, res) {
  try {
    console.log("Fetching book data for editing...")
    const id = req.params.id;
    const book = await Book.findById(id);
    

    //this is edge case.
    if (!book) {
      // Handle the case where the book with the specified ID is not found
      return res.status(404).send("Book not found");
    }

    // Assuming you have a title field in your book object
    res.render("editBook", {
      userdata: book // You can pass any property of the book here
    });

  } catch (err) {
    // Handle any errors that might occur during the process
    console.error("Error occurred while fetching book data:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.post('/edit/:id', async function (req, res) {
  try {
    console.log("patching the data.....");
    const id = req.params.id;
    const { name, authorname, publishyear } = req.body;
    console.log(req.body)
    // Update the book data
    const updatedBook = await Book.findByIdAndUpdate(id, {
      title: name,
      publish: publishyear,
      author: authorname
    }, { new: true });


    // edge case
    if (!updatedBook) {
      // Handle the case where the book with the specified ID is not found
      return res.status(404).send("Book not found");
    }

    console.log("Data updated successfully:");
    console.log(updatedBook);

    res.redirect("/"); // Redirect to the homepage or any other appropriate page after update
  } catch (error) {
    console.log(error.message);
    res.status(500).json("something error");
  }
});



router.get('/delete/:id', async function (req, res) {
  try {
    console.log("user want to delete")
    const id = req.params.id;
    const del = await Book.findByIdAndDelete({_id:id});
    console.log("deleted")
    res.redirect("/")
  } catch (error) {
    console.log("something is error", error)
  }
})


module.exports = router;
