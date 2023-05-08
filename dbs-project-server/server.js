const express = require('express')
const bodyParser = require('body-parser')
const mysql = require("mysql");
const cors = require('cors');

const server = express();
server.use(bodyParser.json());
server.use(cors())
 
//Establish the database connection
 
const db = mysql.createConnection({
 
    host: "localhost",
    user: "root",
    password: "Sanvittanaya217*",
    database: "campus",
 
});
 
db.connect(function (error) {
    if (error) {
      console.log("Error Connecting to DB");
      console.log(error);
    } else {
      console.log("Successfully connected to DB");
    }
  });
 
//Establish the Port
  const PORT = 8085;
 
  server.listen(PORT, function check(error) {
    if (error)
    {
    console.log("Error....");
    }
 
    else
    {
        console.log(`Started listening at port ${PORT}.....`);
 
    }   
});
 
//Create the Records
 
server.post("/api/master_student/add", (req, res) => {
    let details = {
      s_id: req.body.s_id,
      full_name: req.body.full_name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      nationality_id: req.body.nationality_id,
      emirates_id: req.body.emirates_id,
      passport_no: req.body.passport_no,
      join_date: req.body.join_date,
      is_hosteler: req.body.is_hosteler
    };
    details.join_date = details.join_date.slice(0, 10);
    let sql = "INSERT INTO master_student SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        console.log(error);
        res.send({ status: false, message: "master_student Creation Failed!" });
      } else {
        res.send({ status: true, message: "master_student Created Successfully!" });
      }
    });
  });
 
 
 
//view the Records
 
server.get("/api/master_student", (req, res) => {
  console.log("Showing student details");
    var sql = "SELECT * FROM master_student";
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
        console.log(error);
      } else {
        for (let i = 0; i < result.length; i++) {
          result[i].join_date = result[i].join_date.toISOString().slice(0, 10);
        }
        res.send({ status: true, data: result });
      }
    });
  });
 
 
//Search the Records
 
server.get("/api/master_student/:id", (req, res) => {
    var master_student_id = req.params.id;
    var sql = "SELECT * FROM master_student WHERE s_id='" + master_student_id + "'";
    db.query(sql, function (error, result) {
      if (error) {
        console.log(error);
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });
 
//Update the Records
 
server.put("/api/master_student/update/:id", (req, res) => {
  /*
    let sql =
      "UPDATE master_student(s_id, full_name, email, phone, address, passport_no, is_hosteler) SET s_id='" +
      req.body.s_id +
      "', full_name='" +
      req.body.full_name +
      "', email='" +
      req.body.email +
      "', phone='" 
      req.body.phone + 
      "', address='" +
      req.body.address +
      "', passport_no='" +
      req.body.passport_no +
      "', is_hosteler='" +
      req.body.is_hosteler + 
      "' WHERE s_id='"
      req.params.id + "';";
      */

      console.log(`Updating student no. ${req.params.id}`);
      let sql =
      "UPDATE master_student SET ? WHERE s_id='" + req.params.id + "';";
  
    let a = db.query(sql, req.body, (error, result) => {
      if (error) {
        console.log(error);
        res.send({ status: false, message: "master_student Update Failed" });
      } else {
        res.send({ status: true, message: "master_student Updated successfully" });
      }
    });
  });
 
  //Delete the Records
  server.delete("/api/master_student/delete/:id", (req, res) => {
    let sql = "DELETE FROM master_student WHERE s_id='" + req.params.id + "'";
    let query = db.query(sql, (error) => {
      if (error) {
        console.log(error);
        res.send({ status: false, message: "master_student Deleted Failed" });
      } else {
        res.send({ status: true, message: "master_student Deleted successfully" });
      }
    });
  });


  //Create the Records

server.post("/api/master_employee/add", (req, res) => {
  let details = {
    e_id: req.body.e_id, 
    full_name: req.body.full_name,
    email: req.body.email,
    phone: req.body.phone,
    emirates_id: req.body.emirates_id,
    nationality_id: req.body.nationality_id,
    designation: req.body.designation,
    address: req.body.address,
    yearly_salary: req.body.yearly_salary,
    join_date: req.body.join_date,
    management: req.body.management
  };
  details.join_date = details.join_date.slice(0, 10);
  console.log("Adding employee");
  if (details.management == 'Not Assigned') {
    details.management = null;
  }
  let sql = "INSERT INTO master_employee SET ?";
  db.query(sql, details, (error) => {
    if (error) {
      console.log(error);
      res.send({ status: false, message: "master_employee Creation Failed!" });
    } else {
      res.send({ status: true, message: "master_employee Created Successfully!" });
    }
  });
});



//view the Records

server.get("/api/master_employee", (req, res) => {
  console.log("Showing employee details:")
  var sql = "SELECT * FROM master_employee";
  db.query(sql, function (error, result) {
    if (error) {
      console.log("Error Connecting to DB");
      console.log(error);
    } else {
      for (let i = 0; i < result.length; i++) {
        result[i].join_date = result[i].join_date.toISOString().slice(0, 10);
      }
      res.send({ status: true, data: result });
    }
  });
});


//Search the Records

server.get("/api/master_employee/:id", (req, res) => {
  console.log("Searching a record");
  var master_employee_id = req.params.id;
  var sql = "SELECT * FROM master_employee WHERE e_id='" + master_employee_id + "'";
  db.query(sql, function (error, result) {
    if (error) {
      console.log(error);
      console.log("Error Connecting to DB");
    } else {
      res.send({ status: true, data: result });
    }
  });
});

//Update the Records

server.put("/api/master_employee/update/:id", (req, res) => {
  /*
  let sql =
    "UPDATE master_employee SET e_id='" +
    req.body.e_id +
    "', full_name='" +
    req.body.full_name +
    "', email='" +
    req.body.email +
    "', phone='" +
    req.body.phone +
    "', emirates_id='" + 
    req.body.emirates_id + 
    "', nationality_id='" +
    req.body.nationality_id +
    "', address='" +
    req.body.address +
    "', yearly_salary='" +
    req.body.yearly_salary +
    "', join_date='" +
    req.body.join_date + 
    "' WHERE e_id='" +
    req.params.id + "';";
    console.log(sql);
  */
  console.log(`Updating employee no. ${req.params.id}`);
    let sql =
    "UPDATE master_employee SET ? WHERE e_id='" + req.params.id + "';";

  let a = db.query(sql, req.body, (error, result) => {
    if (error) {
      console.log(error);
      res.send({ status: false, message: "master_employee Updated Failed" });
    } else {
      res.send({ status: true, message: "master_employee Updated successfully" });
    }
  });
});

//Delete the Records

server.delete("/api/master_employee/delete/:id", (req, res) => {
  let sql = "DELETE FROM master_employee WHERE e_id='" + req.params.id + "';";
  let query = db.query(sql, (error) => {
    if (error) {
      console.log(error);
      res.send({ status: false, message: "master_employee Deleted Failed" });
    } else {
      res.send({ status: true, message: "master_employee Deleted successfully" });
    }
  });
});

// Get countries
server.get("/api/nationalities", (req, res) => {
  var sql = "SELECT * FROM nationalities";
  db.query(sql, function (error, result) {
    if (error) {
      console.log("Error Connecting to DB");
      console.log(error);
    } else {
      res.send({ status: true, data: result });
    }
  });
});


