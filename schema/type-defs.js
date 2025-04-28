
const typeDefs = `
  type Query {
    users: [User]
    user(id: ID!): User
    movies: [Movie]
    movie(title: String!): Movie
  }

  type User {
    id: ID!
    name: String!
    email: String!
    address: Address!
    nationality: Nationality!
    friends: [User]
    favouriteMovies: [Movie]
  }
  
  type Address {
    street: String
    suite: String
    city: String!
    zipcode: String!
  }

  type Movie{
    id: ID!,
    Title: String!,
    Year: Int!
    isInTheatre: Boolean!
  }
  
  type CreateUser{
    id: ID
    name: String!
    email: String!
    nationality: Nationality
  }
  
  input CreateUserInput{
    name: String!
    email: String!
    nationality: Nationality = IN
  }
  
  type Mutation{
    createUser(input: CreateUserInput): [CreateUser]
    updateUser(userId: ID!, input: CreateUserInput): [CreateUser]
    deleteUser(userId: ID!): [CreateUser]
  }

  enum Nationality {
    IN,
    US,
    CA,
    EU
  }
`
//enum is used when you want to limit a field to a specific set of possible values

module.exports = typeDefs