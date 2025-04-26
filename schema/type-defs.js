
const typeDefs = `
  type Query {
    users: [User]
    user: User
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

`

module.exports = typeDefs