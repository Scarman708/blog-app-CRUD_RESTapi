const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const meathodOverride = require("method-override");
//const { request } = require("http");


const app = express();
const port = 3030;


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});



// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(meathodOverride('_method'));



let blogPosts = [
  {
    uuid: uuidv4(),
    username: "nature_lover",
    title: "The Wonders of Nature",
    content: "Exploring the wonders of nature and the benefits of spending time outdoors.",
    image: "https://www.gstatic.com/webp/gallery3/1.sm.png"
  },
  {
    uuid: uuidv4(),
    username: "tech_guru",
    title: "Tech Trends",
    content: "Latest trends in technology and how they impact our daily lives.",
    image: "https://picsum.photos/200/300"
  },
  {
    uuid: uuidv4(),
    username: "foodie_jane",
    title: "Culinary Adventures",
    content: "Delicious recipes and culinary adventures from around the world.",
    image: "https://picsum.photos/200/300"
  },
  {
    uuid: uuidv4(),
    username: "fitness_fanatic",
    title: "Fitness Tips",
    content: "Tips and tricks for staying fit and healthy in a busy world.",
    image: "https://picsum.photos/200/300"
  },
  {
    uuid: uuidv4(),
    username: "travel_bug",
    title: "Travel Experiences",
    content: "Sharing my travel experiences and top destinations to visit.",
    image: "https://picsum.photos/200/300"
  },
  {
    uuid: uuidv4(),
    username: "bookworm",
    title: "Book Reviews",
    content: "Reviews of my favorite books and recommendations for your reading list.",
    image: "https://picsum.photos/200/300"
  },
  {
    uuid: uuidv4(),
    username: "fashionista",
    title: "Fashion Trends",
    content: "Latest fashion trends and styling tips for every season.",
    image: "https://picsum.photos/200/300"
  },
  {
    uuid: uuidv4(),
    username: "diy_dan",
    title: "DIY Projects",
    content: "Creative DIY projects and home improvement ideas.",
    image: "https://picsum.photos/200/300"
  },
  {
    uuid: uuidv4(),
    username: "movie_buff",
    title: "Movie Reviews",
    content: "In-depth movie reviews and discussions on the latest films.",
    image: "https://picsum.photos/200/300"
  },
  {
    uuid: uuidv4(),
    username: "mindfulness_mary",
    title: "Mindfulness Practices",
    content: "Practicing mindfulness and meditation for a balanced life.",
    image: "https://picsum.photos/200/300"
  }
];




// Routes 

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//all posts
app.get("/post", (req, res) => {
  res.render('index', { blogPosts });
})

//create new post
app.get("/post/create", (req, res) => {   
  res.render('new');
})

//post request for new post
app.post("/post/create", (req, res) => {
  let { username, title, content, image } = req.body;
    let newPost = { uuid: uuidv4(), username, title, content, image};
    blogPosts.push(newPost);
    res.redirect('/post');
});

//delete post
app.delete("/post/:uuid", (req,res)=>{
  let uuid = req.params.uuid;
  blogPosts = blogPosts.filter(p => p.uuid !== uuid);
  res.redirect(`/post`);
})


// update post 2 request get and patch
app.get("/post/edit/:uuid", (req, res) => {
  let uuid = req.params.uuid;
  let post = blogPosts.find(p => p.uuid === uuid);

  if (post) {
      res.render('edit', { post: post });
  } else {
      res.status(404).send('Post not found');
  }
});

app.patch("/post/edit/:uuid", (req, res) => {
  let uuid = req.params.uuid;
  let newContent = req.body.content;
  let img= req.body.image;
  // Find the index of the post to update
  const postIndex = blogPosts.findIndex(post => post.uuid === uuid);
  if (postIndex !== -1) {
      // Update the content of the post
      blogPosts[postIndex].content = newContent;
      blogPosts[postIndex].image = img;
      res.redirect(`/post`); // Redirect to the updated post page
  } else {
      res.status(404).send('Post not found');
  }
});


//show details
app.get("/post/:uuid",  (req, res) => {
  const id = req.params.uuid;
  const post = blogPosts.find(post => post.uuid === id);
  res.render('show', { post });
});