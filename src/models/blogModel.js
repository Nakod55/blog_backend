const mongoose= require("mongoose");

const blogSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
    },
    tag: {
        // more information required
        type: String,
        required: true,
    },
    imgUrl: {
        // default r
        type: String,
 
    },
    User: {
        // requiredd
        type: String,
    },
    username: {
        type: String,
    },
    upVote: {
        type: Number,
    },
    downVote: {
        type: Number,
    },
    votedBy: {
        // infor 
    },
    comments: {
        // info
    }

});

const commentSchema= new mongoose.Schema({
    User: {
        //req
    },
    message: {
        type: String,
    },
    like: {
        type: Number,
    },
    isNested: {
        type: Boolean,
    },
    parentComment: {
        // req
    },
    Blog: {
        //req
    },
    comments: {
        // 
    }
});

const tagSchema= new mongoose.Schema({
   categoryName: {
    type: String,
   },
   category:{
      // req
   }
});

const userSchema= new mongoose.Schema({
    userName: {
     type: String,
     required: true,
     unique: true,
    },
    password:{
       type: String,
       required: true,
       minlength:5
    },
    email: {
        type: String, 
        required: true,
        unique: true,
    },
    resetPasswordToken: {
    type: String,
    },
    resetPasswordExpire: {
        type: String,
    },
 });

exports.Blog= mongoose.model("blogs", blogSchema);
exports.Comment= mongoose.model("comments", commentSchema);
exports.Tag= mongoose.model("tags", tagSchema);
exports.User= mongoose.model("users",userSchema);