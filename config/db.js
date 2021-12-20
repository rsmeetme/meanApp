const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://cluster0.xqas2.mongodb.net/meandb" --username meanapp --password meanapp@123", (err)=>{
    if(!err){
        console.log('DB Connection Successfully');
    }else{
        console.log('Error in connection' + err);
    }
});

module.exports = mongoose;
