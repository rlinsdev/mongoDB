const mongoose = require('mongoose');

//Connection to mongoDB
//mongodb+srv://gqluser:<password>@cluster0.itrkd.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://gqluser:teste**@cluster0.itrkd.mongodb.net/graphiql?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true });

// element.on('click',function(){

// })

mongoose.connection.once('open',function(){
    console.log('OK');
}).on('error',function(error){
    console.log('error',error);
});
