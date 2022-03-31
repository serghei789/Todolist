// import {express} from 'express';
// import { Todo } from './db/models';
const express = require('express');
const { Todo } = require('./db/models');

const app = express();

/* app.get('/', async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
});

app.post('/', async (req, res) => {
  const frontTodo = req.body;
  const newTodo = await Todo.create(frontTodo);
  res.json(newTodo);
});

app.put('/', async (req, res) => {
  const frontTodo = req.body;
  const todos = await Todo.update(frontTodo, { where: { id: frontTodo.id } });
  res.json(todos);
});

app.delete('/', async (req, res) => {
  const id = req.body;
  await Todo.destroy({ where: { id } });
  res.send('todo is deleted');
}); */

app.listen(3001);
