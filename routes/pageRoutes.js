const express =  require('express')
const router = express.Router();
const Book = require('../model/Users')


router.get('/',async (req,res)=>{
    console.log("home page")
    const userfind = await Book.find({})
    res.render('homePage',{userfrontend:userfind})
})



router.get('/books/create',(req,res)=>{
    console.log("create Book")
    res.render('createBook')
})

router.post('/books/create',async (req,res)=>{
    console.log("hitted")
    console.log(req.body)
    try {
        const{name,authorname,publishyear} = req.body;
        const User = await Book.create({
            title:name,
            publish:publishyear,
            author:authorname
        })
        console.log("Created Book:", User); // Log the created book document
        console.log("Author:", User.author); 
        res.redirect('/')
    } catch (error) {
        console.log('some thing is error',error)
        res.send("something error")
    }
})


router.get('/books/detail/:id',(req,res)=>{
    console.log("show Book")
    res.render('showBook')
})



// router.get('/books/edit/:id',(req,res)=>{
//     console.log("edit Book")
//     res.render('editBook')
// })


// router.get('/books/delete/:id',(req,res)=>{
//     console.log("delete Book")
//     res.render('deleteBook')
// })


module.exports = router;