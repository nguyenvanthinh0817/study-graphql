const { ApolloServer } = require('apollo-server')

const typeDefs = require('./schema')
const resolvers = require('./resolver')
const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen(4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
