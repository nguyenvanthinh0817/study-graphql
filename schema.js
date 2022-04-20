const { gql } = require('apollo-server')
const typeDefs = gql`
    type Query {
        users: [User]
    }

    type User {
        id: ID
        name: String
        car: Car
    }

    type Car {
        id: ID
        name: String
    }
`
module.exports = typeDefs
