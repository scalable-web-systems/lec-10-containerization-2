import express from 'express';

const app = express();

app.use(express.json());

let counter = 0;

app.post('/hello', (req, res) => {
  const { message } = req.body;
  counter += 1;

  console.log(`Message received from client: ${message}`);
  console.log(`Responding with: ${`${counter}: server says hello`}`);

  res.send({
    message: `${counter}: server says hello`,
    echo: message,
  });
});

app.listen(3000, () => {
  console.log('Server listening on 3000');
});

app.get('/', (req, res) => {
  res.send(`<html><h1>Counter: ${counter}</html>`)
});