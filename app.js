import express from "express";
let app = express();

// GET sends string 'hello employees'

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// GET employees sends the array of employees

app.get("/employees", (req, res) => {
  res.send(employees);
});

import employees from "#db/employees";

// GET employees random sends a random employee from the array ** careful about where you write the middleware-- a bad req is handled by the first handler w matching route.
// GET random moved above :id

app.get("/employees/random", (req, res) => {
  let random = employees[Math.floor(Math.random() * employees.length)];
  res.send(random);
});

export default app;

// GET employees :id sends the employee with the given id - 404 message if there is no employee w that id

app.get("/employees/:id", (req, res) => {
  let id = Number(req.params.id);
  let found = employees.find((i) => i.id === id);

  if (!found) return res.status(404).send("Employee not found!");

  res.send(found);
});
