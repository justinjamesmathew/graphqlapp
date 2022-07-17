const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')

const app = express();
app.use('/graphql', graphqlHTTP({
schema,
graphiql: true
}));
app.listen(4343,()=> {
    console.log('app listening to 4343');
});