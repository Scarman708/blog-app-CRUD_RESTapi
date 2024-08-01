# Blog Application

A simple blog application that performs CRUD (Create, Read, Update, Delete) operations using a RESTful API. This application is built with Node.js, Express, and EJS. It uses an in-memory array to store blog posts instead of a database.

## Features

- **Create**: Add new blog posts.
- **Read**: View a list of all blog posts.
- **Update**: Edit existing blog posts.
- **Delete**: Remove blog posts.

## Project Structure

- **app.js**: Main application file that sets up the Express server and routes.
- **views/**: Directory containing EJS templates for rendering pages.
- index.ejs: Template for listing all blog posts.
- new.ejs: Template for creating a new blog post.
- edit.ejs: Template for editing a blog post.
- **public/**: Directory for static files like CSS and JavaScript.



## API Endpoints
# GET /posts
Fetches a list of all blog posts.

# GET /posts/:id
Fetches a single blog post by its ID.

# POST /post/create
Creates a new blog post. Requires title and content in the request body.

# patch /post/edit/:id
Updates an existing blog post by its ID. Requires title and content in the request body.

# DELETE /post/id
Deletes a blog post by its ID.

## EJS Templates
- **index.ejs**: Displays a list of blog posts with links to view, edit, and delete each post.
- **new.ejs**: Provides a form to create a new blog post.
- **edit.ejs**: Provides a form to edit an existing blog post.
- **show.ejs**: display the page which show the detailed blog post.