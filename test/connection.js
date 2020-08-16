const mongoose = require('mongoose');

//ES6 promises
//mongoose.Promise = global.Promise;


// Connect to the db before test run
before(function(done){
    mongoose.connect('mongodb+srv://gqluser:teste**@cluster0.itrkd.mongodb.net/graphiql?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.once('open',function(){
        console.log('Conectou com sucesso');
        done();
    }).on('error',function(error){
        console.log('error',error);
    });
});


// Drop the characters collection before each test
beforeEach(function(done){
    // drop the collection
     mongoose.connection.collections.mariochars.drop(function(){
         done();
     })
})