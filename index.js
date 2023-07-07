const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const dashboardRouter = require('./routes/dashboard');
const PORT = process.env.port || 9000

app.use(express.json());
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/dashboard', dashboardRouter);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
