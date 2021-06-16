const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const StudentRouter = require('./routes/studentRoute');

const app = express();

dotenv.config({ path: '.env' });

app.use(express.json());
app.use('/api/v1/students', StudentRouter);


mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));




  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
  
