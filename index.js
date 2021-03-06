let express = require('express');
let bp = require('body-parser');
let server = express();
let movies = require('./movies')
let port = 8080

server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))



//create an endpoint for getting a list of movies
server.get('/movies', (req, res, next) => {
  let movie = movies.find(m => m.name == req.params.title)
  if (movie) {
    return res.send(movies)
  }
  return res.status(400).send({
    error: 'no movies here'
  })
})

//create an endpoint for finding a movie by its index
server.get('/movies/title/byid/:id', (req, res, next) => {
  let movie = movies.find(m => m.id == req.params.id)
  if (movie) {
    return res.send(movie)
  }
  return res.status(400).send({
    error: 'no movies with that id'
  })
})

//create an endpoint for finding a movie by its title
server.get('/movies/title/bytitle/:title', (req, res, next) => {
  let movie = movies.find(m => m.name == req.params.title)
  if (movie) {
    return res.send(movie)
  }
  return res.status(400).send({
    error: 'no movies by that title'
  })
})

//create an endpoint for finding all movies by their years
//create an endpoint for finding all by rating
//create an endpoint for finding all by tags







server.listen(port, () => {
  console.log("Movies can be found at port: ", port)
})