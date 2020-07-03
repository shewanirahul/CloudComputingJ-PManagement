const express = require("express");
var cors = require("cors");
const mysql = require("mysql");
const app = express();
const bodyParser = require("body-parser");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
var config = {
  host: "assignment5.cem910xoytdp.us-east-1.rds.amazonaws.com",
  user: "lavanya",
  password: "B00834718",
  database: "ProjectG14",
  port: 3306,
};

const db = new mysql.createConnection(config);
db.connect(function (err) {
  if (err) {
    console.log("!!! Cannot connect !!! Error:");
    throw err;
  } else {
    console.log("Connection established.");
    sql = "use ProjectG14;";
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + JSON.stringify(result));
    });
  }
});

//Get data
app.get("/companyz/users", (req, res) => {
  console.log("i m here");
  let sql = "SELECT * FROM ProjectG14.Userlogin";
  let query = db.query(sql, (err, Parts718) => {
    if (err) throw err;
    console.log(Parts718);
    res.json({ success: true });
  });
});
//Retrieve data corresponding to username and password
app.get("/companyz/users/:username/:password", (req, res) => {
  let values = [req.params.username, req.params.password];
  let sql = "SELECT * FROM Userlogin WHERE username = ? AND password =?";
  console.log(sql);
  let query = db.query(sql, values, (err, result) => {
    if (err) {
      console.log("error");
      res.json({ error: err });
      return;
    }

    if (result == "") {
      res.status(401);
      res.json({ body: "Login failed" });
      console.log(
        "user with name " +
          req.params.username +
          " and password " +
          req.params.password +
          " was not found"
      );
      //res.send("success")  ;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

const jsonParser = bodyParser.json();

app.post("/API718/Part", jsonParser, (req, res) => {
  console.log(
    "In app.post with jobName:" +
      req.body.jobName +
      " partid:" +
      req.body.partid
  );
  let values = [req.body.jobName, req.body.partid];
  let sqlSelect = "SELECT * FROM Parts718 WHERE jobName = ? AND partid =?";
  let sql = "INSERT INTO Parts718 SET ?";
  let data = {
    jobName: req.body.jobName,
    partid: req.body.partid,
    qty: req.body.qty,
  };
  console.log(data);
  let querySelect = db.query(sqlSelect, values, (err, result) => {
    console.log(result);
    if (result == "") {
      console.log("Part was not found and to be inserted/pushed");
      let query = db.query(sql, data, (err, Parts718) => {
        if (err) {
          throw err;
        }
        res.send(
          "Data {" +
            data.jobName +
            " , " +
            data.partid +
            " , " +
            data.qty +
            "} inserted in the table"
        );
        console.log(
          "Data {" +
            data.jobName +
            " , " +
            data.partid +
            " , " +
            data.qty +
            "} inserted in the table"
        );
      });
    } else
      res
        .status(404)
        .send(
          "Job with job name " +
            req.body.jobName +
            " and partid " +
            req.body.partid +
            " already exists"
        );
  });
});
app.put("/API718/Part", jsonParser, (req, res) => {
  console.log(
    "In app update with jobName:" +
      req.body.jobName +
      " partid:" +
      req.body.partid
  );
  let values = [req.body.jobName, req.body.partid];
  let sqlSelect = "SELECT * FROM Parts718 WHERE jobName = ? AND partid =?";
  let data = { qty: req.body.qty };
  let sql =
    'UPDATE Parts718 SET ? WHERE jobName = "' +
    req.body.jobName +
    '" AND partid = ' +
    req.body.partid;
  console.log(sql);
  let querySelect = db.query(sqlSelect, values, (err, result) => {
    console.log(result);
    if (result != "") {
      console.log("Job found for update");
      let query = db.query(sql, data, (err, results) => {
        if (err) {
          throw err;
        }
        console.log(
          "Data { JobName: " +
            req.body.jobName +
            ", PartId: " +
            req.body.partid +
            ", qty: " +
            req.body.qty +
            "} updated "
        );
        res.send(
          "Data { JobName: " +
            req.body.jobName +
            ", PartId: " +
            req.body.partid +
            ", qty: " +
            req.body.qty +
            "} updated "
        );
      });
    } else {
      console.log(
        "JobName " +
          req.body.jobName +
          " and partId " +
          req.body.partid +
          " combination not found"
      );
      res
        .status(404)
        .send(
          "JobName " +
            req.body.jobName +
            " and partId " +
            req.body.partid +
            " combination not found"
        );
    }
  });
});

app.post("/companyz/insertSearch", jsonParser, (req, res) => {
  console.log(req.body.jobName);
  let date_ob = new Date();

  // current date
  // adjust 0 before single digit date
  let date = ("0" + date_ob.getDate()).slice(-2);

  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  // current year
  let year = date_ob.getFullYear();

  // current hours
  let hours = date_ob.getHours();

  // current minutes
  let minutes = date_ob.getMinutes();

  // current seconds
  let seconds = date_ob.getSeconds();

  let values = [req.body.jobName];
  let sql = "INSERT INTO ProjectG14.Search SET ?";
  let data = {
    jobName: req.body.jobName,
    date: year + "-" + month + "-" + date,
    time: hours + ":" + minutes + ":" + seconds,
  };
  console.log(data);
  let query = db.query(sql, data, (err, result) => {
    if (err) {
      throw err;
    }
    res.json({ message: "Search entry inserted" });
  });
});

app.listen(3004, () => console.log("listening on port...." + 3004));
