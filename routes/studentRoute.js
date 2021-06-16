const express = require('express');
const StudentController = require('./../controller/studentController');

const router = express.Router();

router.route('/')
.get(StudentController.getAllStudents)
.post(StudentController.createStudent);


router.route('/:id')
.get(StudentController.getStudent)
.put(StudentController.updateStudent)
.delete(StudentController.deleteStudents);

module.exports = router;