const express = require('express');
const Student = require('./../models/studentModel');
const app = express();

//Get All sudents
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        
        res.status(200).json({
            status: 'success',
            students: {
                students
            }
        });

    }catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.getStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            students: {
                student
            }
        });
    }
    catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });  
    }
}


exports.createStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);
        
        res.status(200).json({
            status: 'success',
            students: {
                newStudent
            }
        });

    }catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            students: {
                student
            }
        });
    }
    catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.deleteStudents = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'success',
            students: {
                student
            }
        });

    }catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}




