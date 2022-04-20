const { users, cars } = require('./db.json')
const resolvers = {
    Query: {
        users: () => users,
    },

    User: {
        car: (parent, args) => {
            return cars.find((car) => car.id == parent.id)
        },
    },
}

module.exports = resolvers
