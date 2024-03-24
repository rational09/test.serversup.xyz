const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

// Middleware to log request start time
app.use((req, res, next) => {
    req.startTime = Date.now();
    next();
});

// Route to display "Node Says Hello!" along with current date and time
app.get('/nodejs', (req, res) => {
    const endTime = Date.now();
    const responseTime = (endTime - req.startTime) * 1000;
    console.log(`Request to /nodejs processed in ${responseTime} ms`);

    res.json({
        "Process":"Nodejs",
        "Port":"3000",
        "Message":"Nodejs says hello!",
        "ResponseTime": responseTime
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
