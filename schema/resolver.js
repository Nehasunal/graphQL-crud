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
    },

    Mutation: {
        createUser: (parent, args)=>{
            const id = userList.length + 1;
            const newUser = {id, ...args.input}
            userList.push(newUser)
            return userList;
        },
        updateUser: (parent,args)=>{
            const userId = args.userId;
            const updateData = args.input;
            let user = userList.find(v => v.id === userId);
            if (!user) {
                throw new Error('User not found');
            }

            user.name = updateData?.name || user.name;
            user.email = updateData?.email || user.email;
            user.nationality = updateData?.nationality || user.nationality;

            return userList
        },
        deleteUser: (parent, args)=>{
            const id = args.userId
            const index = userList.findIndex(v=>v.id === Number(id))
            userList.splice(index, 1)
            return userList
        }
    }
}
module.exports = resolvers