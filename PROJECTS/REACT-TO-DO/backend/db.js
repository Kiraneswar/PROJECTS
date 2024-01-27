let mongoose=require("mongoose");

mongoose.connect("mongodb+srv://takkellakiraneswar:LGWppefsF28tHGqA@cluster0.1b5yb3c.mongodb.net/todos")
let todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

let todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}