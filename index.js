import Express from 'express';

const PORT = 3100;
const app = Express();

app.get('/', (_req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () =>
  console.log(`Server now running started on port ${PORT} 🚀`)
);
