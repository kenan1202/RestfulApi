const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'A student must have name']
        },
        lastName: {
            type: String,
            required: [true, 'A student must have name']
        },
        age: {
            type: Number,
            required: [true, 'A student must have name']
        }
    }
);

const Student = mongoose.model('Student', studentSchema);


module.exports = Student;