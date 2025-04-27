const { userList, movieList} = require('../fakedb')
const resolvers={
    Query: {
        users(){
            return userList
        },// we can use nrml func or arrow funct
        user: (parent, args)=>{
           const id = args.id
           return userList.find(v=>(v.id === Number(id)))
        },
        movies: ()=>{
           return movieList
        },
        movie:(parent, args)=>{
           const title = args.title
           return movieList.find(v=>(v.Title === title))
        }
    },
    // Resolver to get favourite movies for a user
    // Instead of creating a complex query to join users with movies separately,
    // we use the existing parent (user) object, which already contains the list of favourite movie IDs.
    // Then, we simply match those IDs with the movies in movieList and return the corresponding movies.
    User: {
       favouriteMovies:(parent)=>{
          const id = parent.favouriteMovies // it contain ids
          return movieList.filter(v => id?.includes(v.id))
       }
    }
}
module.exports = resolvers