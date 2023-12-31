const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors')


connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

const Student = require('./models/Student');

//post: create new student 
app.post('/createstudent',async(req,res)=>{
  console.log(req.body);
  const {name, reg_num} = req.body
  const student = new Student({
    name,reg_num
  })

  await student.save();
  res.send({success:true})
})

//put: update existing student details
app.put('/updatestudent',async(req,res)=>{
  const { name, reg_num} = req.body
  console.log(req.body);
  let student = await Student.findOne({reg_num:reg_num})

  student.name = name;

  await student.save();
  res.send({success:true})
})

//delete : remove details of a student
app.delete('/deletestudent',async(req,res)=>{
  const reg_num = req.query.reg_num;
  console.log(reg_num);
  await Student.deleteOne({reg_num:reg_num});
  res.send({success:true});
})

//get: get details of all students
app.get('/getstudents',async(req,res)=>{
    const students = await Student.find({})
    res.send(students);
})

//get: get a specific student based on reg number
app.get('/getspecificstudent',async(req,res)=>{
  console.log(req.query.reg_num);
  const student = await Student.findOne({reg_num:req.query.reg_num});
  console.log(student);
  res.send(student);
});




app.listen(port, () => {
    console.log(`Express-mongo-demo backend listening at http://localhost:${port}`)
})