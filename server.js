const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const mysql = require("mysql");



const app = express();


app.listen(3001, () => {
    console.log("Server Ok 3001");
});