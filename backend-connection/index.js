require('dotenv').config();
const db = require('./config/dbconn');
const con = require('./config/dbconn')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const cors = require('cors');
const { hash, hashSync, compare } = require('bcrypt');
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: ['http://127.0.0.1:8080 ', 'http://localhost:8080'],
    credentials: true,
    optionSuccessStatus: 200
  }));
  const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
  };

  app.use(
    router,
    express.json(),
    express.urlencoded({
      extended: true
    })
  );

  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Sever http://localhost:${PORT} is running`);
  });

  //   router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'View', 'index.html'));
//   });

  router.get("/", (req, res) => {
    try {
        con.query("SELECT * FROM employees", (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});


  router.post("/", (req, res) => {
    const employee = {
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      StartDate:req.body.StartDate,
      EndDate:req.body.EndDate,
      TypeofLeave:req.body.TypeofLeave,
      Reason:req.body.Reason,
      LeaveTotal:req.body.LeaveTotal,
    } 
    try {
        con.query(`INSERT INTO employees SET ?`,employee, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
  });




