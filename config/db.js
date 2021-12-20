const mongoose = require('mongoose');

mongoose.connect("", (err)=>{
    if(!err){
        console.log('DB Connection Successfully');
    }else{
        console.log('Error in connection' + err);
    }
});

module.exports = mongoose;
