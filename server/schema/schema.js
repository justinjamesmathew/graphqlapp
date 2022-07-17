const graphql = require('graphql');
const _ = require('lodash');
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;
//dummy data
var books = [
    {name: 'wind', genre:'funny',id:'1'},
    {name: 'win', genre:'funn',id:'2'},
    {name: 'wi', genre:'fun',id:'3'}
    
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields:() =>({
        id: {type: GraphQLString},
        name:{type:GraphQLString},
        genre:{type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book: {
            type:BookType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                //code to fetch data
                return _.find(books,{id: args.id});
            }
        }
    }
});
module.exports = new graphql.GraphQLSchema({
    query:RootQuery
});