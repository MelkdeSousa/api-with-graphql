import { ApolloServer, PubSub } from 'apollo-server'
import mongoose from 'mongoose'

function startServer({ typeDefs, resolvers }) {
  mongoose
    .connect('mongodb://localhost:27017/graphql', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('🎲 Database connected.'))
    .catch(err => console.log('🤯 Error connection to database.'))

  const pubsub = new PubSub()

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      pubsub,
    },
  })

  server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`))
}

export default startServer
