const mongoose = require('mongoose');

const aiSchematext=new mongoose.Schema({
    question:{type:String,
        required:true
    }
});

const aiText=mongoose.model("TextQuestions",aiSchematext);

module.exports=aiText;