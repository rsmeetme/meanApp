const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://meanapp:meanapp@123@cluster0.xqas2.mongodb.net/meandb", (err) => {
    if (!err) {
        console.log('DB Connection Successfully');
    } else {
        console.log('Error in connection' + err);
    }
});

module.exports = mongoose;