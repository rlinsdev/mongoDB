const assert = require ('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Updating Records', function(){

    let char;

    beforeEach(function(done){
        char = new MarioChar({
            name:'Mario'
        });

        char.save().then(function(){
            assert(char.isNew ===false);
            done();
        });
    });


    it('Updates one record from the database', function(done){
       
        MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(function(){
            MarioChar.findOne({_id: char._id}).then(function(result){
                assert(result.name === 'Luigi');
                done();
            })
        });
    });
});
