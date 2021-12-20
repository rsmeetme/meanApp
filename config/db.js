const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/meandb", (err)=>{
    if(!err){
        console.log('DB Connection Successfully');
    }else{
        console.log('Error in connection' + err);
    }
});

module.exports = mongoose;
