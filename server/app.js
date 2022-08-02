const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
//const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mongouser:test123@cluster0.8rdif.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri);
mongoose.connection.once('open',()=>{
    console.log('connected');
});

app.use('/graphql', graphqlHTTP({
schema,
graphiql: true
}));

app.listen(4343,()=> {
    console.log('app listening to 4343');
});