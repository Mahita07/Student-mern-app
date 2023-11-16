const mongoose = require("mongoose");
const{Schema} = mongoose;

const StudentSchema = new Schema({
    name:{type:String,required:true},
    reg_num:{type:String,required:true,unique:true}
});

const StudentModel = mongoose.model('Student',StudentSchema);
module.exports = StudentModel;