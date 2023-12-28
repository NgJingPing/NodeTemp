const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) =>{
    res.status(404).send("<h1>404 Page Not Found</h1>");
});

const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`App listening on Port ${port}`));