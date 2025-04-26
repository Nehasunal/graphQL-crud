const userList = require('../fakedb')
const resolvers={
    Query: {
        users(){
            return userList
        }
    }
}
module.exports = resolvers