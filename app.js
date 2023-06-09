const express = require('express');
const { router } = require('./Routers/router');
const ConnectDB = require('./Utils/database.utils');

const app = express();
const PORT = 6284;

// if Not Use of GraphQL Server then Comment this ===========

// Start GraphQL Server 
// const resolvers = require('./GraphQL/resolvers');
// const typeDefs = require('./GraphQL/graphqlSchema');

// Create an instance of ApolloServer
// const server = new ApolloServer({ typeDefs, resolvers });

// Apply Apollo Server as middleware to the Express app
// server.applyMiddleware({ app });

// End GraphQL Server 

app.use(express.json())

app.use('/api', router)
app.use((req, res) => {
    return res.send(`404`);
})

ConnectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port http://localhost:${PORT}`);
    });


    // if Not Use of GraphQL Server then Comment this ===========
    
    // app.listen(PORT , () =>
    //     console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    // );
})