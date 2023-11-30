const http = require('http');
const cors = require("cors");
const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2/StudentsDB";

const server = http.createServer((req, res) => {
  cors()(req, res, () => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        let name = data.name;
        let email = data.email;
        let pass = data.password;

        if (req.method === 'POST' && req.url === '/Login') {
          MongoClient.connect(url)
            .then(client => {
              const db = client.db("StudentsDB");

              db.collection("StudentsTable").findOne({ EmailID: email, Password: pass })
        .then(result => {
          if (result) {
            console.log("Login Successful");
            res.writeHead(200,{"content-type" : "text/plain" })
            res.end("Login Successful");
             
          } else {
            console.log("Invalid email or password");
            res.writeHead(401,{"content-type" : "text/plain" })
            res.end("Invalid email or password");
             
          }
        })
        .catch(err => {
          console.error("Error querying database:", err);
          res.writeHead(500,{"content-type" : "text/plain" })
          res.end("Error querying database");
          
        })
        .finally(() => {
          client.close();
        });
    })
    .catch(err => {
      console.error("Error connecting to the database:", err);
      res.writeHead(500,{"content-type" : "text/plain" })
      res.end("Error connecting to the database");
          
    });
        } else if (req.method === 'POST' && req.url === '/Register') {
          MongoClient.connect(url)
            .then(client => {
              const db = client.db("StudentsDB");

              db.collection("StudentsTable").insertOne({ Student_Name: name, EmailID: email, Password: pass })
            .then(result => {
              if (result) {
                console.log("Register Successful");
                res.writeHead(200,{"content-type" : "text/plain" })
                res.end("Register Successful");
                 
              } else {
                console.log("Register Unsuccessful");
                res.writeHead(401,{"content-type" : "text/plain" })
                res.end("Register Unsuccessful");
                 
              }
            })
            .catch(err => {
              console.error("Error querying database:", err);
              res.writeHead(500,{"content-type" : "text/plain" })
              res.end("Error querying database");
              
            })
            .finally(() => {
              client.close();
            });
        })
        .catch(err => {
          console.error("Error connecting to the database:", err);
          res.writeHead(500,{"content-type" : "text/plain" })
          res.end("Error connecting to the database");
              
        });
        } else {
          console.log("Error Post");
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end("Not Found");
        }
      } catch (err) {
        console.error("Error parsing JSON:", err);
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end("Error parsing JSON");
      }
    });
  });
});

server.listen(3002, () => {
  console.log("Server is running on port 3002");
});
