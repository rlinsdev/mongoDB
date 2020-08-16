const assert = require ('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Saving Records', function(){

    // Create test
    it('Saves record - Mario Char - in database',function(done){

        let char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    });

    // NextTest
});
